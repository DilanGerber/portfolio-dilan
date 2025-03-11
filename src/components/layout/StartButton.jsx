"use client"

import { useEffect, useState } from "react";
import IconOutup from "@/icons/IconOutup";
import IconArrowTop from "@/icons/IconArrowTop";

const StartButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      const heroHeight = heroSection ? heroSection.offsetHeight : 0;
      const scrollY = window.scrollY;

      // Mostrar el botón solo si pasamos la sección "Hero"
      setIsVisible(scrollY > heroHeight);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      onClick={scrollToTop}
      className={`fixed z-50 right-5 bottom-5 flex justify-center items-center p-[2px] rounded-xl cursor-pointer transition-all duration-300 group
        ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        before:absolute before:inset-0 before:rounded-xl 
        before:bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.4)_10%,_transparent_50%)]
        before:transition-all before:duration-300
        hover:before:bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.6)_20%,_transparent_60%)]
        hover:shadow-[0_0_15px_3px_rgba(34,197,94,0.5)]
      `}
    >
      <div className="relative z-10 flex justify-center items-center w-12 h-12 rounded-xl bg-[#111917] border border-green-500 transition-all duration-300">
        <IconArrowTop className="size-7 text-green-700 transition-all duration-300 group-hover:text-green-500 group-hover:scale-110" />
      </div>
    </div>
  );
};

export default StartButton