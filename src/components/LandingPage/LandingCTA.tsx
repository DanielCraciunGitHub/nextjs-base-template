import { MainCTA } from "./CTA"

interface LandingCTAProps {}

export const LandingCTA = ({}: LandingCTAProps) => {
  return (
    <div>
      <div className="my-12 mt-24">
        <div className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          Save Hours. Become a{" "}
          <span className="text-green-600 dark:text-green-500">Hacker</span>
        </div>
        <MainCTA href="/" className="my-12 h-12 rounded-md px-16" />
      </div>
    </div>
  )
}
