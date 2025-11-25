import { Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
          {/* Logo / Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold mb-2">インターバル速歩</h3>
            <p className="text-gray-400 text-sm">タイマーアプリ・歩時間</p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <a
              href="#features"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              機能一覧
            </a>
            <a
              href="#how-to-use"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              使い方
            </a>
            <a
              href="#faq"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              よくある質問
            </a>
          </nav>

          {/* SNS */}
          <div className="flex gap-4">
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#007AFF] transition-colors text-white"
            >
              <Twitter size={20} />
            </a>
            <a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-red-600 transition-colors text-white"
            >
              <Youtube size={20} />
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <div className="flex gap-4">
            <a href="#" className="hover:text-gray-300 transition-colors">
              プライバシーポリシー
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              利用規約
            </a>
            <a href="#" className="hover:text-gray-300 transition-colors">
              特定商取引法に基づく表記
            </a>
          </div>
          <p>
            © 2025 インターバル速歩 - タイマーアプリ・歩時間. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

