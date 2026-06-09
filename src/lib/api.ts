import { services, projects, posts, testimonials, softwareProducts, type Service, type Project, type BlogPost, type Testimonial, type SoftwareProduct } from "@/data/mock"

/**
 * API fetching layer simulating GraphQL queries to Headless WordPress.
 * These functions currently return Promises resolving to mock data.
 * Once WPGraphQL is ready, these can be replaced with real fetch calls using the NEXT_PUBLIC_WORDPRESS_API_URL.
 */

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export async function getSoftwareProducts(): Promise<SoftwareProduct[]> {
  await delay(100)
  return softwareProducts
}

export async function getServices(): Promise<Service[]> {
  await delay(100) // Simulate network latency
  return services
}

export async function getProjects(): Promise<Project[]> {
  await delay(100)
  return projects
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  await delay(100)
  return posts
}

export async function getTestimonials(): Promise<Testimonial[]> {
  await delay(100)
  return testimonials
}

export async function getServiceBySlug(slug: string): Promise<Service | null> {
  await delay(100)
  return services.find(s => s.slug === slug) || null
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  await delay(100)
  return projects.find(p => p.slug === slug) || null
}

export async function getPostBySlug(slug: string): Promise<BlogPost | null> {
  await delay(100)
  return posts.find(p => p.slug === slug) || null
}
