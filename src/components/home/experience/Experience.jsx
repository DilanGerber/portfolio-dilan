import React from 'react'
import Image from "next/image";
import IconBriefcase from '@/icons/IconBriefcase';
import experienceData from './Experience.data';

const Experience = () => {
  return (
    <section id="experience" className="relative px-4 mt-20 mb-20 max-w-[1000px] mx-auto">
      {/* Título */}
      <h2 className=" font-inter text-zinc-100 flex flex-row gap-2 justify-center items-center">
        <span className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Experiencia Laboral</span> 
        <IconBriefcase className=' size-8 sm:size-10 lg:size-12' />
      </h2>

      {/* Lista de experiencias */}
      <div className="relative border-l-4 border-slate-700 max-w-3xl mx-auto mt-8 sm:mt-12">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative mb-8 pl-6 sm:pl-8">
            {/* Punto decorativo */}
            <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-green-700 border-2 border-green-800 rounded-full left-[-8px] sm:left-[-10px] top-6"></div>

            {/* Contenedor de la experiencia */}
            <div className="relative border border-green-800 hover:border-green-600 group p-6 sm:p-10 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-lg overflow-hidden">
              {/* Fondo animado */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-green-500/50 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>

                {/* Fecha */}
                <p className=" absolute top-6 right-6 sm:top-10 sm:right-10 text-xs sm:text-sm bg-green-800 border-2 border-green-700 text-white px-2 py-1 rounded-full inline-block">
                  {exp.date}
                </p>
              {/* Contenido */}
              <div className="relative z-10">

                {/* Logo de la empresa */}
                <div className="relative w-12 h-12 sm:w-16 sm:h-16 mt-0 bg-green-50 rounded-xl">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    layout="fill"
                    objectFit="contain"
                    className="p-2"
                  />
                </div>

                {/* Nombre de la empresa y rol */}
                <h3 className="text-lg sm:text-xl font-semibold text-gray-400 mt-1">
                  {exp.company}
                </h3>
                <p className="text-xs sm:text-sm text-gray-400">
                  {exp.role} - {exp.location}
                </p>

                {/* Proyecto */}
                <p className="text-base sm:text-lg lg:text-xl font-medium mt-2 text-gray-200">
                  {exp.project}
                </p>

                {/* Lista de tareas */}
                <ul className="text-gray-300 list-disc list-inside mt-2 space-y-2.5 text-xs sm:text-sm lg:text-base">
                  {exp.tasks.map((task, i) => (
                    <li key={i}>{task}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience