import Image from "next/image";

const CardProjects = ({ image, title, description, tecnologies, link }) => {
  return (
    <div className="relative flex flex-col items-center w-[80vw] sm:w-[350px] lg:w-[470px] bg-zinc-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-green-700 ">
      {/* Imagen del proyecto */}
      <div className="relative w-full h-[300px] rounded-3xl overflow-hidden p-2">
        <Image 
          src={image} 
          alt={title} 
          width={500} 
          height={300} 
          className="object-cover w-full h-full rounded-3xl"
        />
      </div>

      {/* Contenido de la card */}
      <div className="  w-full p-2">
        <h1 className="font-bold text-2xl text-white font-inter">{title}</h1>
        <p className="text-base text-gray-400 mt-2">{description}</p>
        <p className="text-xs text-emerald-400 font-semibold mt-3">{tecnologies}</p>
      </div>

      {/* Botón de enlace
      <div href={link} className="mt-5 bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition-all duration-300">
        Ver Proyecto
      </div> */}
    </div>
  );
};

export default CardProjects;