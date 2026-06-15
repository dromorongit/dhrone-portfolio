'use client'

import { useEffect, useState } from 'react'

interface AnimatedCounterProps {
  value: string
  duration?: number
}

export default function AnimatedCounter({ value, duration = 2000 }: AnimatedCounterProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
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
  }, [value, duration])

  if (value.includes('%')) {
    return <span>{count}%</span>
  }
  if (value.includes('+')) {
    return <span>{count}+</span>
  }
  
  return <span>{count}</span>
}