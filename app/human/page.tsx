import Layout from '../components/Layout';
import MangaCard from '../components/MangaCard';
import Link from 'next/link';

export default function HumanPage() {
  const humanMangas = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    title: `人間作品 ${i + 1}`,
    author: `作者 ${i + 1}`,
    imageUrl: `https://placehold.co/600x800/DC2626/FFFFFF?text=%E4%BA%BA%E9%96%93+${i + 1}`,
  }));

  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen px-3 sm:px-4 md:px-6 py-6 md:py-8">
        <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-4">人間軍の作品</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
          {humanMangas.map((manga) => (
            <Link key={manga.id} href={`/human/${manga.id}`} className="block focus:outline-none focus:ring-2 focus:ring-green-400">
              <MangaCard title={manga.title} author={manga.author} imageUrl={manga.imageUrl} />
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
}
