'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, Sparkles, ShoppingBag } from 'lucide-react'

const heroImages = [
  '/images/hero/1.png',
  '/images/hero/2.png',
  '/images/hero/3.png',
  '/images/hero/4.png',
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden mt-20">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-green-50 to-emerald-50" />
      
      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full text-sm font-medium"
            >
              <Sparkles className="h-4 w-4" />
              <span>Premium Quality Plants</span>
            </motion.div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Grow Your Dream
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-emerald-600">
                Garden Paradise
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover our exclusive collection of premium plants and trees. 
              Transform your space with nature's beauty and create a garden you'll love.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-full font-semibold text-lg flex items-center justify-center space-x-2 transition-colors shadow-lg shadow-primary-200"
              >
                <ShoppingBag className="h-5 w-5" />
                <span>Shop Now</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-gray-50 text-primary-600 border-2 border-primary-600 px-8 py-4 rounded-full font-semibold text-lg transition-colors"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Image Slider */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0">
                {heroImages.map((img, index) => (
                  <motion.img
                    key={index}
                    src={img}
                    alt={`Hero image ${index + 1}`}
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: currentSlide === index ? 1 : 0 }}
                    transition={{ duration: 1 }}
                  />
                ))}
              </div>
              
              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors shadow-lg"
              >
                <ChevronLeft className="h-6 w-6 text-gray-700" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full transition-colors shadow-lg"
              >
                <ChevronRight className="h-6 w-6 text-gray-700" />
              </button>
              
              {/* Dots Indicator */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
                {heroImages.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2 rounded-full transition-all ${
                      currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary-200 rounded-full opacity-30 blur-3xl animate-float" />
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-200 rounded-full opacity-30 blur-3xl animate-float" style={{ animationDelay: '1s' }} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}



