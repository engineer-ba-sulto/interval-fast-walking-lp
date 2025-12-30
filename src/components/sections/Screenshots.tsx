"use client";

import Image from "next/image";
import { useRef } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { screenshots } from "@/constants/screenshots";

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 md:py-40 bg-white overflow-hidden relative">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 mb-20">
        <div className="flex flex-col md:flex-row items-end justify-between gap-8">
          <FadeIn className="max-w-2xl">
            <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Interface
            </span>
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-brand-text-main leading-tight tracking-tight">
              直感的に使える
              <br />
              洗練されたデザイン
            </h2>
          </FadeIn>
          <FadeIn delay={200} className="md:text-right max-w-sm">
            <p className="text-brand-text-sub text-lg font-medium opacity-80">
              余計なものは一切ない。 あなたの「歩き」に集中できる、
              静かで心地よい空間を提供します。
            </p>
          </FadeIn>
        </div>
      </div>

      <div className="relative">
        {/* Decorative Background Strip */}
        <div className="absolute top-1/2 left-0 w-full h-64 bg-brand-bg-start/30 -translate-y-1/2 -skew-y-2"></div>

        <FadeIn delay={300}>
          <div
            ref={scrollContainerRef}
            className="flex overflow-x-auto space-x-8 px-8 py-12 scrollbar-hide snap-x snap-mandatory relative z-10"
            style={{ scrollBehavior: "smooth" }}
          >
            {/* Added spacing at start for better centering on mobile */}
            <div className="shrink-0 w-4 md:hidden"></div>

            {screenshots.map((shot) => (
              <div
                key={shot.alt}
                className="shrink-0 w-[280px] md:w-[320px] snap-center group"
              >
                <div className="relative rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.15)] group-hover:-translate-y-4">
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <Image
                    src={shot.src}
                    alt={shot.alt}
                    width={320}
                    height={640}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="mt-8 text-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
                  <span className="inline-block px-4 py-1 bg-brand-primary/10 text-brand-primary rounded-full text-sm font-bold cursor-default">
                    {shot.alt}
                  </span>
                </div>
              </div>
            ))}

            {/* Added spacing at end */}
            <div className="shrink-0 w-4 md:hidden"></div>
          </div>
        </FadeIn>
      </div>

      {/* Scroll indicator for mobile */}
      <div className="flex justify-center mt-8 gap-2 md:hidden">
        <div className="w-8 h-1 bg-brand-primary rounded-full"></div>
        <div className="w-2 h-1 bg-brand-primary-light/30 rounded-full"></div>
        <div className="w-2 h-1 bg-brand-primary-light/30 rounded-full"></div>
      </div>
    </section>
  );
}
