"use client"

import { useEffect, useState } from "react"

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isLarge, setIsLarge] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseEnter = () => setIsLarge(true)
    const handleMouseLeave = () => setIsLarge(false)

    document.addEventListener("mousemove", handleMouseMove)

    const interactiveElements = document.querySelectorAll(
      "a, button, [role='button'], .interactive"
    )
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter)
      el.addEventListener("mouseleave", handleMouseLeave)
    })

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter)
        el.removeEventListener("mouseleave", handleMouseLeave)
      })
    }
  }, [])

  // Re-attach listeners when DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const handleMouseEnter = () => setIsLarge(true)
      const handleMouseLeave = () => setIsLarge(false)

      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .interactive"
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleMouseEnter)
        el.addEventListener("mouseleave", handleMouseLeave)
      })
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => observer.disconnect()
  }, [])

  if (!isVisible) return null

  return (
    <div
      className={`fixed pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2 rounded-full transition-all duration-[350ms] mix-blend-multiply hidden md:block ${
        isLarge
          ? "w-11 h-11 bg-blue-lt/40 border-[0.5px] border-blue-mid"
          : "w-2 h-2 bg-blue-mid"
      }`}
      style={{
        left: position.x,
        top: position.y,
      }}
    />
  )
}
