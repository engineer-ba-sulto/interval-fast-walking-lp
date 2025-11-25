"use client";

import { cn } from "@/lib/utils";
import { Download } from "lucide-react";

interface LandingButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "appstore";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  href?: string;
}

export default function LandingButton({
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
  href,
  ...props
}: LandingButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center rounded-full font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 focus:outline-none shadow-lg";

  const variants = {
    primary: "bg-btn-gradient text-white hover:shadow-xl",
    secondary:
      "bg-white text-[#558B2F] border border-[#558B2F] hover:bg-gray-50",
    outline:
      "bg-transparent border-2 border-white text-white hover:bg-white/10",
    appstore: "bg-black text-white hover:bg-gray-900",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const widthClass = fullWidth ? "w-full" : "";

  if (variant === "appstore") {
    const buttonContent = (
      <>
        <Download size={20} />
        <div className="flex flex-col items-start leading-none">
          <span className="text-[10px] font-medium">App Storeで</span>
          <span className="text-sm font-bold">ダウンロード</span>
        </div>
      </>
    );

    const commonProps = {
      className: cn(
        baseStyles,
        variants.appstore,
        sizes[size],
        widthClass,
        className,
        "flex-row gap-2"
      ),
    };

    // hrefが指定されている場合は<a>タグ、そうでない場合は<button>タグ
    if (href) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...commonProps}
        >
          {buttonContent}
        </a>
      );
    }

    return (
      <button {...commonProps} {...props}>
        {buttonContent}
      </button>
    );
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        widthClass,
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
