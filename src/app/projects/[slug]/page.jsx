import { notFound } from "next/navigation";
import Image from "next/image";
import IconOutup from "@/icons/IconOutup";
import IconGitHub from "@/icons/IconGitHub";
import { technologyIcons } from "@/lib/technologyIcons";
import projectsData from "../AllProjects.data";

// 🚀 **Generar rutas estáticas en tiempo de build**
export const generateStaticParams = async () =>
  projectsData.map((project) => ({ slug: project.slug }));
  
  const ProjectDetail = async ({ params }) => {
    const { slug } = await params
    const project = projectsData.find((p) => p.slug === slug)
  
    if (!project) return notFound()
  
      return (
        <div className="relative px-4 my-20 md:my-28 max-w-[1000px] mx-auto font-inter">
              <div className=" flex flex-row justify-between items-start">
                <div>
                  <h1 className=" text-xl sm:text-4xl text-zinc-100 font-bold mb-2">{project.title}</h1>
                  <p className=" text-sm sm:text-lg text-zinc-400">{project.project}</p>
                </div>
                <div className=" flex flex-row gap-2 sm:gap-4">
                  <a href={project.urlProject} target="_blank" className=" border border-green-500 p-2 rounded-xl flex  bg-gradient-to-br from-green-500/10 to-zinc-900 group cursor-pointer hover:border-green-400">
                    <IconOutup className=' size-6 sm:size-7 text-green-500 group-hover:text-green-400'/>
                  </a>
                  <a
                    href={project.source || "#"}
                    target={project.source ? "_blank" : undefined}
                    className={`border p-2 rounded-xl flex items-center bg-gradient-to-br from-green-500/10 to-zinc-900 group cursor-$                 {project.source ? "pointer" : "not-allowed"} 
                      ${project.source ? "border-green-500 hover:border-green-400" : "border-zinc-600 opacity-50"}`}
                  >
                    <IconGitHub className={`size-6 sm:size-7 ${project.source ? "text-green-500 group-hover:text-green-400" :                   "text-zinc-500"}`} />
                    {!project.source && (
                      <div className="absolute mt-10 opacity-0 group-hover:opacity-100 bg-zinc-800 text-white text-xs px-2 py-1 rounded-md                  transition-opacity">
                        Repositorio privado
                      </div>
                    )}
                  </a>
                </div>
              </div>
    
          <div className="mt-3 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
            {/* Columna Izquierda */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Image
                src={project.detailImage}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg my-4"
              />
            </div>
    
            {/* Columna Derecha */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left space-y-2">
              {project.descriptionTags.map((tag, index) => (
                <p key={index} className="text-zinc-300 text-left">{tag}</p>
              ))}
            </div>
          </div>
          <h3 className="text-xl text-zinc-100 font-semibold mt-4 sm:mt-8 mb-4">Tecnologías usadas:</h3>
              <div className="flex flex-wrap gap-2 ">
            {project.fullTecnologies.map((tech, index) => (
              <div 
                key={index} 
                className=" relative flex flex-row items-center justify-center gap-1 bg-gray-900 rounded-xl py-1.5 px-2 border border-white/20"
              >
                <img 
                  src={technologyIcons[tech]} 
                  alt={tech} 
                  className="w-6 h-6 object-contain" 
                />
                <span className=" text-zinc-200 text-nowrap">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      )
  };
  
  export default ProjectDetail;