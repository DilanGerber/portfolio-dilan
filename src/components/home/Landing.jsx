import Image from 'next/image'
import React from 'react'
import IconGitHub from '../../icons/IconGitHub'
import IconLinkedin from '../../icons/IconLinkedin'
import IconLocation from '../../icons/IconLocation'
import IconMail from '../../icons/IconMail'
import IconCV from '@/icons/IconCV'

const Landing = () => {
  return (
    <section id="hero" className=' relative px-4 grid max-w-[1000px] mx-auto md:grid-cols-2 mb-20 md:mb-0 md:h-screen'>
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
                    className="p-2  border-2 border-green-700 rounded-full text-green-700 hover:bg-green-800 hover:text-white transition-colors"
                    aria-label="GitHub de Dilan Gerber"
                >
                    <IconGitHub className="size-6" />
                </a>
                <a 
                    href="https://linkedin.com/in/dilangerber" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="p-2  border-2 border-green-700 rounded-full text-green-700 hover:bg-green-800 hover:text-white transition-colors"
                    aria-label="LinkedIn de Dilan Gerber"
                >
                    <IconLinkedin className="size-6" />
                </a>
                <a 
                    href="https://linkedin.com/in/dilangerber" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="lg:py-2 lg:px-4 p-2 border-2 border-green-700 rounded-full text-green-700 hover:bg-green-800 hover:text-white transition-colors flex flex-row gap-3 whitespace-nowrap"
                    aria-label="LinkedIn de Dilan Gerber"
                >
                    <IconCV className="size-6" />
                    <span className="hidden lg:block">Descargar CV</span>
                </a>
                <a 
                    href="https://linkedin.com/in/dilangerber" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="py-2 px-4  border-2 border-green-700 rounded-full text-green-700 hover:bg-green-800 hover:text-white transition-colors flex flex-row gap-3 whitespace-nowrap"
                    aria-label="LinkedIn de Dilan Gerber"
                >
                    <IconMail className="size-6" /> Copiar Email
                </a>
            </div>
        </div>
        <div className=' relative flex justify-center md:justify-end items-center'>
            <Image
                src='/assets/Dilan-Gerber-image.webp' 
                alt='Dilan Gerber' 
                width={1080} 
                height={1080} 
                className=' object-contain size-[350px]' 
            />
        </div>
    </section>
  )
}

export default Landing