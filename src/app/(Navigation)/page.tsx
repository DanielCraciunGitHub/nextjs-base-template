import { ResendDemo } from "@/components/Resend/ResendDemo"
import { projectName } from "@/config/next-inject"

export default async function page() {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
      <ResendDemo
        // ! Please don't spam me 🙏
        email="danielcraciun9174@gmail.com"
        name="YOUR NAME"
      />
    </section>
  )
}
