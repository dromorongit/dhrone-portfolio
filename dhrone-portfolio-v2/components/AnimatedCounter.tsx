'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export default function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const [isInView, setIsInView] = useState(false)
  const spanRef = useRef<HTMLSpanElement | null>(null)

  useEffect(() => {
    const target = spanRef.current
    if (!target) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.4 }
    )

    observer.observe(target)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isInView) return

    let numericValue = parseInt(value.replace('+', '').replace('%', ''))
    if (isNaN(numericValue)) {
      numericValue = 0
    }

    let startTime: number
    let animationFrame: number

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / duration, 1)
      setCount(Math.floor(progress * numericValue))
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(animationFrame)
  }, [isInView, value, duration])

  if (value.includes('%')) {
    return <span ref={spanRef}>{count}%</span>
  }
  if (value.includes('+')) {
    return <span ref={spanRef}>{count}+</span>
  }

  return <span ref={spanRef}>{count}</span>
}