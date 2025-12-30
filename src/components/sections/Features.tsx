import { BarChart3, Footprints, MousePointerClick, Timer } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const features = [
  {
    icon: <Timer className="w-8 h-8 text-brand-primary" />,
    title: "あなたに最適なタイマーを自動提案",
    description:
      "あなたの体力レベルに合わせて、効果的なトレーニング時間を自動で設定します。",
    color: "bg-emerald-50",
  },
  {
    icon: <Footprints className="w-8 h-8 text-brand-primary" />,
    title: "2種類のトレーニングモード",
    description:
      "目的やその日の体調に応じて、2つの異なるウォーキングモードから選択できます。",
    color: "bg-teal-50",
  },
  {
    icon: <BarChart3 className="w-8 h-8 text-brand-primary" />,
    title: "視覚的で分かりやすい進捗表示",
    description:
      "日々の成果がグラフで一目でわかり、モチベーション維持に繋がります。",
    color: "bg-green-50",
  },
  {
    icon: <MousePointerClick className="w-8 h-8 text-brand-primary" />,
    title: "シンプルで簡単な操作",
    description:
      "誰でも直感的に使えるデザインで、毎日の操作がストレスになりません。",
    color: "bg-lime-50",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 md:py-40 bg-white relative overflow-hidden"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Features
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-main mb-8 tracking-tight">
              あなたの健康を加速させる
              <br />
              4つのコア機能
            </h2>
            <p className="text-brand-text-sub text-lg leading-relaxed font-medium opacity-80">
              「歩時間」は、シンプルながらも科学に基づいたアプローチで、
              あなたの健康的な毎日を強力にバックアップします。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FadeIn key={feature.title} delay={index * 100} className="h-full">
              <div className="group bg-white p-10 rounded-[2.5rem] h-full flex flex-col items-start text-left transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-brand-primary/10 border border-brand-primary-light/5 relative overflow-hidden">
                {/* Hover Background Effect */}
                <div
                  className={`absolute top-0 right-0 w-32 h-32 -mr-8 -mt-8 ${feature.color} rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                ></div>

                <div
                  className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 shrink-0 group-hover:scale-110 transition-transform duration-500 relative z-10`}
                >
                  {feature.icon}
                </div>

                <h3 className="text-xl font-bold text-brand-text-main mb-4 leading-tight group-hover:text-brand-primary transition-colors duration-300 relative z-10">
                  {feature.title}
                </h3>

                <p className="text-brand-text-sub text-base leading-relaxed opacity-80 relative z-10">
                  {feature.description}
                </p>

                {/* Decorative Accent */}
                <div className="mt-auto pt-8 w-full">
                  <div className="h-1 w-0 bg-brand-primary-light group-hover:w-full transition-all duration-700 rounded-full"></div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
