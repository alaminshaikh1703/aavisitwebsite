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

export async function createService(formData: FormData) {
  try {
    await checkAuth()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string || generateSlug(title)
    const shortDescription = formData.get("shortDescription") as string
    const fullDescription = formData.get("fullDescription") as string
    const icon = formData.get("icon") as string
    const featuredImage = formData.get("featuredImage") as string
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string
    const benefitsStr = formData.get("benefits") as string
    const metricValue = formData.get("metricValue") as string
    const metricLabel = formData.get("metricLabel") as string

    if (!title || !shortDescription || !fullDescription) {
      return { error: "Title, Short Description, and Full Description are required" }
    }

    let benefits: string[] = []
    if (benefitsStr) {
      benefits = benefitsStr.split('\n').map(b => b.trim()).filter(b => b)
    }

    const features = { metricValue, metricLabel }

    // Check if slug exists
    const existing = await prisma.service.findUnique({ where: { slug } })
    if (existing) {
      return { error: "A service with this slug already exists" }
    }

    await prisma.service.create({
      data: {
        title,
        slug,
        shortDescription,
        fullDescription,
        icon: icon || null,
        featuredImage: featuredImage || null,
        benefits,
        features,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        published: true,
      }
    })

    revalidatePath("/")
    revalidatePath("/services")
    revalidatePath("/admin/services")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to create service" }
  }
}

export async function updateService(id: string, formData: FormData) {
  try {
    await checkAuth()

    const title = formData.get("title") as string
    const slug = formData.get("slug") as string
    const shortDescription = formData.get("shortDescription") as string
    const fullDescription = formData.get("fullDescription") as string
    const icon = formData.get("icon") as string
    const featuredImage = formData.get("featuredImage") as string
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string
    const benefitsStr = formData.get("benefits") as string
    const metricValue = formData.get("metricValue") as string
    const metricLabel = formData.get("metricLabel") as string

    if (!title || !shortDescription || !fullDescription || !slug) {
      return { error: "Title, Slug, Short Description, and Full Description are required" }
    }

    let benefits: string[] = []
    if (benefitsStr) {
      benefits = benefitsStr.split('\n').map(b => b.trim()).filter(b => b)
    }

    const features = { metricValue, metricLabel }

    // Check if slug exists for another service
    const existing = await prisma.service.findUnique({ where: { slug } })
    if (existing && existing.id !== id) {
      return { error: "A service with this slug already exists" }
    }

    await prisma.service.update({
      where: { id },
      data: {
        title,
        slug,
        shortDescription,
        fullDescription,
        icon: icon || null,
        featuredImage: featuredImage || null,
        benefits,
        features,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
      }
    })

    revalidatePath("/")
    revalidatePath("/services")
    revalidatePath(`/services/${slug}`)
    revalidatePath("/admin/services")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to update service" }
  }
}

export async function deleteService(id: string) {
  try {
    await checkAuth()
    await prisma.service.delete({ where: { id } })
    revalidatePath("/")
    revalidatePath("/services")
    revalidatePath("/admin/services")
    return { success: true }
  } catch (error) {
    return { error: "Failed to delete service" }
  }
}

export async function toggleServiceStatus(id: string, published: boolean) {
  try {
    await checkAuth()
    await prisma.service.update({
      where: { id },
      data: { published }
    })
    revalidatePath("/")
    revalidatePath("/services")
    revalidatePath("/admin/services")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update status" }
  }
}
