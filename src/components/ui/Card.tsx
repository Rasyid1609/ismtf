import React from 'react'
import Link from 'next/link';

type CardProps = {
    id: string | number;
    title: string;
}

export default function Card({ id, title}: CardProps) {
  return (
    <div
      className="
        w-full
        bg-zinc-900
        border border-zinc-800
        rounded-2xl
        overflow-hidden
        shadow-lg
        hover:shadow-2xl
        hover:-translate-y-1
        transition-all duration-300
      "
    >
      {/* Cover */}
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="/cover.jpg"
          alt={title}
          className="
            w-full
            h-full
            object-cover
            hover:scale-105
            transition duration-500
          "
        />
      </div>

      {/* Content */}
      <div className="p-3 sm:p-4 flex flex-col gap-3">
        <h3
          className="
            text-sm
            sm:text-base
            font-semibold
            text-white
            line-clamp-2
            min-h-[40px]
          "
        >
          {title}
        </h3>

        <Link
          href={`/chapter/${id}`}
          className="
            w-full
            text-center
            rounded-xl
            bg-gradient-to-r
            from-yellow-500
            to-orange-500
            text-white
            py-2
            text-sm
            sm:text-base
            hover:opacity-90
            transition
          "
        >
          Baca Sekarang
        </Link>
      </div>
    </div>
  );
}
