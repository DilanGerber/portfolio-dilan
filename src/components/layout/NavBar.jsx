"use client";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsAtTop(window.scrollY < heroBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`transition-all duration-300 z-50 px-6 py-4 md:w-[750px] lg:w-[1010px]  left-1/2 -translate-x-1/2 ${
        isAtTop
          ? "absolute top-0 bg-transparent text-white" // En Hero, sigue el flujo sin ocupar espacio
          : "fixed top-0 bg-zinc-400/30 backdrop-blur-lg rounded-b-xl shadow-md" // En otras secciones, se fija
      }`}
    >
      <div className="flex justify-between items-center font-inter">
        <h1 className="text-2xl font-bold">GD</h1>
        <ul className="flex gap-4">
          <li>Experiencia</li>
          <li>Proyectos</li>
          <li>Habilidades</li>
          <li>Sobre mí</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
