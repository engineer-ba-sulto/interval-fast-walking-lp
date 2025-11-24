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
      className={`fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-200 p-4 z-50 transition-transform duration-300 flex justify-center md:hidden ${
        isVisible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <LandingButton variant="primary" size="md" fullWidth className="shadow-lg">
        無料でダウンロード
      </LandingButton>
    </div>
  );
}

