import FadeIn from "@/components/ui/FadeIn";

export default function Solution() {
  return (
    <section className="relative py-20 md:py-32 bg-[#F1F8F4] flex justify-center items-center overflow-hidden">
      {/* Background Texture Layers (Watercolor effect) */}
      <div className="absolute inset-0 z-0 opacity-70 mix-blend-multiply pointer-events-none">
        {/* Watercolor splotches */}
        <div className="absolute top-[-15%] left-[-8%] w-[600px] h-[600px] bg-[#A5D6A7] rounded-full blur-[100px] opacity-30"></div>
        <div className="absolute bottom-[-15%] right-[-8%] w-[500px] h-[500px] bg-[#81C784] rounded-full blur-[100px] opacity-25"></div>
        <div className="absolute top-[25%] right-[15%] w-[350px] h-[350px] bg-brand-bg-start rounded-full blur-[80px] opacity-35"></div>

        {/* Subtle wavy lines */}
        <svg
          className="absolute inset-0 w-full h-full opacity-15"
          preserveAspectRatio="none"
        >
          <path
            d="M0,80 Q 200,60 400,80 T 800,80 T 1200,80"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="1.5"
          />
          <path
            d="M0,180 Q 300,160 600,180 T 1200,180"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="1.5"
          />
          <path
            d="M0,280 Q 250,260 500,280 T 1000,280 T 1200,280"
            fill="none"
            stroke="#4CAF50"
            strokeWidth="1.5"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <FadeIn>
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center">
            {/* Custom Icon: Person walking with upward arrow */}
            <div className="mb-10 w-28 h-28 md:w-36 md:h-36">
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
                    y1="0"
                    x2="100"
                    y2="100"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#66BB6A" />
                    <stop offset="1" stopColor="#4CAF50" />
                  </linearGradient>
                </defs>

                {/* Arrow curving up from behind person */}
                <path
                  d="M15 70 Q 45 70, 75 30"
                  stroke="url(#iconGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  fill="none"
                />
                {/* Arrow head */}
                <path
                  d="M60 30 L 75 30 L 75 45"
                  stroke="url(#iconGradient)"
                  strokeWidth="7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />

                {/* Person Walking */}
                <g transform="translate(50, 30)">
                  {/* Head */}
                  <circle cx="0" cy="-8" r="8" fill="url(#iconGradient)" />
                  {/* Body and limbs */}
                  <path
                    d="M0 0 L 0 20 M 0 3 L -5 10 M 0 3 L 5 10 M 0 20 L -3 32 M 0 20 L 3 32"
                    stroke="url(#iconGradient)"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                  />
                </g>
              </svg>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-black mb-8 leading-tight tracking-tight">
              あなたの運動習慣を成功に導く
              <br className="block" />
              シンプルな解決方法
            </h2>

            {/* Description */}
            <p className="text-black text-base md:text-lg leading-relaxed font-medium max-w-3xl opacity-90">
              インターバル速歩は、ウォーキングを誰でも簡単に、効果的で、持続可能なものにします。
              あなたの現在のフィットネスレベルに関わらず、健康的でアクティブな生活への第一歩をサポートします。
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
