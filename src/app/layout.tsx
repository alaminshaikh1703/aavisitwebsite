import type { Metadata } from "next";
import { Sora, Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://it.aavisstudio.com"),
  title: "Aavis IT & Care - Global Software Development & Digital Transformation",
  description: "Aavis IT & Care provides custom software development, CRM systems, POS solutions, and modern websites for enterprises worldwide.",
  openGraph: {
    title: "Aavis IT & Care - Premium Software Development",
    description: "Build Software. Scale Business. Accelerate Growth. Aavis IT & Care helps businesses worldwide.",
    url: "https://it.aavisstudio.com",
    siteName: "Aavis IT & Care",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aavis IT & Care - Global Software Development",
    description: "Build Software. Scale Business. Accelerate Growth.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Aavis IT & Care",
    url: "https://it.aavisstudio.com",
    logo: "https://it.aavisstudio.com/logo.png",
    description: "Global enterprise software development, digital transformation, and SaaS solutions.",
  };

  return (
    <html lang="en" suppressHydrationWarning className={`${sora.variable} ${inter.variable} h-full antialiased scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
      </head>
      <body suppressHydrationWarning className="min-h-full flex flex-col font-sans bg-background text-foreground relative selection:bg-primary/30">
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {/* Global Premium Ambient Background */}
          <div className="fixed inset-0 -z-50 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
          <div className="fixed top-0 z-[-40] h-screen w-screen bg-[url('/noise.png')] opacity-[0.015] mix-blend-overlay pointer-events-none"></div>

          <Header />
          <main className="flex-1 mt-16">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
