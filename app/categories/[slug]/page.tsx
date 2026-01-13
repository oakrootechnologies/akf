'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import ProductCard from '@/components/ProductCard'
import { getCalculatedFallbackInventory } from '@/lib/fallback-data'
import { Product } from '@/models/Product'
import { ArrowLeft, CheckCircle, Leaf, TreeDeciduous, Sprout, ShoppingBag } from 'lucide-react'

// --- Configuration for Categories ---
const CATEGORY_CONFIG: Record<string, {
    title: string
    subtitle: string
    description: string
    expertise: string[]
    heroImage: string
    filterCategory: string
    icon: any
}> = {
    'vegetable-seeds': {
        title: "Vegetable Seeds",
        subtitle: "High Yielding F1 Hybrids & Open Pollinated Variants",
        description: "Explore our extensive range of high-quality vegetable seeds suited for diverse climatic conditions. From robust gourds to juicy tomatoes, we ensure premium germination rates and excellent crop health.",
        expertise: [
            "Genetically pure and disease-tolerant varieties",
            "Optimized for high yield and commercial farming",
            "Wide range of F1 Hybrids catering to all seasons",
            "Technical guidance for sowing and crop management"
        ],
        heroImage: "/Website Images/generated/vegetable_seeds.png",
        filterCategory: "vegetable",
        icon: Leaf
    },
    'fruit-plantation': {
        title: "Fruit Plantation",
        subtitle: "Establish High-Density Orchards with Elite Genetics",
        description: "Transform your land into a productive orchard with our premium tissue-cultured and grafted fruit plants. We provide elite varieties of Guava, Lemon, Dragon Fruit, and more, ensuring quick returns and sustainable income.",
        expertise: [
            "Certified tissue-culture and grafted saplings",
            "High-density plantation consultancy",
            "Early fruiting varieties with superior market value",
            "Complete guidance on pruning, nutrition, and harvesting"
        ],
        heroImage: "/Website Images/guava(Hero)/Hero.jpg",
        filterCategory: "fruit",
        icon: Sprout
    },
    'timber-forestry': {
        title: "Timber & Forestry",
        subtitle: "Long-Term Wealth Creation with Commercial Agroforestry",
        description: "Invest in the future with our high-value timber varieties like Sandalwood, Mahogany, and Teak. Agroforestry is the sustainable path to significant long-term wealth, and we provide the best genetics to maximize your timber volume.",
        expertise: [
            "Premium hardwood varieties: Sandalwood, Mahogany, Teak",
            "Fast-growing clones for quicker harvest cycles",
            "Inter-cropping models to maximize land utilization",
            "Legal and regulatory guidance for timber harvesting"
        ],
        heroImage: "/Website Images/Sandalwood(Hero)/Red sandalwood.jpeg",
        filterCategory: "forestry",
        icon: TreeDeciduous
    },
    'field-cash-crops': {
        title: "Field & Cash Crops",
        subtitle: "Stable Staples for Every Season",
        description: "Our field and cash crops selection includes high-performance Maize, Mustard, and more. Designed for resistance against common pests and environmental stress, our seeds ensure a bountiful harvest for traditional farmers.",
        expertise: [
            "Drought and pest-resistant field crop varieties",
            "High biomass and grain yield potential",
            "Uniform maturity for efficient harvesting",
            "Suitable for large-scale mechanized farming"
        ],
        heroImage: "/Website Images/generated/field_crops.png",
        filterCategory: "field_crop",
        icon: ShoppingBag
    }
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
    const config = CATEGORY_CONFIG[params.slug]
    const [products, setProducts] = useState<Product[]>([])

    useEffect(() => {
        if (config) {
            // In standalone mode, we filter the fallback inventory directly
            const allProducts = getCalculatedFallbackInventory() as unknown as Product[]
            const filtered = allProducts.filter(p => p.category === config.filterCategory)
            setProducts(filtered)
        }
    }, [config])

    if (!config) {
        return (
            <main className="min-h-screen bg-gray-50 flex flex-col justify-center items-center">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Category Not Found</h1>
                <Link href="/" className="text-primary-600 hover:text-primary-700 font-medium flex items-center gap-2">
                    <ArrowLeft className="w-5 h-5" /> Back to Home
                </Link>
            </main>
        )
    }

    const Icon = config.icon

    return (
        <main className="min-h-screen bg-white">
            <NavbarMain />

            {/* Hero Section */}
            <section className="relative h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src={config.heroImage}
                        alt={config.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50 backdrop-blur-[2px]"></div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                    <div className="flex justify-center mb-4">
                        <div className="bg-white/20 p-4 rounded-full backdrop-blur-md border border-white/30">
                            <Icon className="w-10 h-10 text-white" />
                        </div>
                    </div>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 shadow-sm">
                        {config.title}
                    </h1>
                    <p className="text-lg md:text-xl text-gray-100 font-medium max-w-2xl mx-auto">
                        {config.subtitle}
                    </p>
                </div>
            </section>

            {/* Expertise & Description Section */}
            <section className="py-16 md:py-24 bg-gray-50">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        {/* Left: Text Content */}
                        <div className="space-y-6">
                            <div className="inline-block px-4 py-1.5 bg-primary-100 text-primary-700 font-bold uppercase tracking-wider text-sm rounded-full">
                                Our Expertise
                            </div>
                            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
                                Why Choose Our <span className="text-primary-600">{config.title}?</span>
                            </h2>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                {config.description}
                            </p>

                            <ul className="space-y-4 mt-6">
                                {config.expertise.map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                                        <span className="text-gray-800 font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right: Visual/Image - Using a nice card style */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary-600 rounded-3xl transform rotate-3 opacity-10"></div>
                            <div className="relative bg-white p-2 rounded-3xl shadow-xl overflow-hidden">
                                <img
                                    src={config.heroImage}
                                    alt="Expertise"
                                    className="rounded-2xl w-full h-auto object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Product Catalog Section */}
            <section className="py-16 md:py-24 bg-white">
                <div className="container mx-auto px-4 max-w-7xl">
                    <div className="text-center mb-12 md:mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Explore Our <span className="text-primary-600">Collection</span>
                        </h2>
                        <div className="h-1 w-24 bg-primary-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                            Browse through our catalogue of verified high-quality seeds and saplings.
                            Click on any product to view details and purchase.
                        </p>
                    </div>

                    {products.length === 0 ? (
                        <div className="bg-gray-50 rounded-2xl p-12 text-center border border-gray-100">
                            <div className="flex justify-center mb-4">
                                <ShoppingBag className="w-16 h-16 text-gray-300" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">No Products Available Yet</h3>
                            <p className="text-gray-500 mb-6">We are currently updating our inventory for this category.</p>
                            <Link href="/" className="text-primary-600 font-semibold hover:underline">
                                Return to Home
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
                            {products.map((product, index) => (
                                <div key={index} className="transform hover:-translate-y-2 transition-all duration-300">
                                    <ProductCard
                                        title={product.title}
                                        image_default={product.images?.[0] || product.image || ''}
                                        images_hover={product.images?.slice(1) || product.hoverImages || []}
                                        startingPrice={product.startingPrice}
                                        cropType={product.cropType}
                                        isHybrid={product.isHybrid}
                                        variants={product.variants}
                                        slug={product.slug}
                                    />
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </main>
    )
}
