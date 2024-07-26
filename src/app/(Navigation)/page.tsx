import { projectName } from "@/config/next-inject"
import { auth } from "@/lib/auth"
import { LoginForm } from "@/components/NextAuth/LoginForm"
import { LogoutButton } from "@/components/NextAuth/LogoutButton"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>

      <DemoAuth />
    </section>
  )
}
async function DemoAuth() {
  const session = await auth()

  return session ? <LogoutButton session={session} /> : <LoginForm />
}
