'use client'

import { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import ProductCard from './ProductCard'
import { fetchProducts } from '@/lib/products'
import { Product } from '@/models/Product'
import { Loader2 } from 'lucide-react'

// Mock Data for Fallback (Updated to Master-Variant Structure)
const FALLBACK_PRODUCTS: Product[] = [
  {
    title: "Bitter Gourd Batuk",
    slug: "bitter-gourd-batuk",
    isHybrid: true,
    cropCategory: "vegetable",
    cropType: "Bitter Gourd",
    images: [
      "/Website Images/guava(Hero)/Hero.jpg",
      "/Website Images/guava(Hero)/FB_IMG_1614582123664.jpg"
    ],
    specifications: [],
    variants: [
      { packSize: "10g", sku: "BG-10", price: 138, mrp: 315, inStock: true },
      { packSize: "50g", sku: "BG-50", price: 664, mrp: 1500, inStock: true }
    ],
    startingPrice: 138
  },
  {
    title: "Maize Angad-1217",
    slug: "maize-angad",
    isHybrid: true,
    cropCategory: "field_crop",
    cropType: "Maize",
    images: [
      "/Website Images/Dragon Fruit(Hero)/Hero.jpg",
      "/Website Images/Dragon Fruit(Hero)/PXL_20240225_063829675.jpg"
    ],
    specifications: [],
    variants: [
      { packSize: "1kg", sku: "MZ-1", price: 440, mrp: 995, inStock: false }
    ],
    startingPrice: 440
  },
  {
    title: "Tomato Abhinav",
    slug: "tomato-abhinav",
    isHybrid: true,
    cropCategory: "vegetable",
    cropType: "Tomato",
    images: [
      "/Website Images/Pomegranate/IMG-20230121-WA0004.jpg"
    ],
    specifications: [],
    variants: [
      { packSize: "10g", sku: "TM-10", price: 450, mrp: 800, inStock: true }
    ],
    startingPrice: 450
  },
  {
    title: "Coriander",
    slug: "coriander-op",
    isHybrid: false,
    cropCategory: "op_product",
    cropType: "Coriander",
    images: [
      "/Website Images/lemon(Hero)/Hero.png"
    ],
    specifications: [],
    variants: [
      { packSize: "500g", sku: "CR-500", price: 120, mrp: 200, inStock: true }
    ],
    startingPrice: 120
  }
] as unknown as Product[]

export default function TabbedProductGrid() {
  const [activeTab, setActiveTab] = useState<'vegetable' | 'field_crop' | 'op_product'>('vegetable')
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loadProducts()
  }, [])

  const loadProducts = async () => {
    setLoading(true)
    try {
      const fetchedProducts = await fetchProducts()
      if (fetchedProducts.length > 0) {
        setProducts(fetchedProducts)
      } else {
        setProducts(FALLBACK_PRODUCTS)
      }
    } catch (error) {
      console.error("Failed to load products", error)
      setProducts(FALLBACK_PRODUCTS)
    } finally {
      setLoading(false)
    }
  }

  // Filter logic
  const filteredProducts = products.filter(p => p.cropCategory === activeTab)

  const handleTabChange = (tab: 'vegetable' | 'field_crop' | 'op_product') => {
    setActiveTab(tab)
  }

  if (loading) {
    return (
      <section id="tabbed-products" className="py-8 md:py-12 lg:py-16 bg-white">
        <div className="w-full max-w-[1238px] mx-auto px-4">
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="tabbed-products" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="w-full max-w-[1238px] mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-8 md:mb-12">
          {/* Logo */}
          <div className="flex justify-center mb-3 md:mb-4">
            <img
              src="/logo/Agrikrishifarms.jpg"
              alt="Agrikrishi Farms Logo"
              className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 object-contain mx-auto"
            />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-black mb-2">
            Our Collection
          </h2>

          {/* Subtitle with decorative lines */}
          <div className="flex items-center justify-center gap-2 md:gap-3">
            <div className="h-px w-8 md:w-16 bg-black"></div>
            <p className="text-gray-600 text-xs md:text-sm uppercase tracking-wider font-medium">
              PREMIUM SEEDS
            </p>
            <div className="h-px w-8 md:w-16 bg-black"></div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-8 md:mb-12 overflow-x-auto"> // scrollable on mobile
          <div className="flex bg-gray-100 rounded-full p-1 gap-1">
            {[
              { id: 'vegetable', label: 'Vegetables' },
              { id: 'field_crop', label: 'Field Crops' },
              { id: 'op_product', label: 'OP Products' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id as any)}
                className={`px-6 md:px-8 py-2 md:py-3 rounded-full text-sm md:text-base font-semibold transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                    ? 'bg-primary-500 text-white shadow-md'
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-200'
                  }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="relative min-h-[400px]">
          {filteredProducts.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-16 text-gray-500">
              <p className="text-lg">No products found in this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
              {filteredProducts.map((product, index) => (
                <div key={product._id || index} className="transform hover:-translate-y-1 transition-transform duration-300">
                  <ProductCard
                    title={product.title}
                    image_default={product.images?.[0] || ''}
                    images_hover={product.images?.slice(1) || []}
                    startingPrice={product.startingPrice}
                    cropType={product.cropType}
                    isHybrid={product.isHybrid}
                    variants={product.variants}
                    slug={product.slug}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
