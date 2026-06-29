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

export async function createClient(formData: FormData) {
  try {
    await checkAuth()

    const name = formData.get("name") as string
    const websiteUrl = formData.get("websiteUrl") as string
    const logoUrl = formData.get("logoUrl") as string
    
    if (!name || !logoUrl) return { error: "Name and Logo are required" }

    await prisma.clientLogo.create({
      data: {
        name,
        websiteUrl: websiteUrl || null,
        logoUrl,
        active: true,
      }
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to create client" }
  }
}

export async function updateClient(id: string, formData: FormData) {
  try {
    await checkAuth()

    const name = formData.get("name") as string
    const websiteUrl = formData.get("websiteUrl") as string
    const logoUrl = formData.get("logoUrl") as string

    if (!name || !logoUrl) return { error: "Name and Logo are required" }

    await prisma.clientLogo.update({
      where: { id },
      data: {
        name,
        websiteUrl: websiteUrl || null,
        logoUrl,
      }
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update client" }
  }
}

export async function deleteClient(id: string) {
  try {
    await checkAuth()
    await prisma.clientLogo.delete({ where: { id } })
    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to delete client" }
  }
}

export async function toggleClientStatus(id: string, active: boolean) {
  try {
    await checkAuth()
    await prisma.clientLogo.update({
      where: { id },
      data: { active }
    })
    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update status" }
  }
}

export async function createTestimonial(formData: FormData) {
  try {
    await checkAuth()

    const clientName = formData.get("clientName") as string
    const company = formData.get("company") as string
    const position = formData.get("position") as string
    const image = formData.get("image") as string
    const rating = parseInt(formData.get("rating") as string) || 5
    const review = formData.get("review") as string
    
    if (!clientName || !review) return { error: "Client Name and Review are required" }

    await prisma.testimonial.create({
      data: {
        clientName,
        company: company || null,
        position: position || null,
        image: image || null,
        rating,
        review,
      }
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to create testimonial" }
  }
}

export async function updateTestimonial(id: string, formData: FormData) {
  try {
    await checkAuth()

    const clientName = formData.get("clientName") as string
    const company = formData.get("company") as string
    const position = formData.get("position") as string
    const image = formData.get("image") as string
    const rating = parseInt(formData.get("rating") as string) || 5
    const review = formData.get("review") as string

    if (!clientName || !review) return { error: "Client Name and Review are required" }

    await prisma.testimonial.update({
      where: { id },
      data: {
        clientName,
        company: company || null,
        position: position || null,
        image: image || null,
        rating,
        review,
      }
    })

    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to update testimonial" }
  }
}

export async function deleteTestimonial(id: string) {
  try {
    await checkAuth()
    await prisma.testimonial.delete({ where: { id } })
    revalidatePath("/")
    revalidatePath("/admin/clients")
    return { success: true }
  } catch (error) {
    return { error: "Failed to delete testimonial" }
  }
}
