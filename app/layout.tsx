import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aman Undre | Full-Stack Developer",
  description: "Portfolio of Aman Undre, a Full-Stack Developer specializing in the MERN stack, Next.js, and building scalable enterprise internal tools.",
  keywords: [
    "Aman Undre",
    "Full-Stack Developer",
    "Software Developer",
    "MERN Stack Developer",
    "Next.js Developer",
    "React Developer",
    "TypeScript Developer",
    "Node.js Backend",
    "NestJS",
    "Pune",
    "India",
    "Firstclose Solutions",
    "Enterprise Software",
    "Agent Management System",
    "Customer Management System",
    "Quality Audit Management System",
    "HR Management System"
  ],
  authors: [{ name: "Aman Undre" }],
  creator: "Aman Undre",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://amanundre.com", // Update this once you get your final domain
    title: "Aman Undre | Full-Stack Developer",
    description: "Building scalable enterprise systems and premium web experiences.",
    siteName: "Aman Undre Portfolio",
    images: [
      {
        url: "/og-image.jpg", // Create a 1200x630 image and put it in your /public folder
        width: 1200,
        height: 630,
        alt: "Aman Undre - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Aman Undre | Full-Stack Developer",
    description: "Building scalable enterprise systems and premium web experiences.",
    images: ["/og-image.jpg"], // Same image as above
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}