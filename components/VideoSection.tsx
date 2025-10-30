'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import { ChevronLeft, ChevronRight, Play } from 'lucide-react'

export default function VideoSection() {
  const verticalVideos = [
    {
      id: 1,
      title: "Plant Care Tips",
      thumbnail: "https://placehold.co/300x533/4F46E5/FFF?text=Reel+1",
      duration: "0:45"
    },
    {
      id: 2,
      title: "Garden Setup",
      thumbnail: "https://placehold.co/300x533/EC4899/FFF?text=Reel+2",
      duration: "1:20"
    },
    {
      id: 3,
      title: "Plant Growth",
      thumbnail: "https://placehold.co/300x533/059669/FFF?text=Reel+3",
      duration: "0:30"
    },
    {
      id: 4,
      title: "Harvest Time",
      thumbnail: "https://placehold.co/300x533/DC2626/FFF?text=Reel+4",
      duration: "1:15"
    },
    {
      id: 5,
      title: "Planting Guide",
      thumbnail: "https://placehold.co/300x533/7C3AED/FFF?text=Reel+5",
      duration: "0:50"
    }
  ]

  return (
    <section className="py-20 bg-gray-100">
      <div className="w-full max-w-[1032px] mx-auto px-4">
        
        {/* Top Section: Horizontal Video (1920x1080) */}
        <div className="mb-16">
          <div className="relative max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden">
              {/* Video Thumbnail */}
              <img
                src="https://placehold.co/800x450/1F2937/FFF?text=Main+Video+1920x1080"
                alt="Main Video"
                className="w-full h-full object-cover"
              />
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-20 h-20 bg-white bg-opacity-90 rounded-full flex items-center justify-center hover:bg-opacity-100 transition-all duration-300 hover:scale-110">
                  <Play className="w-8 h-8 text-gray-800 ml-1" fill="currentColor" />
                </button>
              </div>
              
              {/* Video Info */}
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-1">Premium Plant Collection</h3>
                <p className="text-sm opacity-90">Discover our latest horticulture innovations</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section: Vertical Videos Carousel (1080x1920) */}
        <div className="relative">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Latest Reels</h2>
            <p className="text-gray-600">Quick tips and plant care videos</p>
          </div>

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
            {verticalVideos.map((video) => (
              <SwiperSlide key={video.id}>
                <div className="relative group cursor-pointer flex justify-center">
                  <div className="relative aspect-[9/16] bg-gray-800 rounded-lg overflow-hidden w-60">
                    {/* Video Thumbnail */}
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    
                    {/* Play Button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white bg-opacity-90 rounded-full flex items-center justify-center group-hover:bg-opacity-100 transition-all duration-300">
                        <Play className="w-5 h-5 text-gray-800 ml-0.5" fill="currentColor" />
                      </div>
                    </div>
                    
                    {/* Duration Badge */}
                    <div className="absolute top-3 right-3 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {video.duration}
                    </div>
                    
                    {/* Video Title */}
                    <div className="absolute bottom-3 left-3 right-3">
                      <h4 className="text-white text-sm font-semibold truncate">
                        {video.title}
                      </h4>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <button className="vertical-videos-prev absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          
          <button className="vertical-videos-next absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-50 transition-colors">
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>
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
        
        .vertical-videos-prev,
        .vertical-videos-next {
          color: #374151;
        }
        
        .vertical-videos-prev:hover,
        .vertical-videos-next:hover {
          color: #22c55e;
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

