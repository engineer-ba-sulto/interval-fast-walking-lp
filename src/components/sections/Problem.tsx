import FadeIn from "@/components/ui/FadeIn";

export default function Problem() {
  return (
    <section className="py-20 md:py-32 bg-[#F9FAFB] relative overflow-hidden">
      {/* Background Pattern - Subtle Waves */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <svg
          className="w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 1440 800"
        >
          <path
            d="M0,300 C200,400 400,200 600,350 C800,500 1000,300 1200,400 C1300,450 1440,350 1440,350 V800 H0 Z"
            fill="#F0F0F0"
          />
          <path
            d="M0,500 C300,600 600,400 900,550 C1100,650 1440,500 1440,500 V800 H0 Z"
            fill="#E8E8E8"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-[1100px] relative z-10">
        <FadeIn>
          <div className="flex flex-col md:flex-row items-center justify-center gap-10 lg:gap-16">
            {/* Illustration */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="w-full max-w-[420px] aspect-5/4 relative">
                {/* Custom SVG Illustration: Walking up a wavy 3D path */}
                <svg
                  viewBox="0 0 500 400"
                  className="w-full h-full drop-shadow-lg"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <linearGradient
                      id="arrowGrad"
                      x1="0%"
                      y1="100%"
                      x2="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#cfd8dc" />
                      <stop offset="100%" stopColor="#90a4ae" />
                    </linearGradient>
                    <filter
                      id="softShadow"
                      x="-20%"
                      y="-20%"
                      width="140%"
                      height="140%"
                    >
                      <feGaussianBlur in="SourceAlpha" stdDeviation="5" />
                      <feOffset dx="2" dy="5" result="offsetblur" />
                      <feComponentTransfer>
                        <feFuncA type="linear" slope="0.3" />
                      </feComponentTransfer>
                      <feMerge>
                        <feMergeNode />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* 3D Wavy Arrow Background/Shadow layer */}
                  <path
                    d="M50 300 C 150 300, 150 250, 250 220 C 350 190, 350 120, 450 80"
                    fill="none"
                    stroke="#cfd8dc"
                    strokeWidth="40"
                    strokeLinecap="round"
                  />

                  {/* Main Path */}
                  <path
                    d="M50 290 C 150 290, 150 240, 250 210 C 350 180, 350 110, 450 70"
                    fill="none"
                    stroke="url(#arrowGrad)"
                    strokeWidth="40"
                    strokeLinecap="round"
                    filter="url(#softShadow)"
                  />

                  {/* Arrow Head */}
                  <path
                    d="M420 40 L 460 70 L 430 100"
                    fill="#90a4ae"
                    transform="rotate(-15 440 70)"
                  />

                  {/* Walking Figure */}
                  <g transform="translate(120, 230)">
                    {/* Legs */}
                    <path
                      d="M15 40 L 0 65 M 15 40 L 30 65"
                      stroke="#546E7A"
                      strokeWidth="5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Body */}
                    <path
                      d="M15 40 L 18 15"
                      stroke="#546E7A"
                      strokeWidth="5"
                      strokeLinecap="round"
                    />
                    {/* Arms */}
                    <path
                      d="M18 20 L 5 35 M 18 20 L 30 35"
                      stroke="#546E7A"
                      strokeWidth="4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    {/* Head */}
                    <circle cx="20" cy="8" r="8" fill="#546E7A" />
                  </g>
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-8 leading-snug">
                運動習慣、
                <br />
                何度も
                <span className="relative inline-block text-[#5D4037]">
                  挫折
                  <span className="absolute bottom-1 left-0 w-full h-2 bg-[#D7CCC8] opacity-50 -z-10 transform -rotate-2 scale-110"></span>
                </span>
                していませんか？
              </h2>

              <div className="space-y-6 text-gray-600 leading-loose text-base lg:text-lg font-medium">
                <p>
                  「時間がなくて続かない」「一人ではモチベーションが保てない」「激しい運動は苦手」...
                </p>
                <p>そんな風に感じて、何度も運動を始めては諦めていませんか？</p>
                <p className="font-bold text-gray-800 text-xl">
                  あなたのせいではありません。
                  <br />
                  多くの人が同じ悩みを抱えています。
                </p>
              </div>

              {/* Decorative line */}
              <div className="mt-8 h-1 w-24 bg-linear-to-r from-[#cfd8dc] to-transparent mx-auto md:mx-0 rounded-full"></div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
