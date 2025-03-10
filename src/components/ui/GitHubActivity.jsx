import IconGitHub from "@/icons/IconGitHub";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubActivity = () => {
    return (
        <div className="relative px-4 my-20 max-w-[1000px] mx-auto">
          <h2 className="text-lg lg:text-2xl font-bold font-inter mt-12 mb-4 flex flex-row gap-2 md:gap-4 items-center "> <IconGitHub className=' size-8 md:size-10' /> Actividad en GitHub</h2>
          <p className=" font-inter text-sm md:text-lg text-gray-300 mb-12">Cada cuadrado verde representa un día en el que he contribuido con código, resolviendo problemas y desarrollando soluciones. Esto refleja mi constancia y mi compromiso con el aprendizaje y la mejora continua.</p>
          
          <div className="github-calendar-wrapper">
            <div className="github-calendar-container">
              <GitHubCalendar 
                username="DilanGerber"
                colorScheme="dark"
                blockSize={14} 
                blockMargin={5} 
              />
            </div>
          </div>
        </div>
      );
  };
  
  export default GitHubActivity;