'use client'

/**
 * Performance Demo Page
 * 
 * This page demonstrates the usage of OptimizedImage and OptimizedVideo components
 * for performance optimization.
 */

import OptimizedImage from '@/components/OptimizedImage'
import OptimizedVideo from '@/components/OptimizedVideo'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'

export default function PerformanceDemoPage() {
  return (
    <main className="min-h-screen bg-white">
      <NavbarMain />
      
      {/* Hero Section with LCP Image */}
      <section className="relative w-full">
        <OptimizedImage
          src="/hero(section/1.png"
          alt="Hero Image - LCP Candidate"
          priority
          width={1920}
          height={1080}
          placeholder="blur"
          className="w-full h-auto"
          sizes="100vw"
        />
      </section>

      {/* Content Section with Optimized Images */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8">Performance Optimized Components</h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Optimized Image Example 1 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Optimized Image (Lazy Loaded)</h2>
              <OptimizedImage
                src="/hero(section/2.png"
                alt="Content Image 1"
                width={800}
                height={600}
                placeholder="lqip"
                className="w-full rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* Optimized Image Example 2 */}
            <div>
              <h2 className="text-2xl font-semibold mb-4">Optimized Image (Lazy Loaded)</h2>
              <OptimizedImage
                src="/hero(section/3.png"
                alt="Content Image 2"
                width={800}
                height={600}
                placeholder="lqip"
                className="w-full rounded-lg shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Optimized Video Example */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">Optimized Video (Lazy Loaded)</h2>
            <OptimizedVideo
              src="/reels/AppleWeb.mov"
              poster="/hero(section/1.png"
              lazy
              controls
              aspectRatio="16/9"
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Multiple Videos Example */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Lazy Loaded Video 1</h3>
              <OptimizedVideo
                src="/reels/CustardWeb.mov"
                poster="/hero(section/2.png"
                lazy
                controls
                aspectRatio="9/16"
                className="w-full rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Lazy Loaded Video 2</h3>
              <OptimizedVideo
                src="/reels/DragonFruit.mp4"
                poster="/hero(section/3.png"
                lazy
                controls
                aspectRatio="9/16"
                className="w-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

