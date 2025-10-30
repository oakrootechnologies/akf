'use client'

import { useState } from 'react'

interface FeatureCardProps {
  title: string
  description: string
  icon: React.ReactNode
  iconBgColor: string
  alignment: 'left' | 'right'
}

export default function FeatureCard({ title, description, icon, iconBgColor, alignment }: FeatureCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div 
      className={`flex items-start gap-4 mb-8 ${
        alignment === 'right' ? 'flex-row-reverse' : 'flex-row'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Icon */}
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${iconBgColor} flex-shrink-0 transition-all duration-500 ${
        isHovered ? 'scale-110 rotate-y-360' : 'scale-100 rotate-y-0'
      }`}>
        {icon}
      </div>
      
      {/* Content */}
      <div className={`flex-1 ${alignment === 'right' ? 'text-right' : 'text-left'}`}>
        <h3 className="text-white text-xl font-bold mb-2">{title}</h3>
        <p className="text-white text-sm leading-relaxed opacity-90">
          {description}
        </p>
      </div>
    </div>
  )
}
