'use client'

import { useState } from 'react'
import FeatureCard from './FeatureCard'
import { Leaf, Package, RotateCcw, Headphones } from 'lucide-react'

export default function WhyChooseUs() {
  const [cactusHovered, setCactusHovered] = useState(false)

  const features = [
    {
      title: "Free Shipping",
      description: "No extra Hidden charges for your plants, As we are providing free of cost delivery.",
      icon: <Leaf className="w-10 h-10 md:w-12 md:h-12 text-primary-600" />,
      iconBgColor: "bg-green-100",
      alignment: 'right' as const
    },
    {
      title: "Big Saving",
      description: "Our plants offer the best combination of high yield and rapid profitability.",
      icon: <Package className="w-10 h-10 md:w-12 md:h-12 text-yellow-600" />,
      iconBgColor: "bg-yellow-100",
      alignment: 'right' as const
    },
    {
      title: "Easy Returns",
      description: "Easy and Hassle-Free Replacements. Guaranteed*.",
      icon: <RotateCcw className="w-10 h-10 md:w-12 md:h-12 text-green-600" />,
      iconBgColor: "bg-green-100",
      alignment: 'left' as const
    },
    {
      title: "24x7 Support",
      description: "We provide on call instant assistance for any convenience and Query.",
      icon: <Headphones className="w-10 h-10 md:w-12 md:h-12 text-white" />,
      iconBgColor: "bg-yellow-100",
      alignment: 'left' as const
    }
  ]

  return (
    <section className="relative pt-40 md:pt-48 lg:pt-56 pb-20 overflow-hidden z-10">
      {/* Layer 1 (Bottom): Dark Green Leafy Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-10"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJsZWFmX3BhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxYTQwMWMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjciLz4KICAgICAgPGVsbGlwc2UgY3g9IjgwIiBjeT0iMjAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjUwIiBjeT0iNzAiIHJ4PSIxOCIgcnk9IjMwIiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iODAiIHJ4PSIxNCIgcnk9IjIyIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjkwIiByeD0iMTYiIHJ5PSIyNSIgZmlsbD0iIzIyOGI1MyIgb3BhY2l0eT0iMC42NSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsZWFmX3BhdHRlcm4pIi8+Cjwvc3ZnPg==')`
        }}
      />
      
      {/* Layer 2 (Middle): Dark Black Overlay */}
      <div className="absolute inset-0 bg-black opacity-75 z-20" />
      
      {/* Layer 3 (Top): Content */}
      <div className="relative z-30">
        {/* Section Header */}
        <div className="w-full max-w-[1238px] mx-auto px-4 text-center mb-12">
          <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            Welcome To Agrikrishi Farms
          </h2>
          <p className="font-sans text-xl md:text-2xl text-white text-center mt-2">
            Quality Horticulture & Agroforestry Products
          </p>
        </div>

        {/* Main Content Grid - Full Width for Cactus Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column - First 2 Feature Cards (Right Aligned) */}
          <div className="md:order-1 order-2 flex flex-col items-end">
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
              iconBgImage="/cactuspoints/service-bg-1.png"
              alignment={features[0].alignment}
            />
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
              iconBgImage="/cactuspoints/service-bg-2.png"
              alignment={features[1].alignment}
            />
          </div>

          {/* Center Column - Cactus Image with Hover Animation */}
          <div className="md:order-2 order-1 flex justify-center">
            <div 
              className="relative"
              onMouseEnter={() => setCactusHovered(true)}
              onMouseLeave={() => setCactusHovered(false)}
            >
              <img
                src="/cactus/purepng.com-cactusplantcactuscacticactaceae-1411526817834d7itg-removebg-preview.png"
                alt="Cactus"
                className={`w-full max-w-sm h-auto object-contain transition-transform duration-300 ${
                  cactusHovered ? 'transform -translate-y-1' : 'transform translate-y-0'
                }`}
              />
            </div>
          </div>

          {/* Right Column - Last 2 Feature Cards (Left Aligned) */}
          <div className="md:order-3 order-3 flex flex-col items-start">
            <FeatureCard
              title={features[2].title}
              description={features[2].description}
              icon={features[2].icon}
              iconBgImage="/cactuspoints/service-bg-1.png"
              alignment={features[2].alignment}
            />
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
              iconBgImage="/cactuspoints/service-bg-2.png"
              alignment={features[3].alignment}
            />
          </div>
        </div>
      </div>

      {/* Custom CSS for rotate-y animation */}
      <style jsx global>{`
        @keyframes rotate-y-360 {
          from { transform: rotateY(0deg); }
          to { transform: rotateY(360deg); }
        }
        .rotate-y-360 {
          animation: rotate-y-360 0.5s ease-in-out;
        }
      `}</style>
    </section>
  )
}
