'use client'

import { useState } from 'react'
import { Eye } from 'lucide-react'

interface ProductCardProps {
  title: string
  image: string
  price?: string
  rating?: number
  variant?: 'default' | 'compact'
}

export default function ProductCard({ 
  title, 
  image, 
  price = '$10.00', 
  rating = 5,
  variant = 'default'
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        className={`text-sm ${
          i < rating ? 'text-yellow-400' : 'text-gray-300'
        }`}
      >
        ★
      </span>
    ))
  }

  const infoPadding = variant === 'compact' ? 'p-3' : 'p-4'
  const titleClasses = variant === 'compact' ? 'text-base' : 'text-xl'
  const addToCartPadding = variant === 'compact' ? 'py-2 px-3' : 'py-3 px-4'

  return (
    <div
      className={`relative bg-white rounded-xl border border-gray-200 p-2 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Product Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-300 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        
        {/* Overlay for hover effects */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300" />
        
        {/* Top-right icons removed globally (wishlist/compare) */}
        
        {/* Quick View Icon - Center */}
        <div
          className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
            isHovered ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
            <Eye className="w-5 h-5 text-gray-600 hover:text-green-500" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className={`${infoPadding} relative`}>
        <h3 className={`font-serif text-gray-800 ${titleClasses} mb-2 text-center`}>{title}</h3>
        
        {/* Add to Cart removed globally */}
      </div>
    </div>
  )
}
