import DownloadSection from "@/components/sections/Download";
import FAQ from "@/components/sections/FAQ";
import Features from "@/components/sections/Features";
import Footer from "@/components/sections/Footer";
import Hero from "@/components/sections/Hero";
import HowToUse from "@/components/sections/HowToUse";
import Problem from "@/components/sections/Problem";
import Screenshots from "@/components/sections/Screenshots";
import Solution from "@/components/sections/Solution";
import TargetUsers from "@/components/sections/TargetUsers";
import StickyCTA from "@/components/StickyCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "インターバル速歩 - 健康な毎日を始めよう",
  description:
    "運動習慣を身につけたいあなたへ。あなたに最適なウォーキングプランを自動提案。シンプルで続けやすく、年配の方にも安心。",
};

export default function Home() {
  return (
    <div className="min-h-screen bg-white font-sans text-[#212121] selection:bg-[#8BC34A] selection:text-white">
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Features />
        <Screenshots />
        <HowToUse />
        <TargetUsers />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
}
