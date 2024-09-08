import { ArrowRight, Gift } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Demo } from "@/components/Waitlist/demo"
import FAQ from "@/components/Waitlist/FAQ"
import { Footer } from "@/components/Waitlist/footer"

export function Waitlist() {
  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex-1">
        {/* Waitlist CTA + Image */}
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              {/* CTA */}
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Join the Waitlist for Our Innovative Product
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Be the first to experience our groundbreaking product that
                    will revolutionize the way you work. Sign up now to secure
                    your spot on the waitlist.
                  </p>
                </div>
                <div className="w-full max-w-sm space-y-2">
                  <form className="flex flex-col gap-4">
                    <div className="flex items-center space-x-0.5">
                      <Gift className="text-green-500" />

                      <div className="flex items-center">
                        Exclusive discount for subscribers
                      </div>
                    </div>
                    <Input
                      type="email"
                      placeholder="Enter your email"
                      className="max-w-lg flex-1"
                    />
                    <Button
                      type="submit"
                      className="text-bold rounded-full bg-yellow-700 text-white hover:bg-yellow-500"
                    >
                      Join the waitlist
                      <ArrowRight />
                    </Button>
                  </form>
                </div>
              </div>
              {/* Waitlist Image */}
              <div className="flex justify-center">
                <Image
                  src="/placeholder.svg"
                  width="600"
                  height="400"
                  alt="Hero"
                  className="mx-auto aspect-[3/2] overflow-hidden rounded-xl object-cover"
                />
              </div>
            </div>
          </div>
        </section>
        <Demo />
        {/* Frequently Asked Questions */}
        <section className="flex w-full justify-center py-12 md:py-24 lg:py-32">
          <FAQ />
        </section>
      </main>
      <Footer />
    </div>
  )
}
