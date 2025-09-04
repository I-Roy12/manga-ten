import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '../../components/Layout';

export default async function AIDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const num = Number(id);
  if (!Number.isFinite(num) || num < 1 || num > 12) return notFound();

  const title = `AI作品 ${num}`;
  const author = `AI-${String(num).padStart(3, '0')}`;
  const imageUrl = `https://placehold.co/600x800/4F46E5/FFFFFF?text=AI+${num}`;

  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen">
        <div className="container mx-auto px-6 py-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:underline">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/ai" className="hover:underline">AI軍の作品</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{title}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <img src={imageUrl} alt={title} className="w-full h-auto rounded-lg shadow" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{title}</h1>
              <p className="text-gray-600 mb-4">{author}</p>
              <span className="inline-block px-3 py-1 text-xs font-bold rounded bg-blue-600 text-white">AI軍</span>
              <div className="mt-6">
                <Link href="/ai" className="text-green-700 hover:underline">← AI一覧へ戻る</Link>
              </div>
            </div>
          </div>

          {/* Recommended AI Works */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">他のAI作品</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {Array.from({ length: 4 }, (_, i) => {
                const recNum = (num + i + 1) % 12 + 1;
                return {
                  id: recNum,
                  title: `AI作品 ${recNum}`,
                  author: `AI-${String(recNum).padStart(3, '0')}`,
                  imageUrl: `https://placehold.co/600x800/4F46E5/FFFFFF?text=AI+${recNum}`,
                };
              }).map((rec) => (
                <Link key={rec.id} href={`/ai/${rec.id}`} className="w-48 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                  <img src={rec.imageUrl} alt={rec.title} className="w-full h-64 object-cover" />
                  <div className="p-3">
                    <h3 className="font-semibold text-sm truncate">{rec.title}</h3>
                    <p className="text-xs text-gray-600">{rec.author}</p>
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
