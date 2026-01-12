'use client'

import { useState, useEffect } from 'react'

export interface CartItem {
  _id: string
  // [OAKROOT] Variant specific fields
  variantKey?: string // Unique key for the variant (or SKU if key unavailable)
  sku?: string
  packSize?: string

  name: string
  slug: string
  price: number
  image_url: string
  quantity: number
}

// Helper to generate a unique cart key
export const getCartKey = (item: Partial<CartItem>) => {
  return `${item._id}-${item.variantKey || item.sku || 'default'}`
}

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([])
  const [isLoaded, setIsLoaded] = useState(false)

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cart')
      if (savedCart) {
        try {
          setCart(JSON.parse(savedCart))
        } catch (e) {
          console.error('Error loading cart from localStorage:', e)
        }
      }
      setIsLoaded(true)
    }
  }, [])

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isLoaded && typeof window !== 'undefined') {
      localStorage.setItem('cart', JSON.stringify(cart))
    }
  }, [cart, isLoaded])

  const addToCart = (product: Omit<CartItem, 'quantity'>) => {
    setCart((prevCart) => {
      const productKey = getCartKey(product)
      const existingItem = prevCart.find((item) => getCartKey(item) === productKey)

      if (existingItem) {
        return prevCart.map((item) =>
          getCartKey(item) === productKey
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      return [...prevCart, { ...product, quantity: 1 }]
    })
  }

  const removeFromCart = (cartItemKey: string) => {
    setCart((prevCart) => prevCart.filter((item) => getCartKey(item) !== cartItemKey))
  }

  const updateQuantity = (cartItemKey: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(cartItemKey)
      return
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        getCartKey(item) === cartItemKey ? { ...item, quantity } : item
      )
    )
  }

  const clearCart = () => {
    setCart([])
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return {
    cart,
    isLoaded,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getTotalPrice,
    getTotalItems,
  }
}

