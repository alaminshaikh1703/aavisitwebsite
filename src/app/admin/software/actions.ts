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

export async function createSoftwareProduct(formData: FormData) {
  try {
    await verifyAuth()

    const name = formData.get("name") as string
    const slug = formData.get("slug") as string || generateSlug(name)
    const category = formData.get("category") as string
    const metric = formData.get("metric") as string
    const icon = formData.get("icon") as string
    const image = formData.get("image") as string
    const description = formData.get("description") as string
    
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string

    const featuresStr = formData.get("features") as string
    const features = featuresStr ? featuresStr.split(',').map(s => s.trim()) : []

    if (!name || !description) {
      return { error: "Name and Description are required" }
    }

    const existing = await prisma.softwareProduct.findUnique({ where: { slug } })
    if (existing) {
      return { error: "A product with this slug already exists" }
    }

    await prisma.softwareProduct.create({
      data: {
        name,
        slug,
        category: category || null,
        metric: metric || null,
        icon: icon || null,
        image: image || null,
        description,
        features,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
        published: true,
      }
    })

    revalidatePath("/")
    revalidatePath("/software")
    revalidatePath("/admin/software")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to create software product" }
  }
}

export async function updateSoftwareProduct(id: string, formData: FormData) {
  try {
    await verifyAuth()

    const name = formData.get("name") as string
    const slug = formData.get("slug") as string
    const category = formData.get("category") as string
    const metric = formData.get("metric") as string
    const icon = formData.get("icon") as string
    const image = formData.get("image") as string
    const description = formData.get("description") as string
    
    const metaTitle = formData.get("metaTitle") as string
    const metaDescription = formData.get("metaDescription") as string

    const featuresStr = formData.get("features") as string
    const features = featuresStr ? featuresStr.split(',').map(s => s.trim()) : []

    if (!name || !slug || !description) {
      return { error: "Name, Slug, and Description are required" }
    }

    const existing = await prisma.softwareProduct.findUnique({ where: { slug } })
    if (existing && existing.id !== id) {
      return { error: "A product with this slug already exists" }
    }

    await prisma.softwareProduct.update({
      where: { id },
      data: {
        name,
        slug,
        category: category || null,
        metric: metric || null,
        icon: icon || null,
        image: image || null,
        description,
        features,
        metaTitle: metaTitle || null,
        metaDescription: metaDescription || null,
      }
    })

    revalidatePath("/")
    revalidatePath("/software")
    revalidatePath("/admin/software")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to update software product" }
  }
}

export async function deleteSoftwareProduct(id: string) {
  try {
    await verifyAuth()
    await prisma.softwareProduct.delete({ where: { id } })
    revalidatePath("/software")
    revalidatePath("/admin/software")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to delete product" }
  }
}

export async function toggleSoftwareProductStatus(id: string, published: boolean) {
  try {
    await verifyAuth()
    await prisma.softwareProduct.update({
      where: { id },
      data: { published }
    })
    revalidatePath("/software")
    revalidatePath("/admin/software")
    return { success: true }
  } catch (error: any) {
    return { error: error.message || "Failed to update status" }
  }
}
