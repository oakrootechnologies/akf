'use client'

import { useRef, useEffect, useState } from 'react'
import FeatureCard from './FeatureCard'
import { Leaf, Headphones } from 'lucide-react'
import HeroProductsCarousel from './HeroProductsCarousel'

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cactusRef = useRef<HTMLImageElement>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const features = [
    {
      title: "Free shipping",
      description: "No extra Hidden charges for your plants, As we are providing free of cost delivery.",
      icon: <img src="/Website Images/free shipping icon.png" alt="Free Shipping" className="w-7 h-7 md:w-9 md:h-9 object-contain" />,
      iconBgImage: "/cactuspoints/service-bg-1.png",
      alignment: 'right' as const
    },
    {
      title: "High Income",
      description: "Our plants offer the best combination of high yield and rapid profitability.",
      icon: <img src="/cactuspoints/service-icon2.png" alt="High Income" className="w-7 h-7 md:w-9 md:h-9 object-contain" />,
      iconBgImage: "/cactuspoints/service-bg-2.png",
      alignment: 'right' as const
    },
    {
      title: "Easy Replacement",
      description: "Easy and Hassle-Free Replacements. Guaranteed*.",
      icon: <img src="/cactuspoints/service-icon3.png" alt="Easy Replacement" className="w-7 h-7 md:w-9 md:h-9 object-contain" />,
      iconBgImage: "/cactuspoints/service-bg-1.png",
      alignment: 'left' as const
    },
    {
      title: "24x7 Support",
      description: "We provide on call instant assistance for any convenience and Query.",
      icon: <Headphones className="w-7 h-7 md:w-9 md:h-9 text-yellow-600" />,
      iconBgImage: "/cactuspoints/service-bg-2.png",
      alignment: 'left' as const
    }
  ]

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

  return (
    <section ref={sectionRef} className="relative z-20 mt-0 pt-56 pb-0 min-h-[1170px] overflow-hidden">
      {/* Background Layer with Dark Leafy Pattern - Shifted Downward */}
      <div 
        className="absolute top-0 left-0 right-0 bottom-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJsZWFmX3BhdHRlcm4iIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KICAgICAgPHJlY3Qgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiMxYTQwMWMiLz4KICAgICAgPGVsbGlwc2UgY3g9IjIwIiBjeT0iMzAiIHJ4PSIxNSIgcnk9IjI1IiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjciLz4KICAgICAgPGVsbGlwc2UgY3g9IjgwIiBjeT0iMjAiIHJ4PSIxMiIgcnk9IjIwIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjgiLz4KICAgICAgPGVsbGlwc2UgY3g9IjUwIiBjeT0iNzAiIHJ4PSIxOCIgcnk9IjMwIiBmaWxsPSIjMjI4YjUzIiBvcGFjaXR5PSIwLjYiLz4KICAgICAgPGVsbGlwc2UgY3g9IjMwIiBjeT0iODAiIHJ4PSIxNCIgcnk9IjIyIiBmaWxsPSIjMTZhMzQxIiBvcGFjaXR5PSIwLjc1Ii8+CiAgICAgIDxlbGxpcHNlIGN4PSI3MCIgY3k9IjkwIiByeD0iMTYiIHJ5PSIyNSIgZmlsbD0iIzIyOGI1MyIgb3BhY2l0eT0iMC42NSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0idXJsKCNsZWFmX3BhdHRlcm4pIi8+Cjwvc3ZnPg==')`
        }}
      />
      <div className="absolute top-0 left-0 right-0 bottom-0 bg-black/75" />
      
      {/* Constrained Content */}
      <div className="relative z-30 max-w-7xl mx-auto px-8 md:px-12 lg:px-16 pt-[80px] md:pt-[100px] lg:pt-[120px] pb-20">
        {/* Hero Products Carousel - Shifted 300px up */}
        <div className="mb-12 md:mb-16 -mx-4 md:-mx-6 lg:-mx-8 -mt-[270px]">
          <HeroProductsCarousel />
        </div>
        
        {/* Welcome Title - Shifted 300px up */}
        <div className="text-center mb-4 mt-[150px]">
          <h2 className="font-sans text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-2">
            Welcome To Oksingreen
          </h2>
          <p className="font-sans text-xl md:text-2xl text-white text-center mt-2">
            Quality Horticulture & Agroforestry Products
          </p>
        </div>

        {/* Features Grid - Shifted 300px up */}
        <div className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-9 md:gap-32 lg:gap-40 xl:gap-48 items-end mt-[100px]">
          {/* Left Column - First 2 Feature Cards (Right Aligned) */}
          <div className="md:order-1 order-2 flex flex-col items-end relative z-50 md:mr-[50px]">
            <div className={isVisible ? "feature-anim-left" : "feature-anim-left-initial"}>
              <FeatureCard
                title={features[0].title}
                description={features[0].description}
                icon={features[0].icon}
                iconBgImage={features[0].iconBgImage}
                alignment={features[0].alignment}
              />
            </div>
            <div className={isVisible ? "feature-anim-left delay-150" : "feature-anim-left-initial delay-150"}>
              <FeatureCard
                title={features[1].title}
                description={features[1].description}
                icon={features[1].icon}
                iconBgImage={features[1].iconBgImage}
                alignment={features[1].alignment}
              />
            </div>
          </div>

          {/* Center Column - Empty (Cactus positioned absolutely below) */}
          <div className="md:order-2 order-1 relative flex justify-center items-end">
          </div>

          {/* Right Column - Last 2 Feature Cards (Left Aligned) */}
          <div className="md:order-3 order-3 flex flex-col items-start relative z-50 md:ml-[50px] md:mt-5">
            <div className={isVisible ? "feature-anim-right" : "feature-anim-right-initial"}>
              <FeatureCard
                title={features[2].title}
                description={features[2].description}
                icon={features[2].icon}
                iconBgImage={features[2].iconBgImage}
                alignment={features[2].alignment}
              />
            </div>
            <div className={isVisible ? "feature-anim-right delay-150" : "feature-anim-right-initial delay-150"}>
              <FeatureCard
                title={features[3].title}
                description={features[3].description}
                icon={features[3].icon}
                iconBgImage={features[3].iconBgImage}
                alignment={features[3].alignment}
              />
            </div>
          </div>
        </div>
      </div>

      {/* White Strip at Bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-white z-10"></div>

      {/* Cactus Image positioned absolutely to overlap 90% green / 10% white */}
      <img
        ref={cactusRef}
        src="/cactus/cactus.png"
        alt="Cactus"
        className={`absolute bottom-[10px] left-1/2 -translate-x-1/2 w-full max-w-sm h-auto object-contain scale-110 z-40 pointer-events-none ${isVisible ? 'cactus-entrance' : 'cactus-entrance-initial'}`}
        loading="lazy"
        decoding="async"
      />

      {/* CSS Animations */}
      <style jsx global>{`
        @keyframes cactus-entrance {
          0% {
            transform: translateX(-50%) translateY(300px) scale(1.1);
            opacity: 0;
          }
          100% {
            transform: translateX(-50%) translateY(-62px) scale(1.1);
            opacity: 1;
          }
        }
        .cactus-entrance-initial {
          transform: translateX(-50%) translateY(300px) scale(1.1);
          opacity: 0;
        }
        .cactus-entrance {
          animation: cactus-entrance 3s ease-out forwards;
        }
        @keyframes feature-slide-in-left {
          0% { transform: translateX(-100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .feature-anim-left-initial {
          transform: translateX(-100%);
          opacity: 0;
        }
        .feature-anim-left {
          animation: feature-slide-in-left 2.4s ease-out forwards;
        }
        @keyframes feature-slide-in-right {
          0% { transform: translateX(100%); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        .feature-anim-right-initial {
          transform: translateX(100%);
          opacity: 0;
        }
        .feature-anim-right {
          animation: feature-slide-in-right 2.4s ease-out forwards;
        }
        .delay-150 {
          animation-delay: 0.45s;
        }
      `}</style>
    </section>
  )
}

