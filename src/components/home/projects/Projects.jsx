import { PinContainer } from '@/components/ui/3d-pin'
import CardProjects from '@/components/ui/CardProjects'
import React from 'react'

const projectData = [
  {
    id: 1,
    title: "Cowork Victoria",
    description: "Plataforma web desarrollada a medida con sistema de reservas por calendario,  autenticación con JWT, pagos virtuales, dashboard y API REST para datos dinámicos.",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: [
      // "JavaScript",
      "React",
      "Next.js",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS"
    ],
    link: "/",
    urlProject: "https://coworkvictoria.com/"
  },
  {
    id: 2,
    title: "Vida Verde",
    description: "Web para un emprendimiento ecológico en Bolivia, enfocado en reforestación y productos biodegradables. Diseñé la UI/UX, animaciones y sliders personalizados.",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: [
      // "JavaScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Framer Motion"
    ],
    link: "/",
    urlProject: "https://coworkvictoria.com/"
  },
  {
    id: 3,
    title: "Room",
    description: "Página web inmobiliaria desarrollada en equipo, con API REST para reseñas, usuarios y departamentos. Incluye autenticación, pagos, filtros y un dashboard para administración.",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: [
      // "JavaScript",
      "React",
      "Firebase",
      "Node.js",
      "Express",
      "MongoDB",
      "Tailwind CSS"
    ],
    link: "/",
    urlProject: "https://coworkvictoria.com/"
  },
  {
    id: 4,
    title: "Mi Otro Proyecto",
    description: "Sistema de Reservas con pasarela de pagos, metodos de verificación de disponibilidad de fechas y horarios, autentificación de usuarios, dashboard para administración.",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: [
      "Python"
    ],
    link: "/",
    urlProject: "https://coworkvictoria.com/"
  },
];

const Projects = () => {
  return (
    <section className='relative px-4 mt-10 max-w-[1000px] mx-auto'>
      <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 dark:text-gray-900 text-center mb-10">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] gap-x-8 gap-y-16 lg:gap-y-10 ">
        {projectData.map(({ id, title, description, image, tecnologies, link }) => (
          <PinContainer key={id} title={title} href={link} className="w-full h-full">
            <CardProjects 
              title={title} 
              image={image} 
              description={description} 
              tecnologies={tecnologies} 
              link={link} 
              className="w-full h-full"
            />
          </PinContainer>
        ))}
      </div>
    </section>
  );
};

export default Projects;