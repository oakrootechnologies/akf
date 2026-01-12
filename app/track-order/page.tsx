'use client'

import { useState, useEffect, Suspense } from 'react'
import { useSearchParams } from 'next/navigation'
import { Search, Loader2, Package, Truck, CheckCircle, Clock, XCircle } from 'lucide-react'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import Link from 'next/link'

const statusConfig: Record<string, { label: string; icon: any; color: string }> = {
  Pending: {
    label: 'Pending',
    icon: Clock,
    color: 'text-yellow-600 bg-yellow-50',
  },
  Confirmed: {
    label: 'Confirmed',
    icon: CheckCircle,
    color: 'text-blue-600 bg-blue-50',
  },
  Packed: {
    label: 'Packed',
    icon: Package,
    color: 'text-purple-600 bg-purple-50',
  },
  Shipped: {
    label: 'Shipped',
    icon: Truck,
    color: 'text-indigo-600 bg-indigo-50',
  },
  OutForDelivery: {
    label: 'Out for Delivery',
    icon: Truck,
    color: 'text-green-600 bg-green-50',
  },
  Delivered: {
    label: 'Delivered',
    icon: CheckCircle,
    color: 'text-green-600 bg-green-50',
  },
}

function TrackOrderContent() {
  const searchParams = useSearchParams()
  const [orderId, setOrderId] = useState('')
  const [loading, setLoading] = useState(false)
  const [order, setOrder] = useState<any>(null)
  const [error, setError] = useState('')

  // Check for orderId in URL params
  useEffect(() => {
    const urlOrderId = searchParams.get('orderId')
    if (urlOrderId) {
      setOrderId(urlOrderId)
      // Auto-search if orderId is in URL
      handleAutoSearch(urlOrderId)
    }
  }, [searchParams])

  const handleAutoSearch = async (id: string) => {
    setError('')
    setOrder(null)
    setLoading(true)

    try {
      const response = await fetch(`/api/orders/${id}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Order not found')
      }

      setOrder(data.order)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch order details')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setOrder(null)
    setLoading(true)

    try {
      const response = await fetch(`/api/orders/${orderId}`)
      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Order not found')
      }

      setOrder(data.order)
    } catch (err: any) {
      setError(err.message || 'Failed to fetch order details')
    } finally {
      setLoading(false)
    }
  }

  const getStatusInfo = (status: string) => {
    return statusConfig[status] || {
      label: status,
      icon: Package,
      color: 'text-gray-600 bg-gray-50',
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <NavbarMain />

      <div className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Track Your Order
        </h1>

        {/* Search Form */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <form onSubmit={handleSearch} className="flex gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter Order ID (e.g., ORD-1234567890-ABC123)"
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <button
              type="submit"
              disabled={loading || !orderId}
              className="bg-primary-600 hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Searching...</span>
                </>
              ) : (
                <>
                  <Search className="w-5 h-5" />
                  <span>Track</span>
                </>
              )}
            </button>
          </form>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-8">
            <div className="flex items-center gap-2">
              <XCircle className="w-5 h-5 text-red-600" />
              <p className="text-red-600">{error}</p>
            </div>
          </div>
        )}

        {/* Order Details */}
        {order && (
          <div className="bg-white rounded-lg shadow-md p-6 space-y-6">
            {/* Order Status */}
            <div>
              <h2 className="text-lg font-semibold text-gray-700 mb-3">
                Order Status
              </h2>
              <div className="flex items-center gap-3">
                {(() => {
                  const statusInfo = getStatusInfo(order.status)
                  const Icon = statusInfo.icon
                  return (
                    <div
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg ${statusInfo.color}`}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="font-semibold">{statusInfo.label}</span>
                    </div>
                  )
                })()}
              </div>
            </div>

            {/* Order Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Order ID
                </h3>
                <p className="text-gray-900">{order.orderId}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Phone Number
                </h3>
                <p className="text-gray-900">{order.userPhone}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Shipping Address
                </h3>
                <p className="text-gray-900">{order.shippingAddress}</p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Courier
                </h3>
                <p className="text-gray-900">{order.courierName || 'N/A'}</p>
              </div>
            </div>

            {/* Tracking Number */}
            {order.trackingNumber && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-2">
                  Tracking Number
                </h3>
                <p className="text-gray-900 mb-3">{order.trackingNumber}</p>
                <a
                  href={`https://www.delhivery.com/track/package/${order.trackingNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg transition-colors"
                >
                  <Truck className="w-4 h-4" />
                  <span>Track on Courier Site</span>
                </a>
              </div>
            )}

            {/* Products */}
            {order.products && order.products.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-gray-700 mb-3">
                  Order Items
                </h3>
                <div className="space-y-2">
                  {order.products.map((item: any, index: number) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-3 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="text-gray-900 font-medium">
                          {item.productName || `Product ${index + 1}`}
                        </p>
                        <p className="text-sm text-gray-600">
                          Quantity: {item.quantity}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Help Text */}
        <div className="mt-8 text-center text-gray-600">
          <p>
            Need help?{' '}
            <Link href="/contact" className="text-primary-600 hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>

      <Footer />
    </main>
  )
}

export default function TrackOrderPage() {
  return (
    <Suspense
      fallback={
        <main className="min-h-screen bg-gray-50">
          <NavbarMain />
          <div className="flex items-center justify-center min-h-[60vh]">
            <Loader2 className="w-8 h-8 animate-spin text-primary-600" />
          </div>
          <Footer />
        </main>
      }
    >
      <TrackOrderContent />
    </Suspense>
  )
}

