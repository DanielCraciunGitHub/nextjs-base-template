import { projectName } from "@/config/next-inject"
import { ResendDemo } from "@/components/Resend/ResendDemo"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
      <ResendDemo
        // ! Please don't spam me 🙏
        testEmail={"danielcraciun9174@gmail.com"}
        testName={"YOUR NAME"}
      />
    </section>
  )
}
