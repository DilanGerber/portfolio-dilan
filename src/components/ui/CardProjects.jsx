import Image from "next/image";

const CardProjects = ({ image, title, description, tecnologies, link }) => {
  return (
    <div className="relative flex flex-col items-center w-[80vw] sm:w-[350px] lg:w-[470px] 
      bg-zinc-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
      border-2 border-green-700 
      before:absolute before:-inset-44 md:before:-inset-32 before:rounded-[25px] before:border-[4px] before:border-transparent 
      before:bg-gradient-to-r before:from-green-300 before:via-transparent before:to-green-950 
      before:animate-border-spin before:pointer-events-none">
      
      <div className="relative w-full h-full bg-zinc-900 rounded-2xl z-10">
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
      <div className="w-full p-2">
        <h1 className="font-bold text-2xl text-white font-inter">{title}</h1>
        <p className="text-base text-gray-400 mt-2">{description}</p>
        <p className="text-xs text-emerald-400 font-semibold mt-3">{tecnologies}</p>
      </div>
      </div>
    </div>
  );
};

export default CardProjects;