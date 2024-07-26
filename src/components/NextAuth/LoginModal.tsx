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

import { Separator } from "../ui/separator"
import { LoginButtons } from "./LoginButtons"

interface LoginModalProps {
  children: ReactNode
}

// ! A Modal version of the LoginForm.tsx component
export const LoginModal = ({ children }: LoginModalProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="flex flex-col border-muted">
        <DialogHeader>
          <DialogTitle className="text-4xl font-bold">Login</DialogTitle>
          <DialogDescription className="text-lg">
            Login Today!
          </DialogDescription>
        </DialogHeader>
        <Separator />
        <LoginButtons />
      </DialogContent>
    </Dialog>
  )
}
