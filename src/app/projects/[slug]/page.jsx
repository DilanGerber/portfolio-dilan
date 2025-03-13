import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const projects = [
    {
      id: 1,
      title: "Cowork Victoria",
      slug: "cowork-victoria",
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
      slug: "vida-verde",
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
      urlProject: "https://vida-verde-bolivia.vercel.app/"
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
      urlProject: "https://coworkvictoria.com/"
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
      urlProject: "https://coworkvictoria.com/"
    },
];

// 🚀 **Generar rutas estáticas en tiempo de build**
export async function generateStaticParams() {
    return projects.map((project) => ({
      slug: project.slug,
    }));
  }
  
  // 🌟 **Página dinámica de cada proyecto**
  export default function ProjectDetail({ params }) {
    const project = projects.find((p) => p.slug === params.slug);
  
    if (!project) return notFound(); // Muestra 404 si no se encuentra el proyecto
  
    return (
      <div className="max-w-4xl mx-auto p-6">
        <Link href="/projects" className="text-blue-500">← Volver</Link>
        <h1 className="text-3xl font-bold mt-4">{project.title}</h1>
        <Image src={project.image} alt={project.title} width={800} height={450} className="rounded-lg my-4" />
        <p className="text-gray-700">{project.description}</p>
  
        <h3 className="text-xl font-semibold mt-4">Tecnologías usadas:</h3>
        <ul className="flex flex-wrap gap-2 mt-2">
          {project.tecnologies.map((tech) => (
            <li key={tech} className="bg-gray-200 px-3 py-1 rounded-lg">{tech}</li>
          ))}
        </ul>
  
        {project.urlProject && (
          <a
            href={project.urlProject}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg"
          >
            Ver Proyecto
          </a>
        )}
      </div>
    );
  }