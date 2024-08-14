import { GeistSans } from "geist/font/sans";
import "../globals.css";
import { cn } from "@/lib/utils";

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={cn("font-geist-sans container ", GeistSans.className)}>
      {children}
    </section>
  );
}
