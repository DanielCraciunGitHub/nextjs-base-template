import { projectName } from "@/config/next-inject"
import { DemoOneOff, DemoSubscription } from "@/components/Stripe/StripeDemo"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
      <div id="#Demo" className="flex space-x-2">
        <DemoOneOff />
        <DemoSubscription />
      </div>
    </section>
  )
}
