import IconBriefcase from '@/icons/IconBriefcase'
import IconCV from '@/icons/IconCV'
import IconDownload from '@/icons/IconDownload'
import { technologyIcons } from '@/lib/technologyIcons';
import React from 'react'
import SkillsSlider from '../ui/SkillsSlider';

const mainTechnologies = ["Next.js", "Node.js", "Express", "MongoDB", "JavaScript", "Tailwind CSS"];

const softSkills = [
  "Colaboración",
  "Trabajo en Equipo",
  "Resolución de conflictos",
  "Pensamiento analítico",
  "Autodidacta",
  "Escucha activa",
  "Claridad al explicar ideas",
  "Evaluación de riesgos",
];

const Skills = () => {
  return (
    <section className=' relative px-4 mt-10 max-w-[1000px] mx-auto'>
      <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 text-center">Mis Habilidades</h2>

{/* <div className="relative p-10 rounded-2xl bg-[#15162c] overflow-hidden shadow-lg transition-all duration-500 group">
  <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-purple-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>

  <h2 className="relative text-white text-2xl font-bold">Hover Expand Gradient</h2>
  <ol className=' flex flex-col'>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
  </ol>
</div> */}

      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-10'>
        <div className="relative group w-full p-8 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 border border-green-800 hover:border-green-600 ">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-green-500/60 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
          <div className="relative z-10 text-white">
            <div className="flex items-center gap-3">
              <IconDownload className="text-green-400 w-7 h-7" />
              <h2 className=" text-2xl md:text-xl lg:text-2xl text-nowrap font-bold">Diseño UI/UX</h2>
            </div>
            <p className="text-gray-300 mt-2">
              Creación de interfaces modernas, accesibles y centradas en la experiencia de usuario. Principios de usabilidad como diseño responsive.
            </p>
          </div>
        </div>
        <div className="relative group w-full p-8 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 border border-green-800 hover:border-green-600 ">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-green-500/60 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
          <div className="relative z-10 text-white">
            <div className="flex items-center gap-3">
              <IconBriefcase className="text-green-400 w-7 h-7" />
              <h2 className=" text-2xl md:text-xl  lg:text-2xl font-bold">Web Performance</h2>
            </div>
            <p className="text-gray-300 mt-2">
              Mejora de rendimiento y accesibilidad. Optimización de imágenes, lazy loading, reducción de tiempos de carga y SEO técnico.
            </p>
          </div>
        </div>
        <div className="relative group w-full p-8 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 border border-green-800 hover:border-green-600 ">
          <div className="absolute inset-0 bg-gradient-to-r from-green-700/40 to-green-500/60 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
          <div className="relative z-10 text-white">
            <div className="flex items-center gap-3">
              <IconCV className="text-green-400 w-7 h-7" />
              <h2 className=" text-2xl md:text-xl lg:text-2xl font-bold">Seguridad</h2>
            </div>
            <p className="text-gray-300 mt-2">
              Implementación de autenticación segura con OAuth, JWT y Auth.js. Protección de datos y contra vulnerabilidades como CSRF y XSS.
            </p>
          </div>
        </div>
      </div>
      <div className=' grid grid-cols-1 md:grid-cols-2 gap-5 my-5'>
        <div className="relative p-10 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 group border border-green-800 hover:border-green-600">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>
            <h3 className=" relative text-lg lg:text-xl font-bold font-inter text-white text-center">Mi Stack Principal</h3>
            <div className="relative grid grid-cols-3 gap-x-5 gap-y-10 mt-8 ">
              {mainTechnologies.map((tech) => (
                <div key={tech} className="flex flex-col items-center">
                  <img
                    src={technologyIcons[tech]}
                    alt={tech}
                    title={tech} // Muestra el nombre en hover
                    className="w-12 h-12"
                  />
                </div>
              ))}
          </div>
        </div>
        <div className="relative py-10 px-2 lg:px-5 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 group border border-green-800 hover:border-green-600">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>
            <h3 className="relative text-lg lg:text-xl font-bold font-inter text-white text-center">Habilidades Blandas</h3>
            <div className="flex flex-wrap justify-start items-center gap-3 mt-8">
              {softSkills.map((skill, index) => (
                <span key={index} className="bg-green-700/20 relative text-gray-300 px-2 py-2 rounded-lg text-[0.6rem] sm:text-sm md:text-[0.8rem] lg:text-sm font-medium border border-green-500/50">
                  {skill}
                </span>
              ))}
            </div>
        </div>
      </div>
      <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center my-8">Experiencia en otras Tecnologias</h3>
      <div className="relative p-10 rounded-2xl bg-zinc-925 overflow-hidden shadow-lg transition-all duration-500 group my-8 border border-green-800 hover:border-green-600">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/40 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full"></div>
          <h3 className="text-lg lg:text-xl font-bold font-inter text-gray-200 text-center">Soft Skills</h3>
          <h2 className="relative text-white text-2xl font-bold">Hover Expand Gradient</h2>
            <ol className=' flex flex-col'>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
    <li>ABUB66555</li>
  </ol>
        </div>
        <SkillsSlider />
    </section>
  )
}

export default Skills

// Redux, Prisma, PostgreSQL, Firebase, Docker, Vercel, Railway, Postman, Figma, Framer Motion, Git, Python, TypeScipt, OAuth, JWT, MySQL, React, Nodemailer, Resend, Auth.js, ShadCN