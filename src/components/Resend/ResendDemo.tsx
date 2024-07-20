"use client"

import { Button } from "@/components/ui/button"
import { sendWelcomeEmail } from "@/app/_actions/email"

// ! A button that will send an email to the `testEmail` and address them by `testName` in the subject.
export function ResendDemo({
  testName,
  testEmail,
}: {
  testName: string
  testEmail: string
}) {
  return (
    <Button
      onClick={async () =>
        await sendWelcomeEmail({ name: testName, email: testEmail })
      }
    >
      Send email!
    </Button>
  )
}
