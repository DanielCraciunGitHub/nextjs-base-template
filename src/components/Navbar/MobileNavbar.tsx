import { Menu } from "lucide-react"
import { BsLightningChargeFill } from "react-icons/bs"

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { siteConfig } from "@/config/next-inject"

import { DarkModeButton } from "../Buttons/DarkModeButton"
import { NavItem } from "./NavItem"

// ! Disable this to remove the green separator lines in the navbar.
export const divider = true
// ! Enable this to add a darkmode button in the navbar.
export const darkModeButton = false

// ! The mobile nav bar with a burger menu
export function MobileNavbar() {
  const [mainItem, ...navItems] = siteConfig.navLinks

  return (
    <div className="flex items-center p-4 lg:hidden">
      <NavItem
        key={mainItem.name}
        page={mainItem.href}
        text={mainItem.name}
        className="text-2xl font-bold"
        tabIndex={0}
        icon={<BsLightningChargeFill fill="green" size={20} />}
      />
      <Sheet>
        <div className="flex w-full justify-end">
          <SheetTrigger className="p-2">
            <Menu />
            <span className="sr-only">Open Mobile Menu</span>
          </SheetTrigger>
        </div>
        <SheetContent className="flex flex-col items-center" side="top">
          <div
            className={`flex w-full flex-col items-center ${divider ? "divide-y-2 divide-primary" : ""}`}
          >
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <SheetClose asChild>
                  <NavItem
                    page={item.href}
                    text={item.name}
                    className="my-2 flex self-center"
                  />
                </SheetClose>
              </div>
            ))}
          </div>
          {darkModeButton ? (
            <div className="absolute right-3 top-3">
              <DarkModeButton />
            </div>
          ) : null}
        </SheetContent>
      </Sheet>
    </div>
  )
}
