import React from 'react'
const filaOneTechnologies = ["Git", "Python", "TypeScript", "Cloudinary", "JWT", "MySQL", "Framer Motion", "Nodemailer", "Auth.js"]
const filaTwoTechnologies = ["Redux", "Prisma", "PostgreSQL", "Firebase", "Docker", "ShadCN", "Postman", "Figma", "React"]
import { technologyIcons } from '@/lib/technologyIcons';

const SkillsSlider = () => {
  return (
    <div className="flex flex-col space-y-16 overflow-hidden mask-gradient">
    {/* Slider hacia la izquierda */}
    <div className="flex space-x-16 overflow-hidden group  ">
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused ">
        {filaOneTechnologies.map((tech) => (
          <div key={tech} className="relative flex items-center justify-center">
            <img
              src={technologyIcons[tech]}
              alt={tech}
              className="w-20 h-20 object-contain max-w-none flex-shrink-0 relative hover:z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center 
                  text-white text-sm font-semibold opacity-0 
                  transition-opacity duration-300 hover:opacity-100">
              <span className="bg-black bg-opacity-50 rounded-md px-2 py-1">
                {tech}
              </span>
            </div>
          </div>
        ))}
      </div>
  
      <div className="flex space-x-16 animate-loop-scroll group-hover:paused " aria-hidden="true">
        {filaOneTechnologies.map((tech) => (
          <div key={tech} className="relative flex items-center justify-center">
            <img
              src={technologyIcons[tech]}
              alt={tech}
              className="w-20 h-20 object-contain max-w-none flex-shrink-0 relative hover:z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center 
                  text-white text-sm font-semibold opacity-0 
                  transition-opacity duration-300 hover:opacity-100">
              <span className="bg-black bg-opacity-50 rounded-md px-2 py-1">
                {tech}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  
    {/* Slider hacia la derecha (inverso) */}
    <div className="flex space-x-16 overflow-hidden group">
      <div className="flex space-x-16 animate-loop-scroll-reverse group-hover:paused">
        {filaTwoTechnologies.map((tech) => (
          <div key={tech} className="relative flex items-center justify-center">
            <img
              src={technologyIcons[tech]}
              alt={tech}
              className="w-20 h-20 object-contain max-w-none flex-shrink-0 relative hover:z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center 
                  text-white text-sm font-semibold opacity-0 
                  transition-opacity duration-300 hover:opacity-100">
              <span className="bg-black bg-opacity-50 rounded-md px-2 py-1">
                {tech}
              </span>
            </div>
          </div>
        ))}
      </div>
  
      <div className="flex space-x-16 animate-loop-scroll-reverse group-hover:paused" aria-hidden="true">
        {filaTwoTechnologies.map((tech) => (
          <div key={tech} className="relative flex items-center justify-center">
            <img
              src={technologyIcons[tech]}
              alt={tech}
              className="w-20 h-20 object-contain max-w-none flex-shrink-0 relative hover:z-10"
            />
            <div className="absolute inset-0 flex items-center justify-center 
                  text-white text-sm font-semibold opacity-0 
                  transition-opacity duration-300 hover:opacity-100">
              <span className="bg-black bg-opacity-50 rounded-md px-2 py-1">
                {tech}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default SkillsSlider