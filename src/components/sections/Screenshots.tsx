"use client";

import { useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";

const screenshots = [
  { src: "https://picsum.photos/400/868?random=10", alt: "メイン画面" },
  { src: "https://picsum.photos/400/868?random=11", alt: "設定画面" },
  { src: "https://picsum.photos/400/868?random=12", alt: "モード選択" },
  { src: "https://picsum.photos/400/868?random=13", alt: "タイマー実行中" },
  { src: "https://picsum.photos/400/868?random=14", alt: "完了画面" },
  { src: "https://picsum.photos/400/868?random=15", alt: "連続歩行" },
];

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-bold text-[#212121] mb-6">
            アプリの使いやすさを、
            <br className="block sm:hidden" />実際の画面でご確認ください
          </h2>
          <p className="text-[#757575] max-w-2xl mx-auto">
            シンプルで分かりやすい画面設計。リング型タイマーで進捗が一目で分かります。
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={200} direction="up">
        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 px-6 pb-12 md:justify-center scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-[260px] md:w-[280px] snap-center group"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-gray-800 bg-gray-800 transform transition-transform duration-300 group-hover:scale-105">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full h-[560px] object-cover bg-gray-200"
                  loading="lazy"
                />
              </div>
              <p className="mt-4 text-center font-medium text-[#757575]">
                {shot.alt}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

