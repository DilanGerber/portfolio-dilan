import React from 'react'
import Image from "next/image";

const experienceData = [
{
  id: 1,
  company: "Cowork Victoria",
  role: "Desarrollador Full Stack",
  location: "Presencial y Remoto - La Paz, Bolivia",
  date: "AGOSTO 2024",
  project: "Sistema de Reservas y Gestión",
  tasks: [
    "Desarrollo de una plataforma web con Next.js para la gestión de reservas de espacios de trabajo, reemplazando procesos manuales por un sistema automatizado y profesional.",
    "Construcción de una API REST robusta y escalable con Node.js con Express y base de datos en MongoDB, para gestionar reservas, autenticación de usuarios (JWT y OAuth2), pagos y administración de oficinas.",
    "Creación de un dashboard administrativo con roles y funcionalidades avanzadas, como gestión de oficinas, bloqueo de fechas y envío de correos automatizados.",
    "Diseño de interfaces modernas e intuitivas (UI/UX) que mejoraron la experiencia del usuario y la imagen profesional de la empresa.",
    "Colaboración estrecha con el cliente para desarrollar software a medida, adaptándome a sus requerimientos y necesidades en tiempo real."
  ],
  image: "/assets/Logo-Cowork-Victoria.png",
},
{
  id: 2,
  company: "Vide Verde Bolivia",
  role: "Desarrollador Frontend Freelance",
  location: "Remoto - La Paz, Bolivia",
  date: "DICIEMBRE 2024", // Completa con las fechas
  project: "Plataforma Web de Conciencia Ecológica y Productos Biodegradables",
  tasks: [
    "Desarrollo de una plataforma web con Next.js, enfocada en promover la conciencia ambiental y mostrar productos biodegradables, con botones de redirección a WhatsApp para facilitar las compras.",
    "Diseño y desarrollo de una interfaz de usuario (UI) moderna y dinámica, utilizando Tailwind CSS y Framer Motion para animaciones y estilos responsivos.",
    "Creación de sliders y componentes personalizados para presentar información e imágenes de manera interactiva y atractiva.",
    "Optimización del rendimiento de la web, mejorando la carga de imágenes, videos y componentes para una experiencia de usuario rápida y fluida.",
    "Presentación de propuestas de diseño en Figma al cliente, demostrando habilidades en diseño de UI/UX y capacidad para adaptarse a sus necesidades."
  ],
  image: "/assets/Logo-Vida-Verde.png",
},
  ];
  

const Experience = () => {
  return (
    <section id="experience" className="relative px-4 mt-20 mb-20 max-w-[1000px] mx-auto">
      {/* Título */}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold font-inter text-zinc-100 text-center">
        Experiencia Laboral
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