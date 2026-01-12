'use client'

import { useState, useEffect, useRef } from 'react'
import { Search, ChevronDown, Menu, X } from 'lucide-react'
import { useRouter } from 'next/navigation'

// Product list with names and slugs
const products = [
  { name: 'Apple Ber', slug: 'apple-ber' },
  { name: 'Orange', slug: 'orange' },
  { name: 'Mosambi', slug: 'mosambi' },
  { name: 'Dragon Fruit', slug: 'dragon-fruit' },
  { name: 'Guava', slug: 'guava' },
  { name: 'Chiku', slug: 'chiku' },
  { name: 'Lemon', slug: 'lemon' },
  { name: 'Pomegranate', slug: 'pomegranate' },
  { name: 'Custard Apple', slug: 'custard-apple' },
  { name: 'Fig', slug: 'fig' },
  { name: 'Mahogany', slug: 'mahogany' },
  { name: 'Red Sandalwood', slug: 'red-sandalwood' },
  { name: 'White Sandalwood', slug: 'white-sandalwood' }
]

export default function NavbarMain() {
  const router = useRouter()
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSearch, setShowSearch] = useState(false)
  const [query, setQuery] = useState('')
  const [suggestions, setSuggestions] = useState<typeof products>([])
  const [selectedIndex, setSelectedIndex] = useState(-1)
  const [showPagesDropdown, setShowPagesDropdown] = useState(false)
  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const searchRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Filter suggestions based on query
  useEffect(() => {
    if (query.trim()) {
      const filtered = products.filter(product =>
        product.name.toLowerCase().includes(query.toLowerCase())
      )
      setSuggestions(filtered)
      setSelectedIndex(-1)
    } else {
      setSuggestions([])
    }
  }, [query])

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSearch(false)
        setQuery('')
        setSuggestions([])
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
      }
    }

    if (showSearch || isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      // Focus input when search opens
      if (showSearch) {
        setTimeout(() => inputRef.current?.focus(), 100)
      }
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [showSearch, isMobileMenuOpen])

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (suggestions.length === 0) return

    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setSelectedIndex(prev =>
        prev < suggestions.length - 1 ? prev + 1 : prev
      )
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setSelectedIndex(prev => prev > 0 ? prev - 1 : -1)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      if (selectedIndex >= 0 && suggestions[selectedIndex]) {
        handleProductSelect(suggestions[selectedIndex])
      } else if (suggestions.length > 0) {
        handleProductSelect(suggestions[0])
      }
    } else if (e.key === 'Escape') {
      setShowSearch(false)
      setQuery('')
      setSuggestions([])
    }
  }

  const handleProductSelect = (product: typeof products[0]) => {
    router.push(`/products/${product.slug}`)
    setShowSearch(false)
    setQuery('')
    setSuggestions([])
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    // Try to find exact match first
    const exactMatch = products.find(
      p => p.name.toLowerCase() === query.toLowerCase()
    )

    if (exactMatch) {
      handleProductSelect(exactMatch)
      return
    }

    // Try to find partial match
    const partialMatch = products.find(
      p => p.name.toLowerCase().includes(query.toLowerCase())
    )

    if (partialMatch) {
      handleProductSelect(partialMatch)
      return
    }

    // If no match, show suggestions if available
    if (suggestions.length > 0) {
      handleProductSelect(suggestions[0])
    }
  }

  return (
    <nav className={`w-full bg-green-50 text-gray-900 py-4 md:py-5 lg:py-6 transition-all duration-300 z-50 ${isScrolled ? 'sticky top-0 shadow-lg' : ''}`}>
      <div className="max-w-7xl mx-auto pl-2 pr-4 sm:pl-3 sm:pr-6 lg:pl-6 lg:pr-12">
        {/* Mobile Layout: Menu Left, Logo Center, Search Right */}
        <div className="lg:hidden flex items-center justify-between">
          {/* Left: Mobile Menu Button */}
          <div className="flex items-center justify-start w-10">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="hover:text-primary-400 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Center: Logo */}
          <div className="flex items-center justify-center flex-1">
            <a href="/" className="flex items-center">
              <img
                src="/logo/Agrikrishifarms.jpg"
                alt="Agrikrishi Farms Logo"
                className="h-8 w-8 object-contain"
              />
            </a>
          </div>

          {/* Right: Search */}
          <div className="flex items-center justify-end w-10">
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="hover:text-primary-400 transition-colors"
                aria-label="Toggle search"
              >
                <Search className="h-5 w-5" />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl z-[1000] w-80">
                  <form
                    onSubmit={handleSearch}
                    className="p-2 flex items-center gap-2 border-b border-gray-200"
                  >
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search products..."
                      className="flex-1 px-3 py-2 text-gray-900 placeholder-gray-500 outline-none text-sm"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#81ba00] text-white rounded-md hover:bg-[#6fa000] transition-colors text-sm"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </form>

                  {/* Autocomplete Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="max-h-64 overflow-y-auto">
                      {suggestions.map((product, index) => (
                        <button
                          key={product.slug}
                          type="button"
                          onClick={() => handleProductSelect(product)}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors text-sm ${index === selectedIndex ? 'bg-gray-100' : ''
                            }`}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-900">{product.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No results message */}
                  {query.trim() && suggestions.length === 0 && (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Desktop Layout: Logo Left, Navigation Center, Search Right */}
        <div className="hidden lg:grid lg:grid-cols-3 items-center">
          {/* Logo - Far Left */}
          <div className="flex items-center space-x-2 justify-start">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/logo/Agrikrishifarms.jpg"
                alt="Agrikrishi Farms Logo"
                className="h-8 w-8 object-contain"
              />
            </a>
          </div>

          {/* Navigation Links - Center */}
          <div className="flex items-center justify-center space-x-3 xl:space-x-6 flex-nowrap">
            <a href="/" className="hover:text-primary-400 transition-colors text-base font-medium whitespace-nowrap">HOME</a>

            <a href="/shop" className="hover:text-primary-400 transition-colors text-base font-medium whitespace-nowrap">SHOP</a>

            <div
              className="relative flex-shrink-0 group"
              onMouseEnter={() => setShowServicesDropdown(true)}
              onMouseLeave={() => setShowServicesDropdown(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-900 hover:text-primary-600 transition-colors text-base font-medium whitespace-nowrap"
              >
                <span>SERVICES</span>
                <ChevronDown className="h-4 w-4 flex-shrink-0" />
              </button>
              {showServicesDropdown && (
                <div className="absolute left-0 top-full pt-2 w-56 z-50">
                  <div className="bg-white text-gray-900 rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                    <a href="/services" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">All Services</a>
                    <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Horticulture</a>
                    <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Agroforestry</a>
                    <a href="#" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Technical Guidance</a>
                  </div>
                </div>
              )}
            </div>

            <a href="/about" className="text-gray-900 hover:text-primary-600 transition-colors text-base font-medium whitespace-nowrap">ABOUT</a>

            <a href="/contact" className="text-gray-900 hover:text-primary-600 transition-colors text-base font-medium whitespace-nowrap">CONTACT</a>

            <div
              className="relative flex-shrink-0 group"
              onMouseEnter={() => setShowPagesDropdown(true)}
              onMouseLeave={() => setShowPagesDropdown(false)}
            >
              <button
                className="flex items-center space-x-1 text-gray-900 hover:text-primary-600 transition-colors text-base font-medium whitespace-nowrap"
              >
                <span>MORE</span>
                <ChevronDown className="h-4 w-4 flex-shrink-0" />
              </button>
              {showPagesDropdown && (
                <div className="absolute right-0 top-full pt-2 w-56 z-50">
                  <div className="bg-white text-gray-900 rounded-lg shadow-xl border border-gray-100 py-2 overflow-hidden">
                    <div className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Explore</div>
                    <a href="/gallery" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Gallery</a>
                    <a href="/testimonials" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Testimonials</a>
                    <a href="/blogs" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Blogs & Updates</a>
                    <a href="/faq" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">FAQ</a>

                    <div className="border-t border-gray-100 my-1"></div>

                    <div className="px-4 py-1.5 text-xs font-bold text-gray-400 uppercase tracking-wider">Support</div>
                    <a href="/track-order" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Track Order</a>
                    <a href="/terms" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Terms & Conditions</a>
                    <a href="/privacy" className="block px-4 py-2 hover:bg-green-50 hover:text-primary-600 transition-colors text-sm">Privacy Policy</a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Search - Far Right */}
          <div className="flex items-center justify-end">
            <div className="relative" ref={searchRef}>
              <button
                onClick={() => setShowSearch(!showSearch)}
                className="hover:text-primary-400 transition-colors"
                aria-label="Toggle search"
              >
                <Search className="h-6 w-6" />
              </button>
              {showSearch && (
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-xl z-[1000] w-80">
                  <form
                    onSubmit={handleSearch}
                    className="p-2 flex items-center gap-2 border-b border-gray-200"
                  >
                    <input
                      ref={inputRef}
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Search products..."
                      className="flex-1 px-3 py-2 text-gray-900 placeholder-gray-500 outline-none text-sm"
                    />
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#81ba00] text-white rounded-md hover:bg-[#6fa000] transition-colors text-sm"
                    >
                      <Search className="h-4 w-4" />
                    </button>
                  </form>

                  {/* Autocomplete Suggestions */}
                  {suggestions.length > 0 && (
                    <div className="max-h-64 overflow-y-auto">
                      {suggestions.map((product, index) => (
                        <button
                          key={product.slug}
                          type="button"
                          onClick={() => handleProductSelect(product)}
                          className={`w-full text-left px-4 py-3 hover:bg-gray-100 transition-colors text-sm ${index === selectedIndex ? 'bg-gray-100' : ''
                            }`}
                          onMouseEnter={() => setSelectedIndex(index)}
                        >
                          <div className="flex items-center gap-2">
                            <Search className="h-4 w-4 text-gray-400" />
                            <span className="text-gray-900">{product.name}</span>
                          </div>
                        </button>
                      ))}
                    </div>
                  )}

                  {/* No results message */}
                  {query.trim() && suggestions.length === 0 && (
                    <div className="px-4 py-3 text-sm text-gray-500">
                      No products found
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 top-[60px] md:top-[68px] bg-green-50 z-40 overflow-y-auto">
          <div ref={mobileMenuRef} className="px-4 py-6 space-y-4">
            <a
              href="/"
              className="block py-3 text-white hover:text-primary-400 transition-colors border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              HOME
            </a>
            <a
              href="/about"
              className="block py-3 text-white hover:text-primary-400 transition-colors border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              ABOUT US
            </a>
            <div className="border-b border-gray-800">
              <button
                onClick={() => setShowServicesDropdown(!showServicesDropdown)}
                className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-primary-600 transition-colors"
              >
                <span>OUR SERVICES</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showServicesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showServicesDropdown && (
                <div className="pl-4 pb-3 space-y-2">
                  <a href="#" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors text-sm">Horticulture</a>
                  <a href="#" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors text-sm">Agroforestry</a>
                  <a href="#" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors text-sm">Technical Supervision and Guidance</a>
                </div>
              )}
            </div>
            <a
              href="/contact"
              className="block py-3 text-white hover:text-primary-400 transition-colors border-b border-gray-800"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              CONTACT US
            </a>
            <div className="border-b border-gray-800">
              <button
                onClick={() => setShowPagesDropdown(!showPagesDropdown)}
                className="w-full flex items-center justify-between py-3 text-gray-900 hover:text-primary-600 transition-colors"
              >
                <span>MORE PAGES</span>
                <ChevronDown className={`h-4 w-4 transition-transform ${showPagesDropdown ? 'rotate-180' : ''}`} />
              </button>
              {showPagesDropdown && (
                <div className="pl-4 pb-3 space-y-2">
                  <a href="/blogs" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors text-sm">Blogs & Updates</a>
                  <a href="/terms" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors text-sm">Terms & Conditions</a>
                  <a href="/privacy" className="block py-2 text-gray-700 hover:text-primary-600 transition-colors text-sm">Privacy Policy</a>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}



