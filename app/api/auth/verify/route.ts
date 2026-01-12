import { NextRequest, NextResponse } from 'next/server'
import { otpStore } from '../login/route'
import { loginOrRegisterUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  try {
    const { phone, otp } = await request.json()

    if (!phone || !otp) {
      return NextResponse.json(
        { error: 'Phone number and OTP are required' },
        { status: 400 }
      )
    }

    // Get stored OTP
    const storedData = otpStore.get(phone)

    if (!storedData) {
      return NextResponse.json(
        { error: 'OTP not found or expired. Please request a new OTP.' },
        { status: 400 }
      )
    }

    // Check if OTP is expired
    if (Date.now() > storedData.expiresAt) {
      otpStore.delete(phone)
      return NextResponse.json(
        { error: 'OTP has expired. Please request a new OTP.' },
        { status: 400 }
      )
    }

    // Verify OTP
    if (storedData.otp !== otp) {
      return NextResponse.json(
        { error: 'Invalid OTP' },
        { status: 400 }
      )
    }

    // OTP is valid - remove it from store
    otpStore.delete(phone)

    // Sync User with Sanity (Create if new, fetch if existing)
    const user = await loginOrRegisterUser(phone)

    // Generate a simple token (in production, use JWT or session)
    const token = Buffer.from(`${phone}:${Date.now()}`).toString('base64')

    return NextResponse.json(
      {
        message: 'OTP verified successfully',
        token,
        phone,
        user, // Return the full user object (including role)
      },
      { status: 200 }
    )
  } catch (error: any) {
    console.error('Error verifying OTP:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to verify OTP' },
      { status: 500 }
    )
  }
}

