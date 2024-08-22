import { BsLightningChargeFill } from "react-icons/bs"

import { siteConfig } from "@/config/next-inject"

import { DarkModeButton } from "../Buttons/DarkModeButton"
import { NavItem } from "./NavItem"

export const MainNavbar = () => {
  // ! This will provide a 1-n navbar layout, where n is a variable number of navbar links.
  const [firstLink, ...rest] = siteConfig.navLinks

  return (
    <div className="hidden bg-background lg:flex lg:justify-center lg:p-3">
      <div className="lg:flex lg:w-2/3 lg:justify-between">
        {/* Left side */}
        <div className="flex items-center">
          <NavItem
            key={firstLink.name}
            page={firstLink.href}
            text={firstLink.name}
            className="text-xl font-bold"
            tabIndex={0}
            icon={<BsLightningChargeFill fill="green" size={20} />}
          />
        </div>
        {/* Right side - The rest of the navigation links */}
        <div className="flex divide-x-2 divide-primary">
          {rest.reverse().map((item) => (
            <span key={item.name}>
              <NavItem
                page={item.href}
                text={item.name}
                className="mx-2"
                tabIndex={0}
              />
            </span>
          ))}
        </div>
      </div>
      <div className="absolute right-3 top-3">
        <DarkModeButton />
      </div>
    </div>
  )
}
