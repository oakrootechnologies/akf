import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity.server'

// GET /api/products/[id] - Public endpoint to fetch single product
export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const query = `*[_type == "product" && (_id == $id || slug.current == $id)][0] {
      _id,
      name,
      slug,
      type,
      price,
      stock,
      description,
      "image_url": image.asset->url,
      "images": images[].asset->url,
      scientificName,
      cultivationTime,
      benefits,
      _createdAt,
      _updatedAt
    }`
    
    const product = await client.fetch(query, { id: params.id })

    if (!product) {
      return NextResponse.json(
        { error: 'Product not found' },
        { status: 404 }
      )
    }

    // Format product to match expected structure
    const formattedProduct = {
      _id: product._id,
      id: product._id,
      name: product.name,
      slug: product.slug?.current || product.slug,
      type: product.type,
      price: product.price,
      stock: product.stock,
      description: product.description,
      image_url: product.image_url || '',
      images: product.images || [],
      scientificName: product.scientificName,
      cultivationTime: product.cultivationTime,
      benefits: product.benefits,
      created_at: product._createdAt,
      updated_at: product._updatedAt,
    }

    return NextResponse.json({ product: formattedProduct }, { status: 200 })
  } catch (error) {
    console.error('Error fetching product:', error)
    return NextResponse.json(
      { error: 'Failed to fetch product' },
      { status: 500 }
    )
  }
}
