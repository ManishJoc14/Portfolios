import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Manish Joshi - Portfolio",
  description:
    "Best portfolio made with Nextjs and Framer Motion, TailwindCSS and with unique Dark theme",
  openGraph: {
    images: [
      {
        url: "/tailwind-portfolio.png",
        width: 1200,
        height: 630,
        alt: "Manish Joshi - Portfolio",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta property="og:image" content="/tailwind-portfolio.png" />
        <meta property="og:image:type" content="image/x-icon" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Manish Joshi - Portfolio" />
      </head>
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
