import FadeIn from "@/components/ui/FadeIn";
import LandingButton from "@/components/ui/LandingButton";
import { Footprints, Heart, Leaf } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-brand-gradient overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Decor - Abstract Waves/Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white opacity-40 rounded-full blur-3xl mix-blend-soft-light"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary-light opacity-20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="container max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 relative z-10">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 lg:pl-4">
          <FadeIn delay={100}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-text-main leading-[1.3] mb-6">
              簡単に続く、
              <br />
              ウォーキング習慣で
              <br />
              健康な毎日を始めよう
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-brand-text-sub text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              運動習慣を身につけたいあなたへ。あなたに最適なウォーキングプランを自動提案。
              シンプルで続けやすく、年配の方にも安心。今日から健康的な毎日を始めましょう。
            </p>
          </FadeIn>

          <FadeIn
            delay={500}
            className="w-full flex justify-center lg:justify-center"
          >
            <LandingButton
              href="https://apps.apple.com/jp/app/id6755136927"
              variant="appstore"
              size="lg"
              className="w-full sm:w-auto shadow-xl"
            />
          </FadeIn>
        </div>

        {/* Right: Phone & Graphics */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          <FadeIn
            delay={200}
            className="relative w-[300px] sm:w-[340px] lg:w-[380px] h-[600px] sm:h-[680px] flex items-center justify-center"
          >
            {/* Orbit / Connecting Lines Effect */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
              <div className="absolute w-[120%] h-[60%] border border-white/60 rounded-[50%] rotate-[-15deg] animate-spin-slow opacity-60"></div>
              <div className="absolute w-[140%] h-[70%] border border-white/40 rounded-[50%] rotate-15 animate-spin-slow opacity-40 delay-75"></div>

              {/* Glowing Dots on orbits */}
              <div className="absolute w-2 h-2 bg-white rounded-full top-[20%] left-[10%] shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></div>
              <div className="absolute w-2 h-2 bg-white rounded-full bottom-[30%] right-[10%] shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse delay-500"></div>
            </div>

            {/* Floating Icons */}
            {/* Leaf */}
            <div className="absolute top-[15%] left-[-5%] sm:left-[-15%] animate-float bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-20 hover:scale-110 transition-transform cursor-default">
              <Leaf className="text-brand-primary-light w-6 h-6 sm:w-8 sm:h-8 fill-brand-bg-start" />
            </div>

            {/* Walker */}
            <div className="absolute top-[45%] right-[-10%] sm:right-[-20%] animate-float-delayed bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-20 hover:scale-110 transition-transform cursor-default">
              <Footprints className="text-brand-primary-light w-6 h-6 sm:w-8 sm:h-8 fill-brand-bg-start" />
            </div>

            {/* Heart */}
            <div className="absolute bottom-[20%] left-[0%] sm:left-[-10%] animate-float-slow bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-20 hover:scale-110 transition-transform cursor-default">
              <Heart className="text-brand-primary-light w-6 h-6 sm:w-8 sm:h-8 fill-brand-bg-start" />
            </div>

            {/* Phone Image */}
            <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] transform -rotate-6 hover:rotate-0 transition-transform duration-700 ease-out z-10">
              <Image
                src="/top.png"
                alt="Interval Walking App"
                width={300}
                height={620}
                className="w-full h-full object-contain drop-shadow-2xl"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
