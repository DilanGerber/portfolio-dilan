import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import IconOutup from "@/icons/IconOutup";
import IconGitHub from "@/icons/IconGitHub";
import { technologyIcons } from "@/lib/technologyIcons";

const projectsData = [
    {
      id: 1,
      title: "Cowork Victoria",
      slug: "cowork-victoria",
      description: "Plataforma web desarrollada a medida con sistema de reservas por calendario,  autenticación con JWT, pagos virtuales, dashboard y API REST para datos dinámicos.",
      image: "/assets/Dilan-Gerber-Image-5.webp",
      tecnologies: [
        // "JavaScript",
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
      ],
      link: "/",
      urlProject: "https://coworkvictoria.com/",
      source: "https://github.com/DilanGerber/cowork-victoria",
      project: "Sistema de Reservas y Gestión",
      fullTecnologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Auth.js",
        "JWT",
        "Nodemailer",
        "Cloudinary",
      ],
    },
    {
      id: 2,
      title: "Vida Verde",
      slug: "vida-verde",
      description: "Web para un emprendimiento ecológico en Bolivia, enfocado en reforestación y productos biodegradables. Diseñé la UI/UX, animaciones y sliders personalizados.",
      image: "/assets/asset.png",
      tecnologies: [
        // "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion"
      ],
      link: "/",
      urlProject: "https://vida-verde-bolivia.vercel.app/",
      source: "https://github.com/DilanGerber/vida-verde-bolivia",
      project: "Sistema de Reservas y Gestión",
      fullTecnologies: [
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion"
      ],
    },
    {
      id: 3,
      title: "Room",
      slug: "room",
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
      urlProject: "https://room-project-frontend.onrender.com/",
      source: "https://github.com/RoomProyect/room_proyect-backend",
      project: "Sistema de Reservas y Gestión",
      fullTecnologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Auth.js",
        "JWT",
        "Nodemailer",
        "Cloudinary",
      ],
    },
    {
      id: 4,
      title: "Mi Otro Proyecto",
      slug: "my-project",
      description: "Sistema de Reservas con pasarela de pagos, metodos de verificación de disponibilidad de fechas y horarios, autentificación de usuarios, dashboard para administración.",
      image: "/assets/Dilan-Gerber-image.webp",
      tecnologies: [
        "Python"
      ],
      link: "/",
      urlProject: "https://portfolio-dilan.vercel.app/",
      source: "https://github.com/DilanGerber/portfolio-dilan",
      project: "Sistema de Reservas y Gestión",
      fullTecnologies: [
        "React",
        "Next.js",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Auth.js",
        "JWT",
        "Nodemailer",
        "Cloudinary",
      ],
    },
];

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
                  <a href={project.urlProject} target="_blank" className=" border border-green-500 p-2 rounded-xl flex  bg-gradient-to-br from-green-500/5 to-zinc-900 group cursor-pointer hover:border-green-400">
                    <IconOutup className=' size-6 sm:size-7 text-green-500 group-hover:text-green-400'/>
                  </a>
                  <a href={project.source} target="_blank" className=" border border-green-500 p-2 rounded-xl flex  bg-gradient-to-br from-green-500/5 to-zinc-900 group cursor-pointer hover:border-green-400">
                    <IconGitHub className=' size-6 sm:size-7 text-green-500 group-hover:text-green-400'/>
                  </a>
                </div>
              </div>
    
          <div className="mt-3 sm:mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-8 items-center">
            {/* Columna Izquierda */}
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={450}
                className="rounded-lg my-4"
              />
            </div>
    
            {/* Columna Derecha */}
            <div className="flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
              <p className="text-zinc-300 text-left">{project.description} Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora distinctio nobis error ea iure deserunt earum libero fugit eius vitae corrupti ex praesentium blanditiis soluta iste molestias neque, vel facere? Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet provident voluptates eos et debitis quos, atque odio repellendus commodi harum accusamus iure at incidunt dignissimos fugiat soluta velit tenetur placeat. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est, labore, suscipit sequi sed hic quibusdam natus, nihil nesciunt voluptate rem laborum quas. Voluptatem veniam, atque saepe dolorum at recusandae explicabo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ex, omnis fugit tempora nemo minima exercitationem suscipit possimus consequatur</p>
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