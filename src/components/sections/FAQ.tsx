"use client";

import FadeIn from "@/components/ui/FadeIn";
import { faqs } from "@/constants/faqs";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

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
