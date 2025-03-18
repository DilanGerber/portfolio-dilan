import { PinContainer } from '@/components/ui/3d-pin'
import CardProjects from '@/components/ui/CardProjects'
import IconLayer from '@/icons/IconLayer';
import React from 'react'
import projectData from './Projects.data';

const Projects = () => {
  return (
    <section id='projects' className='relative px-4 max-w-[1000px] mx-auto mt-20 mb-24'>
      <h2 className=" font-inter text-zinc-100 flex flex-row gap-2 justify-center items-center mb-12">
        <span className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Proyectos</span> 
        <IconLayer className=' size-6 sm:size-8 lg:size-10' />
      </h2>
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