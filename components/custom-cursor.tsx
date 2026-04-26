"use client"

import { useEffect, useRef, useState } from "react"

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null)
  const [isLarge, setIsLarge] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const positionRef = useRef({ x: 0, y: 0 })
  const rafRef = useRef<number | null>(null)

  useEffect(() => {
    const updateCursor = () => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${positionRef.current.x}px, ${positionRef.current.y}px, 0) translate(-50%, -50%)`
      }
      rafRef.current = requestAnimationFrame(updateCursor)
    }

    rafRef.current = requestAnimationFrame(updateCursor)

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current)
      }
    }
  }, [])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      positionRef.current = { x: e.clientX, y: e.clientY }
      if (!isVisible) setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)
    const handleMouseEnter = () => setIsVisible(true)

    document.addEventListener("mousemove", handleMouseMove)
    document.addEventListener("mouseleave", handleMouseLeave)
    document.addEventListener("mouseenter", handleMouseEnter)

    return () => {
      document.removeEventListener("mousemove", handleMouseMove)
      document.removeEventListener("mouseleave", handleMouseLeave)
      document.removeEventListener("mouseenter", handleMouseEnter)
    }
  }, [isVisible])

  useEffect(() => {
    const handleEnter = () => setIsLarge(true)
    const handleLeave = () => setIsLarge(false)

    const attachListeners = () => {
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .interactive, input, textarea, select"
      )
      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", handleEnter)
        el.addEventListener("mouseleave", handleLeave)
      })
    }

    attachListeners()

    // Re-attach listeners when DOM changes
    const observer = new MutationObserver(() => {
      attachListeners()
    })

    observer.observe(document.body, { childList: true, subtree: true })

    return () => {
      observer.disconnect()
      const interactiveElements = document.querySelectorAll(
        "a, button, [role='button'], .interactive, input, textarea, select"
      )
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleEnter)
        el.removeEventListener("mouseleave", handleLeave)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full hidden md:block transition-[width,height,background-color,border-color] duration-200 ease-out mix-blend-multiply ${
        isVisible ? "opacity-100" : "opacity-0"
      } ${
        isLarge
          ? "w-11 h-11 bg-blue-lt/40 border-[0.5px] border-blue-mid"
          : "w-2 h-2 bg-blue-mid"
      }`}
      style={{
        willChange: "transform",
      }}
    />
  )
}
