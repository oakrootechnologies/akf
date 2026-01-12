import { NextRequest, NextResponse } from 'next/server'
import { otpStore } from '@/lib/otpStore'
import { loginOrRegisterUser } from '@/lib/auth'

export async function POST(request: NextRequest) {
  // MOCK IMPLEMENTATION FOR FRONTEND BUILD
  // The actual backend logic requires Sanity credentials which might be missing during build

  return NextResponse.json(
    {
      message: 'OTP verified successfully (MOCK)',
      token: 'mock-token',
      phone: '1234567890',
      user: { role: 'customer' },
    },
    { status: 200 }
  )
}

