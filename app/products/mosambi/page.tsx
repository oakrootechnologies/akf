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
    name: "Mosambi",
    scientificName: "Citrus limetta",
    cultivationTime: "18-24 Months",
    images: [
      "/Website Images/Mosambi/malta-plant.jpg",
      "/Website Images/Mosambi/61ls5tQeriL._AC_SY350_QL15_.jpg",
      "/Website Images/Mosambi/PXL_20240719_084425693.MP.jpg"
    ],
    benefits: `Eating Benefits: Coolant and Digestive Aid

Mosambi is widely revered in tropical climates not just as a fruit, but as a natural "medical coolant." Its most famous benefit is its ability to treat dehydration and heatstroke; the fruit is packed with electrolytes and water that instantly rehydrate the body and cool the system, which is why it is the first recommendation for anyone recovering from fever or jaundice. Unlike lemons, Mosambi is low in acidity but still rich in Vitamin C (approx. 50mg per 100g), making it a gentle immunity booster that doesn't irritate the throat or stomach, even for those with acid reflux.

For digestion, Mosambi is a powerhouse. Its distinct aroma triggers the salivary glands to release digestive enzymes even before you take a bite. The high fiber content regulates bowel movements and is particularly effective in flushing out toxins and preventing constipation. It is also famously used to soothe peptic ulcers because its liminoids help neutralize the acidic environment of the stomach. Furthermore, regular consumption promotes healthy skin and hair; the antioxidants and vitamins reduce pigmentation and blemishes while strengthening hair follicles.

Plantation Benefits: A Stable, Long-Term Income Source

For a farmer, Mosambi is one of the most stable citrus crops to cultivate because it is highly adapted to Indian sub-tropical climates. It thrives in dry, hot regions where other fruits might wither, requiring distinct hot summers and cool winters to produce the sweetest fruit. The economic lifespan of a Mosambi tree is impressive—it remains commercially productive for 20 to 25 years. Once the orchard reaches maturity (around the 5th year), it provides a steady income with relatively predictable annual maintenance costs compared to more fragile crops like grapes or strawberries.

Commercially, the Mosambi tree is a heavy yielder. A well-maintained mature tree can produce 800 to 1,000 fruits (roughly 100-150 kg) per year. In many regions, farmers can induce flowering (a process called Bahar treatment) to harvest the crop at specific times when market prices are highest—typically aiming for the summer harvest when demand for juice is at its peak. Additionally, the gestation period (the 3-4 years before fruiting begins) is not "dead time" for the farmer; the wide spacing between young trees allows for intercropping with legumes, vegetables, or groundnuts, ensuring the land generates revenue even while the orchard is being established.`
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
