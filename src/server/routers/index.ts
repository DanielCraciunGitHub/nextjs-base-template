import { createTRPCRouter, publicProcedure } from "../trpc"

export const helloRouter = createTRPCRouter({
  hello: publicProcedure.query(async ({ ctx }) => {
    return "Hello from TRPC :)"
  }),
})
