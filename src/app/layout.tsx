import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/LanguageProvider"

export const metadata: Metadata = {
  title: "Alejandro Muñoz | Desarrollador Full-Stack",
  description:
    "Portafolio de Alejandro Muñoz Garay — Ingeniero Civil en Informática y Desarrollador Full-Stack.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Cpath d='M32 6 L6 56 L18 56 L24 40 L40 40 L46 56 L58 56 Z' fill='%23c4c0ff'/%3E%3C/svg%3E",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&family=Hanken+Grotesk:wght@300..600&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
