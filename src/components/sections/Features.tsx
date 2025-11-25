import FadeIn from "@/components/ui/FadeIn";
import { BarChart3, Footprints, MousePointerClick, Timer } from "lucide-react";

const features = [
  {
    icon: <Timer size={32} className="text-brand-primary-dark" />,
    title: "あなたに最適なタイマーを自動提案",
    description:
      "あなたの体力レベルに合わせて、効果的なトレーニング時間を自動で設定します。",
  },
  {
    icon: <Footprints size={32} className="text-brand-primary-dark" />,
    title: "2種類のトレーニングモード",
    description:
      "目的やその日の体調に応じて、2つの異なるウォーキングモードから選択できます。",
  },
  {
    icon: <BarChart3 size={32} className="text-brand-primary-dark" />,
    title: "視覚的で分かりやすい進捗表示",
    description:
      "日々の成果がグラフで一目でわかり、モチベーション維持に繋がります。",
  },
  {
    icon: <MousePointerClick size={32} className="text-brand-primary-dark" />,
    title: "シンプルで簡単な操作",
    description:
      "誰でも直感的に使えるデザインで、毎日の操作がストレスになりません。",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-20 md:py-32 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative subtle background elements */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none opacity-20">
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] border border-gray-200 rounded-full"></div>
        <div className="absolute top-[10%] right-[10%] w-[300px] h-[300px] border border-gray-200 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-brand-text-main mb-6">
              あなたの運動習慣を成功に導く4つの力
            </h2>
            <p className="text-brand-text-sub leading-relaxed">
              インターバル速歩アプリは、シンプルで続けやすい機能であなたの健康的な毎日をサポートします。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <FadeIn key={index} delay={index * 150} className="h-full">
              <div
                className="bg-white p-8 rounded-4xl h-full flex flex-col items-start text-left transition-transform hover:-translate-y-1 duration-300"
                style={{
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.05), 0 10px 15px -3px rgb(0 0 0 / 0.05), 0 12px 0 -6px #f3f4f6, 0 12px 4px -5px rgb(0 0 0 / 0.02), 0 24px 0 -12px #e5e7eb",
                }}
              >
                <div className="w-16 h-16 bg-[#F1F8E9] rounded-2xl flex items-center justify-center mb-6 shrink-0">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-brand-text-main mb-4 leading-tight">
                  {feature.title}
                </h3>
                <p className="text-brand-text-sub text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
