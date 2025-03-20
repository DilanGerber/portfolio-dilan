import Image from 'next/image'
import React from 'react'
import IconGitHub from '../../icons/IconGitHub'
import IconLinkedin from '../../icons/IconLinkedin'
import IconLocation from '../../icons/IconLocation'
import IconCV from '@/icons/IconCV'
import CopyMailButton from '../ui/CopyMailButton'

const Landing = () => {
  return (
    <section id="hero" className=' relative px-4 grid max-w-[1000px] mx-auto md:grid-cols-2 mb-20 mt-20 lg:mt-0 lg:mb-0 lg:h-screen'>
        <div className='flex flex-col justify-center '>
            <h1 className="text-3xl lg:text-4xl font-bold font-inter">¡Hola! Soy <span className=' text-green-700' aria-label="Dilan Gerber">Dilan Gerber</span>, Desarrollador Web</h1>
            <p className="text-lg font-light max-w-xl mx-auto mt-4">
                Full Stack Developer especializado en desarrollo <span className='whitespace-nowrap font-semibold'>back-end</span>, con experiencia en la creación de soluciones rápidas y escalables, creando sitios web optimizados y responsivos.
            </p>
            <div className='flex flex-row items-center gap-4 mt-4'>
                <IconLocation className="size-6" />
                <p>La Paz - Bolivia</p>
            </div>
            <div className="flex items-center gap-3 sm:gap-6 mt-4">
                <a 
                    href="https://github.com/dilangerber" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2  border-2 border-green-600 rounded-full text-green-600 hover:bg-green-800 hover:text-white transition-colors"
                    aria-label="GitHub de Dilan Gerber"
                >
                    <IconGitHub className="size-6" />
                </a>
                <a 
                    href="https://linkedin.com/in/dilangerber" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2  border-2 border-green-600 rounded-full text-green-600 hover:bg-green-800 hover:text-white transition-colors"
                    aria-label="LinkedIn de Dilan Gerber"
                >
                    <IconLinkedin className="size-6" />
                </a>
                <a 
                    href="/CV_Dilan_Gerber.pdf" // Ruta al archivo PDF en la carpeta pública
                    download="CV_Dilan_Gerber.pdf" // Nombre del archivo al descargar
                    className="lg:py-2 lg:px-4 p-2 border-2 border-green-600 rounded-full text-green-600 hover:bg-green-800 hover:text-white transition-colors flex flex-row gap-3 whitespace-nowrap"
                    aria-label="Descargar CV de Dilan Gerber"
                >
                    <IconCV className="size-6" />
                    <span className="hidden font-bold lg:block">Descargar CV</span>
                </a>
                <CopyMailButton /> 
            </div>
        </div>
        <div className="relative flex justify-center md:justify-end items-center mt-12 md:mt-0">
      <div
        className="size-[300px] md:size-[335px] border-2 border-green-600 rounded-full overflow-hidden 
        relative transition-all duration-300 group 
        before:absolute before:inset-0 before:rounded-full 
        before:transition-all before:duration-300 
        hover:before:bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.6)_25%,_transparent_60%)] 
        hover:border-green-500 hover:shadow-[0_0_30px_5px_rgba(34,197,94,0.5)]"
      >
        {/* <div className="absolute inset-0 bg-gray-300 animate-pulse"></div> */}
          <Image
            src="/assets/Dilan-Gerber-1.webp"
            alt="Dilan Gerber"
            width={331} // Tamaño real del contenedor
            height={331}
            quality={75}
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-all duration-300 group-hover:scale-105"
            // loading='eager'
            format="webp"
          />
      </div>
    </div>
    </section>
  )
}

export default Landing