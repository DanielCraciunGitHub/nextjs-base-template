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

const FeatureCard = ({ title, features, icon, className }: FeaturesProps) => {
  return (
    <Card className={cn("mt-8 flex w-[22rem] flex-col  text-sm", className)}>
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
export default FeatureCard
