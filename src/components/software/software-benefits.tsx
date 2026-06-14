"use client"

import { motion } from "framer-motion"
import { Cpu, ShieldCheck, Zap, Layers, BarChart4, Expand } from "lucide-react"

const benefits = [
  {
    icon: Cpu,
    title: "Intelligent Automation",
    description: "Replace manual, error-prone workflows with AI-driven automation that works 24/7."
  },
  {
    icon: Expand,
    title: "Infinite Scalability",
    description: "Cloud-native architectures that scale dynamically from 10 users to 10 million without a hiccup."
  },
  {
    icon: ShieldCheck,
    title: "Enterprise Security",
    description: "Bank-grade encryption, SOC2 compliance standards, and rigorous penetration testing."
  },
  {
    icon: Zap,
    title: "Blistering Performance",
    description: "Sub-second load times engineered via modern frameworks and optimized database queries."
  },
  {
    icon: Layers,
    title: "Seamless Integration",
    description: "Connect your new custom software perfectly with your existing legacy systems and third-party APIs."
  },
  {
    icon: BarChart4,
    title: "Deep Analytics",
    description: "Real-time, granular data visualization to drive actionable business intelligence."
  }
]

export function SoftwareBenefits() {
  return (
    <section className="py-24 bg-white relative border-b border-slate-100 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-sm font-bold tracking-widest text-[#00B7FF] uppercase mb-3">The Architecture of Success</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Why enterprises choose custom code.
          </h3>
          <p className="mt-4 text-lg text-slate-600">
            Off-the-shelf software forces you to change your business to fit the code. We write code that fits your exact business model.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50/80 backdrop-blur-sm border border-slate-200 p-8 rounded-3xl hover:bg-slate-100 hover:border-primary/30 transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center text-primary mb-6 group-hover:scale-110 group-hover:bg-primary/20 transition-all duration-300">
                <benefit.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

