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
      icon: <Leaf className="w-8 h-8 text-green-600" />,
      iconBgColor: "bg-green-100",
      alignment: 'right' as const
    },
    {
      title: "High Income",
      description: "Our plants offer the best combination of high yield and rapid profitability.",
      icon: <Package className="w-8 h-8 text-yellow-600" />,
      iconBgColor: "bg-yellow-100",
      alignment: 'right' as const
    },
    {
      title: "Easy Replacement",
      description: "Easy and Hassle-Free Replacements. Guaranteed*.",
      icon: <RotateCcw className="w-8 h-8 text-green-600" />,
      iconBgColor: "bg-green-100",
      alignment: 'left' as const
    },
    {
      title: "24x7 Support",
      description: "We provide on call instant assistance for any convenience and Query.",
      icon: <Headphones className="w-8 h-8 text-yellow-600" />,
      iconBgColor: "bg-yellow-100",
      alignment: 'left' as const
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Solid Black Background with Organic Shapes */}
      <div 
        className="absolute inset-0 bg-black"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJvcmdhbmljX3NoYXBlcyIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiPgogICAgICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iIzAwMDAwMCIvPgogICAgICA8ZWxsaXBzZSBjeD0iMTUiIGN5PSIyNSIgcng9IjEyIiByeT0iMjAiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMSIvPgogICAgICA8ZWxsaXBzZSBjeD0iODUiIGN5PSIzMCIgcng9IjEwIiByeT0iMTgiIGZpbGw9IiMwMDAwMDAiIG9wYWNpdHk9IjAuMDgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjQwIiBjeT0iNzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMDAwMDAwIiBvcGFjaXR5PSIwLjEyIi8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjgwIiByeD0iMTIiIHJ5PSIyMCIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC4xIi8+CiAgICAgIDxlbGxpcHNlIGN4PSIyMCIgY3k9IjkwIiByeD0iMTQiIHJ5PSIyMiIgZmlsbD0iIzAwMDAwMCIgb3BhY2l0eT0iMC4wOSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNvcmdhbmljX3NoYXBlcykiLz4KPC9zdmc+')`
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold text-white mb-4">
            Welcome To Oksingreen
          </h2>
          <p className="text-white text-lg opacity-90">
            Quality Horticulture & Agroforestry Products
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Left Column - First 2 Feature Cards (Right Aligned) */}
          <div className="md:order-1 order-2 flex flex-col items-end">
            <FeatureCard
              title={features[0].title}
              description={features[0].description}
              icon={features[0].icon}
              iconBgColor={features[0].iconBgColor}
              alignment={features[0].alignment}
            />
            <FeatureCard
              title={features[1].title}
              description={features[1].description}
              icon={features[1].icon}
              iconBgColor={features[1].iconBgColor}
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
              iconBgColor={features[2].iconBgColor}
              alignment={features[2].alignment}
            />
            <FeatureCard
              title={features[3].title}
              description={features[3].description}
              icon={features[3].icon}
              iconBgColor={features[3].iconBgColor}
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
