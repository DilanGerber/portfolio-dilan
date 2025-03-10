"use client"
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
      className={`fixed top-0 left-0 w-full transition-all duration-300 z-50 ${
        isAtTop
          ? "absolute bg-transparent text-white" // En la sección Hero
          : "sticky bg-slate-400 bg-opacity-95 shadow-md text-black" // En otras secciones
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-4 py-4 flex justify-between items-center font-inter ">
        <h1 className="text-2xl font-bold">GD</h1>
        <ul className="flex gap-4">
          <li>Inicio</li>
          <li>Experiencia</li>
          <li>Proyectos</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;