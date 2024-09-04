"use server"

import type { ReactNode } from "react"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_KEY!)

export async function sendEmail(
  email: string,
  subject: string,
  body: ReactNode
) {
  const { error } = await resend.emails.send({
    from: "Next Inject <noreply@danielfullstack.com>",
    to: email,
    subject,
    react: body,
  })

  if (error) {
    throw new Error(error.message)
  }
}
