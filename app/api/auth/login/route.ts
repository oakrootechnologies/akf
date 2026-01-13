import { NextRequest, NextResponse } from 'next/server'
import { otpStore } from '@/lib/otpStore'

export async function POST(request: NextRequest) {
  // MOCK LOGIN ROUTE
  // Bypasses Twilio and real OTP generation for build safety

  try {
    const { phone } = await request.json()

    if (!phone) {
      return NextResponse.json(
        { error: 'Phone number is required' },
        { status: 400 }
      )
    }

    // Determine a fake OTP
    const otp = "123456";
    const expiresAt = Date.now() + 60 * 1000

    // Store in memory so verify route (if using store) can see it, 
    // though verify is likely mocked too.
    otpStore.set(phone, { otp, expiresAt })

    console.log(`MOCK OTP for ${phone}: ${otp}`);

    return NextResponse.json(
      { message: 'OTP sent (MOCK: 123456)', otp },
      { status: 200 }
    )
  } catch (err: any) {
    return NextResponse.json({ error: err.message }, { status: 500 })
  }
}
