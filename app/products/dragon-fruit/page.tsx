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
    name: "Dragon Fruit",
    scientificName: "Selenicereus undatus",
    cultivationTime: "12-16 Months",
    images: [
      "/Website Images/Dragon Fruit(Hero)/Hero.jpg",
      "/Website Images/Dragon Fruit(Hero)/PXL_20240225_063829675.jpg",
      "/Website Images/Dragon Fruit(Hero)/sad.webp",
      "/Website Images/Dragon Fruit(Hero)/safadfad.webp"
    ],
    benefits: `Eating Benefits: The Antioxidant Superfood

Dragon Fruit is famously known as a "superfood" because it offers a rare combination of cellular protection and digestive health. Its most unique benefit comes from its vibrant red/pink color, which indicates the presence of betalains—powerful antioxidants that are also found in beets. These compounds fight oxidative stress and reduce the risk of chronic diseases like cancer and heart disease. Uniquely, it is one of the few fruits that contains a significant amount of Magnesium (approx. 18% of daily needs), which is vital for muscle function, energy levels, and bone health, making it a favorite recovery snack for athletes.

For digestion and metabolism, Dragon Fruit is exceptional. The flesh is speckled with tiny, edible black seeds that are rich in Omega-3 and Omega-9 fatty acids, which are "good fats" essential for a healthy heart and brain. The fruit is also packed with prebiotic fiber, which doesn't just aid bowel movements but specifically feeds the healthy bacteria (probiotics) in your gut, improving overall digestion and immunity. Additionally, because it has a low Glycemic Index (GI) and is fiber-rich, it helps regulate blood sugar levels, making it a safe and sweet treat for diabetics when consumed in moderation.

Plantation Benefits: The "Cactus Advantage"

For a farmer, Dragon Fruit is a game-changer because it is technically a cactus, meaning it is incredibly resilient to water scarcity. It requires about 80-90% less water than traditional crops like rice or sugarcane, making it the perfect "high-value crop" for drought-prone areas or regions with depleting groundwater. Unlike fruit trees that need years to mature, Dragon Fruit is a fast starter; it often begins flowering within 10 to 12 months of planting, and a well-managed farm can hit full commercial production by the third year.

Economically, it is a powerhouse with a long lifespan—a single planting can keep producing fruit for 20 to 25 years. The harvesting season is also prolonged, occurring in multiple "flushes" or waves from June to November (in India), providing farmers with a steady cash flow for 5-6 months of the year rather than a single lumpsum. While the initial investment is higher than other crops (due to the need for concrete poles and trellis structures to support the heavy vines), the recurring maintenance costs are very low since the plant has few natural pests and requires minimal fertilizers.`
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
