import { headers } from "next/headers"
import Stripe from "stripe"

import { stripe } from "@/lib/stripe"

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.NODE_ENV === "development"
        ? process.env.STRIPE_WEBHOOK_TEST_SECRET!
        : process.env.STRIPE_WEBHOOK_SECRET!
    )
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (event.type === "checkout.session.completed") {
    const { data } = await stripe.checkout.sessions.listLineItems(session.id)

    const { name: productName } = await stripe.products.retrieve(
      data[0].price!.product.toString()
    )
    const priceId = data[0].price!.id

    const paymentIntent = session.payment_intent!.toString()

    console.log({
      paymentIntent,
      priceId,
      productName,
    })
  }

  return new Response(null, { status: 200 })
}