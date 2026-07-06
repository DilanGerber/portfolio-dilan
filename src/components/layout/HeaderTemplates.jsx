"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import IconClose from "@/icons/IconClose";
import IconMenu from "@/icons/IconMenu";
import IconHome from "@/icons/IconHome";
import IconLayer from "@/icons/IconLayer";
import Image from "next/image";
import icon0 from "@/app/icon0.svg";

const HeaderTemplates = () => {
  const [isAtTop, setIsAtTop] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const menuRef = useRef(null);
  const pathname = usePathname(); // Obtiene la ruta actual

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById("templates");
      if (heroSection) {
        setIsAtTop(window.scrollY < heroSection.offsetHeight);
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

  // Secciones para la vista de inicio
  const homeSections = [
    { id: "product", name: "Templates" },
    { id: "projects", name: "Funciones" },
    { id: "skills", name: "Cómo funciona" }
  ];

  // Menú reducido para otras páginas
  const otherSections = [
    { href: "/", name: "Inicio", icon: <IconHome className="size-6" /> },
    { href: "/projects", name: "Proyectos", icon: <IconLayer className="size-6" /> },
  ];

  return (
    <nav
      className={`transition-all duration-300 z-50 px-6 py-4 w-full md:w-[750px] lg:w-[1010px] xl:w-[1150px] left-1/2 -translate-x-1/2 ${
        isAtTop
          ? "absolute top-0 bg-transparent text-white"
          : "fixed top-0 bg-zinc-400/30 backdrop-blur-md rounded-b-xl shadow-md"
      }`}
    >
      <div className="flex justify-between items-center font-inter">
        <h1 className="text-2xl font-bold flex gap-2"> <Image src={icon0} alt="Dilan Gerber Logo" width={16} height={16} /> dilangerber</h1>
        {/* <div className=" absolute bottom-0.5 left-6 flex flex-row items-center text-xs"><span>Ultima vista desde: </span> <span className=" font-semibold">Argentina, Buenos Aires 🇦🇷</span></div> */}
        {/* Menú para Desktop */}
        <ul className="hidden md:flex gap-4">
          {pathname === "/templates" ? (
            homeSections.map(({ id, name }) => (
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
            ))
          ) : (
            otherSections.map(({ href, name, icon }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="flex items-center gap-2 px-3 py-1 text-lg text-zinc-100 hover:text-green-400 transition-all duration-300"
                >
                  {icon} {name}
                </Link>
              </li>
            ))
          )}
          <button
    className="
      group
      relative
      overflow-hidden

      rounded-xl

      px-3
      py-0.5

      font-semibold

      text-zinc-200

      border
      border-green-500

      bg-green-950/60

      backdrop-blur-xl

      transition-all
      duration-300

      hover:scale-[1.05]

      hover:border-green-500
      hover:text-white
      hover:shadow-[0_0_80px_rgba(34,197,94,.2)]
    "
  >
    {/* Barrido */}

    <div
      className="
        absolute
        inset-0

        bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.40)_50%,transparent_85%)]

        bg-[length:400%]

        bg-[position:100%]

        transition-all
        duration-700

        group-hover:bg-[position:0%]
      "
    />

    {/* Glow */}

    <div
      className="
        absolute
        inset-0

        blur-3xl

        opacity-40

        bg-[linear-gradient(120deg,transparent_20%,rgba(34,197,94,.18)_50%,transparent_80%)]

        bg-[length:350%]

        bg-[position:100%]

        transition-all
        duration-1000

        group-hover:bg-[position:0%]
      "
    />

    <span className="relative z-10">
      Software a medida
    </span>
  </button>
          
          <button className=" block border rounded-xl py-0.5 px-3">ES</button>
        </ul>

        {/* Icono de menú para móviles */}
        <button className="md:hidden" onClick={() => setIsMenuOpen((prev) => !prev)} aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"} aria-expanded={isMenuOpen}>
          {isMenuOpen ? <IconClose className="size-8" /> : <IconMenu className="size-8" />}
        </button>
      </div>

      {/* Menú móvil */}
      <div
        ref={menuRef}
        className={`absolute w-[200px] top-14 right-3 rounded-xl bg-zinc-800 text-zinc-100 flex flex-col items-start py-2 md:hidden border border-green-500 transition-all duration-500 ${
          isMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
        }`}
      >
        {pathname === "/templates" ? (
          homeSections.map(({ id, name }) => (
            <button
              key={id}
              onClick={() => {
                handleSmoothScroll(id);
                setIsMenuOpen(false);
              }}
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
          ))
        ) : (
          otherSections.map(({ href, name, icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-3 w-full py-4 px-6 text-lg text-zinc-100 hover:text-green-400 transition-all duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {icon} {name}
            </Link>
          ))
        )}
      </div>
    </nav>
  )
}

export default HeaderTemplates
