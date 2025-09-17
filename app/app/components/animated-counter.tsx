
"use client"

import { useState, useEffect, useRef } from 'react'
import { useInView } from 'react-intersection-observer'

interface AnimatedCounterProps {
  end: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
}

const AnimatedCounter = ({ end, duration = 2000, suffix = '', prefix = '', className = 'font-bold text-4xl md:text-5xl everguard-text-gradient' }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })
  const hasAnimated = useRef(false)

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true
      const startTime = Date.now()
      const startCount = 0

      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smoother animation
        const easeOutExpo = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress)
        const currentCount = Math.floor(startCount + (end - startCount) * easeOutExpo)
        
        setCount(currentCount)

        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }

      requestAnimationFrame(updateCount)
    }
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default AnimatedCounter
