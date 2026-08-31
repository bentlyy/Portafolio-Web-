import type { Metadata } from "next"
import "./globals.css"
import { LanguageProvider } from "@/lib/LanguageProvider"

export const metadata: Metadata = {
  title: "Alejandro Muñoz | Desarrollador Full-Stack",
  description:
    "Portafolio v2 de Alejandro Muñoz Garay — Ingeniero Civil en Informática y Desarrollador Full-Stack.",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300..700&family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
