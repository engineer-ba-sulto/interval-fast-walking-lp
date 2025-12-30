"use client";

import { Minus, Plus } from "lucide-react";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import { faqs } from "@/constants/faqs";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`mb-6 rounded-4xl border transition-all duration-500 overflow-hidden ${isOpen ? "bg-brand-bg-start/30 border-brand-primary-light/20 shadow-lg shadow-emerald-900/5" : "bg-white border-slate-100 hover:border-brand-primary-light/30"}`}
    >
      <button
        type="button"
        className="w-full px-8 py-8 flex justify-between items-center text-left focus:outline-none group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`text-lg md:text-xl font-black pr-8 transition-colors duration-300 ${isOpen ? "text-brand-primary" : "text-brand-text-main group-hover:text-brand-primary"}`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${
            isOpen
              ? "bg-brand-primary text-white rotate-180"
              : "bg-slate-50 text-slate-400 group-hover:bg-brand-bg-start group-hover:text-brand-primary"
          }`}
        >
          {isOpen ? (
            <Minus size={20} strokeWidth={3} />
          ) : (
            <Plus size={20} strokeWidth={3} />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-8 pb-8 pt-0">
          <div className="h-px w-full bg-brand-primary-light/10 mb-6"></div>
          <p className="text-brand-text-sub text-base md:text-lg leading-relaxed font-medium opacity-80">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-40 bg-white relative">
      {/* Texture Layer */}
      <div className="absolute inset-0 bg-noise opacity-[0.02] pointer-events-none mix-blend-overlay"></div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <span className="text-brand-primary font-bold tracking-widest text-sm uppercase mb-4 block">
              Questions
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-brand-text-main tracking-tight">
              よくあるご質問
            </h2>
          </div>
        </FadeIn>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.q} delay={index * 50}>
              <FAQItem question={faq.q} answer={faq.a} />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={400} className="mt-20 text-center">
          <p className="text-brand-text-sub font-medium mb-6">
            解決しない場合はお気軽にお問い合わせください
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 text-brand-primary font-bold hover:underline underline-offset-4 transition-all"
          >
            お問い合わせフォームへ
            <Plus size={16} />
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
