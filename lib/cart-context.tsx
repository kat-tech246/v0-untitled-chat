"use client"

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react"
import { type Product } from "@/lib/products"

export interface CartItem {
  product: Product
  quantity: number
}

interface CartContextType {
  // Cart
  cartItems: CartItem[]
  addToCart: (product: Product, quantity?: number) => void
  updateCartQuantity: (productId: string, quantity: number) => void
  removeFromCart: (productId: string) => void
  cartCount: number
  
  // Wishlist
  wishlistItems: Product[]
  addToWishlist: (product: Product) => void
  removeFromWishlist: (productId: string) => void
  toggleWishlist: (product: Product) => void
  isInWishlist: (productId: string) => boolean
  
  // Toast
  toastMessage: string
  isToastVisible: boolean
  showToast: (message: string) => void
  hideToast: () => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistItems, setWishlistItems] = useState<Product[]>([])
  const [toastMessage, setToastMessage] = useState("")
  const [isToastVisible, setIsToastVisible] = useState(false)
  const [isHydrated, setIsHydrated] = useState(false)

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedCart = localStorage.getItem("azurel-cart")
      const savedWishlist = localStorage.getItem("azurel-wishlist")
      if (savedCart) {
        setCartItems(JSON.parse(savedCart))
      }
      if (savedWishlist) {
        setWishlistItems(JSON.parse(savedWishlist))
      }
    } catch (e) {
      console.error("Error loading cart/wishlist from localStorage:", e)
    }
    setIsHydrated(true)
  }, [])

  // Save to localStorage on changes
  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("azurel-cart", JSON.stringify(cartItems))
      } catch (e) {
        console.error("Error saving cart to localStorage:", e)
      }
    }
  }, [cartItems, isHydrated])

  useEffect(() => {
    if (isHydrated) {
      try {
        localStorage.setItem("azurel-wishlist", JSON.stringify(wishlistItems))
      } catch (e) {
        console.error("Error saving wishlist to localStorage:", e)
      }
    }
  }, [wishlistItems, isHydrated])

  const showToast = useCallback((message: string) => {
    setToastMessage(message)
    setIsToastVisible(true)
  }, [])

  const hideToast = useCallback(() => {
    setIsToastVisible(false)
  }, [])

  // Cart Functions
  const addToCart = useCallback((product: Product, quantity: number = 1) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === product.id)
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      }
      return [...prev, { product, quantity }]
    })
    showToast(`${product.name} added to bag`)
  }, [showToast])

  const updateCartQuantity = useCallback((productId: string, quantity: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    )
  }, [])

  const removeFromCart = useCallback((productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId))
    showToast("Item removed from bag")
  }, [showToast])

  // Wishlist Functions
  const addToWishlist = useCallback((product: Product) => {
    setWishlistItems((prev) => {
      if (prev.some((item) => item.id === product.id)) {
        return prev
      }
      return [...prev, product]
    })
    showToast(`${product.name} saved to wishlist`)
  }, [showToast])

  const removeFromWishlist = useCallback((productId: string) => {
    setWishlistItems((prev) => prev.filter((item) => item.id !== productId))
    showToast("Item removed from wishlist")
  }, [showToast])

  const isInWishlist = useCallback((productId: string) => {
    return wishlistItems.some((item) => item.id === productId)
  }, [wishlistItems])

  const toggleWishlist = useCallback((product: Product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id)
    } else {
      addToWishlist(product)
    }
  }, [isInWishlist, removeFromWishlist, addToWishlist])

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        updateCartQuantity,
        removeFromCart,
        cartCount,
        wishlistItems,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
        toastMessage,
        isToastVisible,
        showToast,
        hideToast,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}
