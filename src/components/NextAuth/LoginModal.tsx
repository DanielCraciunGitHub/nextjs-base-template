"use client"

import { ReactNode } from "react"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { SocialProviders } from "./SocialProviders"

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
      </DialogContent>
    </Dialog>
  )
}
