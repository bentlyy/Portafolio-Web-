"use client"

interface ScrollIndicatorProps {
  currentSection: number
  totalSections: number
}

export default function ScrollIndicator({ currentSection, totalSections }: ScrollIndicatorProps) {
  const percent = totalSections > 1 ? (currentSection / (totalSections - 1)) * 100 : 0

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 h-48 w-[2px] bg-outline-variant/50 z-40 hidden lg:block">
      <div
        className="w-full bg-primary transition-all duration-500 ease-out"
        style={{ height: `${percent}%` }}
      />
    </div>
  )
}
