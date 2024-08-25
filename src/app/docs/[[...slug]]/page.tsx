import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getPage, getPages } from "@/app/source"

export default async function Page({
  params,
}: {
  params: { slug?: string[] }
}) {
  const page = getPage(params.slug)

  if (page == null) {
    notFound()
  }

  const MDX = page.data.exports.default

  return (
    <DocsPage toc={page.data.exports.toc} full={page.data.full}>
      {/* Display the title and description from the frontmatter */}
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription>{page.data.description}</DocsDescription>
      {/* Render the actual MDX content you have defined in the content/ folder. */}
      <DocsBody>
        <MDX />
      </DocsBody>
    </DocsPage>
  )
}

// Statically generate your docs pages at runtime
export async function generateStaticParams() {
  return getPages().map((page) => ({
    slug: page.slugs,
  }))
}

// Generate any dynamic metadata from your blog pages.
export function generateMetadata({ params }: { params: { slug?: string[] } }) {
  const page = getPage(params.slug)

  if (page == null) notFound()

  return {
    title: page.data.title,
    description: page.data.description,
  } satisfies Metadata
}
