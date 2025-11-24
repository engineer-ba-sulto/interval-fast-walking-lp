"use client";

import LandingButton from "@/components/ui/LandingButton";
import FadeIn from "@/components/ui/FadeIn";
import {
  Download,
  Leaf,
  Footprints,
  Heart,
  Activity,
  Pause,
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center bg-brand-gradient overflow-hidden pt-24 pb-12 lg:pt-0 lg:pb-0">
      {/* Background Decor - Abstract Waves/Blobs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] bg-white opacity-40 rounded-full blur-3xl mix-blend-soft-light"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#8BC34A] opacity-20 rounded-full blur-3xl mix-blend-multiply"></div>
      </div>

      <div className="container max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center px-6 relative z-10">
        {/* Left: Text Content */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
          <FadeIn delay={100}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#212121] leading-[1.3] mb-6">
              簡単に続く、<br />
              ウォーキング習慣で<br />
              健康な毎日を始めよう
            </h1>
          </FadeIn>

          <FadeIn delay={300}>
            <p className="text-[#757575] text-base sm:text-lg mb-8 max-w-lg leading-relaxed">
              運動習慣を身につけたいあなたへ。あなたに最適なウォーキングプランを自動提案。
              シンプルで続けやすく、年配の方にも安心。今日から健康的な毎日を始めましょう。
            </p>
          </FadeIn>

          <FadeIn
            delay={500}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto items-center"
          >
            <LandingButton
              variant="primary"
              size="lg"
              className="sm:w-auto gap-2 shadow-xl shadow-[#8BC34A]/30 pl-8 pr-6"
            >
              無料でダウンロード <Download size={20} />
            </LandingButton>
            <LandingButton variant="appstore" size="lg" className="sm:w-auto shadow-xl" />
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
              <div className="absolute w-[140%] h-[70%] border border-white/40 rounded-[50%] rotate-[15deg] animate-spin-slow opacity-40 delay-75"></div>

              {/* Glowing Dots on orbits */}
              <div className="absolute w-2 h-2 bg-white rounded-full top-[20%] left-[10%] shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse"></div>
              <div className="absolute w-2 h-2 bg-white rounded-full bottom-[30%] right-[10%] shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-pulse delay-500"></div>
            </div>

            {/* Floating Icons */}
            {/* Leaf */}
            <div className="absolute top-[15%] left-[-5%] sm:left-[-15%] animate-float bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-20 hover:scale-110 transition-transform cursor-default">
              <Leaf className="text-[#558B2F] w-6 h-6 sm:w-8 sm:h-8 fill-[#C8E6C9]" />
            </div>

            {/* Walker */}
            <div className="absolute top-[45%] right-[-10%] sm:right-[-20%] animate-float-delayed bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-20 hover:scale-110 transition-transform cursor-default">
              <Footprints className="text-[#558B2F] w-6 h-6 sm:w-8 sm:h-8 fill-[#C8E6C9]" />
            </div>

            {/* Heart */}
            <div className="absolute bottom-[20%] left-[0%] sm:left-[-10%] animate-float-slow bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg z-20 hover:scale-110 transition-transform cursor-default">
              <Heart className="text-[#558B2F] w-6 h-6 sm:w-8 sm:h-8 fill-[#C8E6C9]" />
            </div>

            {/* Phone Body */}
            <div className="relative w-[280px] sm:w-[300px] h-[580px] sm:h-[620px] bg-gray-900 rounded-[3rem] border-[6px] border-gray-800 shadow-2xl overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-out z-10 box-border ring-1 ring-gray-700/50">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30 flex justify-center items-center">
                <div className="w-16 h-4 bg-gray-900/50 rounded-full"></div>
              </div>

              {/* Screen Content - Simulated App UI */}
              <div className="w-full h-full bg-white flex flex-col relative overflow-hidden">
                {/* Status Bar Mockup */}
                <div className="h-8 w-full flex justify-between items-center px-6 pt-2">
                  <span className="text-[10px] font-bold">9:41</span>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                    <div className="w-3 h-3 rounded-full bg-gray-200"></div>
                  </div>
                </div>

                {/* Header */}
                <div className="pt-4 px-6 pb-2 flex justify-between items-center">
                  <div className="text-sm font-semibold text-gray-800">
                    Interval Walking
                  </div>
                  <Activity size={20} className="text-gray-400" />
                </div>

                {/* Timer Section */}
                <div className="flex flex-col items-center justify-center py-4 relative">
                  {/* Timer Ring */}
                  <div className="w-40 h-40 rounded-full border-[6px] border-gray-100 relative flex items-center justify-center">
                    {/* Active segment simulation */}
                    <svg
                      className="absolute inset-0 rotate-[-90deg]"
                      viewBox="0 0 100 100"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="46"
                        fill="none"
                        stroke="#8BC34A"
                        strokeWidth="6"
                        strokeDasharray="200 289"
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="text-center z-10">
                      <div className="text-[8px] font-bold text-[#558B2F] uppercase tracking-wider mb-1 bg-[#E8F5E9] px-2 py-0.5 rounded-full inline-block">
                        Fast Walk
                      </div>
                      <div className="text-3xl font-bold text-gray-800 tabular-nums">
                        00:02:33
                      </div>
                      <div className="text-[10px] text-gray-400 mt-1">Timer</div>
                    </div>

                    {/* Play/Pause Button mini */}
                    <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[#007AFF]">
                      <Pause size={16} fill="currentColor" />
                    </div>

                    {/* Icon mini */}
                    <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white shadow-md rounded-full flex items-center justify-center text-[#558B2F]">
                      <Activity size={16} />
                    </div>
                  </div>
                </div>

                {/* Map Section Mockup */}
                <div className="flex-1 bg-slate-50 relative mx-4 mb-2 rounded-2xl overflow-hidden shadow-inner border border-gray-100">
                  {/* Map Background Pattern */}
                  <div
                    className="absolute inset-0 opacity-40"
                    style={{
                      backgroundImage:
                        "radial-gradient(#ddd 1px, transparent 1px)",
                      backgroundSize: "10px 10px",
                    }}
                  ></div>

                  {/* Simulated Map Paths */}
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 200 200"
                    preserveAspectRatio="none"
                  >
                    {/* Roads */}
                    <path
                      d="M 40 180 L 60 120 L 140 100 L 120 180"
                      fill="none"
                      stroke="white"
                      strokeWidth="12"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M -10 80 L 80 80 L 120 40 L 210 50"
                      fill="none"
                      stroke="white"
                      strokeWidth="8"
                      strokeLinejoin="round"
                    />

                    {/* Walking Path */}
                    <path
                      d="M 60 120 L 80 80 L 120 40"
                      fill="none"
                      stroke="#007AFF"
                      strokeWidth="4"
                      strokeLinejoin="round"
                      strokeDasharray="5 3"
                    />
                    <path
                      d="M 120 40 L 140 100 L 120 180"
                      fill="none"
                      stroke="#8BC34A"
                      strokeWidth="4"
                      strokeLinejoin="round"
                    />

                    {/* Pins */}
                    <circle
                      cx="60"
                      cy="120"
                      r="4"
                      fill="#FF5252"
                      stroke="white"
                      strokeWidth="2"
                    />
                    <circle
                      cx="120"
                      cy="180"
                      r="4"
                      fill="#4CAF50"
                      stroke="white"
                      strokeWidth="2"
                    />

                    {/* Current location */}
                    <circle
                      cx="120"
                      cy="40"
                      r="6"
                      fill="#007AFF"
                      fillOpacity="0.3"
                    />
                    <circle
                      cx="120"
                      cy="40"
                      r="3"
                      fill="#007AFF"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>

                {/* Bottom Stats */}
                <div className="px-5 pb-6 pt-2 grid grid-cols-3 gap-3">
                  <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-50 text-center flex flex-col items-center">
                    <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mb-1">
                      <Activity size={12} className="text-green-600" />
                    </div>
                    <div className="text-gray-800 font-bold text-sm">76.0m</div>
                    <div className="text-[9px] text-gray-400">Total Dist</div>
                  </div>
                  <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-50 text-center flex flex-col items-center">
                    <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mb-1">
                      <Heart size={12} className="text-red-500" />
                    </div>
                    <div className="text-gray-800 font-bold text-sm">74.86</div>
                    <div className="text-[9px] text-gray-400">Heart Rate</div>
                  </div>
                  <div className="bg-white p-2 rounded-2xl shadow-sm border border-gray-50 text-center flex flex-col items-center">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mb-1">
                      <Footprints size={12} className="text-blue-500" />
                    </div>
                    <div className="text-gray-800 font-bold text-sm">02.67</div>
                    <div className="text-[9px] text-gray-400">K Steps</div>
                  </div>
                </div>

                {/* Floating Action Button (Simulated) */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                  <div className="w-14 h-14 bg-gradient-to-br from-[#8BC34A] to-[#558B2F] rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 ring-4 ring-white">
                    <div className="w-4 h-4 bg-white rounded-[1px]"></div>
                    <div className="w-4 h-4 bg-white rounded-[1px] ml-1"></div>
                  </div>
                </div>

                {/* Navigation bar hint */}
                <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gray-200 rounded-full"></div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

