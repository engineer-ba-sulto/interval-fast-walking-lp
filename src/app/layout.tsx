import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Zen_Kaku_Gothic_New } from "next/font/google";
import { Toaster } from "sonner";
import { getBaseUrl } from "@/lib/url-utils";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const zenKakuGothic = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-zen-kaku",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    template: "%s | インターバル速歩",
    default: "インターバル速歩 - タイマーアプリ・歩時間（あるじかん）",
  },
  metadataBase: new URL(await getBaseUrl()),
  description:
    "運動習慣を身につけたいあなたへ。あなたに最適なウォーキングプランを自動提案。シンプルで続けやすく、年配の方にも安心。",
  keywords: [
    "インターバル速歩",
    "ウォーキング",
    "健康",
    "運動習慣",
    "タイマーアプリ",
    "歩時間",
  ],
  openGraph: {
    title: "インターバル速歩 - 健康な毎日を始めよう",
    description:
      "運動習慣を身につけたいあなたへ。あなたに最適なウォーキングプランを自動提案。シンプルで続けやすく、年配の方にも安心。",
    type: "website",
    locale: "ja_JP",
    images: ["/opengraph-image.png", "/opengraph-image.jpg"],
  },
  twitter: {
    card: "summary_large_image",
    title: "インターバル速歩 - 健康な毎日を始めよう",
    description:
      "運動習慣を身につけたいあなたへ。あなたに最適なウォーキングプランを自動提案。シンプルで続けやすく、年配の方にも安心。",
    images: ["/opengraph-image.png", "/opengraph-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body
        className={`${plusJakartaSans.variable} ${zenKakuGothic.variable} font-sans antialiased`}
      >
        {children}
        <Toaster />
      </body>
      <GoogleAnalytics gaId={process.env.GOOGLE_ANALYTICS_ID || ""} />
    </html>
  );
}
