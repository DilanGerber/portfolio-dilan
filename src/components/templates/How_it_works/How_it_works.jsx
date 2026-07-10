import IconEnergy from '@/icons/IconEnergy'
import React from 'react'

const How_it_works = () => {
  return (
    <section
      id="how_it_works"
      className="relative py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className=" font-inter text-zinc-100 flex flex-row gap-3 justify-center items-center">
          <span className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Plantillas destacadas</span> 
          <IconEnergy className=' size-6 sm:size-8 lg:size-10' />
        </h2>

        <p className=" text-center font-inter text-sm md:text-lg text-gray-300 mt-2">Diseños seleccionados para inspirarte y acelerar tu próximo proyecto</p>

      </div>
    </section>
  )
}

export default How_it_works
