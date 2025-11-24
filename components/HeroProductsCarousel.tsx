'use client'

import { useRef, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import type { Swiper as SwiperType } from 'swiper'
import 'swiper/css'
import ProductCard from './ProductCard'

export default function HeroProductsCarousel() {
  const swiperRef = useRef<SwiperType | null>(null)
  const currentSlideRef = useRef(0)

  const products = [
    {
      title: "Guava",
      image_default: "/Website Images/guava(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/guava(Hero)/FB_IMG_1614582123664.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582130221.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582133488.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582146811.jpg"
      ],
      price: "$12.00",
      rating: 5
    },
    {
      title: "Dragon Fruit",
      image_default: "/Website Images/Dragon Fruit(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/Dragon Fruit(Hero)/PXL_20240225_063829675.jpg",
        "/Website Images/Dragon Fruit(Hero)/sad.webp",
        "/Website Images/Dragon Fruit(Hero)/safadfad.webp"
      ],
      price: "$15.00",
      rating: 4
    },
    {
      title: "Lemon",
      image_default: "/Website Images/lemon(Hero)/Hero.png",
      images_hover: [
        "/Website Images/lemon(Hero)/FB_IMG_1614582137402.jpg",
        "/Website Images/lemon(Hero)/IMG_20210426_165324_046.jpg",
        "/Website Images/lemon(Hero)/IMG-20210525-WA0004.jpg"
      ],
      price: "$8.00",
      rating: 5
    },
    {
      title: "Red Sandalwood",
      image_default: "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
      images_hover: [
        "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
        "/Website Images/Sandalwood(Hero)/Red Sandalwood.png",
        "/Website Images/Sandalwood(Hero)/tractor.jpeg"
      ],
      price: "$25.00",
      rating: 4
    },
    {
      title: "Chiku",
      image_default: "/Website Images/chiku (Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/chiku (Hero)/20210114_120925.jpg",
        "/Website Images/chiku (Hero)/chiku tree.jpg",
        "/Website Images/chiku (Hero)/chiku2.webp"
      ],
      price: "$10.00",
      rating: 5
    }
  ]

  // Auto-scroll between position 0 (cards 1-2-3-4) and position 1 (cards 2-3-4-5)
  useEffect(() => {
    const interval = setInterval(() => {
      if (swiperRef.current) {
        // Alternate between slide 0 and slide 1
        const nextSlide = currentSlideRef.current === 0 ? 1 : 0
        swiperRef.current.slideTo(nextSlide)
        currentSlideRef.current = nextSlide
      }
    }, 3000) // Change slide every 3 seconds

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative z-30 bg-transparent">
      <div className="w-full max-w-[1200px] mx-auto px-6 md:px-8 lg:px-12">
        {/* Carousel Container */}
        <div className="relative">
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper
            }}
            spaceBetween={16}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
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
            {products.map((product, index) => (
              <SwiperSlide key={index}>
                <div className="hero-scale mx-auto">
                  <ProductCard
                    title={product.title}
                    image={(product as any).image}
                    image_default={product.image_default}
                    images_hover={product.images_hover}
                    price={product.price}
                    rating={product.rating}
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
