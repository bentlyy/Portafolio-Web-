import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/LanguageProvider"

export const metadata: Metadata = {
  title: "Alejandro Muñoz | Desarrollador Full-Stack",
  description:
    "Portafolio de Alejandro Muñoz Garay — Ingeniero Civil en Informática, Full-Stack Developer, DevOps & ML.",
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64'%3E%3Ctext x='32' y='56' font-family='system-ui, sans-serif' font-size='56' font-weight='700' fill='%23c4c0ff' text-anchor='middle'%3EA%3C/text%3E%3C/svg%3E",
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
