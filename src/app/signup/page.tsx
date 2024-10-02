import { signup } from "@/app/signup/actions"

/* eslint-disable jsx-a11y/label-has-associated-control */
export default async function Page() {
  return (
    <>
      <h1>Create an account</h1>
      <form action={signup}>
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
