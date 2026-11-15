import { Geist, Geist_Mono } from "next/font/google";
import type React from "react";
import metadata from "./metadata";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap"
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap"
});

export { metadata };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="flex min-h-dvh flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-5xl flex-1 px-5 pt-12 pb-24 md:px-10 md:pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
