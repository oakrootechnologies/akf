'use client'

import { useState } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  iconBgImage: string
  alignment: 'left' | 'right'
}

export default function FeatureCard({ title, description, icon, iconBgImage, alignment }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`relative z-50 mb-6 md:mb-8 ${
        // Mobile: vertical stack (icon top, text below), Desktop: horizontal layout
        'flex flex-col items-center md:flex-row md:items-start gap-4'
      } ${
        alignment === 'right' ? 'md:flex-row-reverse' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon - Top center on mobile, left/right on desktop */}
      <div 
        className={`w-16 h-16 md:w-14 lg:w-[72px] md:h-14 lg:h-[72px] rounded-full flex items-center justify-center bg-cover bg-center bg-no-repeat flex-shrink-0 ${
          isHovered ? 'scale-110 rotate-y-360' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${iconBgImage})` }}
      >
        {icon}
      </div>
      
      {/* Content - Center aligned on mobile, left/right on desktop */}
      <div className={`flex-1 min-w-0 text-center md:text-left ${alignment === 'right' ? 'md:text-right' : ''}`}>
        <h3 className="text-white text-base md:text-lg lg:text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-xs md:text-sm leading-[1.5] opacity-90 break-words whitespace-normal">
          {description}
        </p>
      </div>
      
      {/* CSS Animation for Icon Flip */}
      <style jsx>{`
        @keyframes rotate-y-360 {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        .rotate-y-360 {
          animation: rotate-y-360 1.5s ease-in-out;
        }
      `}</style>
    </div>
  )
}



