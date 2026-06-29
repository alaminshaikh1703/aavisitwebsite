import { Metadata } from "next"
import { prisma } from "@/lib/prisma"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Aavis IT & Care",
  description: "Insights and news from our team of enterprise software engineers and digital transformation experts.",
}

export default async function BlogPage() {
  const posts = await prisma.blogPost.findMany({
    where: { published: true },
    orderBy: { createdAt: 'desc' }
  })

  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">From the Blog</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Learn how to grow your business with our expert advice.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col items-start justify-between">
              <div className="relative w-full overflow-hidden rounded-2xl">
                <div className="aspect-[16/9] w-full bg-muted object-cover sm:aspect-[2/1] lg:aspect-[3/2] flex items-center justify-center">
                  {post.featuredImage ? (
                    <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
                  ) : (
                    <span className="text-muted-foreground text-sm">No Image</span>
                  )}
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border pointer-events-none" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.createdAt.toISOString()} className="text-muted-foreground">
                    {new Date(post.createdAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  {post.categories && (post.categories as string[]).length > 0 && (
                     <span className="relative z-10 rounded-full bg-primary/10 px-3 py-1.5 font-medium text-primary hover:bg-primary/20 transition-colors cursor-pointer">
                        {(post.categories as string[])[0]}
                     </span>
                  )}
                </div>
                <div className="group relative">
                  <h3 className="mt-3 text-lg font-semibold leading-6 text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </Link>
                  </h3>
                  <p className="mt-5 line-clamp-3 text-sm leading-6 text-muted-foreground">{post.excerpt}</p>
                </div>
                <div className="relative mt-8 flex items-center gap-x-4">
                  {post.authorImage ? (
                     <img src={post.authorImage} alt={post.author || "Author"} className="h-10 w-10 rounded-full bg-muted object-cover" />
                  ) : (
                     <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                       {post.author ? post.author.charAt(0) : "A"}
                     </div>
                  )}
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-foreground">
                      <span className="absolute inset-0" />
                      {post.author || "Aavis IT & Care"}
                    </p>
                    <p className="text-muted-foreground">{post.authorRole || "Author"}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
