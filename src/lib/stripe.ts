import Stripe from "stripe"

// ! Feel free to change this manually to test if live mode works in your development environment.
// ! E.g. if the price Ids are setup correctly.
export const isLiveMode = process.env.NODE_ENV === "production"

const key = isLiveMode
  ? process.env.STRIPE_SECRET_KEY!
  : process.env.STRIPE_SECRET_TEST_KEY!

export const stripe = new Stripe(key, {
  apiVersion: "2024-06-20",
  typescript: true,
})

export const prices = isLiveMode
  ? ({
      // ! Live Price Ids
      oneOff: "price_1PgwanEPAN9phIe0BSBo83hm",
      subscription: "price_YOUR_SUBSCRIPTION_PRICE",
    } as const)
  : ({
      // ! Test Price Ids
      oneOff: "price_1PpFJaEPAN9phIe0IkFGHkx2",
      subscription: "price_1Ph6y8EPAN9phIe0fsxCy5Ts",
    } as const)
