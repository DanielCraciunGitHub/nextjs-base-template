"use client"

import { SessionProvider } from "next-auth/react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// ! This is where all of your context providers should go.
// ! Transfer any existing providers here to ensure everything works fine.
export function NextInjectProvider({
  children,
  ...externalProps
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...externalProps}>
      <SessionProvider refetchOnWindowFocus={false}>
        {children}
        {/* // ! Leave this comment to ensure the plugins inject correctly. */}
      </SessionProvider>
    </NextThemesProvider>
  )
}
