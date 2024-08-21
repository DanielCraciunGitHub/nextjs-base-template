import type { VariantProps } from "class-variance-authority"
import Link from "next/link"
import { BsLightningChargeFill } from "react-icons/bs"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"

interface StartInjectingCTAProps {
  size?: VariantProps<typeof buttonVariants>["size"]
  className?: string
  href: string
}

export const MainCTA = ({ className, size, href }: StartInjectingCTAProps) => {
  return (
    <div className="flex justify-center pt-2">
      <Link
        href={href}
        rel="noopener noreferrer"
        className={buttonVariants({
          size,
          className: cn("bg-primary text-lg text-white", className),
        })}
      >
        Buy Now <BsLightningChargeFill fill="white" />
      </Link>
    </div>
  )
}
