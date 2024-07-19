"use server"

import { siteConfig } from "@/config/next-inject"
import { stripe } from "@/lib/stripe"
import { formatProductPrice } from "@/lib/utils"

export async function getStripeUrl(priceId: string, pathname: string) {
  try {
    const stripeSession = await stripe.checkout.sessions.create({
      // ! Specify where the user gets redirected to upon canceling and succeeding the checkout process.
      success_url: `${siteConfig.url}/dashboard`,
      cancel_url: `${siteConfig.url}${pathname}`,

      payment_method_types: ["card", "paypal"],
      mode: "payment",
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      allow_promotion_codes: true,
    })
    return stripeSession.url!
  } catch (error) {
    console.error(error)
  }
}
export async function getProductPrice(priceId: string) {
  try {
    if (priceId === "Undefined") {
      return undefined
    } else {
      const price = await stripe.prices.retrieve(priceId)

      return formatProductPrice(price.currency, price.unit_amount! / 100)
    }
  } catch (error) {
    return undefined
  }
}
