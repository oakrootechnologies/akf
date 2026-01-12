'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/autoplay'
import { HERO_BANNERS } from '@/lib/banner-data'
import Link from 'next/link'

export default function HeroSlider() {
  // We use state to track active index to trigger animation key resets if needed, 
  // though CSS animation on mount usually works better with key prop or explicit classes.
  // Swiper's 'swiper-slide-active' class is also useful.

  return (
    <section className="relative z-10 w-full bg-gray-900">
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoHeight={true}
        speed={1000}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
          // Custom styling handled in global jsx style below
        }}
        className="w-full hero-slider"
      >
        {HERO_BANNERS.map((banner, index) => (
          <SwiperSlide key={banner.id} className="relative w-full">
            {/* 1. Image Layer - Clickable */}
            <Link href={banner.ctaLink} className="block w-full">
              <img
                src={banner.image}
                alt={banner.title}
                className="w-full h-auto block"
                loading={index === 0 ? "eager" : "lazy"}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>

      <style jsx global>{`
        /* Pagination Dots */
        .hero-slider .swiper-pagination-bullet {
            width: 12px;
            height: 12px;
            background: rgba(255, 255, 255, 0.4);
            opacity: 1;
            transition: all 0.3s ease;
            margin: 0 6px !important;
        }
        .hero-slider .swiper-pagination-bullet-active {
            width: 32px;
            border-radius: 6px;
            background: #81ba00;
        }
        
        /* Positioning Pagination */
        .hero-slider .swiper-pagination {
            bottom: 40px !important;
        }

        /* Animate Content on Active Slide */
        .hero-slider .swiper-slide-active .hero-content {
            opacity: 1;
            transform: translateY(0);
        }
      `}</style>
    </section>
  )
}
