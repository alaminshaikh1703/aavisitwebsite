import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Aavis IT & Care",
  description: "Learn about Aavis IT & Care, our mission, vision, and the global impact we're making in the software development industry.",
}

export default function AboutPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">About Aavis IT & Care</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We are a global software development and digital solutions company dedicated to helping enterprises transform their businesses through technology.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Mission</h3>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                To deliver premium, scalable, and secure software solutions that empower businesses to innovate and thrive in the digital era. We bridge the gap between complex technical challenges and elegant user experiences.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Our Vision</h3>
              <p className="mt-6 text-base leading-7 text-muted-foreground">
                To become the world's most trusted partner for enterprise digital transformation, setting new standards for code quality, design excellence, and operational agility.
              </p>
            </div>
          </div>
          
          <div className="mt-24">
            <h3 className="text-3xl font-bold tracking-tight text-foreground mb-8">Our Global Footprint</h3>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              <div className="bg-muted p-8 rounded-2xl border border-border">
                <h4 className="text-xl font-bold text-foreground">USA</h4>
                <p className="mt-2 text-muted-foreground">Silicon Valley Headquarters</p>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border">
                <h4 className="text-xl font-bold text-foreground">UK</h4>
                <p className="mt-2 text-muted-foreground">London Innovation Center</p>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border">
                <h4 className="text-xl font-bold text-foreground">Canada</h4>
                <p className="mt-2 text-muted-foreground">Toronto Hub</p>
              </div>
              <div className="bg-muted p-8 rounded-2xl border border-border">
                <h4 className="text-xl font-bold text-foreground">Australia</h4>
                <p className="mt-2 text-muted-foreground">Sydney Operations</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
