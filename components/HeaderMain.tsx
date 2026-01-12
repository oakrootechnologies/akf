'use client'

import { Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Leaf } from 'lucide-react'
import { useCart } from '@/hooks/useCart'
import CartDrawer from '@/components/CartDrawer'

export default function HeaderMain() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showCartDrawer, setShowCartDrawer] = useState(false)
  const { getTotalPrice, getTotalItems, isLoaded } = useCart()

  return (
    <div className="bg-green-50 border-b border-green-100 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-fit">
            <img 
              src="/logo/Agrikrishifarms.jpg"
              alt="Agrikrishi Farms Logo"
              className="w-10 h-10 object-contain"
            />
            <a href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              Agrikrishi Farms
            </a>
          </div>

          {/* Main Search Bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="flex items-center h-12">
              {/* Category Dropdown */}
              <select className="h-full px-4 bg-gray-100 text-gray-700 rounded-l-lg border-r border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 cursor-pointer">
                <option>All Categories</option>
                <option>Indoor Plants</option>
                <option>Fruit Trees</option>
                <option>Outdoor Plants</option>
                <option>Garden Tools</option>
              </select>

              {/* Search Input */}
              <input
                type="text"
                placeholder="Search here..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 h-full px-4 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />

              {/* Search Button */}
              <button className="h-full px-6 bg-primary-600 text-white rounded-r-lg hover:bg-primary-700 transition-colors flex items-center">
                <Search className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Shopping Cart */}
          <div className="relative min-w-fit">
            <button
              onClick={() => setShowCartDrawer(true)}
              className="flex items-center space-x-3 p-3 hover:bg-green-100 rounded-lg transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="h-8 w-8 text-primary-600" />
                {isLoaded && getTotalItems() > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {getTotalItems()}
                  </span>
                )}
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">My Cart</div>
                <div className="text-xs text-gray-600">
                  {isLoaded
                    ? `${getTotalItems()} item(s) - $${getTotalPrice().toFixed(2)}`
                    : 'Loading...'}
                </div>
              </div>
            </button>
          </div>
        </div>
      </div>
      <CartDrawer isOpen={showCartDrawer} onClose={() => setShowCartDrawer(false)} />
    </div>
  )
}

