'use client'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { useState } from 'react'

export default function FeaturedCategories() {
  const [activeCard, setActiveCard] = useState(0)

  const categories = [
    {
      id: 1,
      name: 'Assorted Shrubs',
      image: '/images/products/african-mahogany.jpg',
      link: '#category1'
    },
    {
      id: 2,
      name: 'Indoor Plants',
      image: '/images/products/pomegranate.jpg',
      link: '#category2'
    },
    {
      id: 3,
      name: 'Fruit Trees',
      image: '/images/products/orange.jpg',
      link: '#category3'
    },
    {
      id: 4,
      name: 'Garden Tools',
      image: '/images/products/lemon.jpg',
      link: '#category4'
    },
    {
      id: 5,
      name: 'Seeds',
      image: '/images/products/fig.jpg',
      link: '#category5'
    },
    {
      id: 6,
      name: 'Agroforestry',
      image: '/images/products/guava.jpg',
      link: '#category6'
    },
    {
      id: 7,
      name: 'Fertilizers',
      image: '/images/products/chiku.jpg',
      link: '#category7'
    },
    {
      id: 8,
      name: 'Planters',
      image: '/images/products/custard-apple.jpg',
      link: '#category8'
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Full-bleed Background with Green Leaves */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=1920&q=80)'
        }}
      >
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-5xl md:text-6xl font-bold text-white">
            Explore Our Categories
          </h2>
        </div>

        {/* Carousel */}
        <div className="relative">
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            navigation={{
              nextEl: '.swiper-button-next-custom',
              prevEl: '.swiper-button-prev-custom',
            }}
            className="featured-categories-carousel"
          >
            {categories.map((category) => (
              <SwiperSlide key={category.id}>
                <a
                  href={category.link}
                  className={`block bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl ${
                    activeCard === category.id ? 'ring-4 ring-primary-400' : ''
                  }`}
                  onMouseEnter={() => setActiveCard(category.id)}
                  onMouseLeave={() => setActiveCard(0)}
                >
                  {/* Image */}
                  <div className="aspect-square bg-gray-100 overflow-hidden">
                    <img
                      src={category.image}
                      alt={category.name}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Title */}
                  <div className="p-6 text-center">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {category.name}
                    </h3>
                  </div>
                </a>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <button className="swiper-button-prev-custom text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
              <span>←</span>
              <span className="uppercase font-medium relative">
                PREV
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
              </span>
            </button>
            <button className="swiper-button-next-custom text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
              <span className="uppercase font-medium relative">
                NEXT
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
              </span>
              <span>→</span>
            </button>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx global>{`
        .featured-categories-carousel .swiper-button-disabled {
          opacity: 0.35;
          cursor: not-allowed;
          pointer-events: none;
        }
      `}</style>
    </section>
  )
}



