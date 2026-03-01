import { Twitter, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-primary-dark text-white py-16 md:py-24 relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="col-span-1 lg:col-span-2 text-center md:text-left">
            <h3 className="text-2xl font-black mb-4 tracking-tighter">
              歩時間{" "}
              <span className="text-brand-primary-light">/ ARU-JIKAN</span>
            </h3>
            <p className="text-emerald-100/60 text-sm max-w-sm leading-relaxed mb-8 mx-auto md:mx-0">
              インターバル速歩で、あなたの毎日をより健やかに、より鮮やかに。
              最新のスポーツ科学と心地よいデザインが融合したタイマーアプリ。
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <a
                href="https://x.com/engineer_ba_sulto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white border border-white/10"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.youtube.com/@engineer_ba_sulto"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-all text-white border border-white/10"
              >
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Links Column 1 */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-emerald-300 uppercase tracking-widest text-xs">
              Navigation
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <a
                  href="#features"
                  className="text-emerald-100/70 hover:text-white transition-colors"
                >
                  機能一覧
                </a>
              </li>
              <li>
                <a
                  href="#how-to-use"
                  className="text-emerald-100/70 hover:text-white transition-colors"
                >
                  使い方
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="text-emerald-100/70 hover:text-white transition-colors"
                >
                  よくある質問
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-emerald-100/70 hover:text-white transition-colors"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div className="text-center md:text-left">
            <h4 className="font-bold mb-6 text-emerald-300 uppercase tracking-widest text-xs">
              Policy
            </h4>
            <ul className="space-y-4 font-medium">
              <li>
                <a
                  href="/privacy-policy"
                  className="text-emerald-100/70 hover:text-white transition-colors"
                >
                  プライバシーポリシー
                </a>
              </li>
              <li>
                <a
                  href="/term-of-service"
                  className="text-emerald-100/70 hover:text-white transition-colors"
                >
                  利用規約
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-emerald-100/40">
          <p>© 2025 歩時間 / ARU-JIKAN. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Made with <span className="text-brand-accent animate-pulse">❤</span>{" "}
            for your health.
          </p>
        </div>
      </div>
    </footer>
  );
}
