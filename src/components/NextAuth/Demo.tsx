import { auth } from "@/lib/auth"

import { LoginForm } from "./LoginForm"
import { LogoutButton } from "./LogoutButton"

export async function DemoAuth() {
  const session = await auth()

  return session ? <LogoutButton session={session} /> : <LoginForm />
}
