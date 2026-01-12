import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity.server'

export async function GET(
  request: NextRequest,
  { params }: { params: { orderId: string } }
) {
  try {
    const query = `*[_type == "order" && orderId == $orderId][0] {
      _id,
      orderId,
      userPhone,
      status,
      shippingAddress,
      courierName,
      trackingNumber,
      customerName,
      pincode,
      city,
      products[] {
        productReference-> {
          _id,
          name,
          price
        },
        quantity
      },
      _createdAt,
      _updatedAt
    }`

    const order = await client.fetch(query, { orderId: params.orderId })

    if (!order) {
      return NextResponse.json(
        { error: 'Order not found' },
        { status: 404 }
      )
    }

    // Format products
    const formattedOrder = {
      ...order,
      products: order.products?.map((p: any) => ({
        productReference: p.productReference?._id,
        productName: p.productReference?.name,
        price: p.productReference?.price,
        quantity: p.quantity,
      })) || [],
    }

    return NextResponse.json({ order: formattedOrder }, { status: 200 })
  } catch (error: any) {
    console.error('Error fetching order:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to fetch order' },
      { status: 500 }
    )
  }
}

