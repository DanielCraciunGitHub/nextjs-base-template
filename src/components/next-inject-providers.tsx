"use client"

import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

import { TrpcProvider } from "@/server/reactApi"

// ! This is where all of your context providers should go.
// ! Transfer any existing providers here to ensure everything works fine.
export function NextInjectProvider({
  children,
  ...externalProps
}: ThemeProviderProps) {
  return (
    <NextThemesProvider {...externalProps}>
      <TrpcProvider>
        {children}
        {/* // ! Leave this comment to ensure the plugins inject correctly. */}
      </TrpcProvider>
    </NextThemesProvider>
  )
}
