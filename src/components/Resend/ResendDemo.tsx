"use client"

import { sendWelcomeEmail } from "src/components/Resend/welcome-email"

import { Button } from "@/components/ui/button"

// ! A button that will send an email to the `testEmail` and address them by `testName` in the subject.
export function ResendDemo({ name, email }: { name: string; email: string }) {
  return (
    <Button
      onClick={async () => {
        await sendWelcomeEmail({ name, email })
      }}
    >
      Send email!
    </Button>
  )
}
