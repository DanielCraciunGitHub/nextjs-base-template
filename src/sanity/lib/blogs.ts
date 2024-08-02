import { groq } from "next-sanity"

import { client } from "./client"

export async function getBlogs() {
  // ! https://www.sanity.io/docs/query-cheat-sheet
  const query = groq`*[_type == "blog"]`

  const article = await client.fetch(query)

  return article
}
