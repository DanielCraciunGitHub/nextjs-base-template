import { loader } from "fumadocs-core/source"
// eslint-disable-next-line import/no-extraneous-dependencies
import { createMDXSource, defaultSchemas } from "fumadocs-mdx"

import { map } from "@/../.map"

export const frontmatterSchema = defaultSchemas.frontmatter.extend({
  // ! Add any additional properties to the frontmatter
})

export const { getPage, getPages, pageTree } = loader({
  baseUrl: "/docs",
  rootDir: "docs",
  source: createMDXSource(map, { schema: { frontmatter: frontmatterSchema } }),
})
