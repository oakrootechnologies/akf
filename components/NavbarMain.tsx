'use client'

import { useState, useEffect } from 'react'
import { Search, User, ChevronDown, Leaf } from 'lucide-react'

export default function NavbarMain() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [showAccountDropdown, setShowAccountDropdown] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [showPagesDropdown, setShowPagesDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`w-full bg-black text-white py-4 transition-all duration-300 z-50 ${isScrolled ? 'sticky top-0 shadow-lg' : ''}`}>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo - Far Left */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-500 p-2 rounded-lg">
              <Leaf className="h-6 w-6 text-white" />
            </div>
            <a href="/" className="text-2xl font-bold text-white hover:text-primary-400 transition-colors">
              Oksingreen
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden lg:flex items-center space-x-6">
            <a href="/" className="hover:text-primary-400 transition-colors">Home</a>
            <a href="/about" className="hover:text-primary-400 transition-colors">About Us</a>
            <a href="#" className="hover:text-primary-400 transition-colors">Our Services</a>
            <div className="relative">
              <button
                onClick={() => setShowPagesDropdown(!showPagesDropdown)}
                className="flex items-center space-x-1 hover:text-primary-400 transition-colors"
              >
                <span>More pages</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {showPagesDropdown && (
                <div className="absolute left-0 mt-2 w-44 bg-white text-gray-900 rounded-lg shadow-lg py-2 z-50">
                  <a href="/contact" className="block px-4 py-2 hover:bg-gray-100 text-sm">Contact US</a>
                  <a href="/about" className="block px-4 py-2 hover:bg-gray-100 text-sm">About Us</a>
                  <a href="/blogs" className="block px-4 py-2 hover:bg-gray-100 text-sm">Blogs</a>
                </div>
              )}
            </div>
          </div>

          {/* Utility Icons - Far Right */}
          <div className="flex items-center space-x-4">
            {/* Search */}
            <div className="relative">
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="hover:text-primary-400 transition-colors"
                aria-label="Toggle search"
              >
                <Search className="h-6 w-6" />
              </button>
              {showSearch && (
                <form
                  onSubmit={(e) => {
                    e.preventDefault()
                    if (!query.trim()) return
                    const target = document.getElementById('tabbed-products')
                    if (target) {
                      target.scrollIntoView({ behavior: 'smooth' })
                    }
                    window.history.replaceState(null, '', `/?q=${encodeURIComponent(query.trim())}`)
                  }}
                  className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg p-2 flex items-center gap-2 w-64 z-[1000]"
                >
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="flex-1 px-3 py-2 text-gray-900 placeholder-gray-500 outline-none"
                  />
                  <button
                    type="submit"
                    className="px-3 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600"
                  >
                    Search
                  </button>
                </form>
              )}
            </div>

            {/* My Account Icon with Dropdown */}
            <div className="relative">
              <button
                onClick={() => setShowAccountDropdown(!showAccountDropdown)}
                className="hover:text-primary-400 transition-colors"
              >
                <User className="h-6 w-6" />
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

            {/* Cart removed as requested */}
          </div>
        </div>
      </div>
    </nav>
  )
}



