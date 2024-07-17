import Google from "@auth/core/providers/google"
import NextAuth, { DefaultSession } from "next-auth"

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
  providers: [Google],
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
