import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"
import { ReactNode } from "react";
import { Cinzel } from "next/font/google";

export const metadata = {
  title: "I shall master this family",
  description: "Website komik sederhana",
};

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
});

export default function RootLayout({
 children,
}: {
  children: ReactNode;
}) {
  return (
     <html lang="id">
      <body className={`${cinzel.className} bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden`}>
        
        {/* BACKGROUND EFFECT */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,175,55,0.15),transparent_40%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0a0a,#111111,#050505)]" />
        </div>

        <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
          
          {/* TOP TITLE */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-6xl font-black tracking-[0.2em] uppercase text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 via-yellow-500 to-yellow-700 drop-shadow-[0_0_20px_rgba(255,215,0,0.35)]">
              Lombardi Family
            </h1>

            <p className="text-yellow-100/60 mt-3 tracking-[0.3em] uppercase text-sm">
              Royal Collection
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[340px_1fr] gap-8">
            
            {/* LEFT SIDEBAR */}
            <aside className="relative overflow-hidden rounded-[32px] border border-yellow-500/20 bg-gradient-to-b from-[#1a1a1a] to-[#0d0d0d] shadow-[0_0_50px_rgba(212,175,55,0.08)] p-6">
              
              {/* GOLD GLOW */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />

              {/* COVER */}
              <div className="relative">
                <img
                  src="/cover.jpg"
                  alt="Cover"
                  className="w-full rounded-2xl border border-yellow-500/30 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
                />

                <div className="absolute inset-0 rounded-2xl ring-1 ring-yellow-400/20" />
              </div>

              {/* TITLE */}
              <div className="mt-6">
                <h2 className="text-3xl font-bold leading-tight text-yellow-400">
                  I Shall Master This Family
                </h2>

                <p className="text-yellow-100/50 mt-2 text-sm tracking-widest uppercase">
                  Noble Fantasy Romance
                </p>
              </div>

              {/* CATEGORY */}
              <div className="flex flex-wrap gap-2 mt-6">
                {["Fantasy", "Royal", "Drama", "Romance"].map((item) => (
                  <span
                    key={item}
                    className="px-4 py-1.5 rounded-full border border-yellow-500/30 bg-yellow-500/10 text-yellow-300 text-xs tracking-wider uppercase"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* DESCRIPTION */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-yellow-500 mb-3 tracking-wide uppercase">
                  Synopsis
                </h3>

                <p className="text-sm leading-8 text-zinc-300">
                  Firentia reborn into the prestigious Lombardi family after a
                  tragic downfall. Armed with memories of the future, she vows
                  to reclaim the glory of her bloodline and become the true
                  master of the family.
                </p>
              </div>

              {/* EXTRA DETAIL */}
              <div className="mt-8 border-t border-yellow-500/10 pt-6 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-zinc-500">Status</span>
                  <span className="text-yellow-300">Ongoing</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">Author</span>
                  <span className="text-yellow-300">Kim Roah</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-zinc-500">Rating</span>
                  <span className="text-yellow-300">9.8 / 10</span>
                </div>
              </div>
            </aside>

            {/* RIGHT CONTENT */}
            <section className="rounded-[32px] border border-yellow-500/20 bg-gradient-to-b from-[#171717] to-[#0d0d0d] p-6 md:p-8 shadow-[0_0_50px_rgba(212,175,55,0.05)]">
              
              {/* HEADER */}
              <div className="flex items-center justify-between mb-8 border-b border-yellow-500/10 pb-5">
                <div>
                  <h2 className="text-3xl font-bold text-yellow-400">
                    Chapter List
                  </h2>

                  <p className="text-zinc-500 mt-1">
                    Begin your royal journey
                  </p>
                </div>

                <div className="hidden md:flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                  <span className="text-sm text-yellow-200/70">
                    Updated Weekly
                  </span>
                </div>
              </div>

              {/* CHAPTER CONTENT */}
              <div className="space-y-4">
                {children}
              </div>
            </section>
          </div>
        </main>
        <Analytics />
      </body>
    </html>
  );
}
