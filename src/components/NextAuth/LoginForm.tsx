"use client"

import { EmailProvider } from "@/components/NextAuth/EmailProvider"
import { SocialProviders } from "@/components/NextAuth/SocialProviders"
import { WordedSeparator } from "@/components/NextAuth/WordedSeparator"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export const LoginForm = () => {
  return (
    <Card className="w-[400px]">
      <CardContent className="flex flex-col space-y-2 border-muted">
        <CardHeader>
          <CardTitle className="text-4xl font-bold">Login</CardTitle>
          <CardDescription>Login today</CardDescription>
        </CardHeader>

        <SocialProviders />
        <WordedSeparator word="or" />
        <EmailProvider />
      </CardContent>
    </Card>
  )
}
