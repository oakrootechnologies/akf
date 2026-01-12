'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Eye } from 'lucide-react'

interface ProductCardProps {
  title: string
  image?: string // Legacy support
  image_default?: string
  images_hover?: string[]
  price?: string
  originalPrice?: string // Inflated price (will be shown with strikethrough)
  sellingPrice?: string // Real selling price (shown as low)
  availability?: 'in_stock' | 'out_of_stock' | 'low_stock' // Availability status
  stock?: number // Stock quantity
  rating?: number
  variant?: 'default' | 'compact'
  slug?: string // Product slug for navigation
}

export default function ProductCard({
  title,
  image,
  image_default,
  images_hover = [],
  price, // Legacy prop, kept for compatibility but should be replaced by startingPrice
  originalPrice,
  sellingPrice,
  availability,
  stock,
  rating = 5,
  variant = 'default',
  slug,
  // New Props
  startingPrice,
  cropType,
  isHybrid,
  variants = []
}: ProductCardProps & {
  startingPrice?: number
  cropType?: string
  isHybrid?: boolean
  variants?: any[]
}) {
  const [isHovered, setIsHovered] = useState(false)

  // Support legacy 'image' prop or use new 'image_default'
  const defaultImage = image_default || image || ''

  // Determine stock status from variants if available, otherwise fallback
  const isSoldOut = variants.length > 0
    ? !variants.some(v => v.inStock)
    : availability === 'out_of_stock'

  const infoPadding = variant === 'compact' ? 'p-3' : 'p-4'
  const titleClasses = variant === 'compact' ? 'text-base' : 'text-xl'

  // Map product title to slug (Same legacy map + slug prop)
  const getProductSlug = (productTitle: string): string | null => {
    // ... (Keep existing map or simple return slug if available)
    // For now, prioritize the passed slug
    if (slug) return slug

    const slugMap: { [key: string]: string } = {
      'Guava': 'guava',
      'Orange': 'orange',
      'Mosambi': 'mosambi',
      'Dragon fruit': 'dragon-fruit',
      'Dragon Fruit': 'dragon-fruit',
      'Pomegranate/Anaar': 'pomegranate',
      'Pomegranate': 'pomegranate',
      'Anjeer/Fig': 'fig',
      'Fig': 'fig',
      'Chiku': 'chiku',
      'Apple Bore': 'apple-ber',
      'Apple Ber': 'apple-ber',
      'Custard Apple': 'custard-apple',
      'Lemon': 'lemon',
      'African Mahogany': 'mahogany',
      'Mahogany': 'mahogany',
      'Red Sandalwood': 'red-sandalwood',
      'white Sandalwood': 'white-sandalwood',
      'White Sandalwood': 'white-sandalwood'
    }
    return slugMap[productTitle] || null
  }

  const productSlug = getProductSlug(title)
  const productUrl = productSlug ? `/products/${productSlug}` : '#'
  const isRedSandalwood = title === 'Red Sandalwood'

  const CardContent = (
    <div
      className={`relative bg-white rounded-xl border border-gray-200 p-2 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group ${productSlug ? 'cursor-pointer' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 z-20 flex flex-col gap-1 items-start">
          {cropType && (
            <span className="bg-gray-800/80 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm">
              {cropType}
            </span>
          )}
          {isHybrid && (
            <span className="bg-primary-600/90 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded backdrop-blur-sm">
              F1 Hybrid
            </span>
          )}
        </div>

        {/* Sold Out Overlay */}
        {isSoldOut && (
          <div className="absolute inset-0 bg-white/70 z-30 flex items-center justify-center">
            <span className="bg-red-600 text-white font-bold px-3 py-1 text-sm rounded shadow-md transform -rotate-6">
              SOLD OUT
            </span>
          </div>
        )}

        {/* Default Image */}
        {defaultImage && (
          <img
            src={defaultImage}
            alt={title}
            className={`w-full h-full object-cover relative z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-300 ${isSoldOut ? 'grayscale' : ''}`}
            style={isRedSandalwood ? { transform: 'scale(1.25)' } : {}}
            loading="lazy"
            decoding="async"
            width={400}
            height={400}
          />
        )}

        {/* Hover Images */}
        {images_hover.map((hoverImage, index) => (
          <img
            key={index}
            src={hoverImage}
            alt={`${title} hover ${index + 1}`}
            className="absolute top-0 left-0 w-full h-full object-cover z-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
            style={isRedSandalwood ? { transform: 'scale(1.25)' } : {}}
            loading="lazy"
            decoding="async"
            width={400}
            height={400}
          />
        ))}

        {/* Quick View Icon */}
        {!isSoldOut && (
          <div
            className={`absolute inset-0 flex items-center justify-center transition-all duration-300 z-30 ${isHovered ? 'opacity-100' : 'opacity-0'
              }`}
          >
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
              <Eye className="w-5 h-5 text-gray-600 group-hover:text-green-500" />
            </div>
          </div>
        )}
      </div>

      {/* Product Info */}
      <div className={`${infoPadding} relative`}>
        <h3 className={`font-sans text-gray-800 ${titleClasses} mb-2 text-center line-clamp-2 min-h-[3rem] flex items-center justify-center`}>{title}</h3>

        {/* Price Section */}
        <div className="text-center space-y-1">
          {isSoldOut ? (
            <span className="text-red-500 font-bold text-sm uppercase">Out of Stock</span>
          ) : startingPrice ? (
            <div className="flex flex-col items-center">
              <span className="text-xs text-gray-500 mb-0.5">From</span>
              <span className={`font-bold ${variant === 'compact' ? 'text-lg' : 'text-xl'} text-primary-600`}>
                ₹{startingPrice}
              </span>
            </div>
          ) : (
            // Fallback to legacy price props if startingPrice not provided
            <div className="flex items-center justify-center gap-2">
              {price && <span className="font-bold text-primary-600">{price}</span>}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  if (productSlug) {
    return (
      <Link href={productUrl} className="block">
        {CardContent}
      </Link>
    )
  }

  return CardContent
}
