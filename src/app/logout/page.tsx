import { logout } from "@/app/logout/actions"

export default async function Page() {
  return (
    <form action={logout}>
      <button type="submit">Sign out</button>
    </form>
  )
}
