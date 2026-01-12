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
    name: "Orange",
    scientificName: "Citrus sinensis",
    cultivationTime: "18-24 Months",
    images: [
      "/Website Images/Orange/orange1.jpg",
      "/Website Images/Orange/IMG-20210324-WA0012.jpg",
      "/Website Images/Orange/IMG-20210324-WA0059.jpg"
    ],
    benefits: `Eating Benefits: Daily Immunity and Vitality

Oranges are one of the most popular fruits globally, primarily prized as a supreme immunity booster. A single medium-sized orange provides nearly 100% of the daily recommended intake of Vitamin C, which is essential for stimulating the production of white blood cells to fight infections, colds, and flu. Beyond immunity, oranges are excellent for heart health; they contain flavonoids like hesperidin and are a good source of potassium, both of which help lower blood pressure and reduce bad cholesterol levels, thereby decreasing the risk of cardiovascular diseases.

In addition to internal health, oranges offer visible benefits for the body. The high Vitamin C content is crucial for collagen production, which maintains skin elasticity, reduces wrinkles, and protects against sun damage. For the digestive system, the fruit is rich in soluble fiber (pectin), which aids in smoother bowel movements, prevents constipation, and keeps the gut microbiome healthy. Furthermore, consuming oranges or fresh orange juice helps prevent the formation of kidney stones because they are rich in citrates, which prevent calcium deposits from crystallizing in the kidneys.

Plantation Benefits: High Demand and Long-Term Asset

For a farmer, an orange orchard is a long-term asset that offers stability and high market demand. Unlike seasonal vegetable crops that need replanting every few months, orange trees are perennial and can remain commercially productive for 50 to 60 years. This longevity means that once the orchard is established, the recurring cost of planting is eliminated, allowing the farmer to focus purely on maintenance and harvesting. Commercially, the crop has dual marketability: high-quality fruits are sold at premium prices in fresh markets, while smaller or blemished fruits are in constant demand by the juice and processing industry, ensuring minimal wastage.

Environmentally and economically, orange farming is highly efficient in the right climate. The trees are excellent for intercropping during their early non-fruiting years; farmers can grow pulses, vegetables, or fodder between the rows to generate income while the trees mature. Modern High-Density Planting techniques have further revolutionized orange farming, allowing farmers to plant more trees per acre (up to 400+), which significantly increases the yield per acre—often reaching 15 to 20 tons annually. Additionally, orange blossoms are rich in nectar, making the orchard a haven for honeybees, which can provide an additional revenue stream through apiculture (beekeeping).`
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
