import type { ReactNode } from "react"

import { Tick } from "@/components/SVG/Tick"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface PricingCardProps {
  title: string
  price: string
  ogPrice?: string
  features: React.ReactNode[]
  className?: string
  footnote?: string
  hot?: boolean
  cta?: ReactNode
}

/**
 * `PricingCard` component displays a pricing option with associated features, an optional original price, and an optional call-to-action.
 *
 * @component
 * @param title - The title of the pricing option.
 * @param price - The current price of the offering.
 * @param ogPrice - Optional original price to show a discount, typically rendered with a strikethrough.
 * @param features - An array of React nodes representing the features included in the pricing option.
 * @param className - Optional additional class names to customize the styling of the card.
 * @param footnote - Optional footnote text displayed at the bottom of the card, often used for additional info or disclaimers.
 * @param hot - Optional flag to indicate if this is a highlighted or "hot" pricing option.
 * @param cta - Optional call-to-action element, typically a button or link, displayed at the bottom of the card.
 */
export const PricingCard = ({
  features,
  price,
  title,
  className,
  ogPrice,
  footnote,
  cta,
  hot = false,
}: PricingCardProps) => {
  return (
    <Card
      className={cn(
        `relative flex w-full flex-col self-stretch rounded-lg bg-muted ring-1 ring-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:ring-muted ${hot ? " border-yellow-500" : "border-muted-foreground dark:border-muted"}`,
        className
      )}
    >
      {hot && (
        <Badge className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 bg-yellow-500">
          HOT
        </Badge>
      )}
      <CardHeader className="flex space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="text-xl">{title}</div>
        </div>
        <div className="space-x-1">
          <span className="text-lg text-muted-foreground line-through">
            {ogPrice}
          </span>
          <span className="text-5xl font-extrabold">{price}</span>
        </div>
      </CardHeader>
      <CardContent className="flex h-full flex-col space-y-8">
        <div className="flex flex-1 flex-col space-y-4">
          {features.map((feature) => (
            <div
              key={feature?.toString()}
              className="flex items-center space-x-4"
            >
              <Tick />
              <div>{feature}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col space-y-1">
          {cta}
          <p className="text-center text-sm">{footnote}</p>
        </div>
      </CardContent>
    </Card>
  )
}
