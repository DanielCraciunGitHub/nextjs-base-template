import { api } from "@/server/serverApi"

export default async function Home() {
  testTrpc()
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        Hello world
      </div>
    </section>
  )
}
async function testTrpc() {
  const test = await api.helloRouter.hello()
  console.log(`${test} in app/(Navigation)/page.tsx`)
}
