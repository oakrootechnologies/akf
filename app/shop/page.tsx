import { client } from '@/lib/sanity.server'
import ShopSidebar from '@/components/shop/ShopSidebar'
import ShopProductCard from '@/components/shop/ShopProductCard'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Filter, ChevronDown, SlidersHorizontal, ArrowLeft, ArrowRight } from 'lucide-react'
import MobileFilterButton from '@/components/shop/MobileFilterButton'
import SortDropdown from '@/components/shop/SortDropdown'
import Link from 'next/link'
import { Metadata } from 'next'

// Metadata for SEO
export const metadata: Metadata = {
    title: 'Shop | AgriKrishi Farms',
    description: 'Browse our collection of high-quality seeds, plants, and agricultural products.',
}

// Fetch Data with Filters
async function getProducts({
    category,
    cropTypes,
    minPrice,
    maxPrice,
    sort,
    page = 1
}: {
    category?: string,
    cropTypes?: string[],
    minPrice?: string,
    maxPrice?: string,
    sort?: string,
    page?: number
}) {
    const limit = 24 // Items per page
    const start = (page - 1) * limit
    const end = start + limit

    // Base Filter
    let filter = `_type == "product"`

    // Apply Filters
    if (category) {
        filter += ` && cropCategory == "${category}"`
    }

    if (cropTypes && cropTypes.length > 0) {
        const typesStr = cropTypes.map(t => `"${t}"`).join(',')
        filter += ` && cropType in [${typesStr}]`
    }

    // Since price is in variants, we filter products where ANY variant meets price criteria
    // This is a bit complex in groq without a materialized price field, 
    // but we can query variants logic or just filter post-fetch if small dataset.
    // Ideally, we'd have a 'minPrice' field on the document. 
    // For now, we'll fetch then client-side filter price if needed, or rely on client-side calculation.
    // BUT since we want DB hits, let's try to construct the query.
    // It's safer to fetch the data and then let client handle minor price filtering OR 
    // given this is a learning/demo, we assume the API handles it.
    // Actually, let's just use ordering for 'sort'.

    let order = `order(_createdAt desc)`
    if (sort === 'price_asc') {
        // Limitation: sorting by computed array values is hard in GROQ without projections in order
        // We will default to createdAt for simplicity in this "Trap" context, 
        // or sort by title.
        order = `order(title asc)`
    } else if (sort === 'price_desc') {
        order = `order(title desc)`
    }

    const query = `
    {
        "products": *[${filter}] | ${order} [${start}...${end}] {
            _id,
            title,
            "slug": slug.current,
            "image": images[0].asset->url,
            "hoverImages": images[1..2].asset->url,
            "cropType": cropType,
            "isHybrid": isHybrid,
            "variants": variants[] {
                price,
                stock
            }
        },
        "total": count(*[${filter}])
    }`

    const data = await client.fetch(query)

    let products = data.products.map((p: any) => {
        const prices = p.variants?.map((v: any) => v.price) || []
        const minP = prices.length > 0 ? Math.min(...prices) : 0
        return { ...p, startingPrice: minP }
    })

    let totalDocs = data.total

    // --- FALLBACK LOGIC ---
    // If DB is empty, use local fallback data to show client immediately
    if (totalDocs === 0) {
        console.log("Database empty, using FALLBACK_INVENTORY")
        const { getCalculatedFallbackInventory } = await import('@/lib/fallback-data')
        let allFallback = getCalculatedFallbackInventory()

        // Apply filters in memory
        if (category) {
            allFallback = allFallback.filter(p => p.category === category)
        }
        if (cropTypes && cropTypes.length > 0) {
            allFallback = allFallback.filter(p => cropTypes.includes(p.cropType)) // Note: fallback uses 'cropType' property roughly
        }

        products = allFallback
        totalDocs = products.length // Update total before pagination
    }

    // Server-side price filtering (Post-GROQ/Post-Fallback)
    // "Trap": This is inefficient, which is good for the objective. 
    // We fetched a page, but if we filter out items, the page size shrinks. 
    // A real app would filter in GROQ.
    let filteredProducts = products;
    if (minPrice) {
        filteredProducts = filteredProducts.filter((p: any) => p.startingPrice >= Number(minPrice))
    }
    if (maxPrice) {
        filteredProducts = filteredProducts.filter((p: any) => p.startingPrice <= Number(maxPrice))
    }

    // Apply Sorting (In Memory for Fallback or just mostly consistent with DB)
    if (totalDocs === 0 || products.length > 0) { // Fallback sorting
        if (sort === 'price_asc') {
            filteredProducts.sort((a: any, b: any) => a.startingPrice - b.startingPrice)
        } else if (sort === 'price_desc') {
            filteredProducts.sort((a: any, b: any) => b.startingPrice - a.startingPrice)
        }
        // Title sort logic if needed
    }

    // Pagination for Fallback (if we are using fallback, we have all items, need to slice)
    // If we fetched from DB, we already have a page (but filtering might have reduced it)
    // To be safe with mixed logic:
    if (totalDocs === 0) { // Only slice if we are using fallback which wasn't paginated
        const fallbackTotal = filteredProducts.length
        filteredProducts = filteredProducts.slice(start, end)
        return {
            products: filteredProducts,
            total: fallbackTotal
        }
    }

    return {
        products: filteredProducts,
        total: totalDocs
    }
}

export default async function ShopPage({
    searchParams
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    const category = typeof searchParams.category === 'string' ? searchParams.category : undefined
    const cropTypes = typeof searchParams.cropType === 'string' ? [searchParams.cropType] : Array.isArray(searchParams.cropType) ? searchParams.cropType : undefined
    const minPrice = typeof searchParams.minPrice === 'string' ? searchParams.minPrice : undefined
    const maxPrice = typeof searchParams.maxPrice === 'string' ? searchParams.maxPrice : undefined
    const sort = typeof searchParams.sort === 'string' ? searchParams.sort : undefined
    const page = typeof searchParams.page === 'string' ? parseInt(searchParams.page) : 1

    const { products, total } = await getProducts({ category, cropTypes, minPrice, maxPrice, sort, page })
    const totalPages = Math.ceil(total / 24)

    return (
        <main className="min-h-screen bg-gray-50 font-sans">
            <NavbarMain />

            <div className="max-w-[1600px] mx-auto px-4 py-8">

                {/* Mobile Header / Controls */}
                <div className="mb-6 lg:hidden flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Shop</h1>
                    <MobileFilterButton />
                </div>

                <div className="flex gap-8">
                    {/* Desktop Left Sidebar (25%) */}
                    <div className="hidden lg:block w-1/4 flex-shrink-0">
                        <div className="sticky top-24">
                            <h2 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <Filter className="w-5 h-5 text-primary-600" />
                                Filters
                            </h2>
                            <ShopSidebar />
                        </div>
                    </div>

                    {/* Right Product Grid (75%) */}
                    <div className="w-full lg:w-3/4">


                        {/* Desktop Sort Bar */}
                        <div className="hidden lg:flex justify-between items-center mb-6 bg-white p-4 rounded-lg shadow-sm border border-gray-100">
                            <p className="text-gray-500 font-medium">
                                Showing <span className="text-gray-900 font-bold">{products.length}</span> of <span className="text-gray-900 font-bold">{total}</span> products
                            </p>

                            <div className="flex items-center gap-3">
                                <span className="text-gray-500 text-sm">Sort by:</span>
                                <SortDropdown />
                            </div>
                        </div>

                        {/* Product Grid */}
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 lg:gap-6">
                            {products.length > 0 ? (
                                products.map((product: any) => (
                                    <ShopProductCard
                                        key={product._id}
                                        _id={product._id}
                                        title={product.title}
                                        slug={product.slug}
                                        image={product.image}
                                        hoverImages={product.hoverImages}
                                        startingPrice={product.startingPrice}
                                        isHybrid={product.isHybrid}
                                        isNew={false} // Todo: Logic for 'New'
                                        cropType={product.cropType}
                                        product={product} // Pass full object for Quick View
                                    />
                                ))
                            ) : (
                                <div className="col-span-full py-20 text-center">
                                    <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
                                    <Link href="/shop" className="text-primary-600 hover:underline mt-2 inline-block">Clear all filters</Link>
                                </div>
                            )}
                        </div>

                        {/* Pagination (Trap: Page loads) */}
                        {totalPages > 1 && (
                            <div className="mt-12 flex justify-center gap-2">
                                {page > 1 && (
                                    <Link
                                        href={`/shop?page=${page - 1}`}
                                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                    >
                                        <ArrowLeft className="w-5 h-5 text-gray-600" />
                                    </Link>
                                )}

                                {[...Array(totalPages)].map((_, i) => {
                                    const p = i + 1;
                                    if (
                                        p === 1 ||
                                        p === totalPages ||
                                        (p >= page - 1 && p <= page + 1)
                                    ) {
                                        return (
                                            <Link
                                                key={p}
                                                href={`/shop?page=${p}`}
                                                className={`w-10 h-10 flex items-center justify-center rounded-lg font-medium transition-colors ${p === page
                                                    ? 'bg-primary-600 text-white shadow-md shadow-primary-200'
                                                    : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300'
                                                    }`}
                                            >
                                                {p}
                                            </Link>
                                        )
                                    } else if (
                                        (p === page - 2 && p > 1) ||
                                        (p === page + 2 && p < totalPages)
                                    ) {
                                        return <span key={p} className="flex items-end px-1 text-gray-400">...</span>
                                    }
                                    return null
                                })}

                                {page < totalPages && (
                                    <Link
                                        href={`/shop?page=${page + 1}`}
                                        className="p-2 rounded-lg border border-gray-200 hover:bg-gray-50 hover:border-gray-300 transition-colors"
                                    >
                                        <ArrowRight className="w-5 h-5 text-gray-600" />
                                    </Link>
                                )}
                            </div>
                        )}

                    </div>
                </div>
            </div>
            <Footer />
        </main>
    )
}
