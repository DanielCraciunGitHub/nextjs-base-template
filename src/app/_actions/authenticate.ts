"use server"

import type { BuiltInProviderType } from "@auth/core/providers"

import { auth, signIn, signOut } from "@/lib/auth"

export async function authenticate(
  provider: BuiltInProviderType,
  pathname: string
) {
  const session = await auth()
  if (session) {
    await signOut()
  } else {
    await signIn(provider, {
      redirectTo: pathname === "/login" ? "/dashboard" : pathname,
    })
  }
}
export async function signOutAction({ redirectTo }: { redirectTo: string }) {
  await signOut({ redirectTo })
}

interface AuthResend {
  redirectTo: string
  email: string
}
export async function authenticateResend({ redirectTo, email }: AuthResend) {
  await signIn("resend", {
    email,
    redirect: false,
    callbackUrl: redirectTo === "/login" ? "/dashboard" : redirectTo,
  })

  return {
    ok: true,
    code: 200,
  }
}
