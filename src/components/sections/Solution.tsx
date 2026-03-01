import { Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Solution() {
  return (
    <section className="relative py-24 md:py-40 bg-brand-bg-end/30 flex justify-center items-center overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/40 rounded-[40%] animate-spin-slow blur-3xl opacity-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-brand-primary-light/5 opacity-50"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            {/* Visual Icon/Graphic */}
            <div className="relative mb-12 group">
              <div className="absolute inset-0 bg-brand-primary-light/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 scale-125"></div>
              <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-4xl shadow-xl flex items-center justify-center transform rotate-12 group-hover:rotate-0 transition-transform duration-500 relative z-10">
                <Sparkles className="w-12 h-12 md:w-16 md:h-16 text-brand-primary animate-pulse" />
              </div>

              {/* Floating Decorative Orbs */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-brand-accent rounded-full animate-float shadow-lg"></div>
              <div className="absolute -bottom-2 -left-6 w-6 h-6 bg-brand-primary rounded-full animate-float-delayed shadow-lg"></div>
            </div>

            {/* Title with Gradient Text */}
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-text-main mb-10 leading-[1.1] tracking-tight text-balance">
              あなたの「歩く」を
              <br />
              <span className="bg-linear-to-r from-brand-primary to-brand-primary-light bg-clip-text text-transparent">
                最高の体験
              </span>
              へ変える
            </h2>

            {/* Description with enhanced typography */}
            <div className="relative">
              <p className="text-brand-text-sub text-lg md:text-2xl leading-relaxed font-semibold max-w-3xl mx-auto mb-8 opacity-90">
                インターバル速歩は、誰でも簡単に、効果的で、
                持続可能な運動習慣を手に入れるためのメソッドです。
              </p>
              <p className="text-brand-text-sub text-base md:text-lg leading-relaxed font-medium max-w-2xl mx-auto opacity-70">
                あなたのレベルに合わせて、健康的でアクティブな生活への第一歩を
                テクノロジーと温かみのあるデザインでサポートします。
              </p>
            </div>

            {/* Decorative Element */}
            <div className="mt-16 flex items-center gap-4">
              <div className="h-px w-12 bg-brand-primary-light/30"></div>
              <div className="w-2 h-2 rounded-full bg-brand-primary-light animate-pulse"></div>
              <div className="h-px w-12 bg-brand-primary-light/30"></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
