import { sendEmail } from "@/lib/send-email"

interface WelcomePayload {
  name: string
  email: string
}

// ! Send a welcome email from the client or from the server with ease using this function.
export const sendWelcomeEmail = async ({ name, email }: WelcomePayload) => {
  // ! Be sure to edit the `from` and `react` fields before sending.

  await sendEmail(email, `Welcome ${name}`, <div>Hello World!</div>)

  console.log("Email Sent!")
}
