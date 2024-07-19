import { getProductPrice } from "@/app/_actions/stripe"

import StripeButton from "./StripeButton"

export async function StripeDemo() {
  const priceId = "price_1PZ8L5EPAN9phIe0kozwcrId"
  const price = await getProductPrice(priceId)

  return <StripeButton priceId={priceId}>Product Price: {price}</StripeButton>
}
