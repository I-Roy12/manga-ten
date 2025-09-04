import Link from 'next/link';
import { notFound } from 'next/navigation';
import Layout from '../../components/Layout';
import { works } from '../../lib/works';

export default async function WorkDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const workId = Number(id);
  const work = works.find(w => w.id === workId);
  if (!work) return notFound();

  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen">
        <div className="container mx-auto px-6 py-8">
          <nav className="text-sm text-gray-600 mb-4">
            <Link href="/" className="hover:underline">ホーム</Link>
            <span className="mx-2">/</span>
            <Link href="/works" className="hover:underline">作品一覧</Link>
            <span className="mx-2">/</span>
            <span className="text-gray-800">{work.title}</span>
          </nav>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div>
              <img src={work.imageUrl} alt={work.title} className="w-full h-auto rounded-lg shadow" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{work.title}</h1>
              <p className="text-gray-600 mb-4">{work.author}</p>
              <span className={`inline-block px-3 py-1 text-xs font-bold rounded ${
                work.category === 'AI軍' ? 'bg-blue-600 text-white' :
                work.category === '人間軍' ? 'bg-red-600 text-white' :
                'bg-purple-600 text-white'
              }`}>
                {work.category}
              </span>

              <div className="mt-6">
                <Link href="/works" className="text-green-700 hover:underline">← 作品一覧へ戻る</Link>
              </div>
            </div>
          </div>

          {/* Recommended Works */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">おすすめ作品</h2>
            <div className="flex space-x-4 overflow-x-auto pb-4">
              {works.filter(w => w.id !== workId).slice(0, 4).map((rec) => (
                <Link key={rec.id} href={`/works/${rec.id}`} className="w-48 flex-shrink-0 bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
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
