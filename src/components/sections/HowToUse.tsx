import {
  ClipboardCheck,
  Download,
  Footprints,
  Smartphone,
  Timer,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const steps = [
  {
    id: "01",
    title: "アプリをダウンロード",
    description:
      "App Storeからアプリケーションをダウンロード。まずはここから始まります。",
    icon: (
      <div className="relative">
        <Smartphone
          size={48}
          className="text-brand-primary"
          strokeWidth={1.5}
        />
        <div className="absolute inset-0 flex items-center justify-center pt-2">
          <Download size={18} className="text-brand-primary animate-bounce" />
        </div>
      </div>
    ),
    color: "from-emerald-400 to-emerald-600",
  },
  {
    id: "02",
    title: "簡単な質問に答える",
    description:
      "あなたの体力や目標に合わせた、最適なプランを生成するための数問のヒアリングです。",
    icon: (
      <ClipboardCheck
        size={48}
        className="text-brand-primary"
        strokeWidth={1.5}
      />
    ),
    color: "from-teal-400 to-teal-600",
  },
  {
    id: "03",
    title: "ウォーキング開始",
    description:
      "あとは提案されたタイマーに従って歩くだけ。あなたの健康習慣が動き出します。",
    icon: (
      <div className="relative">
        <Footprints
          size={48}
          className="text-brand-primary"
          strokeWidth={1.5}
        />
        <div className="absolute -top-2 -right-2">
          <Timer size={24} className="text-brand-accent animate-pulse" />
        </div>
      </div>
    ),
    color: "from-lime-400 to-lime-600",
  },
];

export default function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="py-24 md:py-40 bg-brand-bg-start/20 overflow-hidden relative"
    >
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-24 max-w-3xl mx-auto">
            <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Process
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-main mb-8 tracking-tight">
              3ステップで、新しい自分へ
            </h2>
            <p className="text-brand-text-sub text-lg font-medium opacity-70">
              難しいことは何もありません。
              「歩時間」があなたのペースに寄り添い、導きます。
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative">
          {/* Connector Line for Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px border-t-2 border-dashed border-brand-primary-light/20 -translate-y-1/2 -z-10"></div>

          {steps.map((step, index) => (
            <FadeIn key={step.id} delay={index * 200}>
              <div className="group relative bg-white p-10 rounded-[3rem] shadow-xl shadow-emerald-900/5 flex flex-col items-center text-center transition-all duration-500 hover:shadow-2xl hover:shadow-emerald-900/10 hover:-translate-y-2 border border-brand-primary-light/5">
                {/* ID Badge */}
                <div
                  className={`absolute -top-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full bg-linear-to-r ${step.color} text-white text-xl font-black shadow-lg z-20`}
                >
                  {step.id}
                </div>

                {/* Icon Container */}
                <div className="mt-8 mb-10 w-28 h-28 bg-brand-bg-start/50 rounded-[2.5rem] flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                  {step.icon}
                </div>

                <h3 className="text-xl font-black text-brand-text-main mb-6 leading-tight group-hover:text-brand-primary transition-colors duration-300">
                  {step.title}
                </h3>

                <p className="text-brand-text-sub text-base leading-relaxed opacity-80 font-medium">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="lg:hidden absolute bottom-[-40px] left-1/2 -translate-x-1/2 w-px h-10 border-l-2 border-dashed border-brand-primary-light/30"></div>
                )}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
