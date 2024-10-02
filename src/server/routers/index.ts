import { createTRPCRouter, publicProcedure } from "src/server/trpc"

export const helloRouter = createTRPCRouter({
  hello: publicProcedure.query(async ({ ctx }) => {
    return "Hello from TRPC :)"
  }),
})
