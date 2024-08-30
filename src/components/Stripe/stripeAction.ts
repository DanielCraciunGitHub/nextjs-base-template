"use server"

import type Stripe from "stripe"

import { siteConfig } from "@/config/next-inject"
import { stripe } from "@/lib/stripe"
import { formatProductPrice } from "@/lib/utils"

// ! This function will retrieve the checkout session URL, and supports both subscription and one-off payments.
export async function getStripeUrl(
  priceIds: string[],
  pathname: string,
  mode: Stripe.Checkout.SessionCreateParams.Mode
) {
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      // ! Specify where the user gets redirected to upon canceling and succeeding the checkout process.
      success_url: `${siteConfig.url}`,
      cancel_url: `${siteConfig.url}${pathname}`,

      payment_method_types: ["card"],
      mode,
      line_items: priceIds.map((priceId) => ({
        price: priceId,
        quantity: 1,
      })),
      allow_promotion_codes: true,
    })
    return stripeSession.url!
  } catch (error) {
    return ""
  }
}
// ! This will format the actual price/cost of your product given a priceId.
export async function getProductPrice(priceId: string) {
  try {
    if (priceId === "Undefined") {
      return undefined
    }
    const price = await stripe.prices.retrieve(priceId)

    return formatProductPrice(price.currency, price.unit_amount! / 100)
  } catch (error) {
    return undefined
  }
}
