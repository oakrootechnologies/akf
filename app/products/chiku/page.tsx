'use client'

import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'

export default function ProductPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const product = {
    name: "Chiku",
    scientificName: "Manilkara zapota",
    cultivationTime: "14-18 Months",
    images: [
      "/Website Images/chiku (Hero)/Hero.jpg",
      "/Website Images/chiku (Hero)/20210114_120925.jpg",
      "/Website Images/chiku (Hero)/chiku tree.jpg",
      "/Website Images/chiku (Hero)/chiku2.webp"
    ],
    benefits: `Eating Benefits: The "Natural Energy Bar"

Chiku is often referred to as a "natural energy bar" because of its high fructose and sucrose content, which provides an instant energy boost. This makes it an excellent snack for athletes, pregnant women, or anyone needing a quick pick-me-up without resorting to processed sugars. Unlike many other sweet fruits, Chiku is incredibly rich in dietary fiber (5.3g per 100g), making it a mild natural laxative that effectively relieves constipation and protects the colon from harmful toxins.

Beyond energy, Chiku is a surprising source of bone-strengthening minerals. It is packed with Calcium, Phosphorus, and Iron, which are essential for maintaining bone density and preventing osteoporosis later in life. It also contains Tannins, a naturally occurring polyphenol that acts as an antiviral and anti-inflammatory agent, helping to soothe an irritated stomach or esophagus (gastritis). Additionally, the fruit is known for its "beauty benefits"—its vitamins E and A act as antioxidants that moisturize the skin from within and promote a healthy glow.

Plantation Benefits: The Low-Maintenance Asset

For a farmer, Chiku is one of the most "hassle-free" crops to cultivate. It is an extremely hardy tree that can tolerate high salinity and alkaline water, allowing it to thrive in coastal regions or areas with poor water quality where other fruit trees would die. Once established, the tree is highly drought-resistant and requires very little chemical intervention because its milky latex sap naturally deters most pests and insects.

Economically, Chiku provides a steady cash flow because, unlike mangoes which have a short season, Chiku trees flower and fruit almost year-round in tropical climates (with two main peak harvest seasons). The trees have a massive lifespan, often remaining commercially productive for 30 to 50 years. While traditional planting takes time to yield high volume, modern High-Density Planting (HDP)—planting trees at 5m x 5m spacing—allows farmers to fit more trees per acre, significantly increasing the yield per acre to 15–20 tons annually compared to the traditional 8–10 tons.`
  }

  return (
    <main className="min-h-screen bg-white">
      <NavbarMain />
      
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#81ba00] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Plant Dedicated Page
        </h1>

        <div className="mb-12">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden bg-[#5F7C7E]">
            <Swiper
              modules={[Pagination]}
              pagination={{ 
                clickable: true,
                bulletClass: 'swiper-pagination-bullet',
                bulletActiveClass: 'swiper-pagination-bullet-active'
              }}
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="h-full"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index}>
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          
          <div className="flex justify-center gap-2 mt-4">
            {product.images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === currentSlide ? 'bg-gray-800 w-8' : 'bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="mb-12 space-y-3">
          <p className="text-lg text-gray-900">
            <span className="font-semibold">Name-</span> {product.name}
          </p>
          <p className="text-lg text-gray-900">
            <span className="font-semibold">Scientific name-</span> {product.scientificName}
          </p>
          <p className="text-lg text-gray-900">
            <span className="font-semibold">Cultivation time-</span> {product.cultivationTime}
          </p>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Benefits
        </h2>

        <div className="border-2 border-gray-300 rounded-lg p-6 md:p-8 bg-white">
          <div className="prose prose-lg max-w-none">
            <div className="whitespace-pre-line text-gray-800 leading-relaxed text-base md:text-lg">
              {product.benefits}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}
