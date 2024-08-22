"use client"

import { Tick } from "@/components/SVG/Tick"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { cn } from "@/lib/utils"

interface FeaturesProps {
  title: string
  features: React.ReactNode[]
  icon: React.ReactNode
  className?: string
}

/**
 * `BenefitCard` component renders a stylized card that highlights a list of features with an associated title and icon.
 *
 * @component
 * @param title - The title displayed at the top of the card, indicating the main benefit or feature set.
 * @param features - An array of React nodes representing individual features to be displayed within the card.
 * @param icon - A React node representing an icon, typically displayed next to the title for visual emphasis.
 * @param className - Optional additional class names to customize the styling of the card container.
 */
export const BenefitCard = ({
  title,
  features,
  icon,
  className,
}: FeaturesProps) => {
  return (
    <Card
      className={cn(
        "relative flex w-full flex-col self-stretch rounded-lg border-muted-foreground bg-muted ring-1 ring-muted-foreground ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 dark:border-muted dark:ring-muted",
        className
      )}
    >
      <CardHeader className="space-y-4">
        <div className="flex flex-row items-center justify-between">
          <div className="text-2xl font-bold">{title}</div>
          <div>{icon}</div>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col space-y-4">
        {features.map((feature) => (
          <div key={feature?.toString()} className="flex space-x-4">
            <Tick />
            <div>{feature}</div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}
