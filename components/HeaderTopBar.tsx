'use client'

import { Phone, Mail, ChevronDown, Heart, ShoppingCart } from 'lucide-react'
import { useState } from 'react'

export default function HeaderTopBar() {
  const [showAccountDropdown, setShowAccountDropdown] = useState(false)

  return (
    <div className="bg-gray-900 text-white py-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left: Contact Info */}
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <Phone className="h-4 w-4" />
              <span>+123 456 7890</span>
            </div>
            <div className="flex items-center space-x-2 text-sm">
              <Mail className="h-4 w-4" />
              <span>info@oksingreen.com</span>
            </div>
          </div>

          {/* Right: User Utilities */}
          <div className="flex items-center space-x-6">
            {/* My Account Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                className="flex items-center space-x-1 text-sm hover:text-primary-400 transition-colors"
              >
                <span>My Account</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showAccountDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white text-gray-900 rounded-lg shadow-lg py-2 z-50">
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Login
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2 hover:bg-gray-100 text-sm"
                  >
                    Register
                  </a>
                </div>
              )}
            </div>

            {/* Wishlist */}
            <button className="flex items-center space-x-1 text-sm hover:text-primary-400 transition-colors">
              <Heart className="h-4 w-4" />
              <span>Wishlist</span>
            </button>

            {/* Checkout */}
            <button className="flex items-center space-x-1 text-sm hover:text-primary-400 transition-colors">
              <ShoppingCart className="h-4 w-4" />
              <span>Checkout</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

