# Performance Optimization Guide

This document outlines the performance optimizations implemented for the Agrikrishi Farms website.

## Overview

The performance overhaul focuses on:
- **LCP (Largest Contentful Paint)**: < 2.5s target
- **CLS (Cumulative Layout Shift)**: < 0.1 target
- **TBT (Total Blocking Time)**: < 150ms target
- **Bundle Size**: Reduced through code splitting and dynamic imports

## Components

### OptimizedImage

A performance-optimized image component that:
- Supports AVIF/WebP fallback via picture element
- Provides LQIP (Low Quality Image Placeholder) blur
- Implements native lazy loading
- Sets fetch priority for LCP images
- Prevents CLS with aspect ratio preservation

**Usage:**
```tsx
import OptimizedImage from '@/components/OptimizedImage'

// Hero image (LCP candidate)
<OptimizedImage
  src="/hero.jpg"
  alt="Hero"
  priority
  width={1920}
  height={1080}
  placeholder="blur"
  blurDataURL="data:image/..."
/>

// Content image (lazy loaded)
<OptimizedImage
  src="/content.jpg"
  alt="Content"
  width={800}
  height={600}
  placeholder="lqip"
/>
```

### OptimizedVideo

A performance-optimized video component that:
- Lazy loads videos using IntersectionObserver
- Shows poster placeholder with play overlay
- Supports HLS (optional, requires hls.js)
- Prevents layout shift with aspect ratio

**Usage:**
```tsx
import OptimizedVideo from '@/components/OptimizedVideo'

<OptimizedVideo
  src="/video.mp4"
  poster="/poster.jpg"
  lazy
  controls
  aspectRatio="16/9"
/>
```

## Configuration

### next.config.js

- **Image domains**: Configured for CDN support
- **Image formats**: AVIF and WebP enabled
- **Caching headers**: Aggressive caching for static assets
- **Package optimization**: Automatic tree-shaking for lucide-react and framer-motion

### HTTP Hints

Preconnect and preload directives are added in `app/layout.tsx`:
- DNS prefetch for fonts
- Preconnect to Google Fonts
- Preload critical hero images (LCP candidates)
- Preload critical fonts

## Testing

### Lighthouse CI

Run the performance check script:

```bash
chmod +x scripts/perf-check.sh
./scripts/perf-check.sh
```

Or manually:

```bash
# Build the project
npm run build

# Start local server
cd out
http-server -p 3000 -c-1

# In another terminal, run Lighthouse
npx lhci autorun \
  --collect.url=http://localhost:3000 \
  --collect.settings.emulatedFormFactor=mobile
```

### Manual QA Checklist

- [ ] Hero image is preloaded and loads immediately
- [ ] Images use AVIF/WebP where supported
- [ ] Videos lazy-load and show poster before load
- [ ] No layout shifts from image load (check CLS)
- [ ] LCP element is identified and optimized
- [ ] Bundle size reduced (check with `npm run build`)
- [ ] All images have proper width/height or aspect-ratio
- [ ] Critical CSS is inlined or preloaded

## CDN Integration

### Cloudinary Example

```tsx
// In OptimizedImage, update generateSrcSet:
function generateSrcSet(src: string, format: 'avif' | 'webp') {
  const cloudinaryBase = 'https://res.cloudinary.com/your-cloud/image/upload'
  const sizes = [400, 800, 1200, 1600]
  return sizes
    .map(size => `${cloudinaryBase}/f_${format},w_${size}${src}`)
    .join(', ')
}
```

### Imgix Example

```tsx
function generateSrcSet(src: string, format: 'avif' | 'webp') {
  const imgixBase = 'https://your-domain.imgix.net'
  const sizes = [400, 800, 1200, 1600]
  return sizes
    .map(size => `${imgixBase}${src}?fm=${format}&w=${size}`)
    .join(', ')
}
```

## Bundle Analysis

To analyze bundle size:

```bash
# Install bundle analyzer
npm install --save-dev @next/bundle-analyzer

# Add to next.config.js:
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

# Run analysis
ANALYZE=true npm run build
```

## Rollback Plan

To revert optimizations:

1. **Remove OptimizedImage/OptimizedVideo**: Replace with standard `<img>` or `<video>` tags
2. **Revert next.config.js**: Remove headers and image config
3. **Revert layout.tsx**: Remove preconnect/preload directives
4. **Remove utils/useInView**: If not used elsewhere

## Performance Targets

| Metric | Target | Current |
|--------|--------|---------|
| LCP    | < 2.5s | TBD     |
| CLS    | < 0.1  | TBD     |
| TBT    | < 150ms| TBD     |
| FCP    | < 1.8s | TBD     |

Run Lighthouse to get current metrics.

## Notes

- **Static Export Mode**: `output: 'export'` requires `unoptimized: true` for images
- **Headers**: Headers in `next.config.js` are not supported in static export. Configure caching headers on your hosting/CDN (e.g., Hostinger, Cloudflare, Vercel)
- **Images**: Should be pre-optimized before deployment (use tools like Sharp, ImageMagick, or online optimizers)
- **CDN**: Consider using a CDN for image optimization in production (Cloudinary, Imgix, Fastly)
- **HLS**: HLS support requires `hls.js` library (optional, install with `npm install hls.js`)
- **Bundle Analyzer**: Run `npm run analyze` to see bundle breakdown after installing `@next/bundle-analyzer`

