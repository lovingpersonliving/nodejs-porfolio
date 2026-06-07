import type { Metadata } from "next";
import { WebVitals } from "@/components/WebVitals";
import "./globals.css";

export const metadata: Metadata = {
  title: "Alex Chen | Creative Developer & Architect",
  description:
    "Award-winning frontend architect crafting high-performance digital experiences. Specializing in React, Next.js, and creative web development.",
  keywords: [
    "frontend developer",
    "creative developer",
    "React",
    "Next.js",
    "TypeScript",
    "web development",
    "portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  creator: "Alex Chen",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexchendev.com",
    siteName: "Alex Chen — Creative Developer",
    title: "Alex Chen | Creative Developer & Architect",
    description:
      "Award-winning frontend architect crafting high-performance digital experiences.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Chen — Creative Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen | Creative Developer & Architect",
    description:
      "Award-winning frontend architect crafting high-performance digital experiences.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <head>
        {/* Preconnect to Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Structured Data (JSON-LD) for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Alex Chen",
              url: "https://alexchendev.com",
              jobTitle: "Creative Developer & Frontend Architect",
              sameAs: [
                "https://github.com/alexchen",
                "https://linkedin.com/in/alexchen",
                "https://twitter.com/alexchen",
                "https://dribbble.com/alexchen",
              ],
              knowsAbout: [
                "React",
                "TypeScript",
                "Next.js",
                "Web Performance",
                "Design Systems",
                "WebGL",
              ],
            }),
          }}
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className="font-body antialiased bg-charcoal text-off-white">
        {/* Grid background for depth */}
        <div className="grid-bg" aria-hidden="true" />

        {children}

        {/* Web Vitals performance monitoring */}
        <WebVitals />
      </body>
    </html>
  );
}
