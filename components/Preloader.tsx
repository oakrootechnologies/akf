'use client'

import { useState, useEffect, useRef } from 'react'

export default function Preloader() {
  const [isLoading, setIsLoading] = useState(true)
  const loadingCheckRef = useRef<NodeJS.Timeout | null>(null)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const loadedMedia = new Set<HTMLElement>()
    const pendingMedia = new Set<HTMLElement>()
    const mediaListeners = new Map<HTMLElement, Array<() => void>>()
    let checkTimeout: NodeJS.Timeout | null = null
    let maxTimeout: NodeJS.Timeout | null = null
    let mutationObserver: MutationObserver | null = null
    const startTime = Date.now()
    const MAX_WAIT_TIME = 10000 // Maximum 10 seconds wait time

    // Function to check if all media is loaded
    const checkAllMediaLoaded = () => {
      // Get all images (including those in picture elements)
      const allImages = Array.from(document.querySelectorAll('img'))
      const allVideos = Array.from(document.querySelectorAll('video'))

      // Filter out images that are placeholders or already loaded
      const imagesToCheck = allImages.filter(img => {
        // Skip data URIs, SVGs used as placeholders, and already loaded images
        if (img.src.startsWith('data:') || img.src.includes('svg')) return false
        if (img.complete && img.naturalWidth > 0) {
          loadedMedia.add(img)
          pendingMedia.delete(img)
          return false
        }
        return true
      })

      // Filter videos that need to be checked
      const videosToCheck = allVideos.filter(video => {
        // Skip if video is already loaded
        if (video.readyState >= 3) { // HAVE_FUTURE_DATA or higher
          loadedMedia.add(video)
          pendingMedia.delete(video)
          return false
        }
        // For videos with preload="none", check if they're visible or about to be visible
        if (video.preload === 'none') {
          const rect = video.getBoundingClientRect()
          const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200
          // If not visible, consider it as "loaded" for preloader purposes (lazy loading)
          if (!isVisible) {
            loadedMedia.add(video)
            pendingMedia.delete(video)
            return false
          }
        }
        return true
      })

      // Add all pending media to the set
      imagesToCheck.forEach(img => {
        if (!loadedMedia.has(img)) {
          pendingMedia.add(img)
        }
      })
      videosToCheck.forEach(video => {
        if (!loadedMedia.has(video)) {
          pendingMedia.add(video)
        }
      })

      // Set up load listeners for images
      imagesToCheck.forEach(img => {
        if (img.complete && img.naturalWidth > 0) {
          loadedMedia.add(img)
          pendingMedia.delete(img)
        } else if (!loadedMedia.has(img)) {
          pendingMedia.add(img)

          const onLoad = () => {
            loadedMedia.add(img)
            pendingMedia.delete(img)
            checkIfAllLoaded()
          }
          const onError = () => {
            // Even if error, consider it "loaded" to not block preloader forever
            loadedMedia.add(img)
            pendingMedia.delete(img)
            checkIfAllLoaded()
          }

          img.addEventListener('load', onLoad, { once: true })
          img.addEventListener('error', onError, { once: true })

          // Store cleanup function
          const cleanup = () => {
            img.removeEventListener('load', onLoad)
            img.removeEventListener('error', onError)
          }
          if (!mediaListeners.has(img)) {
            mediaListeners.set(img, [])
          }
          mediaListeners.get(img)?.push(cleanup)
        }
      })

      // Set up load listeners for videos
      videosToCheck.forEach(video => {
        if (video.readyState >= 3) {
          loadedMedia.add(video)
          pendingMedia.delete(video)
        } else if (!loadedMedia.has(video)) {
          pendingMedia.add(video)

          const onCanPlay = () => {
            loadedMedia.add(video)
            pendingMedia.delete(video)
            checkIfAllLoaded()
          }
          const onError = () => {
            // Even if error, consider it "loaded"
            loadedMedia.add(video)
            pendingMedia.delete(video)
            checkIfAllLoaded()
          }
          const onLoadedData = () => {
            loadedMedia.add(video)
            pendingMedia.delete(video)
            checkIfAllLoaded()
          }

          video.addEventListener('canplay', onCanPlay, { once: true })
          video.addEventListener('error', onError, { once: true })
          video.addEventListener('loadeddata', onLoadedData, { once: true })

          // Store cleanup function
          const cleanup = () => {
            video.removeEventListener('canplay', onCanPlay)
            video.removeEventListener('error', onError)
            video.removeEventListener('loadeddata', onLoadedData)
          }
          if (!mediaListeners.has(video)) {
            mediaListeners.set(video, [])
          }
          mediaListeners.get(video)?.push(cleanup)

          // For videos with preload="none", check if visible and trigger loading
          if (video.preload === 'none' && video.getAttribute('data-preload-checked') !== 'true') {
            const rect = video.getBoundingClientRect()
            const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200
            if (isVisible) {
              video.setAttribute('data-preload-checked', 'true')
              // Try to load metadata at least
              video.load()
            }
          } else if (video.preload !== 'none') {
            // For videos that should preload, ensure they're loading
            if (video.readyState === 0) {
              video.load()
            }
          }
        }
      })

      checkIfAllLoaded()
    }

    // Function to check if all media is loaded
    const checkIfAllLoaded = () => {
      if (checkTimeout) {
        clearTimeout(checkTimeout)
      }

      checkTimeout = setTimeout(() => {
        // Get current media elements
        const allImages = Array.from(document.querySelectorAll('img'))
        const allVideos = Array.from(document.querySelectorAll('video'))

        // Check if all images are loaded
        const allImagesLoaded = allImages.every(img => {
          if (img.src.startsWith('data:') || img.src.includes('svg')) return true
          return img.complete && img.naturalWidth > 0
        })

        // Check if all videos are loaded (at least metadata)
        const allVideosLoaded = allVideos.every(video => {
          // For videos with preload="none" that are not visible, consider them loaded (lazy loading)
          if (video.preload === 'none') {
            const rect = video.getBoundingClientRect()
            const isVisible = rect.top < window.innerHeight + 200 && rect.bottom > -200
            if (!isVisible) return true // Not visible yet, consider loaded for preloader
            // If visible, wait for it to load
            return video.readyState >= 2 // HAVE_CURRENT_DATA or higher
          }
          return video.readyState >= 2 // HAVE_CURRENT_DATA or higher
        })

        // Also check if there are no pending media
        const noPendingMedia = pendingMedia.size === 0

        if (allImagesLoaded && allVideosLoaded && noPendingMedia) {
          // Clear max timeout since we're done
          if (maxTimeout) {
            clearTimeout(maxTimeout)
            maxTimeout = null
          }
          // Small delay for smooth transition
          setTimeout(() => {
            setIsLoading(false)
          }, 500)
        }
      }, 100) // Debounce checks
    }

    // IntersectionObserver for lazy-loaded content
    const setupLazyObserver = () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement
              // Trigger loading check when lazy content comes into view
              setTimeout(() => {
                checkAllMediaLoaded()
              }, 100)
            }
          })
        },
        {
          rootMargin: '200px', // Start loading 200px before it comes into view
          threshold: 0.01,
        }
      )

      // Function to observe all images and videos
      const observeAllMedia = () => {
        document.querySelectorAll('img, video').forEach((el) => {
          observerRef.current?.observe(el)
        })
      }

      observeAllMedia()

      // MutationObserver to watch for dynamically added images/videos
      mutationObserver = new MutationObserver((mutations) => {
        let shouldRecheck = false
        mutations.forEach((mutation) => {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as HTMLElement
              // Check if it's an image or video, or contains them
              if (element.tagName === 'IMG' || element.tagName === 'VIDEO') {
                observerRef.current?.observe(element)
                shouldRecheck = true
              } else {
                const mediaElements = element.querySelectorAll('img, video')
                if (mediaElements.length > 0) {
                  mediaElements.forEach((el) => {
                    observerRef.current?.observe(el)
                  })
                  shouldRecheck = true
                }
              }
            }
          })
        })
        if (shouldRecheck) {
          setTimeout(() => {
            checkAllMediaLoaded()
            observeAllMedia() // Re-observe all in case new ones were added
          }, 100)
        }
      })

      // Observe the entire document for changes
      mutationObserver.observe(document.body, {
        childList: true,
        subtree: true,
      })
    }

    // Initial check when DOM is ready
    const initialCheck = () => {
      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
          setTimeout(() => {
            checkAllMediaLoaded()
            setupLazyObserver()
          }, 100)
        })
      } else {
        setTimeout(() => {
          checkAllMediaLoaded()
          setupLazyObserver()
        }, 100)
      }
    }

    initialCheck()

    // Also check on window load
    const handleWindowLoad = () => {
      setTimeout(() => {
        checkAllMediaLoaded()
      }, 200)
    }

    window.addEventListener('load', handleWindowLoad)

    // Maximum timeout - hide preloader after max wait time even if not all media is loaded
    maxTimeout = setTimeout(() => {
      setIsLoading(false)
    }, MAX_WAIT_TIME)

    // Periodic check for dynamically added content
    loadingCheckRef.current = setInterval(() => {
      checkAllMediaLoaded()
    }, 500)

    // Cleanup
    return () => {
      if (checkTimeout) {
        clearTimeout(checkTimeout)
      }
      if (maxTimeout) {
        clearTimeout(maxTimeout)
      }
      if (loadingCheckRef.current) {
        clearInterval(loadingCheckRef.current)
      }
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
      if (mutationObserver) {
        mutationObserver.disconnect()
      }
      // Clean up all event listeners
      mediaListeners.forEach((cleanups) => {
        cleanups.forEach(cleanup => cleanup())
      })
      mediaListeners.clear()
      window.removeEventListener('load', handleWindowLoad)
    }
  }, [])

  if (!isLoading) return null

  return (
    <>
      <div className={`fixed inset-0 bg-white z-[9999] flex items-center justify-center transition-opacity duration-500 ${isLoading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}>
        <div className="relative flex flex-col items-center">
          {/* Simple CSS Spinner */}
          <div className="w-16 h-16 border-4 border-gray-200 border-t-green-600 rounded-full animate-spin mb-4"></div>
          <p className="text-green-800 font-semibold tracking-wide text-sm animate-pulse">LOADING...</p>
        </div>
      </div>
    </>
  )
}

