'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

export default function HeroSlider() {
  const [swiper, setSwiper] = useState<SwiperType | null>(null)

  const slides = [
    {
      id: 1,
      image: '/hero(section/1.png'
    },
    {
      id: 2,
      image: '/hero(section/2.png'
    },
    {
      id: 3,
      image: '/hero(section/3.png'
    },
    {
      id: 4,
      image: '/hero(section/4.png'
    },
    {
      id: 5,
      image: '/hero(section/5.png'
    }
  ]

  return (
    <section className="relative z-10 w-full">
      <div className="relative w-full">
      <Swiper
          onSwiper={setSwiper}
          modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoHeight={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={false}
        className="w-full hero-slider-swiper"
      >
        {slides.map((slide, index) => (
            <SwiperSlide key={slide.id} className="relative">
            <div className="relative w-full flex justify-center items-center">
              {/* Display image at full width, maintaining aspect ratio */}
                <img 
                  src={slide.image} 
                  alt="Hero" 
                  className="w-full h-auto block" 
                  loading={index === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  fetchPriority={index === 0 ? 'high' : 'auto'}
                />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

        {/* Navigation Buttons - Bottom Right Corner */}
        <div className="absolute bottom-6 md:bottom-8 lg:bottom-10 right-4 md:right-6 lg:right-8 z-[100]">
          <div className="bg-white rounded-full shadow-xl flex items-center overflow-hidden relative">
            {/* Divider Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 z-10"></div>
            
            {/* Previous Button - Left Half */}
            <button
              onClick={() => swiper?.slidePrev()}
              className="px-5 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors flex items-center justify-center rounded-l-full"
              aria-label="Previous slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Next Button - Right Half */}
            <button
              onClick={() => swiper?.slideNext()}
              className="px-5 md:px-6 py-3 md:py-4 hover:bg-gray-50 transition-colors flex items-center justify-center rounded-r-full border-l border-gray-200"
              aria-label="Next slide"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
