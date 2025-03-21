"use client"

import IconGitHub from "@/icons/IconGitHub";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const GitHubCalendar = dynamic(() => import("react-github-calendar"), { ssr: false });

const GitHubActivity = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) setIsVisible(true);
      }, { threshold: 0.2 });

      const element = document.getElementById("github-calendar");
      if (element) observer.observe(element);

      return () => observer.disconnect();
  }, []);

  return (
      <div className="relative px-4 my-20 max-w-[1000px] mx-auto">
          <h2 className="text-lg lg:text-2xl font-bold font-inter mt-12 mb-4 flex flex-row gap-2 md:gap-4 items-center">
              <IconGitHub className="size-8 md:size-10" /> Actividad en GitHub
          </h2>
          <p className="font-inter text-sm md:text-lg text-gray-300 mb-12">
              Cada cuadrado verde representa un día en el que he contribuido con código, resolviendo problemas y desarrollando soluciones. Esto refleja mi constancia y mi compromiso con el aprendizaje y la mejora continua.
          </p>

          <div id="github-calendar" className="github-calendar-wrapper">
              <div className="github-calendar-container">
                  {isVisible ? <GitHubCalendar username="DilanGerber" colorScheme="dark" blockSize={14} blockMargin={5} /> : <p>Cargando...</p>}
              </div>
          </div>
      </div>
  );
};

export default GitHubActivity;