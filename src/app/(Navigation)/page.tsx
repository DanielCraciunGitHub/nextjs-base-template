import { projectName } from "@/config/next-inject"
import { BlogPosts } from "@/components/Sanity/BlogPosts"

export default async function page() {
  return (
    <section className="flex flex-col">
      <div className="text-4xl font-extrabold tracking-tight md:text-5xl">
        {projectName} is Awesome!
      </div>
      <BlogPosts />
    </section>
  )
}
