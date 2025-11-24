"use client";

import FadeIn from "@/components/ui/FadeIn";
import {
  Smartphone,
  Download,
  ClipboardCheck,
  Timer,
  Footprints,
} from "lucide-react";

const steps = [
  {
    id: 1,
    title: "アプリをダウンロード",
    description:
      "App StoreまたはGoogle Playからアプリケーションをダウンロードします。",
    icon: (
      <div className="relative flex items-center justify-center">
        <Smartphone size={40} className="text-gray-700" strokeWidth={1.5} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-1 flex flex-col items-center">
          <Download size={16} className="text-gray-700" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "簡単な質問に答える",
    description:
      "あなたの経験をパーソナライズするための簡単な初期設定プロセスです。",
    icon: (
      <ClipboardCheck size={44} className="text-gray-700" strokeWidth={1.5} />
    ),
  },
  {
    id: 3,
    title: "提案されたタイマーでウォーキング開始",
    description:
      "カスタマイズされたインターバルタイマーでアプリの主要な活動を始めましょう。",
    icon: (
      <div className="relative flex items-center justify-center">
        <Footprints
          size={40}
          className="text-gray-700 mr-2"
          strokeWidth={1.5}
        />
        <div className="absolute -top-2 -right-1 bg-white rounded-full p-0.5 shadow-sm">
          <Timer size={20} className="text-[#558B2F]" />
        </div>
      </div>
    ),
  },
];

export default function HowToUse() {
  return (
    <section
      id="how-to-use"
      className="py-20 md:py-32 bg-[#F8FBF8] overflow-hidden"
    >
      <div className="container mx-auto px-6 relative">
        <FadeIn>
          <div className="text-center mb-24 relative">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#212121] inline-block relative z-10">
              3ステップで始められる、簡単な使い方
            </h2>
            {/* Brush stroke underline effect */}
            <div className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-full max-w-sm h-3 z-0 opacity-70">
              <svg viewBox="0 0 200 9" fill="none" className="w-full h-full">
                <path
                  d="M2.00025 6.99997C48.3336 2.66664 139 -3.50003 198 3.49997"
                  stroke="#C8E6C9"
                  strokeWidth="4"
                  strokeLinecap="round"
                />
              </svg>
            </div>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-10">
          {steps.map((step, index) => (
            <div key={step.id} className="relative group">
              {/* Connector Arrow for Desktop */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-[40%] -right-[20%] w-[40%] z-0 pointer-events-none">
                  <svg
                    viewBox="0 0 100 40"
                    fill="none"
                    className="w-full h-full text-[#C8E6C9]"
                  >
                    <path
                      d="M0 15 Q 50 35 100 15"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeDasharray="0 0"
                    />
                    <path
                      d="M95 12 L100 15 L95 18"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              )}

              {/* Connector line for mobile (vertical) */}
              {index < steps.length - 1 && (
                <div className="md:hidden absolute bottom-[-40px] left-1/2 transform -translate-x-1/2 h-10 border-l-2 border-dashed border-[#C8E6C9] z-0"></div>
              )}

              <FadeIn delay={index * 200} className="h-full">
                <div className="bg-white rounded-[2rem] p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col items-center text-center relative z-10 border border-white transition-transform duration-300 hover:-translate-y-1">
                  {/* Number Badge */}
                  <div className="absolute -top-5 -left-3 w-16 h-16 rounded-full bg-gradient-to-br from-[#A5D6A7] to-[#66BB6A] flex items-center justify-center text-white text-3xl font-bold shadow-lg border-[3px] border-white z-20">
                    <span className="drop-shadow-sm font-sans">{step.id}</span>
                  </div>

                  {/* Icon Circle */}
                  <div className="mt-6 mb-6 w-24 h-24 bg-[#F1F8E9] rounded-full flex items-center justify-center border border-[#DCEDC8]">
                    {step.icon}
                  </div>

                  <h3 className="text-lg font-bold text-[#212121] mb-4 min-h-[1.5rem] flex items-center justify-center">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#757575] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

