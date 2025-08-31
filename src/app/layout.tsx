import type { Metadata } from "next";
import { Montserrat, Open_Sans } from "next/font/google";
import type React from "react";

import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
  weight: ["400", "600", "700", "900"],
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
  weight: ["400", "500", "600"],
})

export const metadata: Metadata = {
  title: "Vipex – Guia Mágico: economize no destino mais encantado do mundo",
  description:
    "Aprenda a pagar menos em passagens, hospedagem, ingressos e dentro dos parques do destino mais mágico do mundo. Acesso imediato ao e-book após a compra.",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt" suppressHydrationWarning>
      {/* MOVER as classes de fonte para o body, não no html */}
      <body className={`${montserrat.variable} ${openSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  )
}