"use client"

import type { ReactNode } from "react"

import { EmailProvider } from "@/components/NextAuth/EmailProvider"
import { SocialProviders } from "@/components/NextAuth/SocialProviders"
import { WordedSeparator } from "@/components/NextAuth/WordedSeparator"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

interface LoginModalProps {
  children: ReactNode
}

export const LoginModal = ({ children }: LoginModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col space-y-0 border-muted">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold">Login</DialogTitle>
          <DialogDescription>Login today</DialogDescription>
        </DialogHeader>

        <SocialProviders />
        <WordedSeparator word="or" />
        <EmailProvider />
      </DialogContent>
    </Dialog>
  )
}
