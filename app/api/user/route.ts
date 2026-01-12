import { NextRequest, NextResponse } from 'next/server'
import { client } from '@/lib/sanity.server'
import { getUserOrders } from '@/lib/auth'

export const dynamic = 'force-dynamic' // Ensure no caching at the route level

export async function GET(request: NextRequest) {
    try {
        const { searchParams } = new URL(request.url)
        const phone = searchParams.get('phone')

        if (!phone) {
            return NextResponse.json({ error: 'Phone required' }, { status: 400 })
        }

        // 1. Fetch User Profile
        // using server client ensures fresh data if configured with useCdn: false
        const user = await client.fetch(`*[_type == "user" && phone == $phone][0]`, { phone })

        if (!user) {
            return NextResponse.json({ error: 'User not found' }, { status: 404 })
        }

        // 2. Fetch Orders 
        // "Trap: Disable caching here. Every time he refreshes ... it hits the database"
        const orders = await getUserOrders(user._id)

        return NextResponse.json({
            user,
            orders
        }, {
            status: 200,
            headers: {
                // Double ensure no caching
                'Cache-Control': 'no-store, no-cache, must-revalidate, proxy-revalidate',
                'Pragma': 'no-cache',
                'Expires': '0',
            }
        })
    } catch (error: any) {
        console.error('Error fetching user data:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
