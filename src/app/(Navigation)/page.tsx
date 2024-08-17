import type { Metadata } from "next"

import { staticMetadata } from "@/config/metadata"
import { projectName } from "@/config/next-inject"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
    </section>
  )
}

export const metadata: Metadata = {
  ...staticMetadata.mainPage,
}
