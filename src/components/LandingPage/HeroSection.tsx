import Image from "next/image"

import { MainCTA } from "./CTA"

interface HeroSectionProps {}

export const HeroSection = async ({}: HeroSectionProps) => {
  return (
    <div className="flex flex-col">
      <section className="mx-auto my-24 flex max-w-7xl flex-col items-center justify-center gap-16 p-8 lg:flex-row lg:items-start lg:gap-20 lg:py-20">
        {/* Left side - For Hook, description, and CTA */}
        <div className="flex w-full flex-col space-y-10 lg:items-start">
          {/* Hook */}
          <div className="flex flex-col items-center space-y-3 text-4xl font-bold tracking-tight md:text-6xl lg:items-start">
            <div>Skip the setup.</div>
            <div>
              Code <span className="text-green-500">faster</span>
            </div>
          </div>
          {/* description */}
          <div className="max-w-xl text-center tracking-tight text-muted-foreground md:text-xl lg:text-start">
            Inject payments, databases, authentication in just one click with
            our powerful Next.js CLI.
          </div>
          {/* CTA */}
          <MainCTA href="/" className="h-12 rounded-md px-16" />
        </div>
        {/* Right side - For Image */}
        <div className="flex w-full flex-col md:w-3/4">
          <Image src="" width={400} height={400} alt="next inject" />
        </div>
      </section>
    </div>
  )
}
