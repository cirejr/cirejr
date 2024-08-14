import About from "@/components/global/about";
import SideMenu from "@/components/global/side-menu";
import Image from "next/image";

export default function Home() {
  return (
    <section className='w-full min-h-screen bg-slate-900 dark'>
      <div className='lg:px-24 mx-auto flex flex-col md:flex-row gap-4 w-full h-full pt-24 container text-foreground'>
        <SideMenu />
        <div className='w-1/2'>
          <About />
        </div>
      </div>
    </section>
  );
}
