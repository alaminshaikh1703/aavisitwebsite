"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { verifyAuth } from "@/lib/auth"
import { cookies } from "next/headers"

async function checkAuth() {
  const cookieStore = await cookies()
  const token = cookieStore.get("admin_session")?.value
  const session = await verifyAuth(token || null)
  if (!session) throw new Error("Unauthorized")
}

function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)+/g, '')
}

export async function createPortfolioProject(formData: FormData) {
  try {
    await checkAuth()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string || generateSlug(title)
    const clientName = formData.get("clientName") as string
    const category = formData.get("category") as string
    const industry = formData.get("industry") as string
    const overview = formData.get("overview") as string
    const challenge = formData.get("challenge") as string
    const solution = formData.get("solution") as string
    const description = formData.get("description") as string
    const coverImage = formData.get("coverImage") as string
    const challengeImage = formData.get("challengeImage") as string
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string

    const servicesStr = formData.get("servicesProvided") as string
    const techStr = formData.get("technologies") as string
    const resultsStr = formData.get("results") as string

    const servicesProvided = servicesStr ? servicesStr.split(',').map(s => s.trim()) : []
    const technologies = techStr ? techStr.split(',').map(s => s.trim()) : []
    
    let results = []
    try {
      if (resultsStr) results = JSON.parse(resultsStr)
    } catch(e) {}

    if (!title || !description) {
      return { error: "Title and Description are required" }
    }

    // Check if slug exists
    const existing = await prisma.portfolioProject.findUnique({ where: { slug } })
    if (existing) {
      return { error: "A project with this slug already exists" }
    }

    await prisma.portfolioProject.create({
      data: {
        title,
        slug,
        clientName: clientName || null,
        category: category || null,
        industry: industry || null,
        overview: overview || null,
        challenge: challenge || null,
        solution: solution || null,
        description,
        servicesProvided,
        technologies,
        results,
        coverImage: coverImage || null,
        challengeImage: challengeImage || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        published: true,
      }
    })

    revalidatePath("/")
    revalidatePath("/portfolio")
    revalidatePath("/admin/portfolio")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to create project" }
  }
}

export async function updatePortfolioProject(id: string, formData: FormData) {
  try {
    await checkAuth()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const clientName = formData.get("clientName") as string
    const category = formData.get("category") as string
    const industry = formData.get("industry") as string
    const overview = formData.get("overview") as string
    const challenge = formData.get("challenge") as string
    const solution = formData.get("solution") as string
    const description = formData.get("description") as string
    const coverImage = formData.get("coverImage") as string
    const challengeImage = formData.get("challengeImage") as string
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string
    
    const servicesStr = formData.get("servicesProvided") as string
    const techStr = formData.get("technologies") as string
    const resultsStr = formData.get("results") as string

    const servicesProvided = servicesStr ? servicesStr.split(',').map(s => s.trim()) : []
    const technologies = techStr ? techStr.split(',').map(s => s.trim()) : []
    
    let results = []
    try {
      if (resultsStr) results = JSON.parse(resultsStr)
    } catch(e) {}

    if (!title || !slug || !description) {
      return { error: "Title, Slug, and Description are required" }
    }

    // Check if slug exists for another project
    const existing = await prisma.portfolioProject.findUnique({ where: { slug } })
    if (existing && existing.id !== id) {
      return { error: "A project with this slug already exists" }
    }

    await prisma.portfolioProject.update({
      where: { id },
      data: {
        title,
        slug,
        clientName: clientName || null,
        category: category || null,
        industry: industry || null,
        overview: overview || null,
        challenge: challenge || null,
        solution: solution || null,
        description,
        servicesProvided,
        technologies,
        results,
        coverImage: coverImage || null,
        challengeImage: challengeImage || null,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
      }
    })

    revalidatePath("/")
    revalidatePath("/portfolio")
    revalidatePath(`/portfolio/${slug}`)
    revalidatePath("/admin/portfolio")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to update project" }
  }
}

export async function deletePortfolioProject(id: string) {
  try {
    await checkAuth()
    await prisma.portfolioProject.delete({ where: { id } })
    revalidatePath("/")
    revalidatePath("/portfolio")
    revalidatePath("/admin/portfolio")
    return { success: true }
  } catch (error) {
    return { error: "Failed to delete project" }
  }
}

export async function togglePortfolioProjectStatus(id: string, published: boolean) {
  try {
    await checkAuth()
    await prisma.portfolioProject.update({
      where: { id },
      data: { published }
    })
    revalidatePath("/")
    revalidatePath("/portfolio")
    revalidatePath("/admin/portfolio")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update status" }
  }
}
