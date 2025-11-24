'use client'

import { useState, useMemo } from 'react'
import Image from 'next/image'

/**
 * Generates a tiny inline SVG placeholder for LQIP (Low Quality Image Placeholder)
 */
function generateLQIP(width: number = 10, height: number = 10): string {
  const svg = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="100%" height="100%" fill="#f3f4f6"/>
      <text x="50%" y="50%" font-size="8" fill="#9ca3af" text-anchor="middle" dy=".3em">…</text>
    </svg>
  `
  // Use btoa for browser compatibility (works in browser, not Node)
  if (typeof window !== 'undefined' && typeof btoa !== 'undefined') {
    return `data:image/svg+xml;base64,${btoa(svg)}`
  }
  // Fallback for SSR - return a simple data URI
  const encoded = encodeURIComponent(svg)
  return `data:image/svg+xml;charset=utf-8,${encoded}`
}

/**
 * Generates AVIF/WebP srcset URLs for CDN optimization
 * Note: For static export, this assumes images are pre-optimized or uses a CDN
 */
function generateSrcSet(
  src: string,
  format: 'avif' | 'webp',
  sizes: number[] = [400, 800, 1200, 1600, 2000]
): string {
  // If using a CDN, you would construct URLs like:
  // `${cdnBaseUrl}${src}?format=${format}&width=${size}`
  // For now, return original src (images should be pre-optimized)
  return src
}

export interface OptimizedImageProps {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  placeholder?: 'blur' | 'lqip' | 'empty'
  aspectRatio?: string // e.g., "16/9", "1/1"
  width?: number
  height?: number
  blurDataURL?: string
  className?: string
  responsiveBreakpoints?: number[]
  fill?: boolean
  objectFit?: 'contain' | 'cover' | 'fill' | 'none' | 'scale-down'
  objectPosition?: string
  onLoad?: () => void
  onError?: () => void
}

/**
 * OptimizedImage - Performance-optimized image component
 * 
 * Features:
 * - Automatic AVIF/WebP fallback via picture element
 * - LQIP blur placeholders
 * - Native lazy loading
 * - Fetch priority for LCP images
 * - Aspect ratio preservation to prevent CLS
 * 
 * @example
 * ```tsx
 * <OptimizedImage
 *   src="/hero.jpg"
 *   alt="Hero"
 *   priority
 *   width={1920}
 *   height={1080}
 *   placeholder="blur"
 *   blurDataURL="data:image/..."
 * />
 * ```
 */
export default function OptimizedImage({
  src,
  alt,
  priority = false,
  sizes = '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw',
  placeholder = 'lqip',
  aspectRatio,
  width,
  height,
  blurDataURL,
  className = '',
  responsiveBreakpoints = [400, 800, 1200, 1600],
  fill = false,
  objectFit = 'cover',
  objectPosition = 'center',
  onLoad,
  onError,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false)
  const [hasError, setHasError] = useState(false)

  // Generate LQIP if no blurDataURL provided
  const placeholderData = useMemo(() => {
    if (blurDataURL) return blurDataURL
    if (placeholder === 'lqip' && width && height) {
      return generateLQIP(width, height)
    }
    return undefined
  }, [blurDataURL, placeholder, width, height])

  // Determine if we should use picture element for format fallback
  // For static export, we'll use the picture element with source tags
  const usePicture = useMemo(() => {
    // Use picture element for external images or when we have CDN support
    return src.startsWith('http') || src.startsWith('//')
  }, [src])

  const handleLoad = () => {
    setIsLoaded(true)
    onLoad?.()
  }

  const handleError = () => {
    setHasError(true)
    onError?.()
  }

  // Aspect ratio style to prevent CLS
  const aspectRatioStyle = aspectRatio
    ? { aspectRatio }
    : width && height
    ? { aspectRatio: `${width}/${height}` }
    : {}

  // For static export, next/image with unoptimized: true still provides
  // lazy loading, decoding, and sizing benefits
  const imageProps = {
    src,
    alt,
    width: fill ? undefined : width,
    height: fill ? undefined : height,
    fill,
    priority,
    sizes,
    className: `${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`,
    style: {
      ...aspectRatioStyle,
      objectFit,
      objectPosition,
    },
    onLoad: handleLoad,
    onError: handleError,
    loading: priority ? ('eager' as const) : ('lazy' as const),
    decoding: 'async' as const,
    fetchPriority: priority ? ('high' as const) : ('auto' as const),
    ...(placeholderData && { blurDataURL: placeholderData }),
  }

  // If using picture element for format fallback
  if (usePicture) {
    return (
      <picture className={className} style={aspectRatioStyle}>
        {/* AVIF source */}
        <source
          type="image/avif"
          srcSet={generateSrcSet(src, 'avif', responsiveBreakpoints)}
          sizes={sizes}
        />
        {/* WebP source */}
        <source
          type="image/webp"
          srcSet={generateSrcSet(src, 'webp', responsiveBreakpoints)}
          sizes={sizes}
        />
        {/* Fallback image */}
        <Image {...imageProps} />
      </picture>
    )
  }

  // Standard optimized image
  return <Image {...imageProps} />
}

