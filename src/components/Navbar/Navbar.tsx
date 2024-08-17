import { MainNavbar } from "./MainNavbar"
import { MobileNavbar } from "./MobileNavbar"

export default function NavBar() {
  return (
    // ! TIP: Add the "sticky" class to ensure the navbar persists when you scroll down.
    <nav className="top-0 z-50">
      <MainNavbar />
      <MobileNavbar />
    </nav>
  )
}
