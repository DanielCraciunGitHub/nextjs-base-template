"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

interface WelcomePayload {
  name: string
  email: string
}

// ! Send a welcome email from the client or from the server with ease using this function.
export const sendWelcomeEmail = async ({ name, email }: WelcomePayload) => {
  // ! Be sure to edit the `from` and `react` fields before sending.
  const { data, error } = await resend.emails.send({
    from: "Daniel C. <noreply@danielfullstack.com>",
    to: [email],
    subject: `Welcome ${name}`,
    react: <div>Hello World!</div>,
  })

  if (error) {
    return { ok: false, error }
  }

  return { ok: true, data }
}
