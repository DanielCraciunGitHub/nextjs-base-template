import { getBlogs } from "@/sanity/lib/blogs"

interface BlogPostsProps {}

// ! Fetches all blog posts using getBlogs from src/sanity/lib/blogs.ts
export const BlogPosts = async ({}: BlogPostsProps) => {
  const posts = await getBlogs()
  console.log(posts)

  return <div>Here you can render your blog posts</div>
}
