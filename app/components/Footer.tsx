export default function Footer() {
  return (
    <footer className="bg-green-100 text-gray-800 px-3 sm:px-6 py-3 sm:py-4">
      <div className="flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0">
        <p className="text-sm sm:text-base">&copy; 2025 漫画天</p>
        <div className="flex space-x-3 sm:space-x-4">
          <a href="/terms" className="hover:text-green-600 text-sm sm:text-base">利用規約</a>
          <a href="/contact" className="hover:text-green-600 text-sm sm:text-base">お問い合わせ</a>
        </div>
      </div>
    </footer>
  );
}
