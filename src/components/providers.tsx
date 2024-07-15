"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function Provider({ children, ...externalProps }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...externalProps}>
      {children}
      {/* // ! Leave this comment to ensure the plugins inject correctly. */}
    </NextThemesProvider>
  )
}
