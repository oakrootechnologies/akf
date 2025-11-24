'use client'

import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'

export default function TabbedProductGrid() {
  const [activeTab, setActiveTab] = useState('Horticulture')
  // Static grid, no pagination

  const horticultureProducts = [
    { 
      title: "Guava", 
      price: "$9.00", 
      image_default: "/Website Images/guava(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/guava(Hero)/FB_IMG_1614582123664.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582130221.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582133488.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582146811.jpg"
      ],
      rating: 5 
    },
    { 
      title: "Orange", 
      price: "$9.00", 
      image_default: "/Website Images/Orange/orange1.jpg",
      images_hover: [
        "/Website Images/Orange/IMG-20210324-WA0012.jpg",
        "/Website Images/Orange/IMG-20210324-WA0059.jpg",
        "/Website Images/Orange/orange 3.webp"
      ],
      rating: 4 
    },
    { 
      title: "Mosambi", 
      price: "$9.00", 
      image_default: "/Website Images/Mosambi/61ls5tQeriL._AC_SY350_QL15_.jpg",
      images_hover: [
        "/Website Images/Mosambi/malta-plant.jpg",
        "/Website Images/Mosambi/Lemon.png",
        "/Website Images/Mosambi/PXL_20240719_084425693.MP.jpg"
      ],
      rating: 5 
    },
    { 
      title: "Dragon fruit", 
      price: "$9.00", 
      image_default: "/Website Images/Dragon Fruit(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/Dragon Fruit(Hero)/PXL_20240225_063829675.jpg",
        "/Website Images/Dragon Fruit(Hero)/sad.webp",
        "/Website Images/Dragon Fruit(Hero)/safadfad.webp"
      ],
      rating: 4 
    },
    { 
      title: "Pomegranate/Anaar", 
      price: "$9.00", 
      image_default: "/Website Images/Pomegranate/IMG-20230121-WA0004.jpg",
      images_hover: [
        "/Website Images/Pomegranate/IMG-20230121-WA0037.jpg",
        "/Website Images/Pomegranate/IMG-20230121-WA0059.jpg",
        "/Website Images/Pomegranate/IMG-20230121-WA0060.jpg",
        "/Website Images/Pomegranate/Screenshot_20250721-214849.png"
      ],
      rating: 5 
    },
    { 
      title: "Anjeer/Fig", 
      price: "$9.00", 
      image_default: "/Website Images/Fig/arawaliphotography_1706117948354770.jpg",
      images_hover: [
        "/Website Images/Fig/arawaliphotography_1706117948354887.jpg",
        "/Website Images/Fig/PXL_20250618_043810764.jpg",
        "/Website Images/Fig/PXL_20250618_043828155.jpg"
      ],
      rating: 4 
    },
    { 
      title: "Chiku", 
      price: "$9.00", 
      image_default: "/Website Images/chiku (Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/chiku (Hero)/20210114_120925.jpg",
        "/Website Images/chiku (Hero)/chiku tree.jpg",
        "/Website Images/chiku (Hero)/chiku2.webp"
      ],
      rating: 5 
    },
    { 
      title: "Apple Bore", 
      price: "$9.00", 
      image_default: "/Website Images/Apple Ber/IMG-20210127-WA0009.jpg",
      images_hover: [
        "/Website Images/Apple Ber/images (1).jpeg",
        "/Website Images/Apple Ber/images (2).jpeg",
        "/Website Images/Apple Ber/images (4) (7).jpeg"
      ],
      rating: 4 
    },
    { 
      title: "Custard Apple", 
      price: "$9.00", 
      image_default: "/Website Images/Custard Apple/IMG-20210127-WA0012.jpg",
      images_hover: [
        "/Website Images/Custard Apple/PXL_20240923_052956716.jpg",
        "/Website Images/Custard Apple/sfafasdf.jpg"
      ],
      rating: 5 
    },
    { 
      title: "Lemon", 
      price: "$9.00", 
      image_default: "/Website Images/lemon(Hero)/Hero.png",
      images_hover: [
        "/Website Images/lemon(Hero)/FB_IMG_1614582137402.jpg",
        "/Website Images/lemon(Hero)/IMG_20210426_165324_046.jpg",
        "/Website Images/lemon(Hero)/IMG-20210525-WA0004.jpg"
      ],
      rating: 4 
    },
    { 
      title: "Dragon Fruit", 
      price: "$9.00", 
      image_default: "/Website Images/Dragon Fruit(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/Dragon Fruit(Hero)/PXL_20240225_063829675.jpg",
        "/Website Images/Dragon Fruit(Hero)/sad.webp",
        "/Website Images/Dragon Fruit(Hero)/safadfad.webp"
      ],
      rating: 4 
    },
    { 
      title: "Guava Premium", 
      price: "$9.00", 
      image_default: "/Website Images/guava(Hero)/Hero.jpg",
      images_hover: [
        "/Website Images/guava(Hero)/FB_IMG_1614582123664.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582130221.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582133488.jpg",
        "/Website Images/guava(Hero)/FB_IMG_1614582146811.jpg"
      ],
      rating: 5 
    }
  ]

  const agroforestryProducts = [
    { 
      title: "African Mahogany", 
      price: "$12.00", 
      image_default: "/Website Images/Mahogany/IMG-20221214-WA0002.jpg",
      images_hover: [
        "/Website Images/Mahogany/AllFileRecovery_2025-02-27_01.45.50394.jpg",
        "/Website Images/Mahogany/IMG-20250702-WA0000.jpg",
        "/Website Images/Mahogany/PXL_20240108_040536088.jpg"
      ],
      rating: 5 
    },
    { 
      title: "Red Sandalwood", 
      price: "$12.00", 
      image_default: "/Website Images/Sandalwood(Hero)/Red sandalwood (Hero).jpeg",
      images_hover: [
        "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
        "/Website Images/Sandalwood(Hero)/Red Sandalwood.png",
        "/Website Images/Sandalwood(Hero)/tractor.jpeg"
      ],
      rating: 4 
    },
    { 
      title: "white Sandalwood", 
      price: "$12.00", 
      image_default: "/Website Images/Sandalwood(Hero)/white-sandalwood.jpg",
      images_hover: [
        "/Website Images/Sandalwood(Hero)/White Sandal wood 1.webp",
        "/Website Images/Sandalwood(Hero)/White Sandal wood.webp"
      ],
      rating: 5 
    }
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
      <div className="w-full max-w-[1238px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-4">
            <img 
              src="/logo/instaLOGO.png" 
              alt="Oksingreen Logo" 
              className="w-16 h-16 md:w-20 md:h-20 object-contain"
            />
          </div>
          
          {/* Main Title */}
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-black mb-2">
            Trending Products
          </h2>
          
          {/* Subtitle with decorative lines */}
          <div className="flex items-center justify-center gap-3">
            <div className="h-px w-16 bg-black"></div>
            <p className="text-gray-600 text-sm uppercase tracking-wider font-medium">
              OURS PLANT HOUSE
            </p>
            <div className="h-px w-16 bg-black"></div>
          </div>
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
                        image={(product as any).image}
                        image_default={product.image_default}
                        images_hover={product.images_hover}
                        price={product.price}
                        rating={product.rating}
                        variant="compact"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center items-center gap-6 mt-3">
                <button className="tpgrid-row1-prev text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                  <span>←</span>
                  <span className="uppercase font-medium relative">
                    PREV
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                  </span>
                </button>
                <button className="tpgrid-row1-next text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                  <span className="uppercase font-medium relative">
                    NEXT
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                  </span>
                  <span>→</span>
                </button>
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
                        image={(product as any).image}
                        image_default={product.image_default}
                        images_hover={product.images_hover}
                        price={product.price}
                        rating={product.rating}
                        variant="compact"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              <div className="flex justify-center items-center gap-6 mt-3">
                <button className="tpgrid-row2-prev text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                  <span>←</span>
                  <span className="uppercase font-medium relative">
                    PREV
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                  </span>
                </button>
                <button className="tpgrid-row2-next text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                  <span className="uppercase font-medium relative">
                    NEXT
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                  </span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          // Agroforestry carousel (same design as Horticulture)
          <div className="space-y-6">
            <div className="relative">
              <Swiper
                modules={[Navigation]}
                spaceBetween={1}
                slidesPerView={2}
                breakpoints={{
                  640: { slidesPerView: 3, spaceBetween: 1 },
                  1024: { slidesPerView: 4, spaceBetween: 1 },
                }}
                navigation={{ nextEl: '.tpgrid-agro-next', prevEl: '.tpgrid-agro-prev' }}
                className="tpgrid-agro-swiper"
              >
            {agroforestryProducts.map((product, index) => (
                <SwiperSlide key={`agro-${index}`}>
                  <div className="scale-90 md:scale-90 origin-top-left transition-shadow hover:shadow-2xl rounded-2xl">
                <ProductCard
                  title={product.title}
                  image={(product as any).image}
                  image_default={product.image_default}
                  images_hover={product.images_hover}
                  price={product.price}
                  rating={product.rating}
                  variant="compact"
                />
              </div>
                </SwiperSlide>
            ))}
              </Swiper>
              <div className="flex justify-center items-center gap-6 mt-3">
                <button className="tpgrid-agro-prev text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                  <span>←</span>
                  <span className="uppercase font-medium relative">
                    PREV
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                  </span>
                </button>
                <button className="tpgrid-agro-next text-gray-600 hover:text-gray-800 transition-colors flex items-center gap-1">
                  <span className="uppercase font-medium relative">
                    NEXT
                    <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-black"></span>
                  </span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
