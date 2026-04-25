"use client"

import { useEffect } from "react"

interface ToastProps {
  message: string
  isVisible: boolean
  onClose: () => void
}

export function Toast({ message, isVisible, onClose }: ToastProps) {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isVisible, onClose])

  return (
    <div
      className={`fixed bottom-8 left-1/2 -translate-x-1/2 bg-wine text-ivory px-7 py-4 text-[0.44rem] tracking-[3px] uppercase z-[9000] whitespace-nowrap transition-all duration-400 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-20 pointer-events-none"
      }`}
    >
      {message}
    </div>
  )
}
