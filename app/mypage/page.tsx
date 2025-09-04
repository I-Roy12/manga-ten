import Layout from '../components/Layout';
import Link from "next/link";

// お気に入り作品のダミーデータ
const favoriteMangas = [
  { title: "AIが描いた未来都市", author: "AI-001", imageUrl: "https://placehold.co/300x400/4F46E5/FFFFFF?text=AI+1", category: "AI軍" },
  { title: "人間の情熱", author: "田中太郎", imageUrl: "https://placehold.co/300x400/DC2626/FFFFFF?text=人間+1", category: "人間軍" },
  // ...他の作品
];

export default function MyPage() {
  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen">
        <div className="container mx-auto px-6 py-8">
          {/* ページタイトル */}
          <h1 className="text-5xl font-bold mb-6 text-gray-800">マイページ</h1>
          
          {/* ユーザー情報 */}
          <div className="bg-white rounded-lg p-6 mb-8 shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">ユーザー情報</h2>
            <p className="text-xl text-gray-600">
              ユーザー名: <span className="text-gray-800 font-semibold">ゲスト</span>
            </p>
          </div>
          
          {/* お気に入り作品セクション */}
          <section className="mb-8">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">お気に入り作品</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {favoriteMangas.map((manga, idx) => (
                <Link
                  key={idx}
                  href={`/manga/${encodeURIComponent(manga.title)}?from=mypage`}
                  className="w-48 flex-shrink-0 block hover:scale-105 transition"
                >
                  <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                    {/* サムネイル */}
                    <div className="relative">
                      <img 
                        src={manga.imageUrl} 
                        alt={manga.title}
                        className="w-full h-64 object-cover"
                      />
                      {/* カテゴリバッジ */}
                      <div className="absolute top-2 right-2">
                        <span className={`px-2 py-1 text-xs font-bold rounded ${
                          manga.category === 'AI軍' ? 'bg-blue-600 text-white' :
                          manga.category === '人間軍' ? 'bg-red-600 text-white' :
                          'bg-purple-600 text-white'
                        }`}>
                          {manga.category}
                        </span>
                      </div>
                    </div>
                    
                    {/* タイトルと作者 */}
                    <div className="p-4">
                      <h3 className="font-semibold text-sm truncate mb-1 text-gray-800">{manga.title}</h3>
                      <p className="text-xs text-gray-600">{manga.author}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
