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
      : `https://<NEXT-INJECT-NAME>.vercel.app`,
  navLinks: [
    {
      name: "<NEXT-INJECT-NAME>",
      href: "/",
    },
  ] satisfies NavItem[],
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
