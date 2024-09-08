"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { authenticateResend } from "@/app/_actions/authenticate"
import { SpinnerButton } from "@/components/Buttons/SpinnerButton"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"

const emailAuthSchema = z.object({
  email: z.string().email(),
})

type Inputs = z.infer<typeof emailAuthSchema>

export const EmailProvider = () => {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const form = useForm<Inputs>({
    resolver: zodResolver(emailAuthSchema),
    defaultValues: {
      email: "",
    },
  })
  async function onSubmit({ email }: Inputs) {
    setIsLoading(true)
    try {
      const res = await authenticateResend({ email, redirectTo: pathname })

      if (!res.ok) {
        throw new Error()
      }

      toast({
        title: "Success",
        description: "Please use the link from your email inbox to sign in",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Please try again later",
        variant: "destructive",
      })
    } finally {
      form.reset()
      setIsLoading(false)
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col space-y-2"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Login with email</FormLabel>
              <FormControl>
                <Input placeholder="johndoe@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <SpinnerButton name="Get Magic Link" state={isLoading} type="submit" />
      </form>
    </Form>
  )
}
