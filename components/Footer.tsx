'use client'

import { useState } from 'react'
import { Facebook, Instagram, Youtube, ChevronUp } from 'lucide-react'

export default function Footer() {
  const [email, setEmail] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      // Handle newsletter subscription
      console.log('Newsletter subscription:', email)
      setIsSubscribed(true)
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSubscribed(false)
        setEmail('')
      }, 3000)
    }
  }

  const marqueeItems = [
    "ONE PLACE FOR ALL YOUR GARDENING NEEDS",
    "INDIA'S FIRST HORTICULTURE & AGROFORESTRY MARKETPLACE",
    "DEDICATED TO INDIAN PLANT HYBRIDS"
  ]

  return (
    <>
      {/* Part 1: Scrolling Marquee - Seamless Infinite Loop */}
      <section className="bg-white py-3 md:py-4 overflow-hidden relative">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            {/* Duplicate items to create seamless loop - first appears behind last */}
            {[...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, index) => (
              <div key={index} className="marquee-item flex items-center mx-4 md:mx-8 whitespace-nowrap">
                <img
                  src="/logo/Agrikrishifarms.jpg"
                  alt="Agrikrishi Farms Logo"
                  className="w-8 h-8 md:w-10 lg:w-12 md:h-10 lg:h-12 object-contain flex-shrink-0"
                />
                <h3 className="text-primary-800 font-bold text-sm md:text-base lg:text-lg ml-2 md:ml-4">
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Part 2 & 3: Main Footer with Continuous Dark Leafy Background */}
      <section className="relative py-16 overflow-hidden">
        {/* Single Continuous Background Layer with Dark Leafy Pattern */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJsZWFmX3BhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxYTQwMWMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjciLz4KICAgICAgPGVsbGlwc2UgY3g9IjgwIiBjeT0iMjAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjUwIiBjeT0iNzAiIHJ4PSIxOCIgcnk9IjMwIiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iODAiIHJ4PSIxNCIgcnk9IjIyIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjkwIiByeD0iMTYiIHJ5PSIyNSIgZmlsbD0iIzIyOGI1MyIgb3BhY2l0eT0iMC42NSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsZWFmX3BhdHRlcm4pIi8+Cjwvc3ZnPg==')`
          }}
        />
        <div className="absolute inset-0 bg-black/75" />

        {/* Layout Grid - 1 column on mobile, 2 columns on tablet, 4 on desktop */}
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 md:gap-8 mb-12 md:mb-16">
            {/* Column 1: Address */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase">Address</h3>
              <div className="space-y-2 text-gray-300">
                <p>Agrikrishi Farms</p>
                <p>Indore</p>
                <p>79873 84443</p>
                <p>info@agrikrishifarms.com</p>
              </div>
            </div>

            {/* Column 2: Information */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase">Information</h3>
              <ul className="space-y-2">
                <li><a href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
                <li><a href="/services" className="text-gray-300 hover:text-white transition-colors">Services</a></li>
                <li><a href="/gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</a></li>
                <li><a href="/testimonials" className="text-gray-300 hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="/faq" className="text-gray-300 hover:text-white transition-colors">FAQ</a></li>
                <li><a href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="/terms" className="text-gray-300 hover:text-white transition-colors">Terms & Conditions</a></li>
                <li><a href="/privacy" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>

            {/* Column 3: Forestry & High-Value */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase">Forestry & High-Value</h3>
              <ul className="space-y-2">
                <li><a href="/products/red-sandalwood" className="text-gray-300 hover:text-white transition-colors">Red Sandalwood (Rakt Chandan)</a></li>
                <li><a href="/products/white-sandalwood" className="text-gray-300 hover:text-white transition-colors">White Sandalwood (Srigandh)</a></li>
                <li><a href="/products/mahogany" className="text-gray-300 hover:text-white transition-colors">African Mahogany</a></li>
                <li><a href="/products/teak" className="text-gray-300 hover:text-white transition-colors">Burma Teak (Sagwan)</a></li>
                <li><a href="/products/bamboo" className="text-gray-300 hover:text-white transition-colors">Tissue Culture Bamboo</a></li>
                <li><a href="/products/dragon-fruit" className="text-gray-300 hover:text-white transition-colors">Dragon Fruit (Red/White)</a></li>
                <li><a href="/products/guava" className="text-gray-300 hover:text-white transition-colors">Guava (Taiwan Pink)</a></li>
              </ul>
            </div>

            {/* Column 4: Commercial Hybrids */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase">Commercial Hybrids</h3>
              <ul className="space-y-2">
                <li><a href="/products/bitter-gourd" className="text-gray-300 hover:text-white transition-colors">Bitter Gourd (Batuk / Vachan 208)</a></li>
                <li><a href="/products/bottle-gourd" className="text-gray-300 hover:text-white transition-colors">Bottle Gourd (Sumo / Bhim)</a></li>
                <li><a href="/products/tomato" className="text-gray-300 hover:text-white transition-colors">Tomato (Preetam / Abhilash)</a></li>
                <li><a href="/products/hot-pepper" className="text-gray-300 hover:text-white transition-colors">Chilli/Hot Pepper (Rocket / Bullet)</a></li>
                <li><a href="/products/okra" className="text-gray-300 hover:text-white transition-colors">Okra (Radhika / Mastani Type)</a></li>
                <li><a href="/products/cucumber" className="text-gray-300 hover:text-white transition-colors">Cucumber (Ria / Malini)</a></li>
                <li><a href="/products/sponge-gourd" className="text-gray-300 hover:text-white transition-colors">Sponge Gourd (Samridhi)</a></li>
              </ul>
            </div>

            {/* Column 5: Field Crops & Cereals */}
            <div>
              <h3 className="text-white font-bold mb-4 uppercase">Field Crops & Cereals</h3>
              <ul className="space-y-2">
                <li><a href="/products/maize" className="text-gray-300 hover:text-white transition-colors">Maize Hybrid (Angad-1217)</a></li>
                <li><a href="/products/maize" className="text-gray-300 hover:text-white transition-colors">Maize (Gaja-31 / Vijay)</a></li>
                <li><a href="/products/mustard" className="text-gray-300 hover:text-white transition-colors">Mustard (V-111)</a></li>
                <li><a href="/products/maize" className="text-gray-300 hover:text-white transition-colors">Sweet Corn (Sugar Candy)</a></li>
                <li><a href="/products/watermelon" className="text-gray-300 hover:text-white transition-colors">Watermelon (Honey Ball)</a></li>
                <li><a href="/products/wheat" className="text-gray-300 hover:text-white transition-colors">Wheat (Lok-1 / Sharbati)</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom Section: Logo, Description & Newsletter */}
          <div className="border-t border-gray-700 pt-6 md:pt-8">
            <div className="flex flex-col lg:flex-row items-start gap-6 md:gap-8 mb-6 md:mb-8">
              {/* Logo & Paragraph */}
              <div className="flex-shrink-0 w-full lg:w-2/3 max-w-2xl">
                {/* Logo */}
                <div className="flex items-center space-x-2 mb-3 md:mb-4">
                  <img
                    src="/logo/Agrikrishifarms.jpg"
                    alt="Agrikrishi Farms Logo"
                    className="h-8 w-8 md:h-10 md:w-10 object-contain"
                  />
                  <span className="text-xl md:text-2xl font-bold text-white">Agrikrishi Farms</span>
                </div>

                {/* Descriptive Paragraph */}
                <p className="text-gray-300 mt-3 md:mt-4 text-xs md:text-sm leading-relaxed text-left max-w-xl">
                  Shop a wide range of plants online at Agrikrishi Farms, including horticulture plants, agroforestry trees, flowering plants, fruit trees, and more. We offer quality horticulture and agroforestry products with free shipping, easy returns, and 24x7 support. Dedicated to providing the best combination of high yield and rapid profitability for Indian farmers and gardeners.
                </p>
              </div>

              {/* Newsletter Signup Form */}
              <div className="flex-shrink-0 lg:w-1/3">
                <div className="bg-[#66CC00] bg-opacity-90 rounded-lg p-6 md:p-8 shadow-xl">
                  {/* Title */}
                  <div className="text-center mb-4">
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                      Sign Up For
                    </h3>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-white">
                      Newsletter
                    </h3>
                  </div>

                  {/* Subtitle */}
                  <p className="text-white text-sm text-center mb-6 font-sans">
                    Wants to get latest updates! sign up for free.
                  </p>

                  {/* Form or Success Message */}
                  {!isSubscribed ? (
                    <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                      {/* Email Input */}
                      <div className="border-b border-white/70 pb-2">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="Your email address"
                          className="w-full bg-transparent text-white placeholder-white/90 outline-none text-sm font-sans"
                          required
                        />
                      </div>

                      {/* Subscribe Button */}
                      <button
                        type="submit"
                        className="w-full bg-white text-black font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition-colors shadow-md font-sans"
                      >
                        Subscribe
                      </button>
                    </form>
                  ) : (
                    <div className="space-y-4">
                      {/* Success Message with Tick Animation */}
                      <div className="flex flex-col items-center justify-center py-4">
                        <div className="tick-animation mb-3">
                          <svg
                            className="w-16 h-16 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={3}
                              d="M5 13l4 4L19 7"
                            />
                          </svg>
                        </div>
                        <p className="text-white text-lg font-semibold font-sans">
                          Subscribed!
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Bottom Copyright Strip */}
      <section className="bg-black py-3 md:py-4">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex flex-col gap-3 md:flex-row justify-between items-center md:gap-4">
            {/* Copyright Text */}
            <div className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © 2025 Agrikrishi Farms. All rights reserved.
            </div>

            {/* Social Media Icons - Ordered: YouTube, X/Twitter, Instagram, Facebook */}
            <div className="flex items-center gap-3 md:gap-4">
              {/* 1. YouTube */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="YouTube"
                title="YouTube (to be provided)"
              >
                <Youtube className="w-5 h-5" />
              </a>
              {/* 2. X/Twitter */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="X (Twitter)"
                title="X/Twitter (to be provided)"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              {/* 3. Instagram */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Instagram"
                title="Instagram (to be provided)"
              >
                <Instagram className="w-5 h-5" />
              </a>
              {/* 4. Facebook */}
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-green-400 transition-colors"
                aria-label="Facebook"
                title="Facebook (to be provided)"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center shadow-lg hover:bg-primary-700 transition-all duration-300 z-50"
        aria-label="Back to top"
      >
        <ChevronUp className="w-6 h-6 text-white" />
      </button>

      {/* CSS for Marquee Animation and Tick Animation */}
      <style jsx global>{`
        .marquee-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
        }
        
        .marquee-track {
          display: flex;
          align-items: center;
          white-space: nowrap;
          will-change: transform;
          animation: scroll 40s linear infinite;
        }
        
        .marquee-item {
          flex-shrink: 0;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .marquee-track:hover {
          animation-play-state: paused;
        }

        @keyframes tick-draw {
          0% {
            stroke-dashoffset: 100;
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
          }
        }

        .tick-animation svg path {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          animation: tick-draw 1.5s ease-out forwards;
        }

        @keyframes tick-scale {
          0% {
            transform: scale(0);
          }
          50% {
            transform: scale(1.2);
          }
          100% {
            transform: scale(1);
          }
        }

        .tick-animation {
          animation: tick-scale 1.5s ease-out forwards;
        }
      `}</style>
    </>
  )
}
