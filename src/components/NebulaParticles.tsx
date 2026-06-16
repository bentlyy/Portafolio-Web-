"use client"

import { useEffect, useRef } from "react"

export default function NebulaParticles() {
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement("div")
      particle.className = "fixed rounded-full pointer-events-none bg-primary opacity-20"
      const size = Math.random() * 3 + 1
      particle.style.width = `${size}px`
      particle.style.height = `${size}px`
      particle.style.left = `${Math.random() * 100}vw`
      particle.style.top = "110vh"
      particle.style.zIndex = "0"

      document.body.appendChild(particle)

      const duration = Math.random() * 10000 + 10000
      const animation = particle.animate(
        [
          { transform: "translateY(0)", opacity: 0.2 },
          { transform: "translateY(-120vh)", opacity: 0 },
        ],
        {
          duration,
          easing: "linear",
        }
      )

      animation.onfinish = () => particle.remove()
    }

    intervalRef.current = setInterval(createParticle, 2000)

    for (let i = 0; i < 5; i++) {
      setTimeout(createParticle, i * 400)
    }

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current)
    }
  }, [])

  return null
}
