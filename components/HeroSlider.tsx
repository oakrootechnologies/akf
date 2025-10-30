'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, EffectFade } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'

export default function HeroSlider() {
  const slides = [
    {
      id: 1,
      image: '/hero/1.png'
    },
    {
      id: 2,
      image: '/hero/2.png'
    },
    {
      id: 3,
      image: '/hero/3.png'
    },
    {
      id: 4,
      image: '/hero/4.png'
    }
  ]

  return (
    <section className="relative">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        spaceBetween={0}
        slidesPerView={1}
        autoHeight
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        pagination={false}
        className="w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full">
              {/* Use img to ensure full width with auto height */}
              <img src={slide.image} alt="Hero" className="block w-screen h-auto mx-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Pagination removed */}
    </section>
  )
}

