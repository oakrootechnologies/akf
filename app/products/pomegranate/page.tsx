'use client'

import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { ArrowLeft } from 'lucide-react'
import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function ProductPage() {
  const [currentSlide, setCurrentSlide] = useState(0)
  
  const product = {
    name: "Pomegranate",
    scientificName: "Punica granatum",
    cultivationTime: "10-14 Months",
    images: [
      "/Website Images/Pomegranate/IMG-20230121-WA0004.jpg",
      "/Website Images/Pomegranate/IMG-20230121-WA0037.jpg",
      "/Website Images/Pomegranate/IMG-20230121-WA0059.jpg",
      "/Website Images/Pomegranate/IMG-20230121-WA0060.jpg"
    ],
    benefits: `Eating Benefits: The "Heart-Healthy" Jewel

Pomegranate is globally revered not just as a fruit, but as a medicinal powerhouse, largely due to its incredible impact on heart health. It is rich in punicalagins, a unique type of antioxidant found almost exclusively in this fruit (and its peel), which is three times more potent than green tea or red wine. These compounds actively scrub arteries to remove plaque and prevent the oxidation of "bad" LDL cholesterol, significantly lowering the risk of blockages and heart attacks. Additionally, the seeds contain punicic acid, a rare Omega-5 fatty acid that helps reduce triglycerides and blood pressure.

Beyond the heart, Pomegranate is a champion for blood health. It is rich in iron, which helps increase hemoglobin levels, making it a standard dietary recommendation for fighting anemia and fatigue. The fruit also possesses strong anti-inflammatory properties; regular consumption has been linked to reduced joint pain in arthritis sufferers and improved memory retention in older adults. For men, it is particularly beneficial as studies suggest it supports prostate health and improves blood flow.

Plantation Benefits: The High-Value Export Crop

For a farmer, Pomegranate is a "high-value" asset because it has immense export potential. Varieties like the Bhagwa (known for its glossy, saffron-red skin) are in huge demand across Europe and the Middle East, often fetching premium rates that far exceed local market prices. Unlike perishable soft fruits, pomegranates have a thick, leathery skin that acts as a natural shield, giving them an excellent shelf life and making them easy to store and transport over long distances without damage.

Agronomically, the Pomegranate tree is a survivor. It is a drought-tolerant crop that thrives in semi-arid regions with hot summers and cool winters (like Maharashtra, Gujarat, and Karnataka). It requires significantly less water than sugarcane or bananas and can grow in shallow or rocky soils where other crops struggle. Farmers can also utilize "Crop Regulation" (Bahar Treatment) to control the harvest timing. By withholding water and pruning at specific times, farmers can force the trees to fruit during months when the market supply is low, maximizing their profit per acre. A well-managed high-density orchard can yield 10 to 12 tons per acre, providing a substantial annual income for 20–25 years.`
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
          {product.name}
        </h1>

        <div className="mb-12">
          <div className="relative w-[80%] mx-auto aspect-[16/9] rounded-2xl overflow-hidden bg-[#5F7C7E] flex items-center justify-center">
            <Swiper
              onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
              className="h-full w-full"
            >
              {product.images.map((image, index) => (
                <SwiperSlide key={index} className="flex items-center justify-center">
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

        <div className="border-2 border-[#81ba00] rounded-lg p-6 md:p-8 bg-white">
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
