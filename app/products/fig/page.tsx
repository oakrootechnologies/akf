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
    name: "Fig",
    scientificName: "Ficus carica",
    cultivationTime: "10-14 Months",
    images: [
      "/Website Images/Fig/arawaliphotography_1706117948354770.jpg",
      "/Website Images/Fig/arawaliphotography_1706117948354887.jpg",
      "/Website Images/Fig/PXL_20250618_043810764.jpg",
      "/Website Images/Fig/PXL_20250618_043828155.jpg"
    ],
    benefits: `Eating Benefits: The "Mineral King"

Figs are often crowned the "Mineral King" of fruits because they contain one of the highest concentrations of Calcium and Iron found in the plant kingdom. This makes them indispensable for bone health, serving as a fantastic natural supplement for growing children and elderly people at risk of osteoporosis. Beyond bones, their high iron content is crucial for fighting anemia and fatigue, which is why soaked dry figs are a traditional morning remedy for raising hemoglobin levels.

For digestive health, Anjeer is legendary. It is incredibly rich in both soluble and insoluble fiber, acting as a gentle but effective natural laxative that resolves chronic constipation and improves overall gut health. The seeds add a unique crunch and contribute to this cleansing effect. Furthermore, figs are excellent for heart health; they are loaded with Potassium while being low in Sodium, a combination that helps lower high blood pressure. They also contain pectin, a soluble fiber that acts like a sponge to mop up excess cholesterol from the blood system.

Plantation Benefits: Fast Returns and Processing Value

For a farmer, Fig cultivation is attractive because it offers perhaps the fastest Return on Investment (ROI) of almost any fruit tree. Unlike mangoes that take years, a tissue-culture or cutting-grown Fig plant can start bearing fruit within just 5 to 6 months of planting. It is a drought-hardy crop that thrives in semi-arid regions (like Pune and Nashik in India) and actually prefers dry weather during fruiting to prevent fungal attacks.

The most distinct commercial advantage of Fig farming is its "Value Addition" potential. Fresh figs have a very short shelf life (24-48 hours), which can be risky. However, unlike other fruits where spoilage means total loss, figs can be easily dried (dehydrated). Dried Anjeer commands a much higher price in the market and has a shelf life of over a year, allowing farmers to store their produce and sell it only when market rates are favorable. This dual-market ability (Fresh vs. Dried) acts as a financial safety net for the grower.`
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
