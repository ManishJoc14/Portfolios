import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://manish-joshi.vercel.app'),
  title: {
    default: "Manish Joshi - Web Developer Portfolio",
    template: "%s | Manish Joshi"
  },
  description: "Manish Joshi's professional portfolio showcasing web development projects using Next.js, React, Framer Motion, and TailwindCSS and more. Featuring a unique dark theme and responsive design.",
  keywords: ["Manish Joshi", "Web Developer", "Frontend Developer", "Portfolio", "Next.js", "React", "Framer Motion", "TailwindCSS", "Dark Theme"],
  authors: [{ name: "Manish Joshi" }],
  creator: "Manish Joshi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manish-joshi.vercel.app/",
    siteName: "Manish Joshi Frontend Developer Portfolio",
    title: "Manish Joshi - Innovative Web Developer",
    description: "Explore Manish Joshi's web development portfolio featuring cutting-edge projects built with Next.js, React, and more. Discover a unique dark-themed showcase of skills and creativity.",
    images: [
      {
        url: "/tailwind-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Manish Joshi - Web Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manish Joshi - Web Developer Portfolio",
    description: "Innovative web development projects by Manish Joshi using Next.js, React, and TailwindCSS. Features a unique dark theme.",
    creator: "@manish_joshi14",
    images: ["/tailwind-portfolio.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://manish-joshi.vercel.app/",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen bg-primary font-mono">
          <div className="mx-auto px-8 py-4"></div>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}