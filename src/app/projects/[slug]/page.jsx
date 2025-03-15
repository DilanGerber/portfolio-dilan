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
      link: "/projects/cowork-victoria",
      urlProject: "https://coworkvictoria.com/",
      source: false,
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
      descriptionTags: [
        "Desarrollé una plataforma web moderna y optimizada para Vide Verde Bolivia, un emprendimiento dedicado a productos biodegradables y la promoción de la conciencia ambiental. Utilicé Next.js como framework principal, combinado con Tailwind CSS para diseñar una interfaz de usuario (UI) responsiva y visualmente atractiva. Implementé animaciones fluidas y dinámicas con Framer Motion, mejorando la experiencia del usuario y haciendo que la navegación fuera más interactiva.",
        "La web no es un e-commerce, sino un espacio informativo que muestra los productos y redirige a los usuarios a WhatsApp para realizar compras. Creé sliders personalizados y componentes reutilizables para presentar información e imágenes de manera ordenada y atractiva. Me enfoqué en optimizar el rendimiento, reduciendo los tiempos de carga mediante la optimización de imágenes, videos y componentes.",
        "Además, diseñé propuestas de UI/UX en Figma, presentándolas al cliente y adaptándome a sus necesidades. Este proyecto, aunque sencillo, demostró mi capacidad para crear soluciones web completas, desde el diseño hasta la implementación técnica, con un enfoque en la usabilidad y el rendimiento."
      ]
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
      link: "/projects/vida-verde",
      urlProject: "https://vida-verde-bolivia.vercel.app/",
      source: false,
      project: "Web de Conciencia Ecológica y Productos Biodegradables",
      fullTecnologies: [
        "JavaScript",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Framer Motion"
      ],
      descriptionTags: [
        "Creé un sistema automatizado de reservas que sustituyó procesos manuales, ofreciendo una solución profesional y escalable. Usé Next.js como framework principal y diseñé una interfaz moderna e intuitiva con Tailwind.",
        "En el backend, desarrollé una API con Node.js y Express para gestionar reservas, autenticación, pagos y administración de oficinas, utilizando MongoDB como base de datos. La autenticación se realizó con Auth.js, permitiendo el registro e inicio de sesión mediante Google, Facebook (OAuth2) y credenciales propias. Los usuarios reciben un token JWT para asignar roles y gestionar permisos de forma segura.",
        "El dashboard para administradores permite crear, modificar o eliminar oficinas (Cloudinary para imágenes), bloquear fechas, enviar correos automatizados o personalizados (NodeMailer) y visualizar métricas de uso."
      ]
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
      link: "/projects/room",
      urlProject: "https://room-project-frontend.onrender.com/",
      source: "https://github.com/RoomProyect/room_proyect-backend",
      project: "Plataforma de Venta de Apartamentos",
      fullTecnologies: [
        "JavaScript",
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Tailwind CSS",
        "Firebase",
        "Redux",
        "Cloudinary"
      ],
      descriptionTags: [
        "Desarrollé, en colaboración con un equipo de 7 personas, una aplicación web para la venta de departamentos. La plataforma permite a los usuarios explorar propiedades disponibles, crear cuentas (mediante registro manual o autenticación con Google), dejar comentarios y realizar compras de manera segura.",
        "Mi rol fue especialmente relevante en el backend, donde implementé la lógica de negocio y la integración de una pasarela de pagos con Stripe.",
        "La aplicación fue construida con tecnologías como ReactJS (frontend), Redux Toolkit para la gestión del estado, NodeJS y ExpressJS (backend), y MongoDB con Mongo Atlas para la base de datos y Firebase para la autentificación. Este proyecto me permitió desarrollar habilidades clave como trabajo en equipo, liderazgo y organización de tareas."
      ]
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
      link: "/projects/my-project",
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
      descriptionTags: [
        "Creé un sistema automatizado de reservas que sustituyó procesos manuales, ofreciendo una solución profesional y escalable. Usé Next.js como framework principal y diseñé una interfaz moderna e intuitiva con Tailwind.",
        "En el backend, desarrollé una API con Node.js y Express para gestionar reservas, autenticación, pagos y administración de oficinas, utilizando MongoDB como base de datos. La autenticación se realizó con Auth.js, permitiendo el registro e inicio de sesión mediante Google, Facebook (OAuth2) y credenciales propias. Los usuarios reciben un token JWT para asignar roles y gestionar permisos de forma segura.",
        "El dashboard para administradores permite crear, modificar o eliminar oficinas (Cloudinary para imágenes), bloquear fechas, enviar correos automatizados o personalizados (NodeMailer) y visualizar métricas de uso."
      ]
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
                src={project.image}
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