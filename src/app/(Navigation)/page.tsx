import { api } from "@/server/serverApi"

import { projectName } from "@/config/next-inject"

export default async function page() {
  testTrpc()
  return (
    <section className="flex w-full flex-col items-center">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
    </section>
  )
}
async function testTrpc() {
  const test = await api.helloRouter.hello()
  console.log(`${test} in app/(Navigation)/page.tsx`)
}
