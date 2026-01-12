import { NextRequest, NextResponse } from 'next/server'

// In-memory storage for OTP (for VPS deployment)
// In production, consider using Redis or a database
const otpStore = new Map<string, { otp: string; expiresAt: number }>()

export async function POST(request: NextRequest) {
  try {
    const { phone } = await request.json()

    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Generate 6-digit OTP
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    const expiresAt = Date.now() + 60 * 1000 // 60 seconds expiry

    // Store OTP (hash it in production)
    otpStore.set(phone, { otp, expiresAt })

    // Send OTP via Twilio
    const twilioAccountSid = process.env.TWILIO_ACCOUNT_SID
    const twilioAuthToken = process.env.TWILIO_AUTH_TOKEN
    const twilioPhoneNumber = process.env.TWILIO_PHONE_NUMBER

    if (!twilioAccountSid || !twilioAuthToken || !twilioPhoneNumber) {
      console.error('Twilio credentials not configured')
      // In development, log the OTP instead
      if (process.env.NODE_ENV === 'development') {
        console.log(`OTP for ${phone}: ${otp}`)
        return NextResponse.json(
          { message: 'OTP sent (check console in development)', otp },
          { status: 200 }
        )
      }
      return NextResponse.json(
        { error: 'SMS service not configured' },
        { status: 500 }
      )
    }

    // Send SMS via Twilio
    const twilio = require('twilio')(twilioAccountSid, twilioAuthToken)

    await twilio.messages.create({
      body: `Your OTP for login is: ${otp}. Valid for 60 seconds.`,
      from: twilioPhoneNumber,
      to: phone,
    })

    return NextResponse.json(
      { message: 'OTP sent successfully' },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error sending OTP:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to send OTP' },
      { status: 500 }
    )
  }
}

// Export otpStore for use in verify route
export { otpStore }

