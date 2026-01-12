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
    name: "Custard Apple",
    scientificName: "Annona squamosa",
    cultivationTime: "12-14 Months",
    images: [
      "/Website Images/Custard Apple/IMG-20210127-WA0012.jpg",
      "/Website Images/Custard Apple/PXL_20240923_052956716.jpg",
      "/Website Images/Custard Apple/sfafasdf.jpg"
    ],
    benefits: `Eating Benefits: The "Dairy-Free" Cream

Custard Apple is often described as nature's "dairy-free ice cream" due to its creamy, granular texture and intense sweetness. It is a powerhouse of instant energy, rich in natural sugars (glucose and fructose) that provide a quick boost without the crash of processed sweets, making it a favorite for athletes and active children. Unlike many sweet fruits, it has a Low Glycemic Index (GI) of 54, meaning it releases sugar slowly into the blood, making it safe for diabetics when eaten in moderation.

For health, Sitaphal is exceptionally high in Magnesium, a mineral vital for relaxing muscles and preventing heart attacks. It balances the body's water levels and removes acids from the joints, making it a traditional remedy for arthritis and rheumatism. It is also one of the best fruits for expectant mothers; rich in copper and iron, it helps form hemoglobin to fight anemia, and its Vitamin B6 content is famously known to reduce morning sickness and nausea. Furthermore, the fruit acts as a natural coolant, reducing body heat and acidity, while the high fiber content aids digestion and adds bulk to the stool.

Plantation Benefits: The "Dry Land Gold"

For a farmer, Custard Apple is known as "Dry Land Gold" because it turns barren, rocky land into a profitable orchard. It is a xerophytic (drought-loving) crop that thrives in arid regions with poor soil depth where mango or banana would fail. In fact, the tree prefers a "stress period" of dry heat in summer to shed its leaves, which naturally prepares it for a heavy flowering flush once the rains arrive. This natural cycle means it requires significantly less water and almost no expensive chemical fertilizers compared to other fruit crops.

The game-changer in recent years has been the introduction of Hybrid Varieties like NMK-1 (Golden). Traditional Sitaphal had many seeds and turned black quickly, but these new varieties have fewer seeds, more pulp, and a skin that stays golden-green for days, allowing for long-distance transport. A well-managed high-density farm (planted at 10x8 feet) can yield 5 to 8 tons per acre within 3 years. Additionally, the crop has a massive demand in the processing industry (for ice creams and Basundi), ensuring that even smaller or blemished fruits are sold for pulp extraction rather than being wasted.`
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
