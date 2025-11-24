'use client'

import { useState, useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { Play, Volume2, VolumeX } from 'lucide-react'

// Lazy Video Player Component
function LazyVideoPlayer({ src, title, index }: { src: string; title: string; index: number }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (!containerRef.current || !videoRef.current || !mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isLoaded) {
            // Load video when it comes into view
            if (videoRef.current) {
              videoRef.current.src = src
              videoRef.current.load()
              setIsLoaded(true)
              // Auto-play when visible (only for first few videos)
              if (index < 2) {
                videoRef.current.play().then(() => {
                  setIsPlaying(true)
                }).catch(() => {
                  // Auto-play might fail, ignore
                })
              }
            }
          }
          // Play/pause based on visibility for all videos
          if (entry.isIntersecting && entry.intersectionRatio >= 0.5 && isLoaded) {
            if (videoRef.current && videoRef.current.paused) {
              videoRef.current.play().then(() => {
                setIsPlaying(true)
              }).catch(() => {
                // Play might fail, ignore
              })
            }
          } else if (!entry.isIntersecting && isLoaded) {
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause()
              setIsPlaying(false)
            }
          }
        })
      },
      {
        rootMargin: '50px', // Start loading 50px before it comes into view
        threshold: [0, 0.5, 1.0],
      }
    )

    observer.observe(containerRef.current)

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current)
      }
    }
  }, [src, isLoaded, index, mounted])

  const handleVideoClick = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().then(() => {
          setIsPlaying(true)
        }).catch(() => {
          // Play might fail, ignore
        })
      } else {
        videoRef.current.pause()
        setIsPlaying(false)
      }
    }
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  if (!mounted) {
    return (
      <div className="relative group flex justify-center">
        <div 
          className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden w-60"
        >
          {/* Placeholder while mounting */}
        </div>
      </div>
    )
  }

  return (
    <div className="relative group flex justify-center">
      <div 
        ref={containerRef} 
        className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden w-60 cursor-pointer"
        onClick={handleVideoClick}
      >
        {/* Video Element - Lazy Loaded, Loop, Muted */}
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          loop
          muted
          playsInline
          preload="none"
          suppressHydrationWarning
          onPlay={handleVideoPlay}
          onPause={handleVideoPause}
        />
        
        {/* Play Button Overlay - Show when paused */}
        {!isPlaying && isLoaded && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
            <div className="w-16 h-16 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <Play className="w-6 h-6 text-gray-800 ml-1" fill="currentColor" />
            </div>
          </div>
        )}
        
        {/* Video Title */}
        <div className="absolute bottom-3 left-3 right-3">
          <h4 className="text-white text-sm font-semibold truncate drop-shadow-lg">
            {title}
          </h4>
        </div>
      </div>
    </div>
  )
}

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [mounted, setMounted] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)
  const videoContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setMounted(true)
  }, [])

  // Sync muted state with video element
  useEffect(() => {
    if (videoRef.current && mounted) {
      videoRef.current.muted = isMuted
    }
  }, [isMuted, mounted])

  // Intersection Observer to load and play/pause video based on visibility
  useEffect(() => {
    if (!videoRef.current || !videoContainerRef.current || !mounted) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.6) {
            // Video is 60% or more visible - load and play it
            if (videoRef.current) {
              // Load video if not already loaded
              if (videoRef.current.readyState === 0) {
                videoRef.current.load()
              }
              const wasPlaying = !videoRef.current.paused
              videoRef.current.play().then(() => {
                if (!wasPlaying) {
                  setIsPlaying(true)
                }
              }).catch((error) => {
                console.log('Video play failed:', error)
              })
            }
          } else {
            // Video is less than 60% visible - pause it
            if (videoRef.current && !videoRef.current.paused) {
              videoRef.current.pause()
              setIsPlaying(false)
            }
          }
        })
      },
      {
        threshold: [0, 0.6, 1.0], // Trigger at 0%, 60%, and 100% visibility
      }
    )

    observer.observe(videoContainerRef.current)

    return () => {
      if (videoContainerRef.current) {
        observer.unobserve(videoContainerRef.current)
      }
    }
  }, [mounted])
  const verticalVideos = [
    {
      id: 1,
      title: "Apple Bore",
      video: "/reels/AppleWeb.mov"
    },
    {
      id: 2,
      title: "Custard Apple",
      video: "/reels/CustardWeb.mov"
    },
    {
      id: 3,
      title: "Dragon Fruit",
      video: "/reels/DragonFruit.mp4"
    },
    {
      id: 4,
      title: "Guava",
      video: "/reels/Guava.mp4"
    },
    {
      id: 5,
      title: "Lemon",
      video: "/reels/Lemon.mov"
    },
    {
      id: 6,
      title: "Fig",
      video: "/reels/FigWeb.mp4"
    },
    {
      id: 7,
      title: "Orange",
      video: "/reels/OrangeWeb.mp4"
    }
  ]

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      const newMutedState = !isMuted
      setIsMuted(newMutedState)
      // Ensure the video element's muted property is updated
      videoRef.current.muted = newMutedState
    }
  }

  const handleVideoPlay = () => {
    setIsPlaying(true)
  }

  const handleVideoPause = () => {
    setIsPlaying(false)
  }

  return (
    <section className="py-20 bg-gray-100">
      {/* Top Section: Horizontal Video (1920x1080) - Full Width */}
      <div className="mb-16 w-full px-4">
        <div ref={videoContainerRef} className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden max-w-7xl mx-auto scale-[0.9025]">
              {/* Video Element - Only render when mounted */}
              {mounted && (
              <video
                ref={videoRef}
                src="/reels/main.mp4"
                className="w-full h-full object-cover"
                loop
                  muted={isMuted}
                onClick={togglePlay}
                onPlay={handleVideoPlay}
                onPause={handleVideoPause}
                preload="none"
                playsInline
                suppressHydrationWarning
              />
              )}
              
              {/* Play/Pause Button Overlay */}
              {mounted && !isPlaying && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-30">
                  <button 
                    onClick={togglePlay}
                    className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 hover:scale-110 z-10"
                  >
                    <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                  </button>
                </div>
              )}
              
              {/* Mute/Unmute Button */}
              <button
                onClick={(e) => {
                  e.preventDefault()
                  e.stopPropagation()
                  toggleMute()
                }}
                className="absolute top-4 right-4 w-12 h-12 bg-black bg-opacity-60 hover:bg-opacity-80 rounded-full flex items-center justify-center transition-all duration-300 z-10"
                aria-label={isMuted ? "Unmute video" : "Mute video"}
                type="button"
              >
                {isMuted ? (
                  <VolumeX className="w-6 h-6 text-white" />
                ) : (
                  <Volume2 className="w-6 h-6 text-white" />
                )}
              </button>
              
              {/* Video Info */}
              <div className="absolute bottom-4 left-4 text-white z-10">
                <h3 className="text-xl font-bold mb-1">Premium Plant Collection</h3>
                <p className="text-sm opacity-90">Discover our latest horticulture innovations</p>
            </div>
          </div>
        </div>

      {/* Bottom Section: Vertical Videos Carousel (1080x1920) - Master Content Width */}
      <div className="w-full max-w-[1238px] mx-auto px-4">
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={24}
            slidesPerView={1}
            breakpoints={{
              640: { slidesPerView: 2, spaceBetween: 16 },
              768: { slidesPerView: 3, spaceBetween: 20 },
              1024: { slidesPerView: 4, spaceBetween: 24 },
            }}
            navigation={{
              nextEl: '.vertical-videos-next',
              prevEl: '.vertical-videos-prev',
            }}
            className="vertical-videos-swiper"
          >
            {verticalVideos.map((video, index) => (
              <SwiperSlide key={video.id}>
                <LazyVideoPlayer 
                  src={video.video}
                  title={video.title}
                  index={index}
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center gap-6 mt-6">
            <button className="vertical-videos-prev text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
              <span>←</span>
              <span className="uppercase font-medium relative">
                PREV
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
              </span>
            </button>
            <button className="vertical-videos-next text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
              <span className="uppercase font-medium relative">
                NEXT
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
              </span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .vertical-videos-swiper {
          padding: 0; /* Ensure exactly 4 slides fit without showing a partial 5th */
        }
        
        .vertical-videos-swiper .swiper-slide {
          height: auto;
        }
        
        .vertical-videos-prev.swiper-button-disabled,
        .vertical-videos-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}

