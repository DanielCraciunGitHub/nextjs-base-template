/* eslint-disable no-return-assign */

"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import {
  loggerLink,
  unstable_httpBatchStreamLink as httpBatchStreamLink,
} from "@trpc/client"
import { createTRPCReact } from "@trpc/react-query"
import type { ThemeProviderProps } from "next-themes/dist/types"
import { useState } from "react"
import SuperJSON from "superjson"

import { siteConfig } from "@/config/next-inject"
import { type AppRouter } from "@/server"

export const api = createTRPCReact<AppRouter>()

const createQueryClient = () => new QueryClient()

let clientQueryClientSingleton: QueryClient | undefined

const getQueryClient = () => {
  if (typeof window === "undefined") {
    // Server: always make a new query client
    return createQueryClient()
  }
  // Browser: use singleton pattern to keep the same query client
  return (clientQueryClientSingleton ??= createQueryClient())
}

export function TrpcProvider({ children }: ThemeProviderProps) {
  const queryClient = getQueryClient()

  const [trpcClient] = useState(() =>
    api.createClient({
      links: [
        loggerLink({
          enabled: (op) =>
            process.env.NODE_ENV === "development" ||
            (op.direction === "down" && op.result instanceof Error),
        }),
        httpBatchStreamLink({
          transformer: SuperJSON,
          url: `${siteConfig.url}/api/trpc`,
          headers(opts) {
            const headers = new Headers()
            headers.set("x-trpc-source", "nextjs-react")
            return headers
          },
        }),
      ],
    })
  )

  return (
    <QueryClientProvider client={queryClient}>
      <api.Provider client={trpcClient} queryClient={queryClient}>
        {children}
      </api.Provider>
    </QueryClientProvider>
  )
}
