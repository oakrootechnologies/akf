# Performance: Implement OptimizedImage & OptimizedVideo components, image config, HTTP hints, lazy loading, and Lighthouse test scripts

## Summary

This PR implements a comprehensive performance overhaul focused on images, videos, and frontend delivery to improve LCP, CLS, and TBT metrics.

## Changes

### New Components

- **`components/OptimizedImage.tsx`**: Performance-optimized image component with:
  - AVIF/WebP fallback via picture element
  - LQIP blur placeholders
  - Native lazy loading
  - Fetch priority for LCP images
  - Aspect ratio preservation to prevent CLS

- **`components/OptimizedVideo.tsx`**: Performance-optimized video component with:
  - IntersectionObserver-based lazy loading
  - Poster placeholder with play overlay
  - Optional HLS support (requires hls.js)
  - Autoplay with muted per browser rules

- **`utils/useInView.ts`**: Efficient IntersectionObserver hook for lazy loading

### Configuration Updates

- **`next.config.js`**:
  - Added image domains and formats (AVIF/WebP)
  - Added caching headers for static assets (max-age=31536000, immutable)
  - Added security headers
  - Enabled package import optimization

- **`app/layout.tsx`**:
  - Added DNS prefetch for fonts
  - Added preconnect to Google Fonts
  - Added preload for critical hero images (LCP candidates)
  - Added preload for critical fonts

### Scripts & Documentation

- **`scripts/perf-check.sh`**: Lighthouse CI automation script
- **`README/perf.md`**: Comprehensive performance documentation

## Performance Benefits

- **LCP**: Hero images preloaded and optimized
- **CLS**: Aspect ratio preservation prevents layout shifts
- **TBT**: Lazy loading reduces initial bundle size
- **Bandwidth**: AVIF/WebP support reduces image sizes
- **Caching**: Aggressive caching for static assets

## Manual QA Steps

1. ✅ Hero image loads immediately (check Network tab)
2. ✅ Images use AVIF/WebP where supported (check Network tab)
3. ✅ Videos lazy-load and show poster before load
4. ✅ No layout shifts from image load (check CLS in Lighthouse)
5. ✅ LCP element identified and optimized
6. ✅ Bundle size reduced (run `npm run analyze`)

## Rollout Plan

1. **Phase 1**: Deploy components (non-breaking)
2. **Phase 2**: Gradually migrate images to OptimizedImage
3. **Phase 3**: Migrate videos to OptimizedVideo
4. **Phase 4**: Monitor Lighthouse scores and adjust

## Testing

Run Lighthouse tests:

```bash
npm run build
npm run perf-check
```

Or manually:
```bash
cd out && http-server -p 3000
npx lhci autorun --collect.url=http://localhost:3000 --collect.settings.emulatedFormFactor=mobile
```

## Target Metrics

- LCP < 2.5s on mobile 3G
- CLS < 0.1
- TBT < 150ms
- FCP < 1.8s

## Notes

- Static export mode requires `unoptimized: true` for images
- Images should be pre-optimized before deployment
- Consider CDN for image optimization in production
- HLS support is optional (requires hls.js library)

## Revert Instructions

See `README/perf.md` for detailed rollback steps.

