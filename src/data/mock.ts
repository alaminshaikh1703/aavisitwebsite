export type Service = {
  id: string
  title: string
  description: string
  icon: string
  slug: string
}

export type Project = {
  id: string
  title: string
  category: "Software" | "Websites" | "SEO" | "Marketing"
  image: string
  slug: string
  client: string
  overview: string
  challenge: string
  solution: string
  technologies: string[]
  results: string[]
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
    title: "Fintech Global Payment Gateway",
    category: "Software",
    image: "/images/projects/fintech.jpg",
    slug: "fintech-global-payment",
    client: "PayStream International",
    overview: "A completely custom payment processing system handling millions of daily transactions.",
    challenge: "The client was experiencing 5% downtime during peak holiday seasons with their legacy monolithic system.",
    solution: "We engineered a distributed microservices architecture using Next.js and Go, deployed on Kubernetes.",
    technologies: ["Next.js", "Go", "Kubernetes", "PostgreSQL"],
    results: ["300% increase in transaction volume", "Zero downtime during peak hours", "PCI DSS Level 1 Certified"],
    screenshots: ["/images/projects/fintech-1.jpg", "/images/projects/fintech-2.jpg"]
  },
  {
    id: "2",
    title: "SaaS Marketing Website Redesign",
    category: "Websites",
    image: "/images/projects/saas-web.jpg",
    slug: "saas-marketing-website",
    client: "CloudScale Inc.",
    overview: "A high-conversion marketing website for a B2B cloud infrastructure provider.",
    challenge: "Low conversion rates and poor PageSpeed scores were costing the client thousands in ad spend.",
    solution: "A complete rebuild using Next.js, Headless WordPress, and highly optimized Framer Motion animations.",
    technologies: ["Next.js", "Tailwind CSS", "WPGraphQL", "Framer Motion"],
    results: ["PageSpeed increased to 99", "Bounce rate reduced by 40%", "Inbound leads increased by 150%"],
    screenshots: ["/images/projects/saas-web-1.jpg"]
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
