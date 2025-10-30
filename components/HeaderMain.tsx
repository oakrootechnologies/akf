'use client'

import { Search, ShoppingCart } from 'lucide-react'
import { useState } from 'react'
import { Leaf } from 'lucide-react'

export default function HeaderMain() {
  const [searchQuery, setSearchQuery] = useState('')
  const [showCartDropdown, setShowCartDropdown] = useState(false)

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center space-x-2 min-w-fit">
            <div className="bg-primary-600 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <a href="/" className="text-2xl font-bold text-gray-900 hover:text-primary-600 transition-colors">
              Oksingreen
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
              onClick={() => setShowCartDropdown(!showCartDropdown)}
              className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
            >
              <div className="relative">
                <ShoppingCart className="h-8 w-8 text-primary-600" />
              </div>
              <div className="text-left">
                <div className="text-sm font-semibold text-gray-900">My Cart</div>
                <div className="text-xs text-gray-600">0 item(s) - $0.00</div>
              </div>
            </button>

            {/* Cart Dropdown */}
            {showCartDropdown && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 z-50 p-4">
                <div className="text-center py-8">
                  <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-3" />
                  <p className="text-gray-600">Your cart is empty</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

