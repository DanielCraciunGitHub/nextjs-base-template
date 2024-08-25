import { DocsLayout } from "fumadocs-ui/layout"
import type { ReactNode } from "react"

import { pageTree } from "@/app/source"
import { projectName, siteConfig } from "@/config/next-inject"

export default function RootDocsLayout({ children }: { children: ReactNode }) {
  return (
    <DocsLayout
      links={siteConfig.socialLinks.map((link) => ({
        url: link.href,
        text: link.name,
        icon: link.icon,
      }))}
      tree={pageTree}
      nav={{ title: projectName }}
    >
      {children}
    </DocsLayout>
  )
}
