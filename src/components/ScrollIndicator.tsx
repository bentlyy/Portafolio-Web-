"use client"

import { useEffect, useState } from "react"

export default function ScrollIndicator() {
  const [scrollPercent, setScrollPercent] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const percent =
        (window.scrollY /
          (document.documentElement.scrollHeight - window.innerHeight)) *
        100
      setScrollPercent(percent)
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 h-48 w-[2px] bg-white/10 z-40 hidden lg:block">
      <div
        className="w-full bg-primary transition-all duration-150 ease-out"
        style={{ height: `${scrollPercent}%` }}
      />
    </div>
  )
}
