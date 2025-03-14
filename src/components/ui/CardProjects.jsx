import IconOutup from "@/icons/IconOutup";
import { technologyIcons } from "@/lib/technologyIcons";
import Image from "next/image";

const CardProjects = ({ image, title, description, tecnologies, link }) => {
  return (
    <div className="relative flex flex-col items-center w-[80vw] sm:w-[350px] lg:w-[470px] 
      bg-zinc-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 
      border-2 border-green-700 
      before:absolute before:-inset-44 before:rounded-[25px] before:border-[4px] before:border-transparent 
      before:bg-gradient-to-r before:from-green-400 before:via-transparent before:to-green-950 
      before:animate-border-spin before:pointer-events-none">
      
      <div className="relative w-full h-full bg-zinc-925 rounded-2xl z-10 p-2 sm:p-3">
      {/* Imagen del proyecto */}
      <div className="relative w-full h-[300px]  overflow-hidden ">
        <Image 
          src={image} 
          alt={title} 
          width={500} 
          height={300} 
          className="object-cover w-full h-full rounded-xl"
        />
      </div>

      {/* Contenido de la card */}
      <div className="w-full ">
        <h1 className="font-bold text-2xl text-white font-inter mt-2 md:mt-3">{title}</h1>
        <p className="text-base text-gray-400 mt-2">{description}</p>
        <div className=" flex justify-between items-center mt-3">
          {/* Mostrar las tecnologías como íconos */}
          <div className="flex ">
            {tecnologies.map((tech, index) => (
              <div 
                key={index} 
                className="flex items-center justify-center w-12 h-12 bg-gray-900 rounded-full p-1 border border-white/20"
                style={{ transform: `translateX(-${5 * index * 2}px)`}}
              >
                <img 
                  src={technologyIcons[tech]} 
                  alt={tech} 
                  className="w-6 h-6 object-contain" 
                />
              </div>
            ))}
          </div>

          <div className="absolute right-3 justify-center items-center border border-green-700 p-2 rounded-xl flex  bg-gradient-to-br from-green-500/5 to-zinc-900">
            <IconOutup className="size-7 text-green-700" />
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default CardProjects;