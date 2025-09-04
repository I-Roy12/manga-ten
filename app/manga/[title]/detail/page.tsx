"use client";

import { notFound } from "next/navigation";
import Link from "next/link";

const dummyData = [
  // ...同じデータをコピー...
];

export default function MangaDetailPage({ params }: { params: { title: string } }) {
  const decodedTitle = decodeURIComponent(params.title);
  const manga = dummyData.find((m) => m.title === decodedTitle);

  if (!manga) {
    notFound();
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-4 relative">
      <Link
        href={`/manga/${encodeURIComponent(manga.title)}`}
        className="absolute top-4 right-4 text-3xl font-bold text-gray-900 hover:text-red-500 transition"
        aria-label="漫画ページに戻る"
      >
        ×
      </Link>
      <h1 className="text-2xl font-bold mb-4 text-gray-900">{manga.title} 詳細</h1>
      <img
        src={manga.imageUrl}
        alt={manga.title}
        className="w-64 h-auto rounded shadow mb-4"
      />
      <p className="text-lg text-gray-700 mb-2">作者: {manga.author}</p>
      <div className="bg-white rounded shadow p-4 w-full max-w-md mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">もっと詳しい情報</h2>
        <p className="text-gray-700">
          ここに作品の詳細情報やレビューなどを追加できます。
        </p>
      </div>
    </div>
  );
}