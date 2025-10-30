'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroProductsCarousel() {
  const products = [
    {
      title: "Guava",
      image: "/products/guava.jpg",
      price: "$12.00",
      rating: 5
    },
    {
      title: "Dragon Fruit",
      image: "/products/dragon fruit.jpg",
      price: "$15.00",
      rating: 4
    },
    {
      title: "Lemon",
      image: "/products/lemon.jpg",
      price: "$8.00",
      rating: 5
    },
    {
      title: "Red Sandalwood",
      image: "/products/red-sandalwood.jpg",
      price: "$25.00",
      rating: 4
    },
    {
      title: "Chiku",
      image: "/products/chiku.jpg",
      price: "$10.00",
      rating: 5
    }
  ]

  return (
    <section className="relative overflow-visible">
      {/* Part 2.B - Background band (no negative margin) */}
      <div className="relative w-full py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJsZWFmX3BhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxYTQwMWMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjciLz4KICAgICAgPGVsbGlwc2UgY3g9IjgwIiBjeT0iMjAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjUwIiBjeT0iNzAiIHJ4PSIxOCIgcnk9IjMwIiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iODAiIHJ4PSIxNCIgcnk9IjIyIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjkwIiByeD0iMTYiIHJ5PSIyNSIgZmlsbD0iIzIyOGI1MyIgb3BhY2l0eT0iMC42NSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsZWFmX3BhdHRlcm4pIi8+Cjwvc3ZnPg==')`
          }}
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative" />
      </div>

      {/* Part 2.A - Cards (negative margin, on top) */}
      <div className="relative z-20 -mt-24 md:-mt-28 lg:-mt-32 w-full max-w-[1032px] mx-auto px-4">
          {/* Section Title spacer removed to hide line */}
          <div className="mb-6" />

        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={18}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 14,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 16,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 18,
              },
            }}
            navigation={{
              nextEl: '.hero-next',
              prevEl: '.hero-prev',
            }}
            className="hero-products-swiper"
          >
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="hero-scale mx-auto">
                  <ProductCard
                    title={product.title}
                    image={product.image}
                    price={product.price}
                    rating={product.rating}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Right-side small navigation controls */}
          <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 z-20 flex items-center gap-2 pr-2">
            <button className="hero-prev w-10 h-10 rounded-full bg-white text-gray-700 shadow hover:bg-gray-50 flex items-center justify-center">
              <span className="text-lg">‹</span>
            </button>
            <button className="hero-next w-10 h-10 rounded-full bg-white text-gray-700 shadow hover:bg-gray-50 flex items-center justify-center">
              <span className="text-lg">›</span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-products-swiper {
          padding: 0; /* ensure only 4 slides visible on desktop */
        }
        
        /* Shrink hero product cards baseline; bumped slightly larger per request */
        .hero-products-swiper .hero-scale {
          transform: scale(0.93); /* previously 0.86; ~+8% more */
          transform-origin: center;
        }

        .hero-products-swiper .swiper-slide {
          height: auto;
        }
        
        .hero-prev.swiper-button-disabled,
        .hero-next.swiper-button-disabled {
          opacity: 0.3;
          cursor: not-allowed;
        }
      `}</style>
    </section>
  )
}
