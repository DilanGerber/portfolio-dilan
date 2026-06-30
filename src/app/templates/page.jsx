import IconAbility from '@/icons/IconAbility'
import React from 'react'

const Templates = () => {
  return (
    <section className='relative px-4 max-w-[1000px] mx-auto mt-20 mb-24'>
        <h2 className=" font-inter text-zinc-100 flex flex-row gap-2 justify-center items-center mb-12">
            <span className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Elige un diseño y adáptalo a tu negocio</span> 
            <IconAbility className=' size-6 sm:size-8 lg:size-10' />
        </h2>
        <p className="text-lg font-light max-w-xl mx-auto mt-4">
          Cada template es un punto de partida. Personalízalo, añade las funcionalidades que necesites y deja que nosotros hagamos el resto.
        </p>
    </section>
  )
}

export default Templates
