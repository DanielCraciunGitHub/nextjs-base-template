"use client"

import type { Session } from "@auth/core/types"
import { LogOutIcon } from "lucide-react"

import { signOutAction } from "@/app/_actions/authenticate"
import { Button } from "@/components/ui/button"

interface AuthSession {
  session?: Session | null
}

export function LogoutButton({ session }: AuthSession) {
  return session ? (
    <Button
      onClick={async () => {
        await signOutAction({ redirectTo: "/" })
      }}
      variant="destructive"
    >
      <LogOutIcon />
    </Button>
  ) : null
}
