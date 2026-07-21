import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Cormorant} from "next/font/google"
import "./globals.css";
import { cn } from "@/lib/utils";
import SideMenu from "@/components/global/side-menu";


export const metadata: Metadata = {
  title: "Cire Jr",
  description: "My portfolio",
};

const cormorantFont = Cormorant({
  subsets: ['latin'],
  variable: '--font-cormorant'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={cn("font-geist-sans", GeistSans.className, cormorantFont.className)}>
        {children}
      </body>
    </html>
  );
}
