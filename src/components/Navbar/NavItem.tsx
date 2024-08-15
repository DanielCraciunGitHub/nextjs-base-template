"use client"

import Link from "next/link"
import { useSelectedLayoutSegment } from "next/navigation"
import React from "react"

import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface NavItemProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  page: string
  text?: string
  icon?: React.ReactNode
}

// ! An aesthetically rendered nav bar item.
export function NavItem(props: NavItemProps) {
  const segment = useSelectedLayoutSegment()

  const { page, text, icon, className, ...restProps } = props
  return (
    <Link
      href={`${page}`}
      className={cn(
        buttonVariants({ variant: "ghost" }),
        "rounded text-muted-foreground hover:text-primary hover:transition hover:ease-linear dark:hover:text-primary",
        page.includes(`/${segment}`) ? "text-primary dark:text-primary" : "",
        className
      )}
      {...restProps}
    >
      <div className="flex">
        {text}
        {icon}
      </div>
    </Link>
  )
}
