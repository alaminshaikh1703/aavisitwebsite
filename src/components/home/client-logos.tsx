"use client"

import { motion } from "framer-motion"

const logos = [
  { name: "Acme Corp", url: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" },
  { name: "GlobalTech", url: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" },
  { name: "Innovate", url: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" },
  { name: "Dreevv", url: "https://dreevv.com/wp-content/uploads/2026/01/cropped-dreevv-logo-scaled-1-120x47.webp" },
  { name: "Silent yacht", url: "https://silent69yacht.com/wp-content/uploads/2026/02/Untitled_design__47_-removebg-preview-300x300.png" },
]

export function ClientLogos() {
  return (
    <section className="py-12 border-y border-border/40 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>
        <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          {logos.map((logo, index) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="col-span-2 max-h-12 w-full object-contain lg:col-span-1 grayscale opacity-50 hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert"
            >
              {/* Using img for generic logos for now. In production, Next/Image with proper domains would be better */}
              <img src={logo.url} alt={logo.name} className="h-8 w-auto mx-auto" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
