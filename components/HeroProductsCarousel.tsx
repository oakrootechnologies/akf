'use client'

import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import { Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import ProductCard from './ProductCard'

export default function HeroProductsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)

  const products = [
    {
      title: "Vegetable Seeds",
      image_default: "/Website Images/generated/vegetable_seeds.png",
      images_hover: [
        "/Website Images/generated/vegetable_seeds.png",
        "/Website Images/generated/vegetable_seeds.png",
        "/Website Images/generated/vegetable_seeds.png"
      ],
      price: "",
      rating: 5,
      href: "/categories/vegetable-seeds"
    },
    {
      title: "Field & Cash Crops",
      image_default: "/Website Images/generated/field_crops.png",
      images_hover: [
        "/Website Images/generated/field_crops.png",
        "/Website Images/generated/field_crops.png",
        "/Website Images/generated/field_crops.png"
      ],
      price: "",
      rating: 5,
      href: "/categories/field-cash-crops"
    },
    {
      title: "Fruit Plantation",
      image_default: "/Website Images/guava(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/guava(Hero)/FB_IMG_1614582123664.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582130221.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582133488.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582146811.jpg"
      ],
      price: "",
      rating: 5,
      href: "/categories/fruit-plantation"
    },
    {
      title: "Timber & Forestry",
      image_default: "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
      images_hover: [
        "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
        "/Website Images/Sandalwood(Hero)/Red Sandalwood.png",
        "/Website Images/Sandalwood(Hero)/tractor.jpeg"
      ],
      price: "",
      rating: 5,
      href: "/categories/timber-forestry"
    }
  ]

  // Duplicate products to create seamless loop: 1234 -> 2345 -> 3451 -> 4512 -> 5123 -> 1234...
  // This creates overlapping slides for continuous looping
  const duplicatedProducts = [...products, ...products, ...products]

  return (
    <div className="relative z-30 bg-transparent">
      <div className="w-full max-w-[1200px] mx-auto px-4 md:px-6 lg:px-8 xl:px-12">
        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
              pauseOnMouseEnter: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
                spaceBetween: 16,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="hero-products-swiper relative z-30"
          >
            {duplicatedProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="hero-scale mx-auto">
                  <ProductCard
                    title={product.title}
                    image={(product as any).image}
                    image_default={product.image_default}
                    images_hover={product.images_hover}
                    price={product.price}
                    rating={product.rating}
                    href={(product as any).href}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* Custom Swiper Styles */}
      <style jsx global>{`
        .hero-products-swiper {
          padding: 0;
        }
        
        /* Hero product cards scale - adjusted for better spacing */
        .hero-products-swiper .hero-scale {
          transform: scale(1);
          transform-origin: center;
        }
        
        /* Add padding to slides for better spacing */
        .hero-products-swiper .swiper-slide {
          padding: 0 4px;
        }

        /* Apply Poppins font to hero product cards */
        .hero-products-swiper h3 {
          font-family: 'Poppins', sans-serif;
        }
      `}</style>
    </div>
  )
}
