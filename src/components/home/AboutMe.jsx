import IconLinkedin from '@/icons/IconLinkedin'
import IconMail from '@/icons/IconMail'
import Image from 'next/image'
import React from 'react'

const AboutMe = () => {
  return (
    <section id='about-me' className=' relative px-4 my-20 max-w-[1000px] mx-auto '>
        <h2 className="text-3xl lg:text-4xl font-bold font-inter text-green-700 text-center my-8">Sobre Mí</h2>
        <p className=" font-inter text-sm md:text-lg text-gray-300 mt-2">
            Tengo 21 años y me introduje al desarrollo web con "Argentina Programa", un curso que realicé junto a mi padrastro, y que luego complementé con un bootcamp. Allí adquirí habilidades como el trabajo en equipo, resolver y afrontar problemas de forma eficiente y la aplicación de buenas prácticas para escribir código limpio y mantenible. Sin embargo, la mayor parte de mi conocimiento y experiencia proviene de mi dedicación autodidacta, explorando nuevas tecnologías y construyendo proyectos por mi cuenta.
        </p>
        <p className=" font-inter text-sm md:text-lg text-gray-300 mt-2">
            Destaco mi disciplina y constancia para aprender de manera independiente, siempre buscando superarme y no conformarme con lo que ya domino. Disfruto especialmente trabajando en el backend, construyendo APIs REST robustas y escalables, aunque también tengo habilidad y gusto por crear interfaces modernas y funcionales, como se puede apreciar en mis proyectos.
        </p>
        <div className=' grid md:grid-cols-2 mt-8 gap-8'>
            <div className=' flex justify-center items-center'>
                <div className=' size-[300px] border-2 border-green-800 rounded-full overflow-hidden relative transition-all duration-300 group 
        before:absolute before:inset-0 before:rounded-full 
        before:transition-all before:duration-300 
        hover:before:bg-[radial-gradient(circle_at_center,_rgba(34,197,94,0.6)_25%,_transparent_60%)] 
        hover:border-green-500 hover:shadow-[0_0_30px_5px_rgba(34,197,94,0.5)]'>
                <Image 
                    src='/assets/Dilan-Gerber-Image-3.webp' 
                    alt='Dilan Gerber' 
                    width={300} 
                    height={300} 
                    className=' object-cover w-full h-full transition-all duration-300 group-hover:scale-105' 
                    priority={false} // No la carga de inmediato
                    loading="lazy"  // Asegura que el navegador la cargue en diferido
                    placeholder="blur" // Opcional: Pre-carga con un desenfoque (si la imagen está optimizada en `next.config.js`)
                    blurDataURL="/assets/Dilan-Gerber-Image-5-blur.webp" // Usa una versión ligera como placeholder
                />
                </div>
            </div>
            <div className=' flex justify-center items-center '>
                <div className="border border-green-800 w-full sm:w-[350px] rounded-xl flex justify-center items-center flex-col gap-5 p-10 bg-gradient-to-br from-green-500/10 to-zinc-900 hover:from-green-500/20 hover:border-green-700 " >
                    <a href='mailto:dilangerber@gmail.com' aria-label="Email de Dilan Gerber" target="_blank" className='flex justify-start items-center gap-3 transition-transform duration-300 hover:scale-105'>
                        <IconMail className='size-6 text-red-600' />
                        <span className='font-inter text-lg'>dilangerber@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/dilangerber" aria-label="LinkedIn de Dilan Gerber" target="_blank" className='flex justify-start items-center gap-3 transition-transform duration-300 hover:scale-105'>
                        <IconLinkedin className='size-6 text-blue-600' />
                        <span className='font-inter text-lg'>Dilan Gerber</span>
                    </a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default AboutMe