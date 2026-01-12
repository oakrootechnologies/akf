/* eslint-disable @next/next/no-img-element */
'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { Eye, ShoppingCart } from 'lucide-react'
import QuickViewModal from './QuickViewModal'

interface ShopProductCardProps {
    _id: string
    title: string
    slug: string
    image: string
    hoverImages?: string[]
    startingPrice: number
    isHybrid?: boolean
    isNew?: boolean
    cropType?: string
    product: any // Full product object for Quick View
}

export default function ShopProductCard({
    title,
    slug,
    image,
    hoverImages = [],
    startingPrice,
    isHybrid,
    isNew,
    cropType,
    product
}: ShopProductCardProps) {
    const [isHovered, setIsHovered] = useState(false)
    const [isQuickViewOpen, setIsQuickViewOpen] = useState(false)

    return (
        <>
            <div
                className="group relative flex flex-col bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg border border-gray-100/50"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Image Container */}
                <Link href={`/shop?product=${slug}`} prefetch={false} onClick={(e) => {
                    // Start navigation but Quick view is independent.
                    // Actually let's block nav if clicking quick view button?
                    // The button is absolute positioned, so it should capture click.
                    // But wrapping Link handles clicks.
                }} className="block relative aspect-[4/5] overflow-hidden bg-gray-50">
                    {/* Main Image */}
                    <img
                        src={image}
                        alt={title}
                        className={`w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-105 opacity-0' : 'scale-100 opacity-100'
                            }`}
                        loading="lazy"
                    />

                    {/* Hover Image (if available) */}
                    {hoverImages.length > 0 && (
                        <img
                            src={hoverImages[0]}
                            alt={`${title} hover`}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out ${isHovered ? 'scale-105 opacity-100' : 'scale-100 opacity-0'
                                }`}
                        />
                    )}

                    {/* Badges */}
                    <div className="absolute top-3 left-3 flex flex-col gap-1.5 z-10">
                        {isNew && (
                            <span className="bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
                                New
                            </span>
                        )}
                        {isHybrid && (
                            <span className="bg-yellow-500/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm">
                                F1 Hybrid
                            </span>
                        )}
                    </div>

                    {/* Quick View Button (Desktop) */}
                    <div className={`absolute bottom-4 left-0 right-0 px-4 flex justify-center transition-all duration-300 transform ${isHovered ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'
                        }`}>
                        <button
                            onClick={(e) => {
                                e.preventDefault();
                                e.stopPropagation();
                                setIsQuickViewOpen(true);
                            }}
                            className="w-full bg-white/95 backdrop-blur-sm text-gray-900 font-medium text-sm py-2.5 rounded shadow-lg hover:bg-primary-600 hover:text-white transition-colors flex items-center justify-center gap-2"
                        >
                            <Eye className="w-4 h-4" />
                            Quick View
                        </button>
                    </div>
                </Link>

                {/* Content */}
                <div className="p-4 flex flex-col flex-grow">
                    <Link href={`/shop?product=${slug}`} className="block group-hover:text-primary-700 transition-colors">
                        {cropType && (
                            <p className="text-xs text-gray-500 mb-1 font-medium uppercase tracking-wide">{cropType}</p>
                        )}
                        <h3 className="text-gray-900 font-medium leading-snug line-clamp-2 h-10 mb-2" title={title}>
                            {title}
                        </h3>
                    </Link>

                    <div className="mt-auto flex items-end justify-between border-t border-gray-50 pt-3">
                        <div className="flex flex-col">
                            <span className="text-[10px] text-gray-400 font-medium uppercase tracking-wide">Starting from</span>
                            <span className="text-lg font-bold text-primary-600">₹{startingPrice}</span>
                        </div>

                        <button className="text-primary-600 hover:text-primary-700 transition-colors p-1.5 rounded-full hover:bg-primary-50">
                            <ShoppingCart className="w-5 h-5" />
                        </button>
                    </div>
                </div>
            </div>

            <QuickViewModal
                isOpen={isQuickViewOpen}
                closeModal={() => setIsQuickViewOpen(false)}
                product={product}
            />
        </>
    )
}
