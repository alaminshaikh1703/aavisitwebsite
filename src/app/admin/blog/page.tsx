import { prisma } from "@/lib/prisma"
import { BlogTable } from "./blog-table"
import { verifyAuth } from "@/lib/auth"
import { redirect } from "next/navigation"

export const dynamic = "force-dynamic"

export default async function AdminBlogPage() {
  let authorized = false
  try {
    await verifyAuth()
    authorized = true
  } catch (error) {
    // Handled by redirect
  }

  if (!authorized) {
    redirect("/admin/login")
  }

  const posts = await prisma.blogPost.findMany({
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="p-6 lg:p-10 max-w-[1600px] mx-auto w-full">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white tracking-tight">Blog Posts</h1>
        <p className="text-zinc-400 mt-2 text-lg">Write and publish articles for the Aavis IT & Care blog.</p>
      </div>

      <BlogTable initialData={posts} />
    </div>
  )
}
