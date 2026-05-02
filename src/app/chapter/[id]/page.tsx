import React from 'react'
import { chapters } from "@/data/chapters";
import Link from "next/link";
import {Chapter} from "@/types/chapter";


export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  console.log("ALL CHAPTERS:", chapters);
  const { id } = await params;
    const chapter = chapters.find((c) => c.id === String(id));
      if (!chapter) {return <div>Chapter tidak ditemukan</div>};

  const currentIndex = chapters.findIndex((c) => c.id === String(id));
  const prev = chapters[currentIndex - 1];
  const next = chapters[currentIndex + 1];
  return (
    <div>
      <h2 className="text-xl mb-4">{chapter.title}</h2>

      {/* Navigation */}
      <div className="flex justify-between mb-4">
        {prev ? (
          <Link href={`/chapter/${prev.id}`} className="text-blue-400">
            ← Prev
          </Link>
        ) : <div />}

        {next ? (
          <Link href={`/chapter/${next.id}`} className="text-blue-400">
            Next →
          </Link>
        ) : <div />}
      </div>

      {/* Images */}
      <div className="max-w-2xl mx-auto space-y-2">
        {chapter.images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`${i}`}
            className="w-full"
          />
        ))}
      </div>
    </div>
  );
}
