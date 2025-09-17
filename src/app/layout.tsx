import { Poppins } from "next/font/google";
import React from "react";
import metadata from "./metadata";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
});

export { metadata };

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={`${poppins.className} antialiased`}>
        <div className="flex flex-col min-h-screen bg-background text-foreground">
          <Navbar />
          <main className="flex-grow">
            <div className="max-w-5xl mx-auto py-8 px-5 md:px-10">
              {children}
            </div>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
