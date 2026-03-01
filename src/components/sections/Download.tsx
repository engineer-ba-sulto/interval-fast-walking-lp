import FadeIn from "@/components/ui/FadeIn";
import LandingButton from "@/components/ui/LandingButton";

export default function DownloadSection() {
  return (
    <section className="py-24 md:py-48 bg-brand-primary-dark relative overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 bg-noise opacity-[0.05] pointer-events-none mix-blend-overlay"></div>
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary-light opacity-30 rounded-full blur-[120px] animate-float"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[400px] h-[400px] bg-brand-accent opacity-20 rounded-full blur-[100px] animate-float-delayed"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <div className="mb-12">
            <span className="text-brand-accent font-bold tracking-[0.3em] text-sm uppercase mb-6 block">
              Get Started
            </span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-10 leading-[1.1] tracking-tight">
              今すぐ、
              <br className="sm:hidden" />
              健康的な毎日を
              <br />
              始めませんか？
            </h2>
          </div>

          <p className="text-emerald-50/80 text-lg md:text-2xl max-w-3xl mx-auto mb-16 leading-relaxed font-medium">
            運動習慣を身につけることは、決して難しいことではありません。
            <br className="hidden md:block" />
            「歩時間」が、あなたの今日という日を、より輝くものに変えていきます。
          </p>
        </FadeIn>

        <div className="flex flex-col items-center gap-8">
          <FadeIn delay={200}>
            <LandingButton
              href="https://apps.apple.com/jp/app/id6755136927"
              variant="appstore"
              size="lg"
              className="bg-white text-brand-primary-dark hover:bg-emerald-50 scale-110 sm:scale-125 shadow-2xl shadow-black/20"
            />
          </FadeIn>

          <FadeIn delay={400}>
            <div className="flex items-center gap-3 px-6 py-2 bg-white/5 backdrop-blur-md rounded-full border border-white/10">
              <span className="w-2 h-2 rounded-full bg-brand-accent animate-pulse"></span>
              <p className="text-white/70 text-sm font-bold tracking-wide">
                基本機能は完全無料でご利用いただけます
              </p>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Decorative SVG Waves */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-0 transform rotate-180 opacity-20">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="relative block w-[calc(100%+1.3px)] h-[100px]"
        >
          <title>Decorative SVG Waves</title>
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            fill="#FFFFFF"
          ></path>
        </svg>
      </div>
    </section>
  );
}
