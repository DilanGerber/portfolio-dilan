const projectsData = [
    {
      id: 1,
      title: "Cowork Victoria",
      slug: "cowork-victoria",
      description: "Plataforma web desarrollada a medida con sistema de reservas por calendario,  autenticación con JWT, pagos virtuales, dashboard y API REST para datos dinámicos.",
      image: "/assets/CardProject-1.webp",
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
        "Creé un sistema automatizado de reservas que sustituyó procesos manuales, ofreciendo una solución profesional y escalable. Usé Next.js como framework principal y diseñé una interfaz moderna e intuitiva con Tailwind.",
        "En el backend, desarrollé una API con Node.js y Express para gestionar reservas, autenticación, pagos y administración de oficinas, utilizando MongoDB como base de datos. La autenticación se realizó con Auth.js, permitiendo el registro e inicio de sesión mediante Google, Facebook (OAuth2) y credenciales propias. Los usuarios reciben un token JWT para asignar roles y gestionar permisos de forma segura.",
        "El dashboard para administradores permite crear, modificar o eliminar oficinas (Cloudinary para imágenes), bloquear fechas, enviar correos automatizados o personalizados (NodeMailer) y visualizar métricas de uso."
      ],
      detailImage: '/assets/ProjectsDetail-1.webp'
    },
    {
      id: 2,
      title: "Vida Verde",
      slug: "vida-verde",
      description: "Web para un emprendimiento ecológico en Bolivia, enfocado en reforestación y productos biodegradables. Diseñé la UI/UX, animaciones y sliders personalizados.",
      image: "/assets/CardProject-2.webp",
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
        "Desarrollé una plataforma web para Vide Verde Bolivia, un emprendimiento de productos biodegradables. Usé Next.js para la estructura, Tailwind CSS para diseñar una UI moderna y responsiva, y Framer Motion para animaciones dinámicas. La web, enfocada en conciencia ambiental, muestra productos y redirige a WhatsApp para compras.",
        "Creé sliders personalizados y componentes reutilizables para presentar información e imágenes de manera interactiva. Optimicé el rendimiento, mejorando la carga de imágenes y videos. Diseñé propuestas de UI/UX en Figma, adaptándome a las necesidades del cliente.",
        "Diseñé propuestas de UI/UX en Figma, presentándolas al cliente y adaptándome a sus necesidades. Este proyecto, aunque sencillo, demostró mi capacidad para crear soluciones web enfocadas en la usabilidad y el rendimiento."
      ],
      detailImage: '/assets/ProjectsDetail-2.webp'
    },
    {
      id: 3,
      title: "Room",
      slug: "room",
      description: "Página web inmobiliaria desarrollada en equipo, con API REST para reseñas, usuarios y departamentos. Incluye autenticación, pagos, filtros y un dashboard para administración.",
      image: "/assets/CardProject-3.webp",
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
      ],
      detailImage: '/assets/ProjectsDetail-3.webp'
    },
    {
      id: 4,
      title: "Mi Portafolio",
      slug: "my-portfolio",
      description: "Sistema de Reservas con pasarela de pagos, metodos de verificación de disponibilidad de fechas y horarios, autentificación de usuarios, dashboard para administración.",
      image: "/assets/CardProject-4.webp",
      tecnologies: [
        "Next.js",
        "Tailwind CSS",
        "Framer Motion"
      ],
      link: "/projects/my-portfolio",
      urlProject: "https://portfolio-dilan.vercel.app/",
      source: "https://github.com/DilanGerber/portfolio-dilan",
      project: "Sistema de Reservas y Gestión",
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
      ],
      detailImage: '/assets/ProjectsDetail-4.webp'
    },
];

export default projectsData