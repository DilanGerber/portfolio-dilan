import { PinContainer } from '@/components/ui/3d-pin'
import CardProjects from '@/components/ui/CardProjects'
import React from 'react'

const projectData = [
  {
    id: 1,
    title: "NE Training",
    description: "Desarrollador Full Stack",
    image: "Presencial - Mendoza, Argentina",
    tecnologies: "JULIO 2022",
  },
  {
    id: 2,
    title: "NE Training",
    description: "Desarrollador Full Stack",
    image: "Presencial - Mendoza, Argentina",
    tecnologies: "JULIO 2022",
  },
]

const Projects = () => {
  return (
    <section className=' relative px-4 mt-10 max-w-[1000px] mx-auto'>
        <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 dark:text-gray-900 text-center">Proyectos</h2>
        <div className=' flex flex-wrap justify-center items-center p-4 gap-16 mt-10'>
          {projectData.map(({
            id, title, description, image, tecnologies
          }) => (
            <div key={id} className=' lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]'>
              <PinContainer >
                {title}
              </PinContainer>
            </div>
          ))}
        </div>
    </section>
  )
}

export default Projects