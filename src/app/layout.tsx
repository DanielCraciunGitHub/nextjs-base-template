import "@/styles/globals.css"

import { Bricolage_Grotesque } from "next/font/google"

import { NextInjectProvider } from "@/components/next-inject-providers"
import { cn } from "@/lib/utils"

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
})

export default function rootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn("flex min-h-screen flex-col", bricolage.className)}>
        <NextInjectProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextInjectProvider>
      </body>
    </html>
  )
}
