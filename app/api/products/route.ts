import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity.server'
import { urlFor } from '@/lib/sanity.client'

// GET /api/products - Public endpoint to fetch all products
export async function GET(request: NextRequest) {
  try {
    const query = `*[_type == "product"] | order(_createdAt desc) {
      _id,
      title,
      slug,
      isHybrid,
      cropCategory,
      cropType,
      "images": images[].asset->url,
      specifications,
      variants,
      _createdAt,
      _updatedAt
    }`

    const products = await client.fetch(query)

    // Format products to match expected structure
    const formattedProducts = products.map((product: any) => {
      // Determine starting price from variants
      const prices = product.variants?.map((v: any) => v.price) || []
      const startingPrice = prices.length > 0 ? Math.min(...prices) : 0

      return {
        _id: product._id,
        id: product._id,
        title: product.title,
        slug: product.slug?.current || product.slug,
        isHybrid: product.isHybrid,
        cropCategory: product.cropCategory,
        cropType: product.cropType,
        // Images: map asset->url
        images: product.images || [],
        // Specs logic
        specifications: product.specifications || [],
        // Variants logic
        variants: product.variants || [],
        // Helpers
        startingPrice,
        created_at: product._createdAt,
        updated_at: product._updatedAt,
      }
    })

    return NextResponse.json({ products: formattedProducts }, { status: 200 })
  } catch (error) {
    console.error('Error fetching products:', error)
    return NextResponse.json(
      { error: 'Failed to fetch products' },
      { status: 500 }
    )
  }
}
