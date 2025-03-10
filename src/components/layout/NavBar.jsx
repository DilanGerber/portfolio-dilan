"use client";
import IconClose from "@/icons/IconClose";
import IconMenu from "@/icons/IconMenu";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isAtTop, setIsAtTop] = useState(true);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
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
        className={`transition-all duration-300 z-50 px-6 py-4 w-full md:w-[750px] lg:w-[1010px] xl:w-[1150px] left-1/2 -translate-x-1/2 ${
          isAtTop
            ? "absolute top-0 bg-transparent text-white"
            : "fixed top-0 bg-zinc-400/30 backdrop-blur-lg rounded-b-xl shadow-md"
        }`}
      >
        <div className="flex justify-between items-center font-inter">
          <h1 className="text-2xl font-bold">GD</h1>
  
          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4">
            <li>Experiencia</li>
            <li>Proyectos</li>
            <li>Habilidades</li>
            <li>Sobre mí</li>
          </ul>
  
          {/* Mobile Menu Icon */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <IconClose className=' size-8' /> : <IconMenu className=' size-8' />}
          </button>
        </div>
  
        {/* Mobile Menu (solo visible si isMenuOpen es true) */}
        {isMenuOpen && (
          <div className="absolute w-[200px] top-14 border border-green-500 right-3 rounded-xl bg-zinc-800 text-zinc-100 flex flex-col items-start py-2 md:hidden">
            <a className=" py-4 px-6 text-lg" href="#experiencia" onClick={() => setIsMenuOpen(false)}>Experiencia</a>
            <a className=" py-4 px-6 text-lg" href="#proyectos" onClick={() => setIsMenuOpen(false)}>Proyectos</a>
            <a className=" py-4 px-6 text-lg" href="#habilidades" onClick={() => setIsMenuOpen(false)}>Habilidades</a>
            <a className=" py-4 px-6 text-lg" href="#sobremi" onClick={() => setIsMenuOpen(false)}>Sobre mí</a>
          </div>
        )}
      </nav>
    );
  };
  
  export default Navbar;