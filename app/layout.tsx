import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel guide App for Camping",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body >
        <Navbar />
        <main className="relative overflow-hidden">

          {children}
        </main>
        <Footer />
      </body>

    </html>
  );
}