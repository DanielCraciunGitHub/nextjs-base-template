"use client"

import { ReactNode } from "react"
import { usePathname, useRouter } from "next/navigation"

import { Button, ButtonProps } from "@/components/ui/button"
import { getStripeUrl } from "@/app/_actions/stripe"

interface StripeButtonProps extends ButtonProps {
  children: ReactNode
  priceId: string
}

const StripeButton = ({
  className,
  children,
  priceId,
  ...restProps
}: StripeButtonProps) => {
  const router = useRouter()
  const pathname = usePathname()

  const onSubmit = async () => {
    const url = await getStripeUrl(priceId, pathname)
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
