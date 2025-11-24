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
      className={`relative z-50 flex items-start gap-4 mb-8 ${
        alignment === 'right' ? 'flex-row-reverse' : 'flex-row'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div 
        className={`w-14 h-14 md:w-[72px] md:h-[72px] rounded-full flex items-center justify-center bg-cover bg-center bg-no-repeat flex-shrink-0 ${
          isHovered ? 'scale-110 rotate-y-360' : 'scale-100'
        }`}
        style={{ backgroundImage: `url(${iconBgImage})` }}
      >
        {icon}
      </div>
      
      {/* Content */}
      <div className={`flex-1 min-w-0 ${alignment === 'right' ? 'text-right' : 'text-left'}`}>
        <h3 className="text-white text-lg md:text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-xs md:text-sm leading-[1.5] opacity-90 break-words whitespace-normal overflow-hidden text-ellipsis line-clamp-2">
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



