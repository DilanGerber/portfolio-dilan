import Image from 'next/image'
import React from 'react'
import IconDownload from '../icons/IconDownload'
import IconGitHub from '../icons/IconGitHub'
import IconLinkedin from '../icons/IconLinkedin'
import IconLocation from '../icons/IconLocation'
import IconMail from '../icons/IconMail'

const Landing = () => {
  return (
    <section className=' relative px-4 grid max-w-[1000px] mx-auto md:grid-cols-2'>
        <div className='flex flex-col justify-center'>
            <h1 className="text-4xl font-bold">¡Hola! Soy <span className=' text-green-700' aria-label="Dilan Gerber">Dilan Gerber</span>, Desarrollador Web</h1>
            <p className="text-lg font-light max-w-xl mx-auto mt-4">
                Full Stack Developer especializado en desarrollo back-end, con experiencia en la creación de soluciones rápidas y escalables, creando sitios web optimizados y responsivos.
            </p>
            <div className='flex flex-row items-center gap-4 mt-4'>
                <IconLocation className="size-6" />
                <p>La Paz - Bolivia</p>
            </div>
            <div className="flex items-center gap-6 mt-4">
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
                    className="py-2 px-4  border-2 border-green-700 rounded-full text-green-700 hover:bg-green-800 hover:text-white transition-colors flex flex-row gap-3"
                    aria-label="LinkedIn de Dilan Gerber"
                >
                    <IconDownload className="size-6" /> Descargar CV
                </a>
                <a 
                    href="https://linkedin.com/in/dilangerber" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="py-2 px-4  border-2 border-green-700 rounded-full text-green-700 hover:bg-green-800 hover:text-white transition-colors flex flex-row gap-3"
                    aria-label="LinkedIn de Dilan Gerber"
                >
                    <IconMail className="size-6" /> Copiar Mail
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