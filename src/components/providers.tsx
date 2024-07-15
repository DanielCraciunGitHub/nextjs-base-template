"use client"

import { TrpcProvider } from "@/server/reactApi"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"

export function Provider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider {...props}>
      <TrpcProvider>{children}</TrpcProvider>
    </NextThemesProvider>
  )
}
