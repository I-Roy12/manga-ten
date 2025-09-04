import Layout from '../components/Layout';
import Link from 'next/link';
import { works } from '../lib/works';

export default function Works() {
  return (
    <Layout>
      <div className="bg-yellow-50 min-h-screen">
        <div className="container mx-auto px-6 py-8">
          <h1 className="text-4xl font-bold mb-8 text-gray-800">作品一覧</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {works.map((work) => (
              <Link key={work.id} href={`/works/${work.id}`} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow block focus:outline-none focus:ring-2 focus:ring-green-400">
                <div className="relative">
                  <img 
                    src={work.imageUrl} 
                    alt={work.title}
                    className="w-full h-64 object-cover"
                  />
                  <div className="absolute top-2 right-2">
                    <span className={`px-2 py-1 text-xs font-bold rounded ${
                      work.category === 'AI軍' ? 'bg-blue-600 text-white' :
                      work.category === '人間軍' ? 'bg-red-600 text-white' :
                      'bg-purple-600 text-white'
                    }`}>
                      {work.category}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 truncate text-gray-800">{work.title}</h3>
                  <p className="text-sm text-gray-600">{work.author}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}
