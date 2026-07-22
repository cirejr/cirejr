import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { Cormorant, Lavishly_Yours } from "next/font/google";
import "../globals.css";
import { cn } from "@/lib/utils";

const cormorantFont = Cormorant({
  subsets: ["latin"],
  variable: "--font-cormorant",
});

const lavishlyFont = Lavishly_Yours({
  subsets: ["latin"],
  variable: "--font-lavish",
  weight: "400",
});

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section
      className={cn(
        "font-geist-sans font-sans container",
        GeistSans.className,
        GeistMono.variable,
        cormorantFont.variable,
        lavishlyFont.variable,
      )}
    >
      {children}
    </section>
  );
}
