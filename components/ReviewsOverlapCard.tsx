'use client'

import { useState, useEffect, useRef } from 'react'
import { MessageCircle } from 'lucide-react'

export default function ReviewsOverlapCard() {
  const sectionRef = useRef<HTMLElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)

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
  const blogPosts = [
    {
      id: 1,
      title: "Litchi: Coming Soon to Agrikrishi Farms!",
      snippet: "Get ready to experience the sweet, juicy delight of our premium litchi plants, meticulously cultivated for your Orchards.",
      image: "/blog/LitchiSoon.png",
      date: "29",
      month: "Nov-2025",
      comments: "0 Comments"
    },
    {
      id: 2,
      title: "Agrikrishi Farms Farm Security Offer",
      snippet: "Protect your valuable plantation. Get a free electric jhatka machine on every purchase of 1000 plants or more from Agrikrishi Farms.",
      image: "/blog/Electric Jhatka Post.png",
      date: "29",
      month: "Nov-2025",
      comments: "0 Comments"
    },
    {
      id: 3,
      title: "Agrikrishi Farms Care Offer: Free Electric Sprayer Tank!",
      snippet: "Keep your plants healthy. Get a free electric sprayer tank on every purchase of 500 plants or more from Agrikrishi Farms.",
      image: "/blog/Electric Sprayer Post.png",
      date: "29",
      month: "Nov-2025",
      comments: "0 Comments"
    }
  ]

  return (
    <section ref={sectionRef} className="relative z-30 bg-transparent -mt-12 md:-mt-24">
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
                Latest News
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

            {/* Blog Posts - Vertical Stack - Swiper for mobile */}
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {/* First Post Position - Post 1 or Post 3 (Image Left, Text Right) */}
              <div className="relative min-h-[250px] md:min-h-[300px] lg:min-h-[400px]">
                {/* Post 1 - Shows when currentSlide is 0 */}
                <div className={`flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity duration-[1500ms] ${
                  currentSlide === 0 ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}>
                {/* Image - On top for mobile, left for desktop */}
                <div className="w-full md:w-1/2">
                  <img
                    src={blogPosts[0].image}
                    alt={blogPosts[0].title}
                      className="w-full h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[300px] object-contain rounded-lg"
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                  />
                </div>
                
                {/* Text Content - Below image on mobile, right for desktop */}
                <div className="w-full md:w-1/2 flex flex-col justify-center">
                  {/* Date Block */}
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl font-bold text-gray-300 leading-none">
                      {blogPosts[0].date}
                    </span>
                    <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                      {blogPosts[0].month}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>{blogPosts[0].comments}</span>
                    </div>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                    {blogPosts[0].title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {blogPosts[0].snippet}
                  </p>
                  
                  {/* Read More Link */}
                  <a
                    href="/blogs"
                    className="inline-block text-gray-900 font-semibold hover:text-green-600 transition-colors text-sm"
                  >
                    Read More &gt;
                  </a>
                </div>
              </div>

                {/* Post 3 - Shows when currentSlide is 1, replaces Post 1 */}
                <div className={`flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity duration-[1500ms] ${
                  currentSlide === 1 ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}>
                  {/* Image - On top for mobile, left for desktop */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={blogPosts[2].image}
                      alt={blogPosts[2].title}
                      className="w-full h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[300px] object-contain rounded-lg"
                      width={600}
                      height={400}
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Text Content - Below image on mobile, right for desktop */}
                  <div className="w-full md:w-1/2 flex flex-col justify-center">
                    {/* Date Block */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-4xl font-bold text-gray-300 leading-none">
                        {blogPosts[2].date}
                      </span>
                      <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                        {blogPosts[2].month}
                      </span>
                      <div className="flex items-center gap-1 text-gray-500 text-sm">
                        <MessageCircle className="w-4 h-4" />
                        <span>{blogPosts[2].comments}</span>
                      </div>
                    </div>
                    
                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                      {blogPosts[2].title}
                    </h3>
                    
                    {/* Excerpt */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {blogPosts[2].snippet}
                    </p>
                    
                    {/* Read More Link */}
                    <a
                      href="/blogs"
                      className="inline-block text-gray-900 font-semibold hover:text-green-600 transition-colors text-sm"
                    >
                      Read More &gt;
                    </a>
                  </div>
                </div>
              </div>

              {/* Post 2 (Image Right, Text Left) - Hidden when currentSlide is 1 */}
              <div className={`flex flex-col md:flex-row gap-4 md:gap-6 transition-opacity duration-[1500ms] ${
                currentSlide === 1 ? 'opacity-0 h-0 overflow-hidden' : 'opacity-100'
              }`}>
                {/* Image - On top for mobile, right for desktop */}
                <div className="w-full md:w-1/2 md:order-2">
                  <img
                    src={blogPosts[1].image}
                    alt={blogPosts[1].title}
                    className="w-full h-auto min-h-[180px] md:min-h-[200px] lg:min-h-[300px] object-contain rounded-lg"
                    width={600}
                    height={400}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                
                {/* Text Content - Below image on mobile, left for desktop */}
                <div className="w-full md:w-1/2 md:order-1 flex flex-col justify-center">
                  {/* Date Block */}
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <MessageCircle className="w-4 h-4" />
                      <span>{blogPosts[1].comments}</span>
                    </div>
                    <span className="bg-black text-white text-xs font-medium px-2 py-1 rounded">
                      {blogPosts[1].month}
                    </span>
                    <span className="text-4xl font-bold text-gray-300 leading-none">
                      {blogPosts[1].date}
                    </span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 hover:text-primary-600 transition-colors cursor-pointer">
                    {blogPosts[1].title}
                  </h3>
                  
                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {blogPosts[1].snippet}
                  </p>
                  
                  {/* Read More Link */}
                  <a
                    href="/blogs"
                    className="inline-block text-gray-900 font-semibold hover:text-green-600 transition-colors text-sm"
                  >
                    Read More &gt;
                  </a>
                </div>
              </div>

              {/* Navigation Buttons - Visible on all screen sizes */}
              <div className="flex justify-center items-center gap-6 mt-3">
                <button 
                  onClick={() => setCurrentSlide(0)}
                  disabled={currentSlide === 0}
                  className={`transition-colors flex items-center gap-1 ${
                    currentSlide === 0 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span>←</span>
                  <span className="uppercase font-medium relative text-sm md:text-base">
                    PREV
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                      currentSlide === 0 ? 'bg-gray-400' : 'bg-black'
                    }`}></span>
                  </span>
                </button>
                <button 
                  onClick={() => setCurrentSlide(1)}
                  disabled={currentSlide === 1}
                  className={`transition-colors flex items-center gap-1 ${
                    currentSlide === 1 
                      ? 'text-gray-400 cursor-not-allowed' 
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                >
                  <span className="uppercase font-medium relative text-sm md:text-base">
                    NEXT
                    <span className={`absolute bottom-0 left-0 right-0 h-[2px] ${
                      currentSlide === 1 ? 'bg-gray-400' : 'bg-black'
                    }`}></span>
                  </span>
                  <span>→</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

