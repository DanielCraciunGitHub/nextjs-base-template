import Link from "next/link"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import type { SocialLink } from "@/types/next-inject"

interface SocialLinkProps
  extends SocialLink,
    React.AnchorHTMLAttributes<HTMLDivElement> {
  className?: string
  href: string
}

// eslint-disable-next-line @typescript-eslint/no-redeclare
export default function SocialLink({
  href,
  icon,
  name,
  className,
}: SocialLinkProps) {
  return (
    <Link
      href={`${href}`}
      rel="noopener noreferrer"
      target="_blank"
      className={cn(
        buttonVariants({ size: "icon", variant: "outline" }),
        className
      )}
      tabIndex={0}
    >
      {icon}
      <span className="sr-only">{name}</span>
    </Link>
  )
}
