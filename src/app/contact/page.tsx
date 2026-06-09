import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail, Phone, MapPin, MessageCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact Us | Aavis IT & Care",
  description: "Get in touch with Aavis IT & Care. Schedule a consultation, chat on WhatsApp, or send us an inquiry.",
}

export default function ContactPage() {
  return (
    <div className="bg-background py-24 sm:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">Let's talk about your project</h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Whether you need a custom enterprise application, a cloud migration strategy, or a scalable SaaS platform, our experts are ready to help.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
          
          <div className="flex flex-col gap-y-10">
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MessageCircle className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-foreground">WhatsApp</h3>
                <p className="mt-2 leading-7 text-muted-foreground">Get instant support and sales inquiries via WhatsApp.</p>
                <p className="mt-4 text-sm font-semibold text-primary"><a href="#">Chat with us &rarr;</a></p>
              </div>
            </div>
            
            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <Mail className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-foreground">Email</h3>
                <p className="mt-2 leading-7 text-muted-foreground">Send us an email anytime.</p>
                <p className="mt-4 text-sm font-semibold text-primary"><a href="mailto:contact@aavis.com">contact@aavis.com</a></p>
              </div>
            </div>

            <div className="flex gap-x-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-base font-semibold leading-7 text-foreground">Global Offices</h3>
                <p className="mt-2 leading-7 text-muted-foreground">Silicon Valley, London, Toronto, Sydney, Dubai</p>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-foreground mb-6">Send us a message</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-foreground">Name</label>
                <div className="mt-2">
                  <Input id="name" name="name" type="text" placeholder="John Doe" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-foreground">Email</label>
                <div className="mt-2">
                  <Input id="email" name="email" type="email" placeholder="john@example.com" />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium leading-6 text-foreground">Message</label>
                <div className="mt-2">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-0 bg-background py-1.5 text-foreground shadow-sm ring-1 ring-inset ring-border placeholder:text-muted-foreground focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6 px-3"
                    placeholder="Tell us about your project..."
                  />
                </div>
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
        
        {/* Placeholder for Calendly Integration */}
        <div className="mt-24 rounded-2xl bg-muted/50 p-8 text-center border border-border">
          <h3 className="text-2xl font-bold tracking-tight text-foreground">Schedule a Meeting</h3>
          <p className="mt-4 text-muted-foreground mb-8">Choose a time that works for you using our Calendly integration.</p>
          <div className="h-96 w-full bg-background rounded-lg border border-border flex items-center justify-center text-muted-foreground">
            [ Calendly Embed Widget placeholder ]
          </div>
        </div>
      </div>
    </div>
  )
}
