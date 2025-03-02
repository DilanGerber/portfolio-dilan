import IconDownload from '@/icons/IconDownload'
import IconGitHub from '@/icons/IconGitHub';
import React from 'react'

const experienceData = [
    {
      id: 1,
      company: "NE Training",
      role: "Desarrollador Full Stack",
      location: "Presencial - Mendoza, Argentina",
      date: "JULIO 2022",
      project: "Plataforma de entrenamientos personalizados",
      tasks: [
        "Desarrollo y mantenimiento de plataforma (SaaS).",
        "Modelado y optimización de bases de datos.",
        "Desarrollo de backend escalable utilizando patrones de diseño.",
        "Desarrollo y optimización del frontend amigable y eficiente.",
        "Implementación de roles, queues, broadcasting, pusher, envío de emails.",
      ],
    },
    {
      id: 2,
      company: "TL300",
      role: "Desarrollador Full Stack",
      location: "Remoto - Montevideo, Uruguay",
      date: "JULIO 2022",
      project: "Empresa de transporte y logística",
      tasks: [
        "Desarrollo, mantenimiento y optimización de aplicaciones web.",
        "Desarrollo de frontend moderno implementando librerías UI.",
        "Mantenimiento de bases de datos y sistemas existentes (MySQL, PHP7, jQuery).",
      ],
    },
  ];
  

const Experience = () => {
  return (
    <section className=' relative px-4 mt-10 max-w-[1000px] mx-auto'>
        <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 text-center">Experiencia Laboral</h2>
        <div className="relative border-l-4 border-slate-700 max-w-3xl mx-auto mt-8">
        {experienceData.map((exp) => (
          <div key={exp.id} className="relative mb-8 pl-8">
            <div className="absolute w-4 h-4 bg-green-700 border-2 border-green-800 rounded-full left-[-10px] top-5"></div>
            <div className="relative border border-green-800 hover:border-green-600 group p-10 rounded-2xl bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 shadow-lg overflow-hidden">
  {/* Fondo animado */}
  <div className="absolute inset-0 bg-gradient-to-r from-green-700/20 to-green-500/50 blur-2xl opacity-40 transition-all duration-500 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-80"></div>
              <div className=' z-10'>
              <p className="text-sm bg-green-800 border-2 border-green-700 text-white px-3 py-1 rounded-full inline-block">
                {exp.date}
              </p>
              <IconGitHub className='size-10 mt-2' />
              <h3 className="text-xl font-semibold text-gray-400">{exp.company}</h3>
              <p className="text-sm text-gray-400">{exp.role} - {exp.location}</p>
              <p className="text-lg font-medium mt-2">{exp.project}</p>
              <ul className="text-gray-300 list-disc list-inside mt-2">
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
  )
}

export default Experience

// educacion puede ser:
{/* <div className="grid gap-6 max-w-4xl mx-auto">
{experienceData.map((exp) => (
  <div 
    key={exp.id} 
    className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all"
  >
    <h3 className="text-xl font-semibold text-green-500">{exp.role}</h3>
    <p className="text-gray-400">{exp.company} • {exp.date}</p>
    <p className="text-gray-300 mt-2">{exp.description}</p>
  </div>
))}
</div> */}