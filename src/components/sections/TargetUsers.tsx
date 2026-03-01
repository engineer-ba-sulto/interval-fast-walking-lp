import {
  Footprints,
  Heart,
  HelpCircle,
  Smartphone,
  UserCheck,
} from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const targets = [
  {
    icon: <UserCheck className="w-8 h-8" />,
    title: "運動習慣を身につけたい方",
    description:
      "三日坊主で終わってしまう方へ。続けられる仕組みがここにあります。",
    color: "bg-emerald-50 text-emerald-600",
  },
  {
    icon: <Footprints className="w-8 h-8" />,
    title: "ウォーキングを始めたい方",
    description:
      "ただ歩くだけでなく、科学的に効果的なウォーキングを実践したい方に。",
    color: "bg-teal-50 text-teal-600",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "健康管理・ダイエット",
    description: "無理のない範囲で、着実に成果を出したい方に最適です。",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: <HelpCircle className="w-8 h-8" />,
    title: "やり方が分からない方",
    description:
      "自分に合ったペースが分からない初心者の方も安心してお使いいただけます。",
    color: "bg-lime-50 text-lime-600",
  },
  {
    icon: <Smartphone className="w-8 h-8" />,
    title: "シニア世代の方",
    description:
      "難しい操作が苦手な方でも、直感的に使えるシンプル設計にこだわりました。",
    color: "bg-emerald-50 text-emerald-600",
  },
];

export default function TargetUsers() {
  return (
    <section className="py-24 md:py-40 bg-brand-gradient relative overflow-hidden">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-main tracking-tight">
              「歩時間」は、
              <br className="sm:hidden" />
              こんなあなたの味方です
            </h2>
          </div>
        </FadeIn>

        <div className="flex flex-wrap justify-center gap-8 lg:gap-10">
          {targets.map((target, index) => (
            <FadeIn
              key={target.title}
              delay={index * 100}
              className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.7rem)] xl:w-[calc(20%-1.6rem)]"
            >
              <div className="bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-xl shadow-emerald-900/5 h-full flex flex-col items-center text-center hover:shadow-2xl hover:shadow-emerald-900/10 transition-all duration-500 hover:-translate-y-2 group border border-white">
                <div
                  className={`w-20 h-20 ${target.color} rounded-full flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500`}
                >
                  {target.icon}
                </div>
                <h3 className="font-black text-brand-text-main mb-4 text-xl leading-tight">
                  {target.title}
                </h3>
                <p className="text-brand-text-sub text-base leading-relaxed opacity-80 font-medium">
                  {target.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
