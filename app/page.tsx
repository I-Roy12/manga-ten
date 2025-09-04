import Layout from './components/Layout';
import MangaCard from './components/MangaCard';
import Link from 'next/link'; // 追加

export default function Home() {
  // ダミーデータ
  const aiMangas = [
    { title: "AIが描いた未来都市", author: "AI-001", imageUrl: "https://placehold.co/300x400/4F46E5/FFFFFF?text=AI+1" },
    { title: "機械の心", author: "AI-002", imageUrl: "https://placehold.co/300x400/7C3AED/FFFFFF?text=AI+2" },
    { title: "デジタルワールド", author: "AI-003", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=AI+3" },
    { title: "サイバーパンク", author: "AI-004", imageUrl: "https://placehold.co/300x400/059669/FFFFFF?text=AI+4" },
  ];

  const humanMangas = [
    { title: "人間の情熱", author: "田中太郎", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=人間+1" },
    { title: "手描きの温かみ", author: "佐藤花子", imageUrl: "https://placehold.co/300x400/7C3AED/FFFFFF?text=人間+2" },
    { title: "伝統の技", author: "鈴木一郎", imageUrl: "https://placehold.co/300x400/059669/FFFFFF?text=人間+3" },
    { title: "心の物語", author: "高橋美咲", imageUrl: "https://placehold.co/300x400/4F46E5/FFFFFF?text=人間+4" },
  ];

  const popularMangas = [
    { title: "最強の対決", author: "AI vs 人間", imageUrl: "https://placehold.co/300x400/EA580C/FFFFFF?text=人気+1" },
    { title: "新しい時代", author: "コラボ作品", imageUrl: "https://placehold.co/300x400/16A34A/FFFFFF?text=人気+2" },
    { title: "クリエイター集団", author: "チーム制作", imageUrl: "https://placehold.co/300x400/9333EA/FFFFFF?text=人気+3" },
    { title: "未来への挑戦", author: "革新プロジェクト", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=人気+4" },
  ];

  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen w-full overflow-x-hidden">
        {/* AI軍の新着 */}
        <section className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">AI軍の新着</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
            {aiMangas.map((manga, index) => (
              <Link
                key={index}
                href={`/manga/${encodeURIComponent(manga.title)}`}
                className="block"
              >
                <MangaCard {...manga} />
              </Link>
            ))}
          </div>
        </section>

        {/* 人間軍の新着 */}
        <section className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">人間軍の新着</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
            {humanMangas.map((manga, index) => (
              <Link
                key={index}
                href={`/manga/${encodeURIComponent(manga.title)}`}
                className="block"
              >
                <MangaCard {...manga} />
              </Link>
            ))}
          </div>
        </section>

        {/* 総合人気 */}
        <section className="px-3 sm:px-4 md:px-6 py-4 sm:py-6 md:py-8 w-full">
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 text-gray-800">総合人気</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 w-full">
            {popularMangas.map((manga, index) => (
              <Link
                key={index}
                href={`/manga/${encodeURIComponent(manga.title)}`}
                className="block"
              >
                <MangaCard {...manga} />
              </Link>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
