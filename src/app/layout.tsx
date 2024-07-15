import "@/styles/globals.css"

import NextTopLoader from "nextjs-toploader"

import { NextInjectProvider } from "@/components/next-inject-providers"

export default function rootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {/* // ! This component shows a green loading bar when traversing internal pages in your site */}
        <NextTopLoader showSpinner={false} color="green" />
        <NextInjectProvider attribute="class" defaultTheme="dark" enableSystem>
          {children}
        </NextInjectProvider>
      </body>
    </html>
  )
}
