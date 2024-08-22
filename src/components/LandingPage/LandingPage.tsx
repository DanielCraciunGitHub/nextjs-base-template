import { Benefits } from "./Benefits"
import { Demo } from "./Demo"
import { FAQ } from "./FAQ"
import { HeroSection } from "./HeroSection"
import { LandingCTA } from "./LandingCTA"
import { Pricing } from "./Pricing"

const LandingPage = () => {
  return (
    <div className="mx-auto flex w-full flex-col">
      <HeroSection />

      <Demo />

      <Pricing />

      <Benefits />

      <FAQ />

      <LandingCTA />
    </div>
  )
}
export default LandingPage
