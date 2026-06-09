import { Metadata } from "next"
import { getBlogPosts } from "@/lib/api"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Blog | Aavis IT & Care",
  description: "Insights and news from our team of enterprise software engineers and digital transformation experts.",
}

export default async function BlogPage() {
  const posts = await getBlogPosts()

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
              <div className="relative w-full">
                <div className="aspect-[16/9] w-full rounded-2xl bg-muted object-cover sm:aspect-[2/1] lg:aspect-[3/2] flex items-center justify-center">
                  <span className="text-muted-foreground text-sm">Image Placeholder</span>
                </div>
                <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-border" />
              </div>
              <div className="max-w-xl">
                <div className="mt-8 flex items-center gap-x-4 text-xs">
                  <time dateTime={post.date} className="text-muted-foreground">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
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
                  <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {post.author.charAt(0)}
                  </div>
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-foreground">
                      <span className="absolute inset-0" />
                      {post.author}
                    </p>
                    <p className="text-muted-foreground">Author</p>
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
