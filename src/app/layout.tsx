import "@/styles/globals.css"

import type { Metadata, Viewport } from "next"

import { NextInjectProvider } from "@/components/next-inject-providers"
import { baseMetadata, baseViewport } from "@/config/metadata"

export default function rootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <NextInjectProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextInjectProvider>
      </body>
    </html>
  )
}

export const metadata: Metadata = {
  ...baseMetadata,
}
export const viewport: Viewport = {
  ...baseViewport,
}
