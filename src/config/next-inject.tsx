/**
 * This is the site configuration file.
 *
 * Information like the website url, your email, and any sort of global configuration related to
 * your website should go here.
 *
 * @url This is used to prevent hardcoding urls within the code and have a consistent absolute URL
 * for both development and production.
 *
 * @navLinks This is optional, and it's used to automatically add navbar items if you performed `next-inject init`
 * This isn't available for bootstrapped projects. See src/components/Navbar to find the Navbar components.
 *
 * @socialLinks This is used to create social buttons on your website to redirect users to your social media. See how they
 * look like at https://www.danielfullstack.com/blog. See src/components/SocialLink.tsx and SocialLinksArray.tsx.
 *
 */
import {
  BsDiscord,
  BsGithub,
  BsLinkedin,
  BsMedium,
  BsTwitterX,
} from "react-icons/bs"

import { NavItem, SocialLink } from "@/types/next-inject"

export const siteConfig = {
  email: "johndoe@<NEXT-INJECT-NAME>.com",
  url:
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : // ! Make sure to choose the right URL for production.
        `https://<NEXT-INJECT-NAME>.vercel.app`,

  navLinks: [
    {
      name: "<NEXT-INJECT-NAME>",
      href: "/",
    },
  ] satisfies NavItem[],

  // ! Feel free to add/remove relevant social links from here.
  socialLinks: [
    {
      href: "https://discord.gg/C2PXBMqpuV",
      name: "Discord.gg",
      icon: <BsDiscord />,
    },
    {
      href: "https://github.com/DanielCraciunGitHub",
      name: "Github.com",
      icon: <BsGithub />,
    },
    {
      href: "https://www.linkedin.com/in/dcraciun07/",
      name: "Linkedin.com",
      icon: <BsLinkedin />,
    },
    {
      href: "https://x.com/craciun_07",
      name: "X.com",
      icon: <BsTwitterX />,
    },
    {
      href: "https://medium.com/@danielcracbusiness",
      name: "Medium.com",
      icon: <BsMedium />,
    },
  ] as const satisfies SocialLink[],
  footerText:
    "© 2024 <NEXT-INJECT-NAME>. All Rights Reserved" as const satisfies string,
} as const