interface PageHeroProps {
  title: string;
  description?: string;
  bgClass?: string;
}

export default function PageHero({
  title,
  description,
  bgClass = "bg-blue-50 dark:bg-gray-800",
}: PageHeroProps) {
  return (
    <div className={`w-full ${bgClass}`}>
      <div className="pt-28 pb-16 md:pt-36 md:pb-24 relative">
        {/* テキストコンテナにz-index-10を追加して前面に表示 */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
              {title}
            </h1>
            {description && (
              <p className="text-lg text-gray-600 dark:text-gray-300">
                {description}
              </p>
            )}
          </div>
        </div>

        {/* 波形の装飾（z-index-0を追加して背面に配置） */}
        <div className="absolute bottom-0 left-0 right-0 z-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="w-full h-auto"
          >
            <title>Wave pattern</title>
            <path
              fill="currentColor"
              fillOpacity="1"
              className="text-white dark:text-gray-900"
              d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,122.7C672,117,768,139,864,149.3C960,160,1056,160,1152,138.7C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}
