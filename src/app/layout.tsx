import "@/styles/globals.css"

import { NextInjectProvider } from "@/components/next-inject-providers"

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
