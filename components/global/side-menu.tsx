"use client";

import Link from "next/link";
import { useActiveSection } from "@/lib/use-active-section"; // You'll need to create this hook

export default function SideMenu() {
  const sections = ["about", "skills", "projects", "contact"];
  const activeSection = useActiveSection(sections);

  return (
    <aside className='lg:sticky h-full lg:w-1/2'>
      <div className='space-y-2'>
        <h1 className='text-4xl font-extrabold tracking-tight '>
          Cire Junior Ba
        </h1>
        <h3 className='text-xl font-semibold tracking-tight text-[#6e64ff]'>
          Creative Developer
        </h3>
        <p className='leading-7'>
          I <span className='line-through'>build</span>
          <span className='font-semibold text-lg text-[#6e64ff]'>
            {" "}
            craft
          </span>{" "}
          ideas into beautiful apps
        </p>
      </div>
      <nav className='mt-16'>
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
      </nav>
    </aside>
  );
}
