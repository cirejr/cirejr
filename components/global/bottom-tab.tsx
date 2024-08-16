import {
  Home,
  PhoneCall,
  Settings,
  User,
  CodeXml,
  FileStack,
} from "lucide-react";
import AnimatedBackground from "@/components/ui/animated-background";

export function BottomTab() {
  const TABS = [
    {
      label: "About",
      icon: <User className='h-5 w-5' />,
    },
    {
      label: "Home",
      icon: <CodeXml className='h-5 w-5' />,
    },
    {
      label: "Projects",
      icon: <FileStack className='h-5 w-5' />,
    },
    {
      label: "Contact",
      icon: <PhoneCall className='h-5 w-5' />,
    },
  ];

  return (
    <div className='fixed z-50 bottom-[20px] left-0 w-full lg:hidden container'>
      <div className='flex justify-evenly w-full space-x-2 rounded-xl border border-zinc-950/10 backdrop-blur-md bg-transparent p-2'>
        <AnimatedBackground
          defaultValue={TABS[0].label}
          className='rounded-lg bg-slate-400'
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.3,
          }}
        >
          {TABS.map((tab) => (
            <button
              key={tab.label}
              data-id={tab.label}
              type='button'
              className='inline-flex h-9 w-9 items-center justify-center text-zinc-500 transition-colors duration-100 focus-visible:outline-2 data-[checked=true]:text-zinc-950'
            >
              {tab.icon}
            </button>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
}
