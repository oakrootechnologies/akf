'use client'

import { useEffect, useRef, useState } from 'react'

/**
 * Custom hook for IntersectionObserver to detect when element enters viewport
 * @param options - IntersectionObserver options
 * @returns [ref, isInView] - ref to attach to element, boolean indicating visibility
 */
export function useInView(options?: IntersectionObserverInit) {
  const [isInView, setIsInView] = useState(false)
  const ref = useRef<HTMLElement | null>(null)

  useEffect(() => {
    // Guard against SSR
    if (typeof window === 'undefined' || !ref.current) {
      return
    }

    const element = ref.current
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          // Unobserve after first intersection for performance
          observer.unobserve(element)
        }
      },
      {
        rootMargin: '50px', // Start loading 50px before entering viewport
        threshold: 0.1,
        ...options,
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [options])

  return [ref, isInView] as const
}

