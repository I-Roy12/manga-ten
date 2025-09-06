"use client";

import { useSearchParams } from "next/navigation";
import { notFound } from "next/navigation";
import React, { useState } from "react";
import Link from "next/link";

// ダミーデータ
const dummyData = [
  { title: "AIが描いた未来都市", author: "AI-001", imageUrl: "https://placehold.co/300x400/4F46E5/FFFFFF?text=AI+1" },
  { title: "機械の心", author: "AI-002", imageUrl: "https://placehold.co/300x400/7C3AED/FFFFFF?text=AI+2" },
  { title: "デジタルワールド", author: "AI-003", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=AI+3" },
  { title: "サイバーパンク", author: "AI-004", imageUrl: "https://placehold.co/300x400/059669/FFFFFF?text=AI+4" },
  { title: "人間の情熱", author: "田中太郎", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=人間+1" },
  { title: "手描きの温かみ", author: "佐藤花子", imageUrl: "https://placehold.co/300x400/7C3AED/FFFFFF?text=人間+2" },
  { title: "伝統の技", author: "鈴木一郎", imageUrl: "https://placehold.co/300x400/059669/FFFFFF?text=人間+3" },
  { title: "心の物語", author: "高橋美咲", imageUrl: "https://placehold.co/300x400/4F46E5/FFFFFF?text=人間+4" },
  { title: "最強の対決", author: "AI vs 人間", imageUrl: "https://placehold.co/300x400/EA580C/FFFFFF?text=人気+1" },
  { title: "新しい時代", author: "コラボ作品", imageUrl: "https://placehold.co/300x400/16A34A/FFFFFF?text=人気+2" },
  { title: "クリエイター集団", author: "チーム制作", imageUrl: "https://placehold.co/300x400/9333EA/FFFFFF?text=人気+3" },
  { title: "未来への挑戦", author: "革新プロジェクト", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=人気+4" },
];

interface PageProps {
  params: {
    title: string;
  };
}

export default function Page({ params }: PageProps) {
  const { title } = params;
  const [showSample, setShowSample] = useState(false);

  const searchParams = useSearchParams();
  const from = searchParams.get("from");

  const decodedTitle = decodeURIComponent(title);
  const manga = dummyData.find((m) => m.title === decodedTitle);

  if (!manga) {
    notFound();
  }

  // ×ボタンの遷移先を判定
  const closeHref = from === "mypage" ? "/mypage" : "/";

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-50 px-2 sm:px-4 overflow-y-auto relative">
      {/* ×ボタン */}
      <Link
        href={closeHref}
        className="absolute top-4 right-4 text-3xl font-bold text-gray-900 hover:text-red-500 transition"
        aria-label="戻る"
      >
        ×
      </Link>
      <h1 className="text-2xl font-bold mb-4 text-gray-900 text-center break-words">{manga.title}</h1>
      <img
        src={manga.imageUrl}
        alt={manga.title}
        className="w-full max-w-full sm:max-w-sm h-auto rounded shadow mb-4 cursor-pointer"
        onClick={() => setShowSample(true)}
      />
      <p className="text-lg text-gray-700 mb-2 text-center break-words">{manga.author}</p>
      <div className="bg-white rounded shadow p-3 sm:p-4 w-full max-w-md mb-4">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">作品詳細</h2>
        <p className="text-gray-700 break-words">
          この漫画は「{manga.title}」です。作者は「{manga.author}」。<br />
          ここに作品のあらすじや特徴などを追加できます。
        </p>
      </div>
      {showSample && (
        <div className="w-full max-w-md bg-white rounded shadow p-4 mb-4 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2 text-gray-900">漫画サンプル</h2>
          <img
            src="https://placehold.co/350x500/333/FFF?text=Sample+Manga"
            alt="漫画サンプル"
            className="w-full h-auto rounded"
          />
        </div>
      )}
    </div>
  );
}