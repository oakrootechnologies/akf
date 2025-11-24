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
    name: "Apple Ber",
    scientificName: "Ziziphus mauritiana",
    cultivationTime: "8-12 months",
    images: [
      "/Website Images/Apple Ber/IMG-20210127-WA0009.jpg",
      "/Website Images/Apple Ber/images (1).jpeg",
      "/Website Images/Apple Ber/images (2).jpeg",
      "/Website Images/Apple Ber/images (4) (7).jpeg"
    ],
    benefits: `Eating Benefits: A Nutritional Powerhouse

Apple Ber is often celebrated as a "superfruit" because it packs a dense nutritional punch in a low-calorie package. Unlike traditional sweets or heavy snacks, Apple Ber is rich in Vitamin C—containing even more than oranges—which makes it an excellent natural booster for the immune system, helping the body fight off seasonal colds and infections. Beyond immunity, it is highly beneficial for digestive health; its high fiber content aids in regulating bowel movements and soothing the stomach, making it a traditional remedy for constipation and indigestion.

In addition to general wellness, Apple Ber contributes to long-term physical health. It is loaded with essential minerals like Calcium and Phosphorus, which are critical for maintaining strong teeth and bones, making it a great snack for growing children and the elderly. For those concerned with appearance and aging, the fruit's high antioxidant levels help combat free radicals, promoting glowing skin and delaying signs of aging. Furthermore, it contains natural compounds that have a mild sedative effect, which can help reduce anxiety and promote better sleep.

Plantation Benefits: A Farmer's "Cash Crop"

For farmers, Apple Ber represents a low-risk, high-reward investment compared to traditional fruit crops. The most significant advantage is the rapid return on investment. While mango or coconut trees can take years to become profitable, Apple Ber is precocious, often bearing fruit within just 6 to 9 months of planting. This allows farmers to generate cash flow in the very first year. The trees are also incredibly prolific; a single mature tree can yield between 50 kg to 100 kg of fruit annually, providing a substantial volume for sale.

Environmentally, the Apple Ber is a hardy, drought-tolerant (xerophytic) plant, making it perfect for arid regions like Rajasthan, Gujarat, and Maharashtra where water is scarce. It thrives in temperatures as high as 45°C and requires significantly less water than crops like pomegranate or grapes. This hardiness extends to costs as well; the plant grows well in various soil types—even rocky or saline ones—and requires minimal expenditure on pesticides and fertilizers. This combination of high yield, fast harvest, and low maintenance costs makes it one of the most economically viable crops for modern Indian farmers.`
  }

  return (
    <main className="min-h-screen bg-white">
      <NavbarMain />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 pt-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-[#81ba00] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Home</span>
        </Link>
      </div>

      {/* Page Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Plant Dedicated Page
        </h1>

        {/* Image Gallery Section */}
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
          
          {/* Carousel Dots Indicator */}
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

        {/* Plant Details Section */}
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

        {/* Benefits Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8">
          Benefits
        </h2>

        {/* Benefits Paragraph Box */}
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
