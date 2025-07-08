import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParallaxWrapper from "../components/ParallexWrapper";
import Snow from "../components/StarBackground";
import Navbar from "@/components/Navbar";
import NextTopLoader from "nextjs-toploader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://divijpirankar.tech"), //required for correct Open Graph URLs
  title: "Divij Pirankar",
  description: "Welcome to the portfolio of Divij Pirankar, a passionate Computer Science student with expertise in web development, AI, and machine learning. Explore my projects, tech stack, and learn more about my journey in the world of technology.",
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
  openGraph: {
    title: "Divij Pirankar",
    description: "Welcome to the portfolio of Divij Pirankar, a passionate Computer Science student with expertise in web development, AI, and machine learning. Explore my projects, tech stack, and learn more about my journey in the world of technology.",
    url: "https://divijpirankar.tech",
    siteName: "Divij Pirankar",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Divij Pirankar Portfolio",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Divij Pirankar",
    description: "Welcome to the portfolio of Divij Pirankar, a passionate Computer Science student with expertise in web development, AI, and machine learning. Explore my projects, tech stack, and learn more about my journey in the world of technology.",
    images: ["/og.png"],
  },
  keywords: [
    "Divij Pirankar",
    "Portfolio",
    "Web Development",
    "AI",
    "Machine Learning",
    "Computer Science",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth scroll-p-20">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Snow />
        <ParallaxWrapper>
          <NextTopLoader color="#9a16b4" showSpinner={false}/>
        <Navbar />
          {children}
          <footer className="mt-20 text-center text-white">
            <div className=''>Created with 💖 by <span className="text-purple-500">Divij &copy;2025</span></div>
          </footer>
        </ParallaxWrapper>
      </body>
    </html>
  );
}
