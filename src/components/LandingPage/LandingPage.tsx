import { Demo } from "./Demo"
import { FAQ } from "./FAQ"
import { Benefits } from "./Features"
import { HeroSection } from "./HeroSection"
import { LandingCTA } from "./LandingCTA"

interface LandingPageProps {}

const LandingPage = ({}: LandingPageProps) => {
  return (
    <div className="mx-auto flex w-full flex-col">
      <HeroSection />

      <Demo />

      <Benefits />

      <FAQ />

      <LandingCTA />
    </div>
  )
}
export default LandingPage
