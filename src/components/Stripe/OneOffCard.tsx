"use client"

import { HTMLAttributes } from "react"
import { cva, VariantProps } from "class-variance-authority"
import { CheckCircle } from "lucide-react"

import { cn } from "@/lib/utils"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import StripeButton from "@/components/Stripe/StripeButton"

const oneOffCardVariants = cva("", {
  variants: {
    theme: {
      green:
        "dark:border-green-500 border-green-500 bg-green-500 dark:bg-green-500",
      orange:
        "border-orange-500 dark:border-orange-500 bg-orange-500 dark:bg-orange-500",
      red: "border-red-500 dark:border-red-500 bg-red-500 dark:bg-red-500",
      blue: "border-blue-500 dark:border-blue-500 bg-blue-500 dark:bg-blue-500",
    },
    text: {
      green: "text-green-500",
      orange: "text-orange-500",
      red: "text-red-500",
      blue: "text-blue-500",
    },
  },
})
interface SubscriptionCardProps
  extends VariantProps<typeof oneOffCardVariants>,
    HTMLAttributes<HTMLDivElement> {
  title: string
  features: string[]
  price: string
  priceId: string
  icon: React.ReactNode
}

export const OneOffCard = ({
  title,
  features,
  price,
  icon,
  theme,
  priceId,
  text = theme,
}: SubscriptionCardProps) => {
  return (
    <Card className="flex w-[22rem] flex-col space-y-2">
      <CardHeader className="space-y-4">
        <div className="flex flex-row justify-between">
          <CardTitle className="flex justify-center">{title}</CardTitle>
          {icon}
        </div>
        <hr className={cn(oneOffCardVariants({ theme }), "rounded")} />
      </CardHeader>
      <CardContent className="space-y-3">
        {features.map((feature) => (
          <div key={feature} className="flex space-x-5">
            <CheckCircle className="flex-none text-lime-400" />
            <div>{feature}</div>
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex flex-col space-y-4">
        <div className="flex flex-row items-end">
          <h1 className={cn(oneOffCardVariants({ text }), "text-4xl")}>
            {price}
          </h1>
        </div>
        <StripeButton
          mode="payment"
          className={oneOffCardVariants({ theme })}
          priceId={priceId}
        >
          Purchase
        </StripeButton>
      </CardFooter>
    </Card>
  )
}
