import About from "@/components/global/about";
import { BottomTab } from "@/components/global/bottom-tab";
import SideMenu from "@/components/global/side-menu";
import Image from "next/image";

export default function Home() {
  return (
    <section className='w-full min-h-screen bg-slate-900 dark'>
      <div className='lg:px-24 mx-auto flex flex-col md:flex-row gap-4 w-full h-full lg:pt-24 lg:container text-foreground'>
        <SideMenu />
        <div className='w-full lg:w-1/2 container'>
          <About />
        </div>
      </div>
      <BottomTab />
    </section>
  );
}
