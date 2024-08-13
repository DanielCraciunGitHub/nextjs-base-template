import { projectName } from "@/config/next-inject"
import { DemoAuth } from "@/components/NextAuth/Demo"

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
