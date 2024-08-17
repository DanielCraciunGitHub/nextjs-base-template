import GitHub from "@auth/core/providers/github"
import Google from "@auth/core/providers/google"
import type { DefaultSession } from "next-auth"
import NextAuth from "next-auth"

declare module "@auth/core/types" {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string
    } & DefaultSession["user"]
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    Google,
    GitHub({
      // ! https://authjs.dev/reference/core/providers#allowdangerousemailaccountlinking
      allowDangerousEmailAccountLinking: true,
    }),
    // ! Add more providers...
    // ! Then edit the LoginButtons.tsx file with the new provider.
  ],
  trustHost: true,

  callbacks: {
    async session({ session, user }) {
      if (user) {
        session.user.id = user.id
        session.user.name = user.name
        session.user.email = user.email
        session.user.image = user.image
      }

      return session
    },
  },

  secret: process.env.AUTH_SECRET,
})
