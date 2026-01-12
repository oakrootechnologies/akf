'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import { Calendar, Clock } from 'lucide-react'

export default function AsymmetricalPromoGrid() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)

  // Helper function to format date to Latest News style
  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    const day = date.getDate().toString()
    const monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    const month = monthNames[date.getMonth()]
    const year = date.getFullYear()
    return {
      day,
      monthYear: `${month}-${year}`
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true)
          setHasAnimated(true)
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px',
      }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current)
      }
    }
  }, [hasAnimated])

  const blogs = [
    {
      id: 1,
      slug: 'the-green-gold-rush',
      title: "The Green Gold Rush: How Horticulture & Agroforestry Decrease Carbon Consumption and Attract Smart Investment",
      excerpt: "Discover how horticulture and agroforestry are transforming agriculture into a carbon-capture technology. Learn how these practices decrease carbon consumption, create profitable opportunities for farmers, and attract smart investment in the growing ESG market.",
      mainImage: "/realblog/1 MAIN.webp",
      date: "November 29, 2025",
      readTime: "8 min read",
      category: "Horticulture"
    },
    {
      id: 2,
      slug: 'beyond-the-harvest',
      title: "Beyond the Harvest: Why Healthy Soil is Horticulture's Greatest Long-Term Asset",
      excerpt: "Discover why healthy soil is not just dirt, but a living ecosystem that's horticulture's greatest long-term asset. Learn how building soil health creates drought resilience, natural pest control, and a profitable foundation for sustainable farming.",
      mainImage: "/realblog/2 MAIN.png",
      date: "November 29, 2025",
      readTime: "10 min read",
      category: "Agroforestry"
    },
    {
      id: 3,
      slug: 'traditional-vs-horticulture-farming',
      title: "Is a 1-Acre Garden Worth More Than a 100-Acre Field?",
      excerpt: "Discover the shocking truth about yield and value comparison between traditional farming and horticulture. Learn how a 1-acre garden can produce 10-100x more food than a traditional field and why value is starting to win over volume.",
      mainImage: "/realblog/3 MAIN.JPG",
      date: "November 29, 2025",
      readTime: "12 min read",
      category: "Farming Methods"
    }
  ]

  return (
    <section ref={sectionRef} className="relative z-30 bg-transparent py-16">
      <div className="w-full max-w-[990px] mx-auto px-4">
        {/* Single Card Container */}
        <div className={`relative transition-all duration-[3000ms] ease-out ${
          isVisible 
            ? 'translate-y-0 opacity-100' 
            : 'translate-y-20 opacity-0'
        }`}>
          <div className="bg-white rounded-lg shadow-2xl p-6 md:p-8 lg:p-12 xl:p-16">
            {/* Section Header */}
            <div className="text-center mb-8 md:mb-12">
              {/* Leaf Icon */}
              <div className="flex justify-center mb-3 md:mb-4">
              <img
                  src="/logo/Agrikrishifarms.jpg"
                  alt="Agrikrishi Farms Logo"
                  className="w-12 h-12 md:w-16 lg:w-20 md:h-16 lg:h-20 object-contain mx-auto"
              />
            </div>

              {/* Main Title */}
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3">
                Blogs
              </h2>
              
              {/* Subtitle with decorative lines */}
              <div className="flex items-center justify-center gap-2 md:gap-3">
                <div className="h-px w-6 md:w-8 bg-gray-300"></div>
                <p className="text-gray-500 uppercase tracking-wider text-xs md:text-sm font-sans">
                  OUR PLANT HOUSE
                </p>
                <div className="h-px w-6 md:w-8 bg-gray-300"></div>
              </div>
            </div>

            {/* Blog Posts - Vertical Stack */}
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {/* Post 1 - Image Left, Text Right */}
              <Link href={`/blogs/${blogs[0].slug}`} className="group block">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={blogs[0].mainImage}
                      alt={blogs[0].title}
                      className="w-full h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[300px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Text Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {/* Date Block */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-bold text-gray-300 leading-none">
                        {formatDate(blogs[0].date).day}
                      </span>
                      <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                        {formatDate(blogs[0].date).monthYear}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {blogs[0].title}
                </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blogs[0].excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <span className="inline-block text-gray-900 font-semibold group-hover:text-primary-600 transition-colors text-sm">
                      Read More &gt;
                    </span>
              </div>
            </div>
              </Link>

              {/* Post 2 - Image Right, Text Left */}
              <Link href={`/blogs/${blogs[1].slug}`} className="group block">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Image */}
                  <div className="w-full md:w-1/2 md:order-2">
                    <img
                      src={blogs[1].mainImage}
                      alt={blogs[1].title}
                      className="w-full h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[300px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
              
                  {/* Text Content */}
                  <div className="w-full md:w-1/2 md:order-1 flex flex-col justify-center">
                    {/* Date Block */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                        {formatDate(blogs[1].date).monthYear}
                      </span>
                      <span className="text-4xl font-bold text-gray-300 leading-none">
                        {formatDate(blogs[1].date).day}
                      </span>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {blogs[1].title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blogs[1].excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <span className="inline-block text-gray-900 font-semibold group-hover:text-primary-600 transition-colors text-sm">
                      Read More &gt;
                    </span>
                  </div>
                </div>
              </Link>

              {/* Post 3 - Image Left, Text Right */}
              <Link href={`/blogs/${blogs[2].slug}`} className="group block">
                <div className="flex flex-col md:flex-row gap-4 md:gap-6">
                  {/* Image */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={blogs[2].mainImage}
                      alt={blogs[2].title}
                      className="w-full h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[300px] object-cover rounded-lg group-hover:scale-105 transition-transform duration-700"
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
              </div>
                  
                  {/* Text Content */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {/* Date Block */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-bold text-gray-300 leading-none">
                        {formatDate(blogs[2].date).day}
                      </span>
                      <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                        {formatDate(blogs[2].date).monthYear}
                      </span>
            </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
                      {blogs[2].title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blogs[2].excerpt}
                    </p>
                    
                    {/* Read More Link */}
                    <span className="inline-block text-gray-900 font-semibold group-hover:text-primary-600 transition-colors text-sm">
                      Read More &gt;
                    </span>
            </div>
          </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
