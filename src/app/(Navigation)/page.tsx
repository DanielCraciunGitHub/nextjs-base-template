import { projectName } from "@/config/next-inject"

export default async function page() {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
    </section>
  )
}
