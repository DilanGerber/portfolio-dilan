"use client";
import { useState, useEffect, useRef } from "react";
import IconClose from "@/icons/IconClose";
import IconMenu from "@/icons/IconMenu";

const Navbar = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("hero");
      if (heroSection) {
        const heroBottom = heroSection.offsetHeight;
        setIsAtTop(window.scrollY < heroBottom);
      }

      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (
          rect.top <= window.innerHeight * 0.4 &&
          rect.bottom >= window.innerHeight * 0.4
        ) {
          currentSection = section.id;
        }
      });
      setActiveSection(currentSection);
    };

    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleSmoothScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setTimeout(() => setActiveSection(id), 100);
    }
  };

  const sections = [
    { id: "experience", name: "Experiencia" },
    { id: "projects", name: "Proyectos" },
    { id: "skills", name: "Habilidades" },
    { id: "about-me", name: "Sobre Mí" },
  ];

  return (
    <nav
      className={`transition-all duration-300 z-50 px-6 py-4 w-full md:w-[750px] lg:w-[1010px] xl:w-[1150px] left-1/2 -translate-x-1/2 ${
        isAtTop
          ? "absolute top-0 bg-transparent text-white"
          : "fixed top-0 bg-zinc-400/30 backdrop-blur-lg rounded-b-xl shadow-md"
      }`}
    >
      <div className="flex justify-between items-center font-inter">
        <h1 className="text-2xl font-bold">DG</h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-4">
          {sections.map(({ id, name }) => (
            <li key={id}>
              <button
                onClick={() => handleSmoothScroll(id)}
                className={`relative px-3 py-1 text-lg transition-all duration-300 ${
                  activeSection === id
                    ? "text-green-500"
                    : "text-zinc-100 hover:text-green-400"
                }`}
              >
                {name}
                <span
                  className={`absolute left-1/2 -translate-x-1/2 bottom-0 h-[2px] w-[80%] transition-all duration-300 ${
                    activeSection === id
                      ? "bg-green-500 scale-x-100"
                      : "bg-zinc-100 scale-x-0"
                  }`}
                ></span>
              </button>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen((prev) => !prev)}
        >
          {isMenuOpen ? <IconClose className="size-8" /> : <IconMenu className="size-8" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`absolute w-[200px] top-14 right-3 rounded-xl bg-zinc-800 text-zinc-100 flex flex-col items-start py-2 md:hidden border border-green-500 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {sections.map(({ id, name }) => (
          <button
            key={id}
            onClick={() => handleSmoothScroll(id)}
            className={`relative w-full py-4 px-6 text-lg transition-all duration-300 ${
              activeSection === id ? "text-green-500" : "text-zinc-100 hover:text-green-400"
            }`}
          >
            {name}
            <span
              className={`absolute left-6 bottom-2 w-[80%] h-[2px] transition-all duration-300 ${
                activeSection === id ? "bg-green-500 scale-x-110" : "bg-zinc-100 scale-x-0"
              }`}
            ></span>
          </button>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
