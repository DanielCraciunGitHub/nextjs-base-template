"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"

import { LoginButtons } from "./LoginButtons"

interface LoginFormProps {}

// ! A basic login form with Oauth providers supported.
export const LoginForm = ({}: LoginFormProps) => {
  return (
    <Card className="w-[400px]">
      <CardContent className="flex flex-col border-muted">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Login</CardTitle>
          <CardDescription className="text-lg">Login Today!</CardDescription>
        </CardHeader>
        <Separator />
        <LoginButtons />
      </CardContent>
    </Card>
  )
}
