'use client'

import { useState } from 'react'
import { Filter } from 'lucide-react'
import ShopSidebar from './ShopSidebar'

export default function MobileFilterButton() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-200 rounded-lg shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-50 active:bg-gray-100 transition-colors"
            >
                <Filter className="w-4 h-4" />
                Filters
            </button>

            <ShopSidebar mobileOpen={isOpen} setMobileOpen={setIsOpen} />
        </>
    )
}
