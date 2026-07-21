import { GeistSans } from "geist/font/sans";
import { Cormorant} from "next/font/google"
import "../globals.css";
import { cn } from "@/lib/utils";

const cormorantFont = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant'
})

export default function ResumeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className={cn("font-geist-sans container", GeistSans.className, cormorantFont.variable)}>
      {children}
    </section>
  );
}
