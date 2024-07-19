import Stripe from "stripe"

// ! Remove the comment once you are ready to start selling your product.
const key = process.env.STRIPE_SECRET_TEST_KEY! // process.env.STRIPE_SECRET_KEY!

export const stripe = new Stripe(key, {
  apiVersion: "2024-06-20",
  typescript: true,
})
