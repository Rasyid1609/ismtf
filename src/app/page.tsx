import Card from "@/components/ui/Card";
import { chapters } from "@/data/chapters";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h2 className="text-xl mb-4">Daftar Chapter</h2>
      <div className="grid grid-cols-3 gap-4 text-pink-500 text-center">
        {chapters.map((ch) => (
          <Card
            key={ch.id}
            id={ch.id}
            title={ch.title}
          />
        ))}
      </div>
    </div>
  );
}
