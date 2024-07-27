"use client"

import { ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"
import Stripe from "stripe"

import { Button, ButtonProps } from "@/components/ui/button"
import { getStripeUrl } from "@/app/_actions/stripe"

interface StripeButtonProps extends ButtonProps {
  children: ReactNode
  priceId: string
  mode: Stripe.Checkout.SessionCreateParams.Mode
}

const StripeButton = ({
  className,
  children,
  priceId,
  mode,
  ...restProps
}: StripeButtonProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const onSubmit = async () => {
    const url = await getStripeUrl(priceId, pathname, mode)
    if (url) {
      router.push(url)
    } else {
      router.refresh()
    }
  }
  return (
    <Button
      type="submit"
      onClick={onSubmit}
      className={className}
      {...restProps}
    >
      {children}
    </Button>
  )
}

export default StripeButton
