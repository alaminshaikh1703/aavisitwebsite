"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { SoftwareProduct } from "@/data/mock"
import { CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"
import { buttonVariants } from "@/components/ui/button"
import { motion } from "framer-motion"

interface SoftwareShowcaseProps {
  products: SoftwareProduct[]
}

export function SoftwareShowcase({ products }: SoftwareShowcaseProps) {
  if (!products || products.length === 0) return null

  return (
    <section className="py-24 sm:py-32 bg-background relative overflow-hidden">
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 to-transparent rounded-full pointer-events-none -z-10"></div>
      
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="container mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="mx-auto max-w-2xl lg:text-center mb-16">
          <h2 className="text-base font-semibold leading-7 text-primary">Enterprise Scale</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Software Showcase
          </p>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore our suite of scalable software products engineered to unify operations and accelerate digital transformation.
          </p>
        </div>

        <Tabs defaultValue={products[0].category} className="w-full">
          <div className="flex justify-center mb-16">
            <TabsList className="bg-white/[0.02] backdrop-blur-md border border-white/10 p-1 rounded-xl shadow-lg">
              {products.map((product) => (
                <TabsTrigger 
                  key={product.category} 
                  value={product.category}
                  className="data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-[0_0_15px_rgba(61,0,255,0.5)] px-6 py-2.5 rounded-lg transition-all"
                >
                  {product.category}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {products.map((product) => (
            <TabsContent key={product.category} value={product.category}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid lg:grid-cols-2 gap-16 items-center"
              >
                {/* Product Info */}
                <div>
                  <h3 className="text-4xl font-bold text-foreground mb-4 tracking-tight">{product.title}</h3>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{product.description}</p>
                  
                  <div className="mb-10 p-6 rounded-2xl bg-white/[0.02] border border-white/5 shadow-inner">
                    <h4 className="text-sm font-bold uppercase tracking-wider text-foreground mb-4">Key Features</h4>
                    <ul className="space-y-4">
                      {product.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-4 text-muted-foreground">
                          <CheckCircle2 className="h-5 w-5 text-primary shrink-0 drop-shadow-[0_0_5px_rgba(61,0,255,0.5)]" />
                          <span className="font-medium text-foreground/80">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link href={`/software-products/${product.slug}`} className={buttonVariants({ size: "lg", className: "w-full sm:w-auto shadow-[0_0_20px_rgba(61,0,255,0.4)]" })}>
                    Request Demo <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                {/* Mockup Placeholder */}
                <div className="relative rounded-2xl border border-white/10 bg-white/[0.02] p-2 shadow-[0_0_50px_-15px_rgba(123,97,255,0.3)] backdrop-blur-2xl">
                  <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent opacity-50"></div>
                  <div className="aspect-[16/10] bg-[#0A0A0A] rounded-xl border border-white/10 relative overflow-hidden flex flex-col shadow-inner">
                    {/* Browser Header */}
                    <div className="h-10 border-b border-white/10 bg-white/[0.02] flex items-center px-4 gap-2 backdrop-blur-md z-10">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-[#E0443E]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-[#DEA123]"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27C93F] border border-[#1AAB29]"></div>
                    </div>
                    <div className="flex-1 p-6 relative overflow-hidden">
                      <div className="absolute -top-10 -right-10 w-40 h-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-accent/20 to-transparent rounded-full"></div>
                      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-primary/10 to-transparent"></div>
                      
                      <div className="h-full w-full rounded-lg border border-white/10 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center relative z-10 shadow-lg">
                        <div className="h-16 w-16 mb-4 rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center border border-white/10 shadow-inner">
                          <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                            {product.category.charAt(0)}
                          </span>
                        </div>
                        <span className="text-foreground font-mono text-sm uppercase tracking-widest">{product.category} Interface</span>
                        <p className="text-muted-foreground/50 text-xs mt-2">Interactive Preview Pending</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </TabsContent>
          ))}
        </Tabs>
      </motion.div>
    </section>
  )
}
