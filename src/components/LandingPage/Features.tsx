import { DollarSign, Lock } from "lucide-react"
import Link from "next/link"
import { BsLightningChargeFill } from "react-icons/bs"

import FeatureCard from "./FeatureCard"

export const Benefits = () => {
  return (
    <div id="benefits" className="bg-gray-500/20 dark:bg-gray-800/50">
      <div className="mx-2 my-24 space-y-4">
        {/* Heading */}
        <div className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          No Fuss. Only{" "}
          <span className="text-green-600 dark:text-green-500">Benefits</span>
        </div>
        {/* Features */}
        <div className="mx-auto flex max-w-6xl flex-col flex-wrap items-center justify-center gap-10 md:flex-row md:items-stretch">
          {/* Card 1 */}
          <FeatureCard
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
          <FeatureCard
            key={2}
            title="Lightning Fast"
            icon={
              <BsLightningChargeFill className="text-yellow-500" size={24} />
            }
            features={[
              "One-click configuration",
              <>
                <HighlightText text="2+ hours" /> saved configuring SEO
              </>,
              <>
                <HighlightText text="5+ hours" /> saved configuring UI
              </>,
              <>
                <HighlightText text="6+ hours" /> saved configuring databases
              </>,
              <>
                <HighlightText text="9+ hours" /> saved configuring auth
              </>,
            ]}
          />
          {/* Card 3 */}
          <FeatureCard
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
export function HighlightText({ text }: { text: string }) {
  return <span className="rounded bg-muted px-0.5 text-green-500">{text}</span>
}
