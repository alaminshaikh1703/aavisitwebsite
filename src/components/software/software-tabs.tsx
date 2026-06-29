"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Users, CreditCard, Package, Kanban, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

const categories = [
  {
    id: "crm",
    name: "CRM Software",
    icon: Users,
    title: "Manage relationships at scale.",
    description: "A centralized hub for sales pipelines, customer interactions, and automated marketing campaigns. Built to reduce churn and increase deal velocity.",
    features: ["Omnichannel Inbox", "Lead Scoring AI", "Custom Sales Pipelines", "Automated Follow-ups"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  },
  {
    id: "pos",
    name: "POS Software",
    icon: CreditCard,
    title: "Lightning-fast checkout experiences.",
    description: "Cloud-native Point of Sale software engineered for multi-location retail enterprises. Works seamlessly offline and syncs globally in real-time.",
    features: ["Real-time Syncing", "Offline Mode", "Multi-store Management", "Loyalty Programs"],
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
  },
  {
    id: "inventory",
    name: "Inventory Management",
    icon: Package,
    title: "Never run out of stock again.",
    description: "AI-driven inventory management that predicts stock requirements, automates supplier orders, and optimizes multi-warehouse routing.",
    features: ["Predictive Restocking", "Barcode Scanning", "Supplier Portals", "COGS Tracking"],
    image: "https://images.unsplash.com/photo-1586528116311-ad8ed7c663be?w=800&q=80"
  },
  {
    id: "pm",
    name: "Project Management",
    icon: Kanban,
    title: "Agile workflows for elite teams.",
    description: "Deliver projects faster with tools built specifically for agencies and remote enterprise teams. Complete visibility from start to finish.",
    features: ["Kanban & Gantt Views", "Time Tracking", "Resource Allocation", "Client Portals"],
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&q=80"
  }
]

export function SoftwareTabs() {
  const [activeTab, setActiveTab] = useState(categories[0].id)
  
  const activeCategory = categories.find(c => c.id === activeTab) || categories[0]

  return (
    <section className="py-24 bg-card relative border-b border-slate-100 dark:border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#00B7FF] uppercase mb-3">Product Categories</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
            Solutions for every operational need.
          </h3>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-12 bg-slate-100 dark:bg-card/5 p-2 rounded-2xl border border-slate-200 dark:border-white/10 w-fit mx-auto">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`relative flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                  isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground hover:bg-slate-100 dark:bg-card/5"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-slate-200 dark:bg-card/10 border border-slate-300 dark:border-white/20 rounded-xl"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <cat.icon className="w-4 h-4 relative z-10" />
                <span className="relative z-10">{cat.name}</span>
              </button>
            )
          })}
        </div>

        {/* Tab Content */}
        <div className="bg-slate-50 dark:bg-background border border-slate-200 dark:border-white/10 rounded-3xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
           
           <AnimatePresence mode="wait">
             <motion.div
               key={activeTab}
               initial={{ opacity: 0, y: 20 }}
               animate={{ opacity: 1, y: 0 }}
               exit={{ opacity: 0, y: -20 }}
               transition={{ duration: 0.3 }}
               className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10"
             >
               <div>
                  <h4 className="text-3xl font-black text-foreground mb-4">{activeCategory.title}</h4>
                  <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                     {activeCategory.description}
                  </p>
                  
                  <div className="space-y-4 mb-8">
                     {activeCategory.features.map((feature, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <CheckCircle2 className="w-5 h-5 text-[#00B7FF]" />
                           <span className="text-muted-foreground font-medium">{feature}</span>
                        </div>
                     ))}
                  </div>

                  <Link 
                     href="/contact"
                     className="inline-flex items-center text-[#00B7FF] font-bold hover:text-foreground transition-colors group"
                  >
                     Discuss {activeCategory.name} <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
               </div>

               <div className="relative aspect-video rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl group">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent z-10"></div>
                  <img 
                     src={activeCategory.image} 
                     alt={activeCategory.name} 
                     className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between">
                     <span className="px-3 py-1 bg-slate-200 dark:bg-card/10 backdrop-blur border border-slate-300 dark:border-white/20 rounded-full text-xs font-bold text-foreground uppercase tracking-wider">
                        Live Preview
                     </span>
                  </div>
               </div>
             </motion.div>
           </AnimatePresence>
        </div>

      </div>
    </section>
  )
}

