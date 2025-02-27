import { PinContainer } from '@/components/ui/3d-pin'
import CardProjects from '@/components/ui/CardProjects'
import React from 'react'

const projectData = [
  {
    id: 1,
    title: "NE Training",
    description: "Desarrollador Full Stack",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: "React, Node.js, MongoDB",
    link: "/"
  },
  {
    id: 2,
    title: "Mi Otro Proyecto",
    description: "Un proyecto increíble con muchas funcionalidades",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: "Next.js, Tailwind CSS, Firebase",
    link: "/"
  },
  {
    id: 3,
    title: "Mi Otro Proyecto",
    description: "Un proyecto increíble con muchas funcionalidades",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: "Next.js, Tailwind CSS, Firebase",
    link: "/"
  },
  {
    id: 4,
    title: "Mi Otro Proyecto",
    description: "Un proyecto increíble con muchas funcionalidades",
    image: "/assets/Dilan-Gerber-image.webp",
    tecnologies: "Next.js, Tailwind CSS, Firebase",
    link: "/"
  },
];

const Projects = () => {
  return (
    <section className='relative px-4 mt-10 max-w-[1000px] mx-auto'>
      <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 dark:text-gray-900 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[1000px] gap-x-8 gap-y-14 mt-8">
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