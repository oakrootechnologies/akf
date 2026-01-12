'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import NavbarMain from '@/components/NavbarMain'
import Footer from '@/components/Footer'
import { Package, MapPin, LogOut, ChevronRight, X, Loader2, User } from 'lucide-react'

// Types
interface OrderItem {
    productTitle: string
    quantity: number
    price: number
    variantKey: string
    product?: {
        title: string
        slug: { current: string }
        image: string
    }
}

interface Order {
    _id: string
    orderId: string
    date: string
    totalAmount: number
    status: 'pending' | 'shipped' | 'delivered' | 'cancelled'
    items: OrderItem[]
}

interface UserProfile {
    _id: string
    phone: string
    role: string
    addresses: any[] // TODO: Define address type
}

export default function AccountPage() {
    const router = useRouter()
    const [activeTab, setActiveTab] = useState<'orders' | 'addresses'>('orders')
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState<UserProfile | null>(null)
    const [orders, setOrders] = useState<Order[]>([])
    const [selectedOrder, setSelectedOrder] = useState<Order | null>(null)

    // Fetch Data on Mount (Trap: Fresh data every time)
    useEffect(() => {
        const fetchUserData = async () => {
            const phone = localStorage.getItem('userPhone')
            if (!phone) {
                router.push('/login')
                return
            }

            try {
                setLoading(true)
                // Explicitly asking for fresh data via search param valid buffer
                const res = await fetch(`/api/user?phone=${phone}&t=${Date.now()}`, {
                    cache: 'no-store',
                    headers: { 'Cache-Control': 'no-cache' }
                })

                if (!res.ok) {
                    if (res.status === 404) {
                        // Handle user not compiled yet or error
                        console.error("User not found")
                    }
                    throw new Error('Failed to fetch data')
                }

                const data = await res.json()
                setUser(data.user)
                setOrders(data.orders || [])
            } catch (error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }

        fetchUserData()
    }, [router])

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        localStorage.removeItem('userPhone')
        router.push('/login')
    }

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'delivered': return 'bg-green-100 text-green-700 border-green-200'
            case 'shipped': return 'bg-blue-100 text-blue-700 border-blue-200'
            case 'cancelled': return 'bg-red-100 text-red-700 border-red-200'
            default: return 'bg-yellow-100 text-yellow-700 border-yellow-200'
        }
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-IN', {
            day: 'numeric', month: 'long', year: 'numeric'
        })
    }

    return (
        <main className="min-h-screen bg-gray-50">
            <NavbarMain />

            <div className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
                <h1 className="text-3xl font-bold text-gray-900 mb-8">My Account</h1>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Sidebar */}
                    <aside className="w-full lg:w-64 flex-shrink-0">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                            <div className="p-6 border-b border-gray-100 bg-gray-50/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center text-primary-600">
                                        <User className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <p className="font-medium text-gray-900">Hello,</p>
                                        <p className="text-sm text-gray-500">{user?.phone || 'User'}</p>
                                    </div>
                                </div>
                            </div>
                            <nav className="p-2">
                                <button
                                    onClick={() => setActiveTab('orders')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'orders'
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <Package className="w-4 h-4" />
                                    My Orders
                                </button>
                                <button
                                    onClick={() => setActiveTab('addresses')}
                                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${activeTab === 'addresses'
                                            ? 'bg-primary-50 text-primary-700'
                                            : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                        }`}
                                >
                                    <MapPin className="w-4 h-4" />
                                    Addresses
                                </button>
                                <div className="my-2 border-t border-gray-100"></div>
                                <button
                                    onClick={handleLogout}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors"
                                >
                                    <LogOut className="w-4 h-4" />
                                    Logout
                                </button>
                            </nav>
                        </div>
                    </aside>

                    {/* Content Area */}
                    <div className="flex-1">
                        {loading ? (
                            <div className="flex items-center justify-center h-64 bg-white rounded-xl shadow-sm border border-gray-100">
                                <Loader2 className="w-8 h-8 text-primary-500 animate-spin" />
                            </div>
                        ) : (
                            <div className="bg-white rounded-xl shadow-sm border border-gray-100 min-h-[500px] p-6">
                                {activeTab === 'orders' && (
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Order History</h2>
                                        {orders.length === 0 ? (
                                            <div className="text-center py-12">
                                                <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                    <Package className="w-8 h-8 text-gray-400" />
                                                </div>
                                                <h3 className="text-lg font-medium text-gray-900 mb-1">No orders yet</h3>
                                                <p className="text-gray-500">When you place an order, it will appear here.</p>
                                            </div>
                                        ) : (
                                            <div className="space-y-4">
                                                {orders.map((order) => (
                                                    <div key={order._id} className="border border-gray-200 rounded-lg p-5 hover:border-primary-200 transition-colors bg-white">
                                                        <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                                            <div>
                                                                <p className="text-sm text-gray-500 mb-1">Order ID</p>
                                                                <p className="font-mono font-medium text-gray-900">#{order.orderId || order._id.slice(0, 8).toUpperCase()}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-gray-500 mb-1">Date</p>
                                                                <p className="font-medium text-gray-900">{formatDate(order.date)}</p>
                                                            </div>
                                                            <div>
                                                                <p className="text-sm text-gray-500 mb-1">Total Amount</p>
                                                                <p className="font-medium text-gray-900">₹{order.totalAmount}</p>
                                                            </div>
                                                            <div>
                                                                <span className={`inline-inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(order.status)} uppercase tracking-wide`}>
                                                                    {order.status}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                                            <p className="text-sm text-gray-600">
                                                                {order.items?.length || 0} items
                                                            </p>
                                                            <button
                                                                onClick={() => setSelectedOrder(order)}
                                                                className="text-primary-600 hover:text-primary-700 text-sm font-medium flex items-center gap-1 group"
                                                            >
                                                                View Details
                                                                <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'addresses' && (
                                    <div>
                                        <h2 className="text-xl font-bold text-gray-900 mb-6">Saved Addresses</h2>
                                        <div className="text-center py-12">
                                            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                                <MapPin className="w-8 h-8 text-gray-400" />
                                            </div>
                                            <h3 className="text-lg font-medium text-gray-900 mb-1">No addresses saved</h3>
                                            <p className="text-gray-500">Addresses will be saved here when you checkout.</p>
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <Footer />

            {/* Order Details Modal */}
            {selectedOrder && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
                    <div className="bg-white rounded-xl shadow-xl w-full max-w-2xl max-h-[85vh] overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
                        <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-gray-50">
                            <div>
                                <h3 className="text-lg font-bold text-gray-900">Order Details</h3>
                                <p className="text-sm text-gray-500">#{selectedOrder.orderId || selectedOrder._id.slice(0, 8).toUpperCase()}</p>
                            </div>
                            <button
                                onClick={() => setSelectedOrder(null)}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        <div className="p-6 overflow-y-auto">
                            <div className="flex flex-col gap-6">
                                {/* Status Bar */}
                                <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
                                    <div className="flex-1">
                                        <p className="text-sm text-gray-500 mb-1">Order Status</p>
                                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(selectedOrder.status)} uppercase tracking-wide`}>
                                            {selectedOrder.status}
                                        </span>
                                    </div>
                                    <div className="flex-1 text-right">
                                        <p className="text-sm text-gray-500 mb-1">Ordered On</p>
                                        <p className="font-medium text-gray-900">{formatDate(selectedOrder.date)}</p>
                                    </div>
                                </div>

                                {/* Items */}
                                <div>
                                    <h4 className="font-semibold text-gray-900 mb-4">Items Ordered</h4>
                                    <div className="divide-y divide-gray-100">
                                        {selectedOrder.items?.map((item, idx) => (
                                            <div key={idx} className="py-4 flex gap-4 first:pt-0 last:pb-0">
                                                <div className="w-16 h-16 bg-gray-100 rounded-lg flex-shrink-0 overflow-hidden">
                                                    {item.product?.image && (
                                                        <img src={item.product.image} alt={item.productTitle} className="w-full h-full object-cover" />
                                                    )}
                                                </div>
                                                <div className="flex-1">
                                                    <p className="font-medium text-gray-900">{item.productTitle}</p>
                                                    {item.variantKey && <p className="text-sm text-gray-500">Variant: {item.variantKey}</p>}
                                                    <div className="flex items-center justify-between mt-2">
                                                        <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
                                                        <p className="font-medium text-gray-900">₹{item.price * item.quantity}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Total */}
                                <div className="border-t border-gray-100 pt-4 flex items-center justify-between">
                                    <p className="font-bold text-gray-900 text-lg">Total Amount</p>
                                    <p className="font-bold text-primary-600 text-xl">₹{selectedOrder.totalAmount}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </main>
    )
}
