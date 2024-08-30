import { PricingCard } from "@/components/Stripe/PricingCard"
import { getProductPrice } from "@/components/Stripe/stripeAction"
import StripeButton from "@/components/Stripe/StripeButton"
import { prices } from "@/lib/stripe"

export async function DemoOneOff() {
  const priceId = prices.oneOff
  const price = (await getProductPrice(priceId)) as string

  return (
    <PricingCard
      title="One Off"
      features={[
        "24/7 Q/A support from our staff",
        "10x greater earnings",
        "Premium Resources",
      ]}
      price={price}
      ogPrice="$2,000.00"
      hot
      cta={
        <StripeButton mode="payment" priceIds={[priceId]}>
          Purchase
        </StripeButton>
      }
    />
  )
}
export async function DemoSubscription() {
  const priceId = prices.subscription
  const price = (await getProductPrice(priceId)) as string

  return (
    <PricingCard
      title="One Off"
      features={[
        "24/7 Q/A support from our staff",
        "10x greater earnings",
        "Premium Resources",
      ]}
      price={price}
      ogPrice="$29.99"
      hot
      cta={
        <StripeButton mode="subscription" priceIds={[priceId]}>
          Purchase
        </StripeButton>
      }
    />
  )
}
export async function Demo() {
  return (
    <div id="#Demo" className="flex space-x-2">
      <DemoOneOff />
      <DemoSubscription />
    </div>
  )
}
