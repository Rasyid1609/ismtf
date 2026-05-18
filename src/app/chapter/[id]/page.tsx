"use client";

import React from "react";
import { chapters } from "@/data/chapters";
import Link from "next/link";
import { useRouter, useParams } from "next/navigation";

export default function Page() {
  const router = useRouter();
  const params = useParams();

  const id = params.id as string;

  const chapter = chapters.find((c) => c.id === id);

  if (!chapter) {
    return <div>Chapter tidak ditemukan</div>;
  }

  const currentIndex = chapters.findIndex((c) => c.id === id);

  const prev = chapters[currentIndex - 1];
  const next = chapters[currentIndex + 1];

  return (
    <div className="max-w-4xl mx-auto py-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white">
          {chapter.title}
        </h2>

        {/* Combo Box */}
        <select
          value={chapter.id}
          onChange={(e) => router.push(`/chapter/${e.target.value}`)}
          className="
            bg-zinc-900
            border border-zinc-700
            text-white
            px-4 py-2
            rounded-lg
            outline-none
            focus:border-yellow-500
          "
        >
          {chapters.map((chap) => (
            <option key={chap.id} value={chap.id}>
              {chap.title}
            </option>
          ))}
        </select>
      </div>

      {/* Navigation */}
      <div className="flex justify-between mb-6">
        {prev ? (
          <Link
            href={`/chapter/${prev.id}`}
            className="text-yellow-400 hover:text-yellow-300"
          >
            ← Prev
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/chapter/${next.id}`}
            className="text-yellow-400 hover:text-yellow-300"
          >
            Next →
          </Link>
        ) : (
          <div />
        )}
      </div>

      {/* Images */}
      <div className="max-w-2xl mx-auto space-y-2">
        {chapter.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Page ${i + 1}`}
            className="w-full rounded-md"
          />
        ))}
      </div>

      {/* Combo Box */}
        <select
          value={chapter.id}
          onChange={(e) => router.push(`/chapter/${e.target.value}`)}
          className="
            bg-zinc-900
            border border-zinc-700
            text-white
            px-4 py-2
            rounded-lg
            outline-none
            mt-6
            focus:border-yellow-500
          "
        >
          {chapters.map((chap) => (
            <option key={chap.id} value={chap.id}>
              {chap.title}
            </option>
          ))}
        </select>
        <div className="flex justify-between mb-6 mt-6">
        {prev ? (
          <Link
            href={`/chapter/${prev.id}`}
            className="text-yellow-400 hover:text-yellow-300"
          >
            ← Prev
          </Link>
        ) : (
          <div />
        )}

        {next ? (
          <Link
            href={`/chapter/${next.id}`}
            className="text-yellow-400 hover:text-yellow-300"
          >
            Next →
          </Link>
        ) : (
          <div />
        )}
      </div>
      </div>

    
  );
}