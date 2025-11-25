"use client";

import FadeIn from "@/components/ui/FadeIn";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "本当に無料で始められますか？",
    a: "はい、基本的な機能はすべて無料でご利用いただけます。一部の高度な分析機能などは有料プランでの提供となりますが、日々のウォーキングには無料版で十分ご活用いただけます。",
  },
  {
    q: "操作が難しくないですか？",
    a: "シニア世代の方でも安心して使えるよう、文字を大きく、ボタンを分かりやすく設計しています。複雑な設定も自動で行われるため、すぐに使い始められます。",
  },
  {
    q: "どのようなタイマーが選べますか？",
    a: "あなたの体力レベルに合わせたインターバル設定（早歩きとゆっくり歩きの時間配分）を提案します。もちろん、ご自身で自由にカスタマイズすることも可能です。",
  },
  {
    q: "運動経験がなくても大丈夫ですか？",
    a: "もちろんです。このアプリは運動習慣がない方にこそ使っていただきたい設計になっています。「イージーモード」から無理なく始めていただけます。",
  },
  {
    q: "年配の方でも使いやすいですか？",
    a: "はい。視認性の高い配色と大きな文字を採用しています。実際に60代〜70代の方にもテストしていただき、使いやすさを追求しました。",
  },
  {
    q: "インターバル速歩とは何ですか？",
    a: "「早歩き」と「ゆっくり歩き」を数分ごとに交互に行うウォーキング法です。普通のウォーキングよりも筋力向上や持久力アップの効果が高いとされています。",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-bold text-brand-text-main pr-8">
          {question}
        </span>
        <div
          className={`p-2 rounded-full bg-gray-100 transition-colors ${
            isOpen ? "bg-brand-bg-start" : ""
          }`}
        >
          {isOpen ? (
            <ChevronUp className="text-brand-primary-dark" size={20} />
          ) : (
            <ChevronDown className="text-gray-500" size={20} />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100 pb-6" : "max-h-0 opacity-0"
        }`}
      >
        <p className="text-brand-text-sub leading-relaxed pl-4 border-l-4 border-brand-primary-light">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <h2 className="text-2xl md:text-4xl font-bold text-brand-text-main text-center mb-16">
            よくある質問
          </h2>
        </FadeIn>

        <div className="bg-white rounded-2xl">
          {faqs.map((faq, index) => (
            <FadeIn key={index} delay={index * 50}>
              <FAQItem question={faq.q} answer={faq.a} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
