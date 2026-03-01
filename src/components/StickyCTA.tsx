"use client";

import { useEffect, useState } from "react";
import LandingButton from "./ui/LandingButton";

export default function StickyCTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 w-full bg-white/80 backdrop-blur-xl border-t border-brand-primary-light/10 p-4 z-50 transition-all duration-500 flex justify-center md:hidden shadow-[0_-10px_40px_rgba(0,0,0,0.1)] ${
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      }`}
    >
      <LandingButton
        href="https://apps.apple.com/jp/app/id6755136927"
        variant="appstore"
        size="lg"
        className="w-full shadow-2xl bg-brand-primary hover:bg-brand-primary-dark"
      />
    </div>
  );
}
