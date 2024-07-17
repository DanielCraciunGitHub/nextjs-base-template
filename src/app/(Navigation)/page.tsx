import { auth } from "@/lib/auth"
import AuthButton from "@/components/NextAuth/AuthButton"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {"Hello <NEXT-INJECT-NAME>"}
      </div>

      <DemoAuthButton />
    </section>
  )
}
async function DemoAuthButton() {
  const session = await auth()

  return <AuthButton session={session} />
}
