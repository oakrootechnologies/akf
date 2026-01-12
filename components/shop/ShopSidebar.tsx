'use client'

import React, { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { ChevronDown, ChevronUp, X, Filter } from 'lucide-react'

interface ShopSidebarProps {
    className?: string
    mobileOpen?: boolean
    setMobileOpen?: (open: boolean) => void
}

const cropCategories = [
    { label: 'Vegetables (Sabzi)', value: 'vegetable' },
    { label: 'Field Crops (Kheti)', value: 'field_crop' },
    { label: 'Fruit Plantation (Fal)', value: 'fruit' },
    { label: 'Forestry (Timber)', value: 'forestry' },
]

// Dynamic crop types could be fetched, but hardcoding provided ones for now + some extras
const allCropTypes = [
    'Tomato', 'Maize', 'Okra', 'Chilli', 'Brinjal', 'Gourd', 'Beans'
]

export default function ShopSidebar({ className = '', mobileOpen, setMobileOpen }: ShopSidebarProps) {
    const router = useRouter()
    const searchParams = useSearchParams()

    // Collapsible State
    const [openSections, setOpenSections] = useState<Record<string, boolean>>({
        category: true,
        cropType: true,
        price: true,
        availability: true
    })

    // Filter State (Sync with URL)
    const category = searchParams.get('category') || ''
    const cropTypes = searchParams.getAll('cropType')
    const minPrice = searchParams.get('minPrice') || ''
    const maxPrice = searchParams.get('maxPrice') || ''
    const inStock = searchParams.get('inStock') === 'true'

    const toggleSection = (section: string) => {
        setOpenSections(prev => ({ ...prev, [section]: !prev[section] }))
    }

    const updateFilter = (key: string, value: string | string[] | boolean | null) => {
        const params = new URLSearchParams(searchParams.toString())

        // Reset page on filter change
        params.set('page', '1')

        if (value === null || value === '' || value === false) {
            params.delete(key)
        } else if (Array.isArray(value)) {
            params.delete(key)
            value.forEach(v => params.append(key, v))
        } else {
            params.set(key, String(value))
        }

        router.push(`/shop?${params.toString()}`)
    }

    const handleCropTypeChange = (type: string) => {
        const newTypes = cropTypes.includes(type)
            ? cropTypes.filter(t => t !== type)
            : [...cropTypes, type]
        updateFilter('cropType', newTypes)
    }

    return (
        <>
            {/* Mobile Overlay */}
            {mobileOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm"
                    onClick={() => setMobileOpen?.(false)}
                />
            )}

            {/* Sidebar Container */}
            <aside className={`
        fixed top-0 left-0 bottom-0 z-50 w-[280px] bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out overflow-y-auto
        lg:translate-x-0 lg:static lg:w-full lg:h-auto lg:border-none lg:bg-transparent lg:block
        ${mobileOpen ? 'translate-x-0' : '-translate-x-full'}
        ${className}
      `}>
                <div className="p-5 lg:p-0">
                    <div className="flex items-center justify-between mb-6 lg:hidden">
                        <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                            <Filter className="w-5 h-5" /> Filters
                        </h2>
                        <button onClick={() => setMobileOpen?.(false)} className="p-2 text-gray-500 hover:text-gray-900">
                            <X className="w-5 h-5" />
                        </button>
                    </div>

                    <div className="space-y-6">
                        {/* Category Section */}
                        <div className="border-b border-gray-200 pb-6 last:border-0 lg:border-gray-100">
                            <button
                                onClick={() => toggleSection('category')}
                                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3 group"
                            >
                                <span>Category</span>
                                {openSections['category'] ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                )}
                            </button>

                            {openSections['category'] && (
                                <div className="space-y-2.5 animate-in slide-in-from-top-2 duration-200">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input
                                            type="radio"
                                            name="category"
                                            checked={category === ''}
                                            onChange={() => updateFilter('category', null)}
                                            className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                                        />
                                        <span className="text-gray-600 group-hover:text-gray-900 transition-colors">All Categories</span>
                                    </label>
                                    {cropCategories.map(cat => (
                                        <label key={cat.value} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="radio"
                                                name="category"
                                                value={cat.value}
                                                checked={category === cat.value}
                                                onChange={() => updateFilter('category', cat.value)}
                                                className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                                            />
                                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{cat.label}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Crop Type Section */}
                        <div className="border-b border-gray-200 pb-6 last:border-0 lg:border-gray-100">
                            <button
                                onClick={() => toggleSection('cropType')}
                                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3 group"
                            >
                                <span>Crop Type</span>
                                {openSections['cropType'] ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                )}
                            </button>

                            {openSections['cropType'] && (
                                <div className="space-y-2.5 max-h-48 overflow-y-auto pr-2 custom-scrollbar animate-in slide-in-from-top-2 duration-200">
                                    {allCropTypes.map((type) => (
                                        <label key={type} className="flex items-center gap-3 cursor-pointer group">
                                            <input
                                                type="checkbox"
                                                checked={cropTypes.includes(type)}
                                                onChange={() => handleCropTypeChange(type)}
                                                className="w-4 h-4 rounded text-primary-600 border-gray-300 focus:ring-primary-500"
                                            />
                                            <span className="text-gray-600 group-hover:text-gray-900 transition-colors">{type}</span>
                                        </label>
                                    ))}
                                </div>
                            )}
                        </div>

                        {/* Price section */}
                        <div className="border-b border-gray-200 pb-6 last:border-0 lg:border-gray-100">
                            <button
                                onClick={() => toggleSection('price')}
                                className="flex items-center justify-between w-full text-left font-semibold text-gray-900 mb-3 group"
                            >
                                <span>Price</span>
                                {openSections['price'] ? (
                                    <ChevronUp className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                ) : (
                                    <ChevronDown className="w-4 h-4 text-gray-400 group-hover:text-primary-600" />
                                )}
                            </button>

                            {openSections['price'] && (
                                <div className="space-y-4 animate-in slide-in-from-top-2 duration-200">
                                    <div className="flex items-center gap-2">
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-2.5 text-gray-500 text-sm">₹</span>
                                            <input
                                                type="number"
                                                placeholder="Min"
                                                value={minPrice}
                                                onChange={(e) => updateFilter('minPrice', e.target.value)}
                                                className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                            />
                                        </div>
                                        <span className="text-gray-400">-</span>
                                        <div className="relative flex-1">
                                            <span className="absolute left-3 top-2.5 text-gray-500 text-sm">₹</span>
                                            <input
                                                type="number"
                                                placeholder="Max"
                                                value={maxPrice}
                                                onChange={(e) => updateFilter('maxPrice', e.target.value)}
                                                className="w-full pl-6 pr-3 py-2 border border-gray-300 rounded-md text-sm focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>

                        {/* Availability */}
                        <div className="border-b border-gray-200 pb-6 last:border-0 lg:border-gray-100">
                            <label className="flex items-center justify-between cursor-pointer group">
                                <span className="font-semibold text-gray-900">In Stock Only</span>
                                <div className="relative inline-flex items-center h-6 rounded-full w-11 transition-colors focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={inStock}
                                        onChange={(e) => updateFilter('inStock', e.target.checked)}
                                    />
                                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-primary-600"></div>
                                </div>
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    )
}
