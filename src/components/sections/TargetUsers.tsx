"use client";

import FadeIn from "@/components/ui/FadeIn";
import {
  UserCheck,
  Heart,
  Footprints,
  HelpCircle,
  Smartphone,
} from "lucide-react";

const targets = [
  {
    icon: <UserCheck size={32} />,
    title: "運動習慣を身につけたい方",
    description: "三日坊主で終わってしまう方へ。続けられる仕組みがあります。",
  },
  {
    icon: <Footprints size={32} />,
    title: "ウォーキングを始めたい方",
    description: "ただ歩くだけでなく、効果的なウォーキングを実践したい方に。",
  },
  {
    icon: <Heart size={32} />,
    title: "健康管理・ダイエット",
    description: "無理のない範囲で、着実に成果を出したい方に最適です。",
  },
  {
    icon: <HelpCircle size={32} />,
    title: "運動方法が分からない方",
    description: "自分に合ったペースが分からない初心者の方も安心です。",
  },
  {
    icon: <Smartphone size={32} />,
    title: "シニア世代の方",
    description: "難しい操作が苦手な方でも、直感的に使えるシンプル設計。",
  },
];

export default function TargetUsers() {
  return (
    <section className="py-20 md:py-32 bg-brand-gradient">
      <div className="container mx-auto px-6">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-bold text-[#212121] text-center mb-16">
            こんな方におすすめです
          </h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {targets.map((target, index) => (
            <FadeIn key={index} delay={index * 100}>
              <div className="bg-white p-6 rounded-xl shadow-sm h-full flex flex-col items-center text-center hover:shadow-md transition-all">
                <div className="w-14 h-14 bg-[#E8F5E9] text-[#558B2F] rounded-full flex items-center justify-center mb-4">
                  {target.icon}
                </div>
                <h3 className="font-bold text-[#212121] mb-3 text-lg">
                  {target.title}
                </h3>
                <p className="text-sm text-[#757575] leading-relaxed">
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

