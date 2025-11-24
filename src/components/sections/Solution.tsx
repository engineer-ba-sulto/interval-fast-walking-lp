"use client";

import FadeIn from "@/components/ui/FadeIn";

export default function Solution() {
  return (
    <section className="py-20 md:py-32 bg-white flex justify-center items-center">
      <div className="container mx-auto px-6">
        <FadeIn>
          <div className="relative w-full max-w-[1100px] mx-auto rounded-[3rem] overflow-hidden bg-gradient-to-br from-[#E8F5E9] to-[#C8E6C9] shadow-xl md:p-24 p-10 flex flex-col items-center text-center isolate">
            {/* Background Texture Layers (Watercolor effect) */}
            <div className="absolute inset-0 z-[-1] opacity-60 mix-blend-multiply pointer-events-none">
              <div className="absolute top-[-20%] left-[-10%] w-[600px] h-[600px] bg-[#A5D6A7] rounded-full blur-[80px] opacity-40"></div>
              <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-[#81C784] rounded-full blur-[80px] opacity-30"></div>
              <div className="absolute top-[30%] right-[20%] w-[300px] h-[300px] bg-[#C8E6C9] rounded-full blur-[60px] opacity-50"></div>

              {/* Subtle lines */}
              <svg
                className="absolute inset-0 w-full h-full opacity-20"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,100 C300,50 600,150 1200,100"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="1"
                />
                <path
                  d="M0,200 C400,150 800,250 1200,200"
                  fill="none"
                  stroke="#4CAF50"
                  strokeWidth="1"
                />
              </svg>
            </div>

            <div className="flex flex-col items-center max-w-4xl relative z-10">
              {/* Custom Icon: Person walking up arrow */}
              <div className="mb-8 w-24 h-24 md:w-32 md:h-32 drop-shadow-lg transform hover:scale-105 transition-transform duration-500">
                <svg
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <defs>
                    <linearGradient
                      id="iconGradient"
                      x1="0"
                      y1="100"
                      x2="100"
                      y2="0"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#66BB6A" />
                      <stop offset="1" stopColor="#A5D6A7" />
                    </linearGradient>
                    <filter
                      id="glow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur stdDeviation="2" result="blur" />
                      <feComposite
                        in="SourceGraphic"
                        in2="blur"
                        operator="over"
                      />
                    </filter>
                  </defs>

                  {/* Arrow curving up */}
                  <path
                    d="M20 75 Q 50 75, 80 35"
                    stroke="url(#iconGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                  />
                  <path
                    d="M65 35 L 80 35 L 80 50"
                    stroke="url(#iconGradient)"
                    strokeWidth="8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  {/* Person Walking */}
                  <g transform="translate(50, 35)">
                    <circle
                      cx="5"
                      cy="-5"
                      r="7"
                      fill="url(#iconGradient)"
                      stroke="white"
                      strokeWidth="1.5"
                    />
                    <path
                      d="M5 2 L 5 17 M 5 5 L -3 10 M 5 5 L 13 10 M 5 17 L -1 27 M 5 17 L 11 25"
                      stroke="url(#iconGradient)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                </svg>
              </div>

              {/* Title */}
              <h2 className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-[#1B5E20] mb-8 leading-tight drop-shadow-sm tracking-tight">
                あなたの運動習慣を成功に導く、<br className="block" />
                シンプルな解決方法
              </h2>

              {/* Description */}
              <p className="text-[#3E4E3F] text-base md:text-lg leading-loose font-medium max-w-3xl opacity-90">
                インターバル速歩は、ウォーキングを誰でも簡単に、効果的で、持続可能なものにします。
                あなたの現在のフィットネスレベルに関わらず、健康的でアクティブな生活への第一歩をサポートします。
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

