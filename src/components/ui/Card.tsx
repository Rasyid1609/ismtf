import React from 'react'
import Link from 'next/link';

type CardProps = {
    id: string | number;
    title: string;
}

export default function Card({ id, title}: CardProps) {
  return (
    <div className="bg-white/80 backdrop-blur rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden">
      
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src="cover.jpg"
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition duration-300"
        />
      </div>

      <div className="p-4 flex flex-col justify-between h-32">
        <h3 className="font-semibold text-gray-800 line-clamp-2">
          {title}
        </h3>

        <Link
          href={`/chapter/${id}`}
          className="mt-3 text-center rounded-lg bg-orange-400 text-white py-2 hover:bg-orange-500 transition"
        >
          Baca Sekarang
        </Link>
      </div>
    </div>
  );
}
