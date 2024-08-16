"use client";

import Link from "next/link";
import { useActiveSection } from "@/lib/use-active-section"; // You'll need to create this hook
import AnimatedBackground from "../ui/animated-background";
import { Button } from "../ui/button";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function SideMenu() {
  const sections = ["about", "skills", "projects", "contact"];
  const activeSection = useActiveSection(sections);

  return (
    <aside className='lg:sticky h-full lg:w-1/2'>
      <div className='min-h-screen lg:hidden'>
        <Card className='bg-transparent border-0 h-screen flex flex-col justify-center bg-[url(/assets/images/futuristic-dev.jpg)] bg-cover bg-center'>
          <CardHeader className='flex items-center justify-center relative pt-16 h-1/2 '>
            <Avatar className='absolute -bottom-[40px] w-24 h-24 border-2 border-emerald-500 z-50'>
              <AvatarImage src='https://github.com//cirejr.png' />
              <AvatarFallback>C Jr</AvatarFallback>
            </Avatar>
          </CardHeader>
          <CardContent className='pt-16 rounded-t-3xl h-1/2 bg-slate-900'>
            <div className='space-y-2 flex flex-col items-center h-full'>
              <Link
                href='/'
                className='text-xl font-extrabold tracking-tight text-white'
              >
                Cire Junior Ba
              </Link>
              <h3 className='text-base font-semibold tracking-tight text-[#6e64ff]'>
                Creative Developer
              </h3>
              <p className='leading-7 text-foreground'>
                I <span className='line-through'>build</span>
                <span className='font-semibold text-[#6e64ff]'>
                  {" "}
                  craft
                </span>{" "}
                ideas into beautiful apps
              </p>
              <Button variant='secondary' className='w-full'>
                Contact Me
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className='space-y-2 hidden lg:block'>
        <Link
          href='/'
          className='text-4xl font-extrabold tracking-tight text-white'
        >
          Cire Junior Ba
        </Link>
        <h3 className='text-xl font-semibold tracking-tight text-[#6e64ff]'>
          Creative Developer
        </h3>
        <p className='leading-7 text-foreground'>
          I <span className='line-through'>build</span>
          <span className='font-semibold text-lg text-[#6e64ff]'>
            {" "}
            craft
          </span>{" "}
          ideas into beautiful apps
        </p>
      </div>
      {/* <nav className='mt-16'>
        <ul className='text-lg space-y-4'>
          {sections.map((section) => (
            <li key={section}>
              <Link href={`#${section}`}>
                <span
                  className={`cursor-pointer transition-colors duration-200 ${
                    activeSection === section
                      ? "text-[#6e64ff]"
                      : "hover:text-[#6e64ff]"
                  }`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav> */}
      <div className='hidden lg:flex flex-col gap-2 max-w-fit mt-16 '>
        <AnimatedBackground
          defaultValue={sections[0]}
          //@ts-ignore
          onValueChange={activeSection as string}
          className='rounded-lg bg-slate-100 dark:bg-slate-800 '
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
          enableHover
        >
          {sections.map((tab, index) => (
            <Link
              href={`#${tab}`}
              key={index}
              data-id={index}
              className='hover:neumorphism px-2 py-0.5 text-slate-600 hover:pl-5 transition-colors duration-300 data-[checked=true]:text-blue-950 hover:text-slate-950 dark:text-slate-400 dark:hover:text-slate-50 capitalize text-lg'
            >
              {tab}
            </Link>
          ))}
        </AnimatedBackground>
      </div>
    </aside>
  );
}
