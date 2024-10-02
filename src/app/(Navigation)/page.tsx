import Link from "next/link"

import { projectName } from "@/config/next-inject"
import { validateRequest } from "@/lib/validate-request"

export default async function page() {
  const user = await validateRequest()

  return (
    <section className="flex w-full flex-col items-center">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
      {user && <Link href="/logout">Sign out mate</Link>}
      {!user && <Link href="/login">Sign out mate</Link>}
    </section>
  )
}
