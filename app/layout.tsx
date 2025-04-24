import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ParallaxWrapper from "./components/ParallexWrapper";
import Snow from "./components/StarBackground";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Divij Pirankar",
  description: "Welcome to the portfolio of Divij Pirankar, a passionate Computer Science student with expertise in web development, AI, and machine learning. Explore my projects, tech stack, and learn more about my journey in the world of technology.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Snow/>
        <ParallaxWrapper>{children}</ParallaxWrapper> 
      </body>
    </html>
  );
}
