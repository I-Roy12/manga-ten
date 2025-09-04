'use client';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-green-100 text-gray-800 px-3 sm:px-6 py-3 sm:py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-black" style={{ 
          fontFamily: 'var(--font-yuji-syuku)', 
          color: '#b91c1c' 
        }}>
          漫画天
        </h1>
        
        {/* PC用ナビゲーション */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-green-600">ホーム</a>
          <a href="/works" className="hover:text-green-600">作品一覧</a>
          <a href="/ai" className="hover:text-green-600">AI軍</a>
          <a href="/human" className="hover:text-green-600">人間軍</a>
          <a href="/mypage" className="hover:text-green-600">マイページ</a>
        </nav>
        
        {/* スマホ用ハンバーガーメニューボタン */}
        <button 
          className="md:hidden text-gray-800 p-1"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      
      {/* スマホ用ドロップダウンメニュー */}
      {isMenuOpen && (
        <nav className="md:hidden mt-3 sm:mt-4 pb-3 sm:pb-4 border-t border-green-200">
          <div className="flex flex-col space-y-2 sm:space-y-3 pt-3 sm:pt-4">
            <a href="/" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 py-1 sm:py-2 text-sm sm:text-base">ホーム</a>
            <a href="/works" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 py-1 sm:py-2 text-sm sm:text-base">作品一覧</a>
            <a href="/ai" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 py-1 sm:py-2 text-sm sm:text-base">AI軍</a>
            <a href="/human" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 py-1 sm:py-2 text-sm sm:text-base">人間軍</a>
            <a href="/mypage" onClick={() => setIsMenuOpen(false)} className="hover:text-green-600 py-1 sm:py-2 text-sm sm:text-base">マイページ</a>
          </div>
        </nav>
      )}
    </header>
  );
}
  