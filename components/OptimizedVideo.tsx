'use client'

import { useRef, useEffect, useState } from 'react'
import { useInView } from '@/utils/useInView'
import { Play } from 'lucide-react'

export interface OptimizedVideoProps {
  src: string | string[] // Single source or array for multiple sources
  poster?: string
  type?: string // MIME type, e.g., 'video/mp4'
  preload?: 'metadata' | 'none'
  controls?: boolean
  lazy?: boolean
  autoplay?: boolean
  muted?: boolean
  loop?: boolean
  playsInline?: boolean
  className?: string
  aspectRatio?: string
  onPlay?: () => void
  onPause?: () => void
  onEnded?: () => void
  onError?: () => void
  // HLS support (requires hls.js library)
  useHLS?: boolean
  hlsConfig?: Record<string, any>
}

/**
 * OptimizedVideo - Performance-optimized video component
 * 
 * Features:
 * - Lazy loading via IntersectionObserver
 * - Poster placeholder with play overlay
 * - HLS support (optional, requires hls.js)
 * - Autoplay with muted (per browser rules)
 * - Prevents layout shift with aspect ratio
 * 
 * @example
 * ```tsx
 * <OptimizedVideo
 *   src="/video.mp4"
 *   poster="/poster.jpg"
 *   lazy
 *   controls
 *   aspectRatio="16/9"
 * />
 * ```
 */
export default function OptimizedVideo({
  src,
  poster,
  type = 'video/mp4',
  preload = 'metadata',
  controls = true,
  lazy = true,
  autoplay = false,
  muted = autoplay, // Autoplay requires muted
  loop = false,
  playsInline = true,
  className = '',
  aspectRatio = '16/9',
  onPlay,
  onPause,
  onEnded,
  onError,
  useHLS = false,
  hlsConfig = {},
}: OptimizedVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [ref, isInView] = useInView({ rootMargin: '100px' })
  const [isPlaying, setIsPlaying] = useState(false)
  const [hasError, setHasError] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(!lazy || autoplay)

  // Load video when in view (for lazy loading)
  useEffect(() => {
    if (lazy && isInView && !shouldLoad) {
      setShouldLoad(true)
    }
  }, [lazy, isInView, shouldLoad])

  // HLS support (requires hls.js - optional, document usage)
  useEffect(() => {
    if (useHLS && shouldLoad && videoRef.current && typeof window !== 'undefined') {
      let hlsInstance: any = null
      
      // Dynamic import of hls.js only when needed
      import('hls.js')
        .then((Hls) => {
          if (Hls.default && Hls.default.isSupported() && typeof src === 'string') {
            hlsInstance = new Hls.default(hlsConfig)
            hlsInstance.loadSource(src)
            hlsInstance.attachMedia(videoRef.current!)
            hlsInstance.on(Hls.default.Events.MANIFEST_PARSED, () => {
              // Video ready
            })
          }
        })
        .catch(() => {
          // hls.js not available, fallback to native video playback
          // This is expected if hls.js is not installed or not needed
          if (videoRef.current && typeof src === 'string') {
            videoRef.current.src = src
          }
        })
      
      // Cleanup function
      return () => {
        if (hlsInstance && hlsInstance.destroy) {
          hlsInstance.destroy()
        }
      }
    }
  }, [useHLS, shouldLoad, src, hlsConfig])

  const handlePlay = () => {
    setIsPlaying(true)
    onPlay?.()
  }

  const handlePause = () => {
    setIsPlaying(false)
    onPause?.()
  }

  const handleClick = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
    }
  }

  const videoSrc = shouldLoad ? src : undefined

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={`relative ${className}`}
      style={{ aspectRatio }}
    >
      <video
        ref={videoRef}
        poster={poster}
        preload={lazy && !shouldLoad ? 'none' : preload}
        controls={controls}
        autoPlay={autoplay}
        muted={muted}
        loop={loop}
        playsInline={playsInline}
        className="w-full h-full object-cover"
        onPlay={handlePlay}
        onPause={handlePause}
        onEnded={() => {
          setIsPlaying(false)
          onEnded?.()
        }}
        onError={() => {
          setHasError(true)
          onError?.()
        }}
      >
        {shouldLoad && (
          <>
            {Array.isArray(src) ? (
              src.map((source, index) => (
                <source key={index} src={source} type={type} />
              ))
            ) : (
              <source src={src} type={type} />
            )}
            Your browser does not support the video tag.
          </>
        )}
      </video>

      {/* Poster overlay with play button when not playing */}
      {poster && !isPlaying && shouldLoad && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer"
          onClick={handleClick}
        >
          <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors">
            <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
          </div>
        </div>
      )}

      {/* Loading placeholder when lazy and not loaded */}
      {lazy && !shouldLoad && poster && (
        <div
          className="absolute inset-0 bg-gray-200 flex items-center justify-center"
          style={{ aspectRatio }}
        >
          <img
            src={poster}
            alt="Video poster"
            className="w-full h-full object-cover opacity-50"
            loading="lazy"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-4">
              <Play className="w-8 h-8 text-gray-900 ml-1" fill="currentColor" />
            </div>
          </div>
        </div>
      )}

      {/* Error state */}
      {hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <p className="text-gray-500">Failed to load video</p>
        </div>
      )}
    </div>
  )
}

