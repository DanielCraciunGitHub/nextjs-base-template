"use client"

import { usePathname } from "next/navigation"
import { BsGithub } from "react-icons/bs"

import { authenticate } from "@/app/_actions/authenticate"
import { Google } from "@/components/NextAuth/Google"
import { Button } from "@/components/ui/button"

export const SocialProviders = () => {
  const pathname = usePathname()
  return (
    <>
      <Button
        variant="secondary"
        className="space-x-2"
        onClick={() => authenticate("google", pathname)}
      >
        <Google />
        <span>Login with Google</span>
      </Button>
      <Button
        variant="secondary"
        className="space-x-2"
        onClick={() => authenticate("github", pathname)}
      >
        <BsGithub size={24} />
        <span>Login with Github</span>
      </Button>
    </>
  )
}
