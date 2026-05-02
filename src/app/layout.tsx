import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ReactNode } from "react";

export const metadata = {
  title: "I shall master this family",
  description: "Website komik sederhana",
};

export default function RootLayout({
 children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-gradient-to-r from-orange-50 via-pink-100 to-purple-200 text-white min-h-screen">
        <main className="max-w-6xl mx-auto px-4 sm:px-6 py-6">
          <header className="text-center mb-6 md:mb-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-orange-600">I Shall Master This Family</h1>
            <p className="text-sm sm:text-base text-gray-600 mt-1">Daftar Chapter</p>
          </header>
          {children}
        </main>
        <Analytics />
      </body>
    </html>
  );
}
