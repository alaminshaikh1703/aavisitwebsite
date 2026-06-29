"use client"

import { motion } from "framer-motion"

const defaultLogos = [
  { name: "Acme Corp", url: "https://tailwindui.com/plus/img/logos/158x48/transistor-logo-gray-900.svg" },
  { name: "GlobalTech", url: "https://tailwindui.com/plus/img/logos/158x48/reform-logo-gray-900.svg" },
  { name: "Innovate", url: "https://tailwindui.com/plus/img/logos/158x48/tuple-logo-gray-900.svg" },
  { name: "Dreevv", url: "https://dreevv.com/wp-content/uploads/2026/01/cropped-dreevv-logo-scaled-1-120x47.webp" },
  { name: "Silent yacht", url: "https://silent69yacht.com/wp-content/uploads/2026/02/Untitled_design__47_-removebg-preview-300x300.png" },
]

export function ClientLogos({ clients }: { clients?: any[] }) {
  const displayLogos = clients && clients.length > 0 
    ? clients.filter(c => c.active).map(c => ({ name: c.name, url: c.logoUrl, link: c.websiteUrl })) 
    : defaultLogos;

  // Duplicate logos array to create seamless infinite scroll
  // We need enough duplicates to fill the screen twice
  const marqueeLogos = [...displayLogos, ...displayLogos, ...displayLogos, ...displayLogos];

  return (
    <section className="py-12 border-y border-border/40 bg-muted/20 overflow-hidden">
      <div className="w-full">
        <p className="text-center text-sm font-semibold text-muted-foreground mb-8">
          TRUSTED BY INNOVATIVE TEAMS WORLDWIDE
        </p>
        
        {/* Marquee Container */}
        <div className="relative flex w-full overflow-hidden">
          {/* Gradient Fades for edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-muted/20 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-muted/20 to-transparent z-10 pointer-events-none" />

          {/* Scrolling Content */}
          <motion.div
            className="flex flex-nowrap items-center gap-16 pr-16 w-max"
            animate={{
              x: [0, `-${50}%`],
            }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: displayLogos.length * 10, // Slower speed: 10 seconds per logo length
                ease: "linear",
              },
            }}
          >
            {marqueeLogos.map((logo, index) => (
              <motion.div
                key={`${logo.name}-${index}`}
                whileHover={{ 
                  y: [-5, 5, -5],
                  transition: { repeat: Infinity, duration: 2, ease: "easeInOut" }
                }}
                className="flex justify-center items-center h-20 w-[150px] flex-shrink-0 transition-all duration-300 cursor-pointer"
              >
                <img src={logo.url} alt={logo.name} className="max-h-16 max-w-full w-auto object-contain" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
