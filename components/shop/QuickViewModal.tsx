'use client'

import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { X, ShoppingCart, Info, Table } from 'lucide-react'

interface QuickViewModalProps {
    isOpen: boolean
    closeModal: () => void
    product: any
}

export default function QuickViewModal({ isOpen, closeModal, product }: QuickViewModalProps) {
    if (!product) return null

    // Determine if it's a seed (Vegetable/Field Crop) or a Plant (Fruit/Forestry) to adjust table headers if needed
    // But table provided is mostly standard.
    // Table 1: No, HY/OP, Crop, Variety, Packing Size, Invoice Price, MRP, Rate Per Kg (Optional)
    // We will render variants in this detailed table.

    return (
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 text-center">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className="w-full max-w-5xl transform overflow-hidden rounded-2xl bg-white text-left align-middle shadow-xl transition-all flex flex-col max-h-[90vh]">

                                {/* Header */}
                                <div className="flex justify-between items-center p-6 border-b border-gray-100">
                                    <Dialog.Title as="h3" className="text-2xl font-bold text-gray-900 leading-6">
                                        {product.title}
                                    </Dialog.Title>
                                    <button onClick={closeModal} className="text-gray-400 hover:text-gray-600 transition-colors p-1 bg-gray-50 rounded-full">
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Scrollable Content */}
                                <div className="p-6 overflow-y-auto custom-scrollbar">
                                    <div className="flex flex-col lg:flex-row gap-8 mb-8">
                                        {/* Left: Image & Specs Card */}
                                        <div className="lg:w-1/3 flex flex-col gap-6">
                                            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 aspect-square relative">
                                                <img
                                                    src={product.image}
                                                    alt={product.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                {product.isHybrid && (
                                                    <span className="absolute top-4 left-4 bg-yellow-400 text-yellow-900 text-xs font-bold px-3 py-1 rounded-full shadow-sm border border-yellow-200">
                                                        F1 HYBRID
                                                    </span>
                                                )}
                                            </div>

                                            {/* Technical Specs Table (Image 2 Style) */}
                                            {product.specifications && (
                                                <div className="border border-gray-200 rounded-lg overflow-hidden">
                                                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-200 flex items-center gap-2">
                                                        <Info className="w-4 h-4 text-gray-500" />
                                                        <h4 className="font-semibold text-gray-900">Technical Specifications</h4>
                                                    </div>
                                                    <table className="w-full text-sm text-left">
                                                        <tbody className="divide-y divide-gray-100">
                                                            {product.specifications.map((spec: any, index: number) => (
                                                                <tr key={index} className="hover:bg-gray-50/50">
                                                                    <th className="px-4 py-3 font-medium text-gray-600 bg-gray-50/30 w-1/2">{spec.label}</th>
                                                                    <td className="px-4 py-3 text-gray-900 font-semibold">{spec.value}</td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right: Variants Table (Image 1 Style) */}
                                        <div className="lg:w-2/3 flex flex-col gap-6">
                                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                                                <div className="bg-primary-600 px-6 py-4 flex items-center justify-between">
                                                    <h4 className="font-bold text-white text-lg flex items-center gap-2">
                                                        <Table className="w-5 h-5 text-white/80" />
                                                        Available Varieties & Pricing
                                                    </h4>
                                                </div>

                                                <div className="overflow-x-auto">
                                                    <table className="w-full text-sm text-left">
                                                        <thead className="bg-gray-50 text-gray-700 uppercase font-bold text-xs">
                                                            <tr>
                                                                <th className="px-4 py-4 w-12 text-center border-r border-gray-200">No.</th>
                                                                <th className="px-4 py-4 border-r border-gray-200 text-center">Type</th>
                                                                <th className="px-4 py-4 border-r border-gray-200">Variety</th>
                                                                <th className="px-4 py-4 border-r border-gray-200 text-center">Pack Size</th>
                                                                <th className="px-4 py-4 border-r border-gray-200 text-right">MRP (₹)</th>
                                                                <th className="px-4 py-4 border-r border-gray-200 text-right bg-primary-50 text-primary-900">Our Price</th>
                                                                <th className="px-4 py-4 text-center">Action</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody className="divide-y divide-gray-100 font-medium">
                                                            {product.variants?.map((variant: any, index: number) => (
                                                                <tr key={index} className="hover:bg-blue-50/30 transition-colors group">
                                                                    <td className="px-4 py-4 text-center text-gray-500 border-r border-gray-100">{index + 1}</td>
                                                                    <td className="px-4 py-4 text-center text-gray-600 border-r border-gray-100">
                                                                        {product.isHybrid ? 'HY' : 'OP'}
                                                                    </td>
                                                                    <td className="px-4 py-4 border-r border-gray-100">
                                                                        <div className="font-bold text-gray-900">{variant.name}</div>
                                                                        <div className="text-xs text-gray-500 mt-1">{variant.specs}</div>
                                                                    </td>
                                                                    <td className="px-4 py-4 text-center text-gray-600 border-r border-gray-100">
                                                                        {variant.packSize || '-'}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-right text-gray-400 line-through border-r border-gray-100 decoration-red-400">
                                                                        {variant.mrp ? `₹${variant.mrp}` : '-'}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-right text-primary-700 font-bold text-base bg-primary-50/30 border-r border-gray-100">
                                                                        ₹{variant.price}
                                                                    </td>
                                                                    <td className="px-4 py-4 text-center">
                                                                        <button className="text-xs font-semibold bg-gray-900 text-white px-3 py-1.5 rounded hover:bg-primary-600 transition-colors flex items-center gap-1 mx-auto shadow-sm">
                                                                            <ShoppingCart className="w-3 h-3" />
                                                                            Add
                                                                        </button>
                                                                    </td>
                                                                </tr>
                                                            ))}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            {/* Additional Info Box (Optional) */}
                                            <div className="bg-blue-50 border border-blue-100 p-4 rounded-lg text-sm text-blue-800 flex gap-3">
                                                <Info className="w-5 h-5 flex-shrink-0 text-blue-500" />
                                                <p>
                                                    <strong>Note:</strong> Prices are per packet/unit. Bulk discounts available for orders above 50 units.
                                                    Contact support for wholesale inquiries. Specs are indicative based on ideal conditions.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    )
}
