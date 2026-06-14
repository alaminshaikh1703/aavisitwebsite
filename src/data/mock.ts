export type Service = {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

export type ProjectCategory = "Digital Marketing" | "Website Design" | "SEO Projects" | "CRM Solutions" | "POS Systems" | "Inventory Software" | "Branding & Creative";

export type Project = {
  id: string
  title: string
  category: ProjectCategory
  image: string
  slug: string
  client: string
  industry: string
  overview: string
  challenge: string
  solution: string
  servicesProvided: string[]
  technologies: string[]
  results: { metric: string; label: string }[]
  screenshots: string[]
}

export type SoftwareProduct = {
  id: string
  title: string
  category: "CRM" | "POS" | "Inventory" | "Project Management"
  description: string
  features: string[]
  benefits: string[]
  image: string
  slug: string
}

export type BlogPost = {
  id: string
  title: string
  excerpt: string
  date: string
  author: string
  slug: string
  image: string
}

export type Testimonial = {
  id: string
  content: string
  author: string
  role: string
  company: string
}

export const services: Service[] = [
  {
    id: "1",
    title: "Custom Software Development",
    description: "End-to-end software solutions tailored for enterprise workflows, ensuring scalability, security, and performance.",
    icon: "Code",
    slug: "custom-software-development"
  },
  {
    id: "2",
    title: "CRM Solutions",
    description: "Custom Customer Relationship Management systems to streamline sales, support, and marketing pipelines.",
    icon: "Users",
    slug: "crm-solutions"
  },
  {
    id: "3",
    title: "POS Software",
    description: "Cloud-based Point of Sale systems designed for retail and hospitality, enabling real-time global syncing.",
    icon: "CreditCard",
    slug: "pos-software"
  },
  {
    id: "4",
    title: "Website Development",
    description: "Premium SaaS-style websites optimized for conversion, PageSpeed, and international SEO standards.",
    icon: "Globe",
    slug: "website-development"
  },
  {
    id: "5",
    title: "SEO Services",
    description: "Technical, On-Page, and Off-Page SEO to dominate search engine results globally.",
    icon: "TrendingUp",
    slug: "seo-services"
  },
  {
    id: "6",
    title: "Digital Marketing",
    description: "Data-driven social media and PPC campaigns to aggressively acquire SMEs and Enterprise clients.",
    icon: "Megaphone",
    slug: "digital-marketing"
  }
]

export const softwareProducts: SoftwareProduct[] = [
  {
    id: "1",
    title: "Aavis Enterprise CRM",
    category: "CRM",
    description: "A complete unified platform to manage global sales pipelines, customer interactions, and automated marketing campaigns.",
    features: ["Lead Scoring AI", "Omnichannel Inbox", "Custom Reporting Dashboards", "API Integrations"],
    benefits: ["Increase sales efficiency by 40%", "Reduce churn rate", "Consolidate data silos"],
    image: "/images/products/crm-dashboard.jpg",
    slug: "aavis-enterprise-crm"
  },
  {
    id: "2",
    title: "Aavis Cloud POS",
    category: "POS",
    description: "Lightning-fast, cloud-native Point of Sale software engineered for multi-location retail enterprises.",
    features: ["Real-time Sync", "Offline Mode", "Staff Management", "Customer Loyalty Programs"],
    benefits: ["Zero downtime", "Centralized inventory", "Faster checkout experiences"],
    image: "/images/products/pos-system.jpg",
    slug: "aavis-cloud-pos"
  },
  {
    id: "3",
    title: "Aavis Smart Inventory",
    category: "Inventory",
    description: "AI-driven inventory management that predicts stock requirements and automates supplier orders.",
    features: ["Predictive Analytics", "Multi-Warehouse Routing", "Barcode Scanning", "Supplier Portal"],
    benefits: ["Reduce stockouts by 90%", "Optimize warehouse space", "Lower holding costs"],
    image: "/images/products/inventory-dashboard.jpg",
    slug: "aavis-smart-inventory"
  },
  {
    id: "4",
    title: "Aavis Flow Project Management",
    category: "Project Management",
    description: "Agile project management tools built for software agencies and massive remote teams.",
    features: ["Kanban & Gantt Views", "Time Tracking", "Resource Allocation", "Client Portals"],
    benefits: ["Deliver projects 20% faster", "Improve team visibility", "Accurate billing"],
    image: "/images/products/pm-dashboard.jpg",
    slug: "aavis-flow-pm"
  }
]

export const projects: Project[] = [
  {
    id: "1",
    title: "Global E-Commerce Expansion",
    category: "Digital Marketing",
    image: "/images/projects/marketing-1.jpg",
    slug: "global-ecommerce-expansion",
    client: "Luxe Retail Group",
    industry: "Retail & E-commerce",
    overview: "A massive multinational digital marketing campaign spanning 12 countries to launch a new line of premium products.",
    challenge: "The client needed to aggressively capture market share in North America and Europe simultaneously while maintaining a target CAC.",
    solution: "We deployed a highly segmented omnichannel strategy across Meta, Google Ads, and TikTok, supported by AI-driven creative optimization.",
    servicesProvided: ["Paid Social", "Search Engine Marketing", "Conversion Rate Optimization"],
    technologies: ["Meta Ads", "Google Ads", "HubSpot", "Segment"],
    results: [
      { metric: "+180%", label: "Lead Generation" },
      { metric: "$12M", label: "New Revenue" },
      { metric: "-35%", label: "CAC Reduction" }
    ],
    screenshots: ["/images/projects/marketing-1-1.jpg", "/images/projects/marketing-1-2.jpg"]
  },
  {
    id: "2",
    title: "Fintech Global Payment Gateway",
    category: "Website Design",
    image: "/images/projects/fintech.jpg",
    slug: "fintech-global-payment",
    client: "PayStream International",
    industry: "Financial Technology",
    overview: "A completely custom, high-conversion marketing website and user portal for a leading global payment processor.",
    challenge: "Their legacy website was experiencing low conversion rates and poor PageSpeed scores, costing them thousands in ad spend.",
    solution: "A complete rebuild using Next.js and a custom Node.js backend, paired with highly optimized Framer Motion animations.",
    servicesProvided: ["UI/UX Design", "Frontend Development", "Backend Development"],
    technologies: ["Next.js", "Tailwind CSS", "Node.js", "Framer Motion"],
    results: [
      { metric: "99", label: "PageSpeed Score" },
      { metric: "+75%", label: "Conversion Rate" },
      { metric: "0.8s", label: "Load Time" }
    ],
    screenshots: ["/images/projects/fintech-1.jpg", "/images/projects/fintech-2.jpg"]
  },
  {
    id: "3",
    title: "B2B SaaS Organic Dominance",
    category: "SEO Projects",
    image: "/images/projects/seo-1.jpg",
    slug: "b2b-saas-organic-dominance",
    client: "CloudScale Inc.",
    industry: "Cloud Infrastructure",
    overview: "A comprehensive technical and content SEO strategy to dominate highly competitive 'cloud infrastructure' keywords.",
    challenge: "The client was completely invisible on Page 1 of Google for their most profitable B2B enterprise keywords.",
    solution: "We executed a 6-month technical SEO overhaul, built high-authority backlinks, and mapped out a programmatic content architecture.",
    servicesProvided: ["Technical SEO", "Content Strategy", "Link Building"],
    technologies: ["Ahrefs", "Screaming Frog", "Next.js SEO", "Google Search Console"],
    results: [
      { metric: "+320%", label: "Organic Traffic" },
      { metric: "Page 1", label: "For 15 Core Keywords" },
      { metric: "3.5x", label: "Pipeline Value" }
    ],
    screenshots: ["/images/projects/seo-1-1.jpg"]
  },
  {
    id: "4",
    title: "Enterprise Sales Automation",
    category: "CRM Solutions",
    image: "/images/projects/crm-1.jpg",
    slug: "enterprise-sales-automation",
    client: "Apex Manufacturing",
    industry: "Industrial Manufacturing",
    overview: "A bespoke CRM system designed to handle complex multi-year B2B sales cycles and global distribution networks.",
    challenge: "The client's sales team of 400+ reps was using disjointed spreadsheets, resulting in lost leads and poor forecasting.",
    solution: "We built a custom React/Node.js CRM featuring automated lead routing, predictive forecasting, and CPQ (Configure, Price, Quote) capabilities.",
    servicesProvided: ["Custom Software Development", "System Architecture", "API Integrations"],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    results: [
      { metric: "400+", label: "Active Daily Users" },
      { metric: "+40%", label: "Sales Efficiency" },
      { metric: "100%", label: "Data Accuracy" }
    ],
    screenshots: ["/images/projects/crm-1-1.jpg"]
  },
  {
    id: "5",
    title: "Omnichannel Retail System",
    category: "POS Systems",
    image: "/images/projects/pos-1.jpg",
    slug: "omnichannel-retail-system",
    client: "Urban Outfitters Regional",
    industry: "Apparel Retail",
    overview: "A cloud-native POS system seamlessly connecting 45 physical storefronts with their global e-commerce platform.",
    challenge: "Frequent sync failures between in-store inventory and online sales led to severe overselling issues.",
    solution: "Developed a fault-tolerant, offline-first POS using React Native for tablets and Go for the high-throughput synchronization engine.",
    servicesProvided: ["POS Development", "Cloud Architecture", "Hardware Integration"],
    technologies: ["React Native", "Go", "Redis", "Stripe Terminal"],
    results: [
      { metric: "0", label: "Overselling Incidents" },
      { metric: "<100ms", label: "Sync Latency" },
      { metric: "45", label: "Stores Upgraded" }
    ],
    screenshots: ["/images/projects/pos-1-1.jpg"]
  },
  {
    id: "6",
    title: "Global Supply Chain Optimizer",
    category: "Inventory Software",
    image: "/images/projects/inventory-1.jpg",
    slug: "global-supply-chain-optimizer",
    client: "MediCorp Supplies",
    industry: "Healthcare Logistics",
    overview: "An AI-driven inventory management platform that predicts hospital supply requirements and automates vendor reordering.",
    challenge: "The client faced millions in holding costs due to overstocking, while simultaneously battling critical stockouts of niche supplies.",
    solution: "We integrated a custom predictive analytics model within a scalable dashboard to automatically adjust par levels based on historical data.",
    servicesProvided: ["AI Integration", "Dashboard Design", "Data Engineering"],
    technologies: ["Python", "TensorFlow", "React", "Snowflake"],
    results: [
      { metric: "-30%", label: "Holding Costs" },
      { metric: "-90%", label: "Stockouts" },
      { metric: "$5M+", label: "Capital Freed" }
    ],
    screenshots: ["/images/projects/inventory-1-1.jpg"]
  },
  {
    id: "7",
    title: "SaaS Brand Transformation",
    category: "Branding & Creative",
    image: "/images/projects/branding-1.jpg",
    slug: "saas-brand-transformation",
    client: "DataSync",
    industry: "Data Analytics",
    overview: "A complete brand overhaul for a high-growth data analytics startup preparing for their Series B funding round.",
    challenge: "Their original brand looked immature and failed to resonate with the enterprise CTOs they were targeting.",
    solution: "We designed a completely new visual identity, including a modern logo, comprehensive design system, and premium corporate guidelines.",
    servicesProvided: ["Logo Design", "Brand Guidelines", "Design System"],
    technologies: ["Figma", "Illustrator", "After Effects"],
    results: [
      { metric: "Series B", label: "Successfully Funded" },
      { metric: "3x", label: "Brand Recall" },
      { metric: "Enterprise", label: "Market Position" }
    ],
    screenshots: ["/images/projects/branding-1-1.jpg"]
  }
]

export const posts: BlogPost[] = [
  {
    id: "1",
    title: "The Future of Enterprise SaaS Architecture in 2026",
    excerpt: "Explore the new trends in microservices, serverless deployments, and edge computing shaping modern SaaS platforms.",
    date: "2026-05-14",
    author: "Elena Rostova",
    slug: "future-of-enterprise-saas-architecture-2026",
    image: "/images/blog/saas-architecture.jpg"
  }
]

export const testimonials: Testimonial[] = [
  {
    id: "1",
    content: "Aavis IT & Care completely transformed our digital infrastructure. Their expertise in cloud-native solutions saved us millions in operational costs.",
    author: "Michael Roberts",
    role: "CTO",
    company: "GlobalTrans Logistics"
  }
]
