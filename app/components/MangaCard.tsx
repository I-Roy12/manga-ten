interface MangaCardProps {
  title: string;
  imageUrl: string;
  author: string;
}

export default function MangaCard({ title, imageUrl, author }: MangaCardProps) {
  return (
    <div className="w-full max-w-full">
      <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow w-full">
        <div className="relative w-full">
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full h-36 sm:h-40 md:h-48 lg:h-56 xl:h-64 object-cover"
          />
          {/* カテゴリバッジ */}
          <div className="absolute top-1 sm:top-2 right-1 sm:right-2">
            <span className="px-1 sm:px-2 py-0.5 sm:py-1 text-xs font-bold rounded bg-blue-600 text-white">
              {title.includes('AI') ? 'AI軍' : title.includes('人間') ? '人間軍' : '人気'}
            </span>
          </div>
        </div>
        
        <div className="p-2 sm:p-3 md:p-4 w-full">
          <h3 className="font-semibold text-xs sm:text-sm md:text-base mb-1 truncate text-gray-800 w-full">{title}</h3>
          <p className="text-xs text-gray-600 truncate w-full">{author}</p>
        </div>
      </div>
    </div>
  );
}
