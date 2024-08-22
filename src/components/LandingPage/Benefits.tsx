import { DollarSign, Lock } from "lucide-react"
import Link from "next/link"
import { BsLightningChargeFill } from "react-icons/bs"

import { BenefitCard } from "./BenefitsCard"

export const Benefits = () => {
  return (
    <div id="benefits" className="bg-gray-500/20 dark:bg-gray-800/50">
      <div className="mx-2 my-36 space-y-4">
        {/* Headline */}
        <div className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          No Fuss. Only{" "}
          <span className="text-green-600 dark:text-green-500">Benefits</span>
        </div>
        {/* Benefits */}
        <div className="mx-auto flex max-w-7xl flex-col items-stretch justify-center gap-16 p-8 lg:flex-row lg:items-start lg:gap-20 lg:py-12">
          {/* Card 1 - Render a list of benefits */}
          <BenefitCard
            key={1}
            title="100% Secure"
            icon={<Lock className="text-blue-500" />}
            features={[
              <>
                The source code is available on{" "}
                <Link
                  href="https://github.com/DanielCraciunGitHub/next-inject-app"
                  className="text-blue-500 underline"
                >
                  Github
                </Link>
              </>,
              "The CLI enforces git usage",
              "The CLI can only add code, never delete code",
            ]}
          />
          {/* Card 2 */}
          <BenefitCard
            key={2}
            title="Lightning Fast"
            icon={
              <BsLightningChargeFill className="text-yellow-500" size={24} />
            }
            features={[
              "One-click configuration",
              "2+ hours saved configuring SEO",
              "5+ hours saved configuring UI",
              "6+ hours saved configuring databases",
              "9+ hours saved configuring auth",
            ]}
          />
          {/* Card 3 */}
          <BenefitCard
            key={3}
            title="Flexible"
            icon={<DollarSign className="text-green-400" />}
            features={[
              "Buy once, use forever",
              "Pay-per-plugin model = reduced costs",
              "No confusing boilerplate, only get what you pay for",
            ]}
          />
        </div>
      </div>
    </div>
  )
}
