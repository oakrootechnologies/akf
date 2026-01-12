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
    name: "Mahogany",
    scientificName: "Swietenia",
    cultivationTime: "8-10 Years",
    images: [
      "/Website Images/Mahogany/IMG-20221214-WA0002.jpg",
      "/Website Images/Mahogany/AllFileRecovery_2025-02-27_01.45.50394.jpg",
      "/Website Images/Mahogany/IMG-20250702-WA0000.jpg",
      "/Website Images/Mahogany/PXL_20240108_040536088.jpg"
    ],
    benefits: `Eating Benefits: The Bitter Medicine ("Sky Fruit")

Unlike traditional fruits, Mahogany is not eaten for pleasure; its fruit—specifically the seed—is consumed strictly as a medicinal supplement. Known as "Sky Fruit" (because the fruit points upwards towards the sky), the seeds are extremely bitter and are famously used in traditional medicine to manage Diabetes. They are rich in saponins, which are believed to function like natural insulin, helping to regulate blood sugar levels. Additionally, the seeds contain flavonoids, which improve blood circulation and help lower high blood pressure (hypertension), making them a popular natural remedy for heart health.

Important Safety Warning: While popular in traditional remedies, "eating" Mahogany seeds comes with a serious caution. Recent medical studies have linked excessive consumption of Sky Fruit seeds to drug-induced liver injury. Because the compounds are so potent, they can be toxic to the liver if taken without strict dosage control. Therefore, it is rarely "eaten" as a snack but rather swallowed as a small, controlled dose (often in capsule or powder form) for specific ailments like constipation, menstrual pain, or skin allergies.

Plantation Benefits: The "Green Gold" Investment

For a farmer, Mahogany is often called "Green Gold" or an "FD (Fixed Deposit) in the Soil" because it is a high-value timber investment. Unlike fruit crops that give monthly income, Mahogany is a long-term asset that matures in 10 to 12 years, but the returns are massive. The wood is globally prized for its reddish-brown color, durability, and resistance to termites, making it a top choice for premium furniture, musical instruments, and boat building. A single mature tree can yield timber worth ₹15,000 to ₹25,000 (depending on girth), and with 400-500 trees per acre, the lump-sum return after a decade can be in the crores.

Agronomically, Mahogany is excellent for Agroforestry. In the first 3 to 4 years, when the trees are young and don't cast much shadow, farmers can easily intercrop vegetables, pulses, or medicinal herbs between the rows to generate steady income. The tree is hardy and low-maintenance once established, requiring little water compared to thirsty crops like sugarcane. Furthermore, planting Mahogany on farm boundaries acts as a natural windbreaker, protecting smaller crops from storm damage while securing the land's value for future generations.`
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
