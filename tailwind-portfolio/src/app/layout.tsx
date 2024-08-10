import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

export const metadata: Metadata = {
  title: "Tailwind Portfolio",
  description:
    "Best portfolio made with Nextjs and Framer Motion, TailwindCSS and with unique Dark theme",
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
