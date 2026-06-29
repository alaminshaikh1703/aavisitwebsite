"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { verifyAuth } from "@/lib/auth"

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export async function createBlogPost(formData: FormData) {
  try {
    await verifyAuth()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string || generateSlug(title)
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    
    const featuredImage = formData.get("featuredImage") as string
    const author = formData.get("author") as string
    const authorRole = formData.get("authorRole") as string
    const authorImage = formData.get("authorImage") as string
    const readingTime = formData.get("readingTime") as string
    
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string

    const categoriesStr = formData.get("categories") as string
    const tagsStr = formData.get("tags") as string
    
    const categories = categoriesStr ? categoriesStr.split(',').map(s => s.trim()) : []
    const tags = tagsStr ? tagsStr.split(',').map(s => s.trim()) : []

    if (!title || !content) {
      return { error: "Title and Content are required" }
    }

    const existing = await prisma.blogPost.findUnique({ where: { slug } })
    if (existing) {
      return { error: "A post with this slug already exists" }
    }

    await prisma.blogPost.create({
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        featuredImage: featuredImage || null,
        author: author || null,
        authorRole: authorRole || null,
        authorImage: authorImage || null,
        readingTime: readingTime || null,
        categories,
        tags,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        published: true,
      }
    })

    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath("/admin/blog")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to create blog post" }
  }
}

export async function updateBlogPost(id: string, formData: FormData) {
  try {
    await verifyAuth()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const excerpt = formData.get("excerpt") as string
    const content = formData.get("content") as string
    
    const featuredImage = formData.get("featuredImage") as string
    const author = formData.get("author") as string
    const authorRole = formData.get("authorRole") as string
    const authorImage = formData.get("authorImage") as string
    const readingTime = formData.get("readingTime") as string
    
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string

    const categoriesStr = formData.get("categories") as string
    const tagsStr = formData.get("tags") as string
    
    const categories = categoriesStr ? categoriesStr.split(',').map(s => s.trim()) : []
    const tags = tagsStr ? tagsStr.split(',').map(s => s.trim()) : []

    if (!title || !slug || !content) {
      return { error: "Title, Slug, and Content are required" }
    }

    const existing = await prisma.blogPost.findUnique({ where: { slug } })
    if (existing && existing.id !== id) {
      return { error: "A post with this slug already exists" }
    }

    await prisma.blogPost.update({
      where: { id },
      data: {
        title,
        slug,
        excerpt: excerpt || null,
        content,
        featuredImage: featuredImage || null,
        author: author || null,
        authorRole: authorRole || null,
        authorImage: authorImage || null,
        readingTime: readingTime || null,
        categories,
        tags,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
      }
    })

    revalidatePath("/")
    revalidatePath("/blog")
    revalidatePath(`/blog/${slug}`)
    revalidatePath("/admin/blog")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to update blog post" }
  }
}

export async function deleteBlogPost(id: string) {
  try {
    await verifyAuth()
    await prisma.blogPost.delete({ where: { id } })
    revalidatePath("/blog")
    revalidatePath("/admin/blog")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to delete post" }
  }
}

export async function toggleBlogPostStatus(id: string, published: boolean) {
  try {
    await verifyAuth()
    await prisma.blogPost.update({
      where: { id },
      data: { published }
    })
    revalidatePath("/blog")
    revalidatePath("/admin/blog")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to update status" }
  }
}
