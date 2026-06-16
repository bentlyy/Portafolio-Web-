"use client"

import { personalInfo } from "@/lib/data"

export default function Footer() {
  return (
    <footer className="w-full py-8 px-8 border-t border-border">
      <p className="text-xs text-text-secondary/50 text-center">
        {personalInfo.name.split(" ").slice(0, 2).join(" ")} &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}
