"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Activity, TrendingUp, Users, Box } from "lucide-react"

const products = [
  {
    title: "Aavis Enterprise CRM",
    category: "CRM & Sales",
    description: "A complete unified platform to manage global sales pipelines and automate enterprise marketing.",
    metric: "+40% Sales Velocity",
    icon: Users,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
    features: ["AI Lead Scoring", "Custom Dashboards", "API Integration"]
  },
  {
    title: "Aavis Cloud POS",
    category: "Retail Technology",
    description: "Lightning-fast, cloud-native Point of Sale engineered for multi-location international retail.",
    metric: "99.99% Uptime",
    icon: Activity,
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80",
    features: ["Global Sync", "Offline Mode", "Loyalty Engine"]
  },
  {
    title: "Aavis Smart Inventory",
    category: "Supply Chain",
    description: "AI-driven inventory management predicting stock requirements and automating global suppliers.",
    metric: "-90% Stockouts",
    icon: Box,
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?w=800&q=80",
    features: ["Predictive Analytics", "Multi-Warehouse", "Supplier Portal"]
  },
  {
    title: "Aavis Flow PM",
    category: "Project Management",
    description: "Agile management tools built specifically for massive remote teams and scaling digital agencies.",
    metric: "20% Faster Delivery",
    icon: TrendingUp,
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80",
    features: ["Gantt & Kanban", "Client Portals", "Time Tracking"]
  }
]

export function SoftwareGrid() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
           <div className="max-w-2xl">
             <h2 className="text-sm font-bold tracking-widest text-[#00B7FF] uppercase mb-3">Featured Products</h2>
             <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
               Built for scale. Designed for speed.
             </h3>
           </div>
           <Link 
              href="/contact" 
              className="inline-flex items-center text-slate-700 font-bold hover:text-slate-900 group transition-colors"
           >
              Request Custom Build <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative bg-slate-50 border border-slate-200 rounded-3xl overflow-hidden hover:border-primary/50 transition-all duration-500"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              <div className="p-8">
                 <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                       <product.icon className="w-6 h-6" />
                    </div>
                    <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                       {product.metric}
                    </span>
                 </div>
                 
                 <h4 className="text-2xl font-bold text-slate-900 mb-2">{product.title}</h4>
                 <p className="text-sm text-[#00B7FF] font-medium mb-4">{product.category}</p>
                 <p className="text-slate-600 mb-8 leading-relaxed line-clamp-2">
                    {product.description}
                 </p>

                 <div className="flex flex-wrap gap-2 mb-8">
                    {product.features.map((feat, j) => (
                       <span key={j} className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-100">
                          {feat}
                       </span>
                    ))}
                 </div>
              </div>

              <div className="relative aspect-[2/1] overflow-hidden border-t border-slate-200 mt-auto">
                 <div className="absolute inset-0 bg-slate-50/80 mix-blend-multiply group-hover:opacity-0 transition-opacity duration-500 z-10"></div>
                 <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-slate-50/60 backdrop-blur-sm">
                    <Link 
                       href="/contact" 
                       className="px-6 py-3 rounded-xl bg-slate-900 text-white font-bold hover:scale-105 transition-transform shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                    >
                       Schedule Demo
                    </Link>
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

