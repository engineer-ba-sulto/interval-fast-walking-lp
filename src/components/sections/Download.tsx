import FadeIn from "@/components/ui/FadeIn";
import LandingButton from "@/components/ui/LandingButton";

export default function DownloadSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-primary-light relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
      <div className="absolute inset-0 bg-linear-to-b from-transparent to-brand-primary-light/20 pointer-events-none"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">
            今すぐ、健康的な毎日を
            <br className="block sm:hidden" />
            始めませんか？
          </h2>
          <p className="text-white/90 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            運動習慣を身につけることは、決して難しいことではありません。
            <br className="hidden md:block" />
            このアプリが、あなたの運動習慣をサポートします。
            <br />
            無料で始められる今、一歩を踏み出してみませんか？
          </p>
        </FadeIn>

        <FadeIn delay={200} className="flex justify-center">
          <LandingButton
            href="https://apps.apple.com/jp/app/id6755136927"
            variant="appstore"
            size="lg"
            className="border-2 border-white/20 shadow-2xl"
          />
        </FadeIn>

        <FadeIn delay={400} className="mt-8">
          <p className="text-white/60 text-sm">
            ※ 基本機能は完全無料でご利用いただけます
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
