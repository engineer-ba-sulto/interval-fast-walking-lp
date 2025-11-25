"use client";

import FadeIn from "@/components/ui/FadeIn";
import { screenshots } from "@/constants/screenshots";
import Image from "next/image";
import { useRef } from "react";

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-20 md:py-32 overflow-x-hidden">
      <div className="container mx-auto px-6 text-center mb-12">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-text-main mb-6">
            アプリの使いやすさを、
            <br className="block sm:hidden" />
            実際の画面でご確認ください
          </h2>
          <p className="text-brand-text-sub max-w-2xl mx-auto">
            シンプルで分かりやすい画面設計。リング型タイマーで進捗が一目で分かります。
          </p>
        </FadeIn>
      </div>

      <FadeIn delay={200} direction="up">
        {/* Horizontal Scroll Area */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-auto space-x-8 px-6 pt-4 pb-12 md:justify-center scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          {screenshots.map((shot, index) => (
            <div
              key={index}
              className="shrink-0 w-[260px] md:w-[280px] snap-center group pt-4"
            >
              <Image
                src={shot.src}
                alt={shot.alt}
                width={280}
                height={560}
                className="w-full h-[560px] object-cover transform transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
              <p className="mt-6 text-center font-medium text-brand-text-sub">
                {shot.alt}
              </p>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
