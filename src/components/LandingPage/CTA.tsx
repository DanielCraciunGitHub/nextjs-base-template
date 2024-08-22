import type { VariantProps } from "class-variance-authority"
import Link from "next/link"

import { cn } from "@/lib/utils"

import { buttonVariants } from "../ui/button"

interface StartInjectingCTAProps {
  size?: VariantProps<typeof buttonVariants>["size"]
  className?: string
  ctaText?: string
  href: string
}

/**
 * `MainCTA` component renders a primary call-to-action button, usually used to drive users to a specific link.
 *
 * @component
 * @param className - Optional additional class names to customize the button's styling.
 * @param size - Optional size variant for the button, controlling its overall dimensions.
 * @param href - The URL to which the button directs users when clicked.
 * @param ctaText - Optional text displayed on the button, defaults to "Buy Now" if not provided.
 */
export const MainCTA = ({
  className,
  size,
  href,
  ctaText = "Buy Now",
}: StartInjectingCTAProps) => {
  return (
    <Link
      href={href}
      rel="noopener noreferrer"
      className={buttonVariants({
        size,
        className: cn("bg-primary text-lg text-white", className),
      })}
    >
      <div className="text-lg">{ctaText}</div>
    </Link>
  )
}
