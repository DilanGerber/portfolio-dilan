import React from 'react'
import IconGitHub from '../../icons/IconGitHub'
import IconLinkedin from '../../icons/IconLinkedin'

const Footer = () => {
    return (
      <footer className='transition-all duration-300 mx-auto relative py-6 mask-gradient w-full md:w-[750px] lg:w-[1010px] xl:w-[1150px] bg-green-800/40 group flex flex-col lg:flex-row justify-around items-center font-inter '>
          <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-green-500/30 to-transparent blur-xl transition-all duration-500 ease-in-out group-hover:h-full pointer-events-none"></div>
          <div className='relative z-10 flex flex-col sm:flex-col md:flex-row gap-2 text-center md:text-left'>
            <p className="text-sm sm:text-base font-semibold">
                Dilan Gerber Fernandez
            </p>
            <p className="text-sm sm:text-base">
              © {new Date().getFullYear()} Todos los derechos reservados.
            </p>
          </div>
          <div className='relative z-10 flex flex-row gap-4 mt-4 lg:mt-0'>
              <a href="https://github.com/dilangerber" aria-label="GitHub de Dilan Gerber" target="_blank" className='relative transition-transform duration-300 hover:scale-105'>
                  <IconGitHub className=' size-6 sm:size-7' />
              </a>
              <a href="https://www.linkedin.com/in/dilangerber" aria-label="LinkedIn de Dilan Gerber" target="_blank" className='relative transition-transform duration-300 hover:scale-105'>
                  <IconLinkedin className=' size-6 sm:size-7' />
              </a>
          </div>
      </footer>
    )
  }

export default Footer