import { BsGithub } from "react-icons/bs"

import { authenticate } from "@/app/_actions/authenticate"

import { Google } from "../SVG/Google"
import { Button } from "../ui/button"

interface LoginButtonsProps {}

// ! Here is where you can add new Oauth Providers for the LoginForm.tsx component.
export const LoginButtons = ({}: LoginButtonsProps) => {
  return (
    <div className="mt-4 flex w-full flex-col space-y-4">
      <Button
        variant="secondary"
        className="space-x-2"
        onClick={() => authenticate("google")}
      >
        <Google />
        <span>Sign In with Google</span>
      </Button>
      <Button
        variant="secondary"
        className="space-x-2"
        onClick={() => authenticate("github")}
      >
        <BsGithub size={24} />
        <span>Sign In with Github</span>
      </Button>
    </div>
  )
}
