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
    name: "White Sandalwood",
    scientificName: "Santalum album",
    cultivationTime: "12-14 Years",
    images: [
      "/Website Images/Sandalwood(Hero)/white-sandalwood.jpg",
      "/Website Images/Sandalwood(Hero)/White Sandal wood 1.webp",
      "/Website Images/Sandalwood(Hero)/White Sandal wood.webp"
    ],
    benefits: `Eating Benefits: The Cooling Elixir

White Sandalwood is not "eaten" like a fruit, but its heartwood and essential oil are consumable medicinal products in Ayurveda and Unani medicine. The edible-grade Sandalwood Oil is famous for its potent diuretic and antiseptic properties; just a few drops are traditionally prescribed to treat urinary tract infections (UTIs) and gastric irritability. It is considered the ultimate internal "coolant" (Sheetal), used to lower body temperature during high fevers or heatstroke.

Beyond internal medicine, it is a staple in "edible beauty." The paste made by rubbing the wood on a stone is applied to the skin to clear acne, blemishes, and prickly heat, promoting a flawless complexion. Unlike Red Sandalwood, White Sandalwood is intensely fragrant. This aroma itself is therapeutic; inhaling it or consuming traces of it in traditional syrups (like Sherbet) acts as a nervine tonic, reducing anxiety, stress, and insomnia. In the food industry, high-grade sandalwood oil is even used as a natural flavoring agent in sweets and chewing gums (approved by food safety authorities in minimal amounts).

Plantation Benefits: The "Liquid Gold"

For a farmer, White Sandalwood is arguably the most lucrative legal crop in existence, often called "Liquid Gold" because the oil extracted from the heartwood is one of the most expensive essential oils in the world. A single mature tree (after 12-15 years) can yield heartwood worth ₹50,000 to ₹1,00,000, depending on the oil content. The demand is insatiable—driven by the global perfume industry, cosmetics, and religious rituals—meaning there is never a shortage of buyers.

However, growing it comes with a unique biological twist: White Sandalwood is a Hemiparasite. This means it cannot grow alone; its roots must attach to the roots of a "Host Plant" (like Neem, Casuarina, or Pigeon Pea) to suck nitrogen and nutrients. This necessitates a mixed-farming model. Farmers must plant host trees alongside the Sandalwood, which naturally creates a diverse, forest-like ecosystem. While this adds a layer of management complexity, the payoff is immense. Unlike Red Sandalwood, which is valued only for the wood, White Sandalwood offers double value: the wood for carving and the oil for fragrance.`
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
