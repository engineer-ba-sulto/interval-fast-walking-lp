import type { Metadata } from "next";
import ThankYouMessage from "@/components/feature/ThankYouMessage";

export const metadata: Metadata = {
  title: "Thanks",
};

export default function ThankYouPage() {
  return (
    <main className="flex flex-col items-center justify-center h-screen">
      <ThankYouMessage />
    </main>
  );
}
