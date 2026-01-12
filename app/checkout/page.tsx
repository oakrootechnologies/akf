'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { ArrowLeft, Loader2, MapPin, Phone, User } from 'lucide-react'
import Link from 'next/link'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import AddressAutocomplete from '@/components/Checkout/AddressAutocomplete'
import { useCart } from '@/hooks/useCart'

export default function CheckoutPage() {
  const router = useRouter()
  const { cart, getTotalPrice, clearCart, isLoaded } = useCart()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [addressError, setAddressError] = useState(false)

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: {
      fullAddress: '',
      pincode: '',
      city: '',
    },
    courierName: 'Delhivery',
  })

  useEffect(() => {
    // Redirect if cart is empty
    if (isLoaded && cart.length === 0) {
      router.push('/')
    }

    // Load user phone from localStorage if available
    const savedPhone = localStorage.getItem('userPhone')
    if (savedPhone) {
      setFormData((prev) => ({ ...prev, phone: savedPhone }))
    }
  }, [cart.length, isLoaded, router])

  const handleAddressSelect = (address: {
    fullAddress: string
    pincode: string
    city: string
  }) => {
    setFormData((prev) => ({
      ...prev,
      address,
    }))
    setAddressError(false)
  }

  const handleAddressError = (error: string) => {
    setAddressError(true)
    setError(error)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    if (!formData.address.fullAddress) {
      setAddressError(true)
      setError('Please select a valid address')
      return
    }

    if (addressError) {
      setError('Address Verification Service Down. Cannot place order.')
      return
    }

    setLoading(true)

    try {
      // Generate order ID
      const orderId = `ORD-${Date.now()}-${Math.random().toString(36).substr(2, 9).toUpperCase()}`

      // Prepare order data
      const orderData = {
        orderId,
        userPhone: formData.phone,
        products: cart.map((item) => ({
          productReference: item._id,
          quantity: item.quantity,
        })),
        status: 'Pending',
        shippingAddress: formData.address.fullAddress,
        courierName: formData.courierName,
        trackingNumber: '', // Will be generated later
        customerName: formData.name,
        pincode: formData.address.pincode,
        city: formData.address.city,
      }

      const response = await fetch('/api/orders/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to create order')
      }

      // Clear cart
      clearCart()

      // Redirect to order confirmation
      router.push(`/order-confirmation?orderId=${orderId}`)
    } catch (err: any) {
      setError(err.message || 'Failed to place order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (!isLoaded || cart.length === 0) {
    return (
      <main className="min-h-screen bg-white">
        <NavbarMain />
        <div className="flex items-center justify-center min-h-[60vh]">
          <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-700 hover:text-primary-600 transition-colors mb-6"
        >
          <ArrowLeft className="w-5 h-5" />
          <span>Back to Shopping</span>
        </Link>

        <h1 className="text-3xl font-bold text-gray-900 mb-8">Checkout</h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="md:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-4">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                Order Summary
              </h2>
              <div className="space-y-3 mb-6">
                {cart.map((item) => (
                  <div key={item._id} className="flex justify-between text-sm">
                    <span className="text-gray-600">
                      {item.name} × {item.quantity}
                    </span>
                    <span className="text-gray-900 font-medium">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-200 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    Total:
                  </span>
                  <span className="text-xl font-bold text-primary-600">
                    ${getTotalPrice().toFixed(2)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Checkout Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-md p-6 space-y-6">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-red-600 text-sm">{error}</p>
                </div>
              )}

              {/* Customer Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <User className="inline w-4 h-4 mr-1" />
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, name: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  <Phone className="inline w-4 h-4 mr-1" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData((prev) => ({ ...prev, phone: e.target.value }))
                  }
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                />
              </div>

              {/* Address Autocomplete */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  <MapPin className="inline w-4 h-4 mr-1" />
                  Shipping Address
                </label>
                <AddressAutocomplete
                  onAddressSelect={handleAddressSelect}
                  onError={handleAddressError}
                  defaultValue={formData.address.fullAddress}
                />
                {formData.address.pincode && (
                  <p className="mt-2 text-sm text-gray-600">
                    Pincode: {formData.address.pincode} | City: {formData.address.city}
                  </p>
                )}
              </div>

              {/* Courier Name */}
              <div>
                <label
                  htmlFor="courier"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Courier Service
                </label>
                <select
                  id="courier"
                  value={formData.courierName}
                  onChange={(e) =>
                    setFormData((prev) => ({
                      ...prev,
                      courierName: e.target.value,
                    }))
                  }
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="Delhivery">Delhivery</option>
                  <option value="BlueDart">BlueDart</option>
                  <option value="FedEx">FedEx</option>
                  <option value="DTDC">DTDC</option>
                </select>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading || addressError || !formData.address.fullAddress}
                className="w-full bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white py-3 rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Placing Order...</span>
                  </>
                ) : (
                  'Place Order'
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

