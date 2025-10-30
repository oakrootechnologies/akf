'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'
import { Leaf } from 'lucide-react'

export default function TabbedProductGrid() {
  const [activeTab, setActiveTab] = useState('Horticulture')
  // Static grid, no pagination

  const horticultureProducts = [
    { title: "Guava", price: "$9.00", image: "/products/guava.jpg", rating: 5 },
    { title: "Orange", price: "$9.00", image: "/products/orange.jpg", rating: 4 },
    { title: "Mosambi", price: "$9.00", image: "/products/mosambi.jpg", rating: 5 },
    { title: "Dragon fruit", price: "$9.00", image: "/products/dragon fruit.jpg", rating: 4 },
    { title: "Pomegranate/Anaar", price: "$9.00", image: "/products/pomegranate.jpg", rating: 5 },
    { title: "Anjeer/Fig", price: "$9.00", image: "/products/fig.jpg", rating: 4 },
    { title: "Chiku", price: "$9.00", image: "/products/chiku.jpg", rating: 5 },
    { title: "Apple Bore", price: "$9.00", image: "/products/apple-bore.jpg", rating: 4 },
    { title: "Custard Apple", price: "$9.00", image: "/products/custard-apple.jpg", rating: 5 },
    { title: "Lemon", price: "$9.00", image: "/products/lemon.jpg", rating: 4 },
    { title: "Dragon Fruit", price: "$9.00", image: "/products/dragon-fruit.jpg", rating: 4 },
    { title: "Guava Premium", price: "$9.00", image: "/products/guava.jpg", rating: 5 }
  ]

  const agroforestryProducts = [
    { title: "African Mahogany", price: "$12.00", image: "/products/african-mahogany.jpg", rating: 5 },
    { title: "Red Sandalwood", price: "$12.00", image: "/products/red-sandalwood.jpg", rating: 4 },
    { title: "white Sandalwood", price: "$12.00", image: "/products/white-sandalwood.jpg", rating: 5 }
  ]

  const currentProducts = activeTab === 'Horticulture' ? horticultureProducts : agroforestryProducts
  const horticultureRow1 = horticultureProducts.slice(0, 6)
  const horticultureRow2 = horticultureProducts.slice(6, 12)

  const handleTabChange = (tab: string) => {
    setActiveTab(tab)
  }

  // Pagination removed per new spec

  return (
    <section id="tabbed-products" className="py-16 bg-white">
      <div className="w-full max-w-[1032px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Leaf Icon */}
          <div className="flex justify-center mb-4">
            <Leaf className="w-6 h-6 text-green-500" />
          </div>
          
          {/* Subtitle */}
          <p className="text-gray-500 text-sm uppercase tracking-wider mb-2">
            OURS PLANT HOUSE
          </p>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-black">
            Trending Products
          </h2>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-gray-100 rounded-full p-1">
            <button
              onClick={() => handleTabChange('Horticulture')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'Horticulture'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Horticulture
            </button>
            <button
              onClick={() => handleTabChange('Agroforestry')}
              className={`px-8 py-3 rounded-full font-semibold transition-all duration-300 ${
                activeTab === 'Agroforestry'
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Agroforestry
            </button>
          </div>
        </div>

        {/* Content */}
        {activeTab === 'Horticulture' ? (
          <div className="space-y-6">
            {/* Row 1 slider (4 visible, 6 total) */}
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={1}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3, spaceBetween: 1 },
                  1024: { slidesPerView: 4, spaceBetween: 1 },
                }}
                navigation={{ nextEl: '.tpgrid-row1-next', prevEl: '.tpgrid-row1-prev' }}
                className="tpgrid-row1-swiper"
              >
                {horticultureRow1.map((product, index) => (
                  <SwiperSlide key={`row1-${index}`}>
                    <div className="scale-90 md:scale-90 origin-top-left transition-shadow hover:shadow-2xl rounded-2xl">
                      <ProductCard
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        variant="compact"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-between mt-3">
                <button className="tpgrid-row1-prev px-4 py-1.5 rounded-full bg-gray-100 hover:bg-green-50 text-gray-700 text-sm">Prev</button>
                <button className="tpgrid-row1-next px-4 py-1.5 rounded-full bg-gray-100 hover:bg-green-50 text-gray-700 text-sm">Next</button>
              </div>
            </div>

            {/* Row 2 slider (4 visible, 6 total) */}
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={1}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3, spaceBetween: 1 },
                  1024: { slidesPerView: 4, spaceBetween: 1 },
                }}
                navigation={{ nextEl: '.tpgrid-row2-next', prevEl: '.tpgrid-row2-prev' }}
                className="tpgrid-row2-swiper"
              >
                {horticultureRow2.map((product, index) => (
                  <SwiperSlide key={`row2-${index}`}>
                    <div className="scale-90 md:scale-90 origin-top-left transition-shadow hover:shadow-2xl rounded-2xl">
                      <ProductCard
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        rating={product.rating}
                        variant="compact"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-between mt-3">
                <button className="tpgrid-row2-prev px-4 py-1.5 rounded-full bg-gray-100 hover:bg-green-50 text-gray-700 text-sm">Prev</button>
                <button className="tpgrid-row2-next px-4 py-1.5 rounded-full bg-gray-100 hover:bg-green-50 text-gray-700 text-sm">Next</button>
              </div>
            </div>
          </div>
        ) : (
          // Agroforestry stays as static grid
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-1 mb-6">
            {agroforestryProducts.map((product, index) => (
              <div key={`a-${index}`} className="h-full scale-90 md:scale-90 origin-top-left transition-shadow hover:shadow-2xl rounded-2xl">
                <ProductCard
                  title={product.title}
                  image={product.image}
                  price={product.price}
                  rating={product.rating}
                  variant="compact"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
