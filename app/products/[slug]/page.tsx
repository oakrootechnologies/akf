// [OAKROOT COMMERCE ENGINE] Product Detail Page - Master-Variant Architecture
'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { ArrowLeft, Loader2, ShoppingCart, Check, X } from 'lucide-react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import { fetchProductBySlug } from '@/lib/products'
import { Product, ProductVariant } from '@/models/Product'
import { useCart } from '@/hooks/useCart'
import CartDrawer from '@/components/CartDrawer'

export default function ProductPage({ params }: { params: { slug: string } }) {
  const [product, setProduct] = useState<Product | null>(null)
  const [selectedVariant, setSelectedVariant] = useState<ProductVariant | null>(null)
  const [loading, setLoading] = useState(true)
  // const [currentSlide, setCurrentSlide] = useState(0) // Removed unused state if not strictly used for custom dots
  const [showCart, setShowCart] = useState(false)
  const { addToCart } = useCart()

  useEffect(() => {
    loadProduct()
  }, [params.slug])

  const loadProduct = async () => {
    setLoading(true)
    const fetchedProduct = await fetchProductBySlug(params.slug)
    setProduct(fetchedProduct)

    // Default to first variant if available
    if (fetchedProduct && fetchedProduct.variants && fetchedProduct.variants.length > 0) {
      // Sort by price (optional, but good practice)
      const sortedVariants = [...fetchedProduct.variants].sort((a, b) => a.price - b.price);
      setSelectedVariant(sortedVariants[0])
    }

    setLoading(false)
  }

  if (loading) {
    return (
      <main className="min-h-screen bg-white">
        <NavbarMain />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
        <Footer />
      </main>
    )
  }

  if (!product) {
    return (
      <main className="min-h-screen bg-white">
        <NavbarMain />
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/" className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700">
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
        <Footer />
      </main>
    )
  }

  // Combine main image with additional images
  // For the Master-Variant model, we rely mainly on product.images array. 
  // Fallback to legacy structure if needed, but the new API should populate product.images.
  const allImages = product.images && product.images.length > 0 ? product.images : []
  const activeVariant = selectedVariant || (product.variants && product.variants[0]) || null
  const isSoldOut = activeVariant ? !activeVariant.inStock : true

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

      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

          {/* LEFT COLUMN: Image Gallery */}
          <div className="space-y-4">
            <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-50 border border-gray-100 shadow-sm">
              {product.isHybrid && (
                <div className="absolute top-4 left-4 z-10 bg-primary-600 text-white text-xs font-bold px-3 py-1 rounded shadow-md backdrop-blur-sm bg-opacity-90">
                  F1 HYBRID
                </div>
              )}
              {product.cropType && (
                <div className="absolute top-4 right-4 z-10 bg-gray-900 text-white text-xs font-bold px-3 py-1 rounded shadow-md backdrop-blur-sm bg-opacity-80 uppercase">
                  {product.cropType}
                </div>
              )}

              <Swiper
                modules={[Pagination, Navigation]}
                pagination={{ clickable: true }}
                navigation={true}
                className="h-full w-full product-gallery-swiper"
              >
                {allImages.length > 0 ? (
                  allImages.map((img, idx) => (
                    <SwiperSlide key={idx}>
                      <img
                        src={img}
                        alt={`${product.title} - View ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </SwiperSlide>
                  ))
                ) : (
                  <SwiperSlide>
                    <div className="w-full h-full flex items-center justify-center text-gray-400">No Image Available</div>
                  </SwiperSlide>
                )}
              </Swiper>
            </div>
          </div>

          {/* RIGHT COLUMN: Product Details */}
          <div className="flex flex-col">
            <h1 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-2">
              {product.title}
            </h1>

            {/* Dynamic Price & SKU */}
            <div className="mb-6 flex items-baseline gap-4">
              {activeVariant ? (
                <>
                  <span className="text-3xl font-bold text-primary-600">
                    ₹{activeVariant.price}
                  </span>
                  {activeVariant.mrp && activeVariant.mrp > activeVariant.price && (
                    <span className="text-lg text-gray-400 line-through">
                      ₹{activeVariant.mrp}
                    </span>
                  )}
                  <div className="ml-auto text-sm font-mono text-gray-500 bg-gray-100 px-2 py-1 rounded">
                    SKU: {activeVariant.sku}
                  </div>
                </>
              ) : (
                <span className="text-xl text-gray-500">Price Unavailable</span>
              )}
            </div>

            {/* Pack Size Selector - Using Pills/Chips */}
            {product.variants && product.variants.length > 0 && (
              <div className="mb-8">
                <label className="block text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                  Select Pack Size
                </label>
                <div className="flex flex-wrap gap-3">
                  {product.variants.map((variant, idx) => {
                    const isSelected = selectedVariant?.sku === variant.sku;
                    return (
                      <button
                        key={variant.sku || idx}
                        onClick={() => setSelectedVariant(variant)}
                        className={`
                             px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 border-2
                             ${isSelected
                            ? 'bg-primary-50 border-primary-500 text-primary-700 shadow-sm ring-1 ring-primary-500'
                            : 'bg-white border-gray-200 text-gray-600 hover:border-gray-300 hover:bg-gray-50'
                          }
                           `}
                      >
                        {variant.packSize}
                      </button>
                    )
                  })}
                </div>
              </div>
            )}

            {/* Add to Cart Action */}
            <div className="mb-10">
              <button
                onClick={() => {
                  if (product && activeVariant) {
                    addToCart({
                      _id: product._id || '', // Master ID
                      name: `${product.title} (${activeVariant.packSize})`, // Variant-specific name
                      slug: product.slug || '',
                      price: activeVariant.price,
                      image_url: allImages[0] || '',
                      // You might want to pass variant ID here if your cart supports it
                    })
                    setShowCart(true)
                  }
                }}
                disabled={isSoldOut}
                className={`
                     w-full py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2 transition-all shadow-md
                     ${isSoldOut
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed border border-gray-200'
                    : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg active:scale-[0.98]'
                  }
                   `}
              >
                {isSoldOut ? (
                  <>
                    <X className="w-5 h-5" />
                    <span>Sold Out</span>
                  </>
                ) : (
                  <>
                    <ShoppingCart className="w-5 h-5" />
                    <span>Add to Cart - ₹{activeVariant?.price}</span>
                  </>
                )}
              </button>
              {/* Stock Status Text */}
              <div className="mt-3 text-center">
                {isSoldOut ? (
                  <span className="text-red-500 text-sm font-medium flex items-center justify-center gap-1">
                    This pack size is currently unavailable.
                  </span>
                ) : (
                  <span className="text-green-600 text-sm font-medium flex items-center justify-center gap-1">
                    <Check className="w-4 h-4" /> In Stock & Ready to Ship
                  </span>
                )}
              </div>
            </div>

            {/* ID Card Specs Table - Striped */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b pb-2">Technical Specifications</h3>
                <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
                  <table className="w-full text-sm text-left">
                    <tbody className="divide-y divide-gray-100">
                      {product.specifications.map((spec, idx) => (
                        <tr key={idx} className={idx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                          <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 border-r border-gray-100">
                            {spec.label}
                          </td>
                          <td className="px-4 py-3 text-gray-900">
                            {spec.value}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
      <CartDrawer isOpen={showCart} onClose={() => setShowCart(false)} />
    </main>
  )
}
