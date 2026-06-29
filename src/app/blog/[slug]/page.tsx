import { prisma } from "@/lib/prisma"
import { notFound } from "next/navigation"
import { Metadata } from "next"
import Link from "next/link"
import { ArrowLeft, Clock, Calendar, Tag } from "lucide-react"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await prisma.blogPost.findUnique({ where: { slug: params.slug } })
  
  if (!post) return { title: "Post Not Found" }
  
  return {
    title: post.metaTitle || `${post.title} | Aavis IT & Care Blog`,
    description: post.metaDescription || post.excerpt || "Read the latest insights from Aavis IT & Care.",
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await prisma.blogPost.findUnique({
    where: { slug: params.slug }
  })

  if (!post || !post.published) {
    notFound()
  }

  const categories = Array.isArray(post.categories) ? (post.categories as string[]) : []
  const tags = Array.isArray(post.tags) ? (post.tags as string[]) : []

  return (
    <article className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden bg-slate-50">
        <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] bg-[size:20px_20px]" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto">
            <Link 
              href="/blog"
              className="inline-flex items-center text-sm font-semibold text-primary hover:text-primary/80 transition-colors mb-8"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Link>

            {categories.length > 0 && (
               <div className="flex flex-wrap gap-2 mb-6">
                 {categories.map((cat, i) => (
                    <span key={i} className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                       {cat}
                    </span>
                 ))}
               </div>
            )}

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight mb-8">
              {post.title}
            </h1>

            {post.excerpt && (
               <p className="text-xl text-slate-600 leading-relaxed mb-8">
                 {post.excerpt}
               </p>
            )}

            <div className="flex flex-wrap items-center gap-6 py-6 border-y border-slate-200 mt-8">
               <div className="flex items-center gap-3">
                  {post.authorImage ? (
                     <img src={post.authorImage} alt={post.author || "Author"} className="w-12 h-12 rounded-full object-cover" />
                  ) : (
                     <div className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-lg">
                        {post.author ? post.author.charAt(0) : "A"}
                     </div>
                  )}
                  <div>
                     <p className="font-bold text-slate-900">{post.author || "Aavis IT & Care"}</p>
                     <p className="text-sm text-slate-500">{post.authorRole || "Author"}</p>
                  </div>
               </div>

               <div className="hidden sm:block w-px h-8 bg-slate-200" />

               <div className="flex items-center gap-4 text-sm font-medium text-slate-500">
                  <div className="flex items-center gap-1.5">
                     <Calendar className="w-4 h-4" />
                     <time dateTime={post.createdAt.toISOString()}>
                        {new Date(post.createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                     </time>
                  </div>
                  {post.readingTime && (
                     <div className="flex items-center gap-1.5">
                        <Clock className="w-4 h-4" />
                        <span>{post.readingTime}</span>
                     </div>
                  )}
               </div>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.featuredImage && (
         <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 relative z-20">
            <div className="aspect-[21/9] w-full rounded-2xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5">
               <img src={post.featuredImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
         </div>
      )}

      {/* Main Content */}
      <div className="py-20 lg:py-24">
         <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
               
               {/* Prose / Markdown Rendering */}
               <div 
                  className="prose prose-lg prose-slate max-w-none 
                             prose-headings:font-bold prose-headings:tracking-tight prose-headings:text-slate-900 
                             prose-a:text-primary prose-a:font-semibold hover:prose-a:text-primary/80 
                             prose-img:rounded-xl prose-img:shadow-lg
                             prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-code:before:content-none prose-code:after:content-none
                             prose-pre:bg-slate-900 prose-pre:text-slate-50 prose-pre:shadow-xl
                             prose-blockquote:border-l-primary prose-blockquote:bg-primary/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:font-medium prose-blockquote:text-slate-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
               />

               {/* Tags */}
               {tags.length > 0 && (
                  <div className="mt-16 pt-8 border-t border-slate-200">
                     <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2 mb-4">
                        <Tag className="w-4 h-4" /> Topics covered
                     </h3>
                     <div className="flex flex-wrap gap-2">
                        {tags.map((tag, i) => (
                           <span key={i} className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors cursor-pointer">
                              {tag}
                           </span>
                        ))}
                     </div>
                  </div>
               )}

            </div>
         </div>
      </div>
    </article>
  )
}
