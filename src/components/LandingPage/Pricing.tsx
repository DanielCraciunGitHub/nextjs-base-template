import { MainCTA } from "./CTA"
import { PricingCard } from "./PricingCard"

interface PricingProps {}

export const Pricing = ({}: PricingProps) => {
  return (
    <div id="pricing" className="bg-gray-400 dark:bg-gray-800">
      <div className="mx-auto my-12 max-w-6xl space-y-4">
        {/* Headline */}
        <div className="space-y-3 text-center text-4xl font-bold tracking-tight md:text-6xl">
          <div>
            Skip the boring stuff. Code{" "}
            <span className="text-green-600 dark:text-green-500">faster!</span>
          </div>
        </div>
        {/* Description */}
        <div className="mx-10 text-center text-lg text-muted-foreground">
          Enjoy modular plugins, zero confusing boilerplate, and save{" "}
          <span className="font-bold text-green-600 dark:text-green-500">
            5x
          </span>{" "}
          the cost compared to Shipfast!
        </div>
        {/* Two pricing cards - you can add more or less as you please */}
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-center gap-16 p-8 lg:flex-row lg:items-start lg:gap-20 lg:py-12">
          <PricingCard
            key={2}
            price="$0"
            title="Explore"
            features={[
              "Unlimited access to our collection of FREE plugins",
              "Inject plugins into new and existing projects seamlessly",
              "Detailed documentation for all plugins",
            ]}
            cta={<MainCTA href="/" ctaText="Explore" />}
            footnote="Create your dream app. One piece at a time."
          />
          <PricingCard
            key={1}
            ogPrice="$299"
            price="$50"
            title="Next Inject PRO"
            hot
            features={[
              "Resend PRO Plugin for emails",
              "Stripe PRO Plugin for payment handling",
              "Next Auth PRO Plugin for user authentication",
              "Drizzle + Turso PRO Plugin for database configuration",
              "Sanity PRO Plugin for content management",
              "Metadata PRO Plugin to fully configure SEO",
              "100% modular plugins to keep your codebase clean",
              "Zero abstraction. You get exactly what you pay for",
              "Detailed documentation for all plugins",
              "Built-in Styling",
            ]}
            cta={<MainCTA href="/" />}
            footnote="Pay once. Enjoy forever!"
          />
        </div>
      </div>
    </div>
  )
}
