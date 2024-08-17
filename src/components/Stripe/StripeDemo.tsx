import { Moon, Sun } from "lucide-react"

import { getProductPrice } from "@/app/_actions/stripe"
import { prices } from "@/config/stripe"

import { OneOffCard } from "./OneOffCard"
import SubscriptionCard from "./SubscriptionCard"

export async function DemoOneOff() {
  const priceId = prices.oneOff
  const price = (await getProductPrice(priceId)) as string

  return (
    <OneOffCard
      icon={<Moon className="text-gray-500" />}
      theme="green"
      title="One Off"
      features={[
        "24/7 Q/A support from our staff",
        "10x greater earnings",
        "Premium Resources",
      ]}
      price={price}
      priceId={priceId}
    />
  )
}
export async function DemoSubscription() {
  const priceId = prices.subscription
  const price = (await getProductPrice(priceId)) as string

  return (
    <SubscriptionCard
      icon={<Sun className="text-yellow-500" />}
      theme="green"
      title="Subscription"
      features={[
        "24/7 Q/A support from our staff",
        "10x greater earnings",
        "Premium Resources",
      ]}
      price={price}
      priceId={priceId}
    />
  )
}
