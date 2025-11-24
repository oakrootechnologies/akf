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
    name: "Red Sandalwood",
    scientificName: "Pterocarpus santalinus",
    cultivationTime: "12-14 Years",
    images: [
      "/Website Images/Sandalwood(Hero)/Red sandalwood (Hero).jpeg",
      "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
      "/Website Images/Sandalwood(Hero)/Red Sandalwood.png",
      "/Website Images/Sandalwood(Hero)/tractor.jpeg"
    ],
    benefits: `Eating Benefits: The Ayurvedic Blood Purifier

It is important to clarify that Red Sandalwood is not a fruit and is not "eaten" for calories or taste like an apple. Instead, the heartwood is ground into a powder and used as a potent Ayurvedic medicine. Internally, it is revered as a powerful blood purifier and cooling agent. Practitioners often prescribe weak decoctions (teas) of Raktachandan to treat digestive issues like dysentery and to reduce internal body heat, making it effective for managing fevers and protecting the liver from toxin-induced damage.

However, its most famous "consumption" is actually topical absorption. When applied as a paste, it is legendary for skin health. It effectively treats acne, reduces pigmentation, and soothes sunburns due to its anti-inflammatory properties. In traditional medicine, the paste is also applied to the forehead to cure headaches and migraines by cooling the nerves. Because of its deep red pigment (Santalin), it is also used as a natural food coloring agent in traditional dishes, adding a safe, natural red hue without the chemicals found in synthetic dyes.

Plantation Benefits: The "Red Gold" Investment

For a farmer, Red Sandalwood is widely considered the most valuable timber crop in the world, often earning the nickname "Red Gold." Unlike other timber that is sold by volume (cubic feet), Red Sandalwood is so dense and precious that it is sold by weight (per kg). The wood is in massive demand globally, particularly in China and Japan for making premium furniture, carvings, and musical instruments (like the Shamisen). A single mature tree with good heartwood formation can be worth lakhs of rupees, offering a retirement-fund-level return for the grower.

Agronomically, it is a "survivor crop." It is native to the harsh, rocky hills of South India, meaning it thrives in dry, rocky, and laterite soils where almost no other commercial crop can grow. It requires minimal water once established and is naturally resistant to most pests. However, patience is key; while the tree grows quickly, the valuable heartwood (the dark red center) takes 15 to 20 years to form fully. Additionally, farmers must be aware that this is a strictly regulated crop in India; cutting and selling it requires specific government permits and clearance from the Forest Department to prevent smuggling.`
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
