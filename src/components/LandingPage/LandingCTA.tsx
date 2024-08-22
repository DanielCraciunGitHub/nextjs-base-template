import { MainCTA } from "./CTA"

export const LandingCTA = () => {
  return (
    <div>
      <div className="mx-2 my-12 mt-24 flex flex-col items-center">
        {/* Headline */}
        <div className="text-center text-4xl font-bold tracking-tight md:text-6xl">
          Save Hours. Become a{" "}
          <span className="text-green-600 dark:text-green-500">Hacker</span>
        </div>
        {/* Final CTA */}
        <MainCTA href="/" className="my-12 h-12 rounded-md px-16 md:w-1/5" />
      </div>
    </div>
  )
}
