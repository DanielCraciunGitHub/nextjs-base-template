"use client"

import { RootProvider } from "fumadocs-ui/provider"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

// ! This is where all of your context providers should go.
// ! Transfer any existing providers here to ensure everything works fine.
export function NextInjectProvider({
  children,
  ...externalProps
}: ThemeProviderProps) {
  return (
    <RootProvider>
      <NextThemesProvider {...externalProps}>
        {children}
        {/* // ! Leave this comment to ensure the plugins inject correctly. */}
      </NextThemesProvider>
    </RootProvider>
  )
}
