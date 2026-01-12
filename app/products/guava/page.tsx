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
    name: "Guava",
    scientificName: "Psidium guajava",
    cultivationTime: "8-12 Months",
    images: [
      "/Website Images/guava(Hero)/Hero.jpg",
      "/Website Images/guava(Hero)/FB_IMG_1614582123664.jpg",
      "/Website Images/guava(Hero)/FB_IMG_1614582130221.jpg",
      "/Website Images/guava(Hero)/FB_IMG_1614582133488.jpg"
    ],
    benefits: `Eating Benefits: The "Apple of the Tropics"

Guava is often called a "superfruit" because it is remarkably nutrient-dense while remaining affordable. Its standout feature is its massive Vitamin C content—a single guava contains 4 times more Vitamin C than an orange. This makes it one of the most potent natural immunity boosters available, helping the body repair cells and fight off infections. Uniquely, guava is one of the few fruits with a low Glycemic Index (GI), making it highly recommended for diabetics; its complex carbohydrates and fiber prevent blood sugar spikes, unlike mangoes or bananas.

For digestive health, guava is a powerhouse. The fruit, eaten with its seeds, is incredibly rich in dietary fiber, which serves as a natural laxative to treat constipation and keeps the gut microbiome healthy. Interestingly, the leaves are just as valuable as the fruit; brewing young guava leaves into a tea is a traditional remedy that effectively stops diarrhea and reduces menstrual cramps. Additionally, the fruit is rich in Potassium and Sodium, which act as electrolytes to regulate blood pressure and support heart health by balancing the effects of salt in the diet.

Plantation Benefits: High Yield and Flexibility

For a farmer, Guava is often considered the "insurance crop" because it is incredibly resilient and guarantees returns even in tough conditions. It is a hardy plant that tolerates high salinity and alkaline soils (up to pH 8.5) where most other fruit crops would fail. It is also drought-tolerant once established, requiring far less water than citrus fruits or bananas. Commercially, the biggest advantage is the ability to control when the tree fruits. Through a technique called "Crop Regulation" or "Bahar Treatment," farmers can skip the rainy season crop (which is often infested with fruit flies) and induce the tree to produce a heavy bumper crop in winter, when the fruit is sweeter and market prices are higher.

Financially, Guava has been revolutionized by "Meadow Orcharding" (Ultra-High Density Planting). Traditionally, farmers planted 100 trees per acre, but with this modern method, they can plant up to 1,000 to 2,000 dwarf trees per acre. This technique keeps the trees small (like bushes), making harvesting easy without ladders, and triples the yield per acre. Furthermore, varieties like the VNR Bihi (Jumbo Guava) have emerged, producing fruits that weigh up to 1kg each, fetching premium prices in export markets and offering returns that rival more expensive crops like apple or pomegranate.`
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
