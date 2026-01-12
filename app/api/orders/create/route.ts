import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity.server'

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json()

    // Validate required fields
    if (!orderData.orderId || !orderData.userPhone || !orderData.products) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Create order in Sanity
    const order = {
      _type: 'order',
      orderId: orderData.orderId,
      userPhone: orderData.userPhone,
      products: orderData.products.map((p: any) => ({
        _type: 'object',
        productReference: {
          _type: 'reference',
          _ref: p.productReference,
        },
        quantity: p.quantity,
      })),
      status: orderData.status || 'Pending',
      shippingAddress: orderData.shippingAddress,
      courierName: orderData.courierName || '',
      trackingNumber: orderData.trackingNumber || '',
      customerName: orderData.customerName || '',
      pincode: orderData.pincode || '',
      city: orderData.city || '',
    }

    const createdOrder = await client.create(order)

    return NextResponse.json(
      {
        message: 'Order created successfully',
        order: {
          _id: createdOrder._id,
          orderId: orderData.orderId,
        },
      },
      { status: 201 }
    )
  } catch (error: any) {
    console.error('Error creating order:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to create order' },
      { status: 500 }
    )
  }
}

