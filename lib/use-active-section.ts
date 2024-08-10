import { useState, useEffect } from "react";
import { useScroll, useSpring } from "framer-motion";

export function useActiveSection(sectionIds: string[], offset = 0) {
  const [activeSection, setActiveSection] = useState("");
  const { scrollY } = useScroll();
  const smoothScrollY = useSpring(scrollY, { stiffness: 100, damping: 30 });

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = smoothScrollY.get() + offset;

      const active = sectionIds.find((sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const { top, bottom } = element.getBoundingClientRect();
          return top <= scrollPosition && bottom > scrollPosition;
        }
        return false;
      });

      if (active) {
        setActiveSection(active);
      }
    };

    const unsubscribe = smoothScrollY.onChange(handleScroll);

    return () => {
      unsubscribe();
    };
  }, [sectionIds, offset, smoothScrollY]);

  return activeSection;
}
