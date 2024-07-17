import { Metadata } from "next"

import { staticMetadata } from "@/config/metadata"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {"Hello <NEXT-INJECT-NAME>"}
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  ...staticMetadata.mainPage,
}
