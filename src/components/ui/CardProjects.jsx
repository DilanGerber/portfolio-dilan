import Image from "next/image";
import Link from "next/link";

const CardProjects = ({ image, title, description, tecnologies, link }) => {
  return (
    <div className="relative flex flex-col items-center w-[80vw] sm:w-[350px] lg:w-[470px] bg-zinc-900 rounded-2xl  shadow-lg hover:shadow-xl transition-all duration-300">
      {/* Imagen del proyecto */}
      <div className="relative w-full h-48 rounded-xl overflow-hidden">
        <Image src={image} alt={title} width={500} height={300} className="object-cover w-full h-full" />
      </div>

      {/* Contenido de la card */}
      <div className="mt-4 text-center">
        <h1 className="font-bold text-xl text-white">{title}</h1>
        <p className="text-sm text-gray-400 mt-2">{description}</p>
        <p className="text-xs text-emerald-400 font-semibold mt-2">{tecnologies}</p>
      </div>

      {/* Botón de enlace */}
      <div href={link} className="mt-4 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg transition-all duration-300">
        Ver Proyecto
      </div>
    </div>
  );
};

export default CardProjects;