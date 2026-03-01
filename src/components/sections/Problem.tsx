import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function Problem() {
  return (
    <section className="py-24 md:py-40 bg-white relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      {/* Decorative Organic Shapes */}
      <div className="absolute top-0 right-0 w-[40%] h-[60%] bg-brand-bg-start/50 mask-radial z-0"></div>
      <div className="absolute bottom-0 left-0 w-[30%] h-[40%] bg-brand-accent/5 mask-radial z-0"></div>

      <div className="container mx-auto px-6 max-w-[1200px] relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 lg:gap-24">
          {/* Content (Text First on Desktop) */}
          <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
            <FadeIn>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-brand-text-main mb-10 leading-[1.2] tracking-tight">
                運動習慣、何度も
                <span className="relative inline-block ml-2 text-brand-text-sub">
                  挫折
                  <svg
                    className="absolute -bottom-1 left-0 w-full h-2 text-red-200/60"
                    viewBox="0 0 100 8"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <title>Decorative line under text</title>
                    <path
                      d="M1 6C20 1 80 1 99 6"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                <br />
                していませんか？
              </h2>

              <div className="space-y-8 text-brand-text-sub leading-relaxed text-lg lg:text-xl font-medium">
                <p className="opacity-80">
                  「時間がなくて続かない」
                  <br className="hidden sm:block" />
                  「モチベーションが保てない」
                  <br className="hidden sm:block" />
                  「激しい運動は苦手」...
                </p>
                <p>
                  そんな風に感じて、何度も運動を始めては諦めてしまう。
                  それは、あなたの意志の弱さではなく、
                  <span className="text-brand-primary font-bold underline decoration-brand-primary-light/30 underline-offset-4">
                    適切なメソッド
                  </span>
                  に出会えていないだけかもしれません。
                </p>
                <div className="p-6 bg-brand-bg-start rounded-3xl border border-brand-primary-light/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute inset-0 bg-white/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <p className="font-bold text-brand-text-main text-xl relative z-10">
                    あなたのせいではありません。
                    <br />
                    多くの人が同じ悩みを抱えています。
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Illustration (Dynamic) */}
          <div className="w-full md:w-5/12 order-1 md:order-2">
            <FadeIn delay={200}>
              <div className="relative aspect-square w-full max-w-[450px] mx-auto">
                {/* Background Blobs for Illustration */}
                <div className="absolute inset-0 bg-brand-primary-light/10 rounded-full animate-float blur-3xl opacity-50"></div>

                {/* Custom SVG Illustration */}
                <Image
                  src="/frustration-loop.jpg"
                  alt="挫折のループを断ち切るイメージ"
                  width={450}
                  height={450}
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl rounded-[2.5rem]"
                />

                {/* Floating labels */}
                <div className="absolute top-[10%] left-0 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold text-slate-500 transform -rotate-12 animate-float cursor-default">
                  三日坊主...
                </div>
                <div className="absolute bottom-[20%] right-0 bg-white px-4 py-2 rounded-xl shadow-lg text-sm font-bold text-slate-500 transform rotate-12 animate-float-delayed cursor-default">
                  やる気が出ない
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
