/* eslint-disable jsx-a11y/label-has-associated-control */

import { login } from "@/app/login/actions"

// app/login/page.tsx
export default async function Page() {
  return (
    <>
      <h1>Sign in</h1>
      <form action={login}>
        <label htmlFor="username">Username</label>
        <input name="username" id="username" />
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
        <br />
        <button type="submit">Continue</button>
      </form>
    </>
  )
}
