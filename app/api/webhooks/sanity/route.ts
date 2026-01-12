import { NextRequest, NextResponse } from 'next/server'

// MOCK: Integration with Twilio / Interakt
// In a real scenario, this would import a lib function to send SMS/WhatsApp
async function sendWhatsAppNotification(orderId: string, status: string, phone: string) {
    console.log(`[$$ BILLABLE EVENT $$] Sending WhatsApp to ${phone} for Order ${orderId}. Status: ${status}. Cost: ₹4.`)
    // API Call to Twilio/Interakt would go here
    return true;
}

export async function POST(request: NextRequest) {
    try {
        // Verify signature if secret is present (Skipped for this demo task, but crucial for prod)
        // const signature = request.headers.get('sanity-webhook-signature')

        const body = await request.json()
        const { _id, _type, status, user } = body;

        // Ensure we are processing an order
        if (_type !== 'order') {
            return NextResponse.json({ message: 'Not an order' }, { status: 200 })
        }

        console.log(`Received Webhook for Order ${_id}. Status: ${status}`)

        // Trigger Notification on 'shipped' or 'delivered'
        if (status === 'shipped' || status === 'delivered') {
            await sendWhatsAppNotification(_id, status, user?.phone || 'Unknown')
            return NextResponse.json({ message: `Notification triggered for ${status}` }, { status: 200 })
        }

        return NextResponse.json({ message: 'No action needed' }, { status: 200 })

    } catch (error: any) {
        console.error('Webhook Error:', error)
        return NextResponse.json({ error: error.message }, { status: 500 })
    }
}
