import { headers } from "next/headers"
import type Stripe from "stripe"

import { isLiveMode, stripe } from "@/lib/stripe"

export const dynamic = "force-dynamic"

export async function POST(req: Request) {
  const body = await req.text()
  const signature = headers().get("Stripe-Signature") as string

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      isLiveMode
        ? process.env.STRIPE_WEBHOOK_SECRET!
        : process.env.STRIPE_WEBHOOK_TEST_SECRET!
    )
  } catch (error: any) {
    return new Response(`Webhook Error: ${error.message}`, { status: 400 })
  }

  const session = event.data.object as Stripe.Checkout.Session

  switch (event.type) {
    // ? HANDLE ONE OFF PAYMENTS HERE...
    case "checkout.session.completed": {
      if (session.mode === "payment") {
        const { data } = await stripe.checkout.sessions.listLineItems(
          session.id
        )
        const paymentIntent = session.payment_intent!.toString()

        // ! Retrieve an array of all the price Ids and product names to potentially store in database.
        const productPromises = data.map(async (item) => {
          const priceId = item.price!.id
          const { name: productName } = await stripe.products.retrieve(
            item.price!.product.toString()
          )
          return { priceId, productName }
        })
        const productData = await Promise.all(productPromises)

        // ! Retrieve customer details for purchase confirmations for database storage.
        const email = session.customer_details!.email!
        const name = session.customer_details!.name!
      }

      break
    }

    // ? HANDLE SUBSCRIPTION CREATION HERE...
    case "customer.subscription.created": {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      )
      break
    }
    // ? HANDLE RECURRING SUBSCRIPTION PAYMENTS...
    case "invoice.payment_succeeded": {
      const subscription = await stripe.subscriptions.retrieve(
        session.subscription as string
      )
      break
    }
    default:
      break
  }

  return new Response(null, { status: 200 })
}
