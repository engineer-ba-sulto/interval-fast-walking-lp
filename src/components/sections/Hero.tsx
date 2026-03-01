import { Footprints, Heart, Leaf } from "lucide-react";
import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import LandingButton from "@/components/ui/LandingButton";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-brand-gradient overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.03] pointer-events-none mix-blend-overlay"></div>

      {/* Background Decor - Organic Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-brand-accent opacity-20 rounded-full blur-3xl mix-blend-multiply animate-pulse-subtle"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-primary-light opacity-20 rounded-full blur-3xl mix-blend-multiply animate-float"></div>
      </div>

      <div className="container max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 relative z-10">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 lg:pl-4">
          <FadeIn delay={100}>
            <span className="inline-flex items-center py-2 px-5 rounded-full bg-white/80 backdrop-blur-sm text-brand-primary-dark font-bold text-sm mb-8 tracking-wider shadow-sm border border-brand-primary-light/10 transform hover:-translate-y-1 transition-transform duration-300 cursor-default">
              <span className="w-2 h-2 rounded-full bg-brand-accent mr-3 animate-pulse"></span>
              インターバル速歩 - タイマーアプリ・歩時間（あるじかん）
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-black text-brand-text-main leading-[1.1] mb-8 tracking-tighter text-balance">
              歩く時間が、
              <br />
              <span className="text-brand-primary-light relative inline-block">
                輝き出す。
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-brand-accent/40"
                  viewBox="0 0 200 12"
                  fill="none"
                  preserveAspectRatio="none"
                >
                  <title>SVG Background for Phone</title>
                  <path
                    d="M1 10.5C50 1.5 150 1.5 199 10.5"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-brand-text-sub text-lg sm:text-xl mb-10 max-w-lg leading-relaxed font-medium">
              あなたの「歩き」をアップデート。
              インターバル速歩で、もっと自由に、もっと健やかに。
              シンプルで心強いパートナーが、あなたの毎日を彩ります。
            </p>
          </FadeIn>

          <FadeIn
            delay={500}
            className="w-full flex justify-center lg:justify-start"
          >
            <LandingButton
              href="https://apps.apple.com/jp/app/id6755136927"
              variant="appstore"
              size="lg"
              className="w-full sm:w-auto shadow-2xl hover:shadow-brand-primary/20"
            />
          </FadeIn>
        </div>

        {/* Right: Phone & Graphics */}
        <div className="relative flex justify-center items-center order-1 lg:order-2">
          <FadeIn
            delay={200}
            className="relative w-full aspect-square flex items-center justify-center max-w-[500px]"
          >
            {/* Organic SVG Background for Phone */}
            <div className="absolute inset-0 flex items-center justify-center -z-10 animate-spin-slow opacity-30">
              <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Organic SVG Background for Phone</title>
                <path
                  fill="#10B981"
                  d="M44.7,-76.4C58.3,-69.2,70,-58,78.2,-44.7C86.4,-31.4,91,-15.7,89.5,-0.9C88,14,80.4,28,71.5,40.4C62.6,52.8,52.4,63.6,40.1,71.3C27.7,79.1,13.8,83.8,-0.9,85.4C-15.7,86.9,-31.4,85.3,-45,78.3C-58.7,71.2,-70.3,58.7,-77.9,44.7C-85.5,30.7,-89.1,15.3,-88.4,0.4C-87.8,-14.5,-82.8,-29,-74,-41.2C-65.1,-53.4,-52.3,-63.3,-38.6,-70.5C-25,-77.6,-12.5,-82,1.2,-84.1C14.9,-86.2,29.9,-86,44.7,-76.4Z"
                  transform="translate(100 100)"
                />
              </svg>
            </div>

            {/* Orbiting Elements */}
            <div className="absolute inset-0 pointer-events-none">
              {/* Leaf */}
              <div className="absolute top-[10%] left-[10%] animate-float bg-white p-4 rounded-2xl shadow-xl z-20 transform -rotate-12">
                <Leaf className="text-brand-primary-light w-8 h-8 fill-emerald-50" />
              </div>

              {/* Walker */}
              <div className="absolute bottom-[20%] right-[-5%] animate-float-delayed bg-white p-4 rounded-2xl shadow-xl z-20 transform rotate-12">
                <Footprints className="text-brand-primary-light w-8 h-8 fill-emerald-50" />
              </div>

              {/* Heart */}
              <div className="absolute bottom-[10%] left-[5%] animate-float-slow bg-white p-4 rounded-2xl shadow-xl z-20 transform -rotate-6">
                <Heart className="text-brand-primary-light w-8 h-8 fill-emerald-50" />
              </div>
            </div>

            {/* Phone Image Container */}
            <div className="relative w-[280px] sm:w-[320px] lg:w-[340px] h-full transform hover:scale-105 transition-transform duration-700 ease-out z-10">
              <div className="absolute inset-0 bg-brand-primary/10 blur-3xl -z-10 rounded-full scale-75"></div>
              <Image
                src="/top.png"
                alt="Interval Walking App"
                width={340}
                height={700}
                className="w-full h-auto object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.15)]"
                priority
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
