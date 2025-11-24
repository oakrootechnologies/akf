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
    name: "Lemon",
    scientificName: "Citrus limon",
    cultivationTime: "12-16 Months",
    images: [
      "/Website Images/lemon(Hero)/Hero.png",
      "/Website Images/lemon(Hero)/FB_IMG_1614582137402.jpg",
      "/Website Images/lemon(Hero)/IMG_20210426_165324_046.jpg",
      "/Website Images/lemon(Hero)/IMG-20210525-WA0004.jpg"
    ],
    benefits: `Eating Benefits: The Ultimate Detoxifier

Lemon is widely regarded as the ultimate "daily detox" fruit. Unlike most fruits that are eaten for calories, lemon is primarily consumed for its ability to cleanse the liver and flush out toxins. Drinking warm lemon water on an empty stomach is a global ritual because it kickstarts the digestive system, stimulates bile production, and balances the body's pH levels—interestingly, while lemon is acidic to the taste, it produces an alkalizing effect once metabolized, which helps reduce inflammation. It is also a potent preventative against kidney stones; the high citric acid content increases urine volume and pH, creating an environment where kidney stones are less likely to crystallize.

Nutrient-wise, lemon is a concentrated source of Vitamin C, acting as a frontline defender against colds, flu, and scurvy. Beyond immunity, this high Vitamin C content is essential for the absorption of Iron from plant-based foods; squeezing lemon over spinach or lentils significantly boosts the amount of iron your body absorbs. For skin health, the astringent properties of lemon help reduce oiliness and acne when applied topically, while eating it promotes collagen synthesis, leading to firmer, brighter skin. It is also a favorite among weight watchers because the pectin fiber (in the pulp) helps curb appetite, and its low-calorie nature makes it a guilt-free flavor enhancer.

Plantation Benefits: The "Daily Income" Crop

For a farmer, Lemon is unique because it can provide a continuous cash flow rather than a single annual lump sum. Unlike Mango or Apple Ber which have one distinct season, well-managed Lemon trees (especially varieties like Kagzi or Baramasi) can fruit multiple times a year, allowing farmers to harvest and sell produce almost every week during peak cycles. This "daily income" model helps cover operational costs effectively. The trees are also incredibly long-lived, with a commercial lifespan of 25 to 30 years, making the initial planting cost negligible over the long run.

From an agronomy perspective, Lemon is hardy and versatile. It thrives in High-Density Planting (HDP) setups (e.g., 10x10 feet), which can double the yield to 25-30 tons per acre compared to traditional spacing. The crop is also highly responsive to "Bahar Treatment" (water stress management). Clever farmers use this technique to skip the monsoon harvest (when prices are low, ~₹20/kg) and force the trees to fruit heavily in summer (April-June), when demand peaks and prices can soar to ₹100-150 per kg. Additionally, lemon acts as a natural fence; its thorny branches deter grazing animals, protecting the main field if planted on the perimeter.`
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
