

import IconAbility from '@/icons/IconAbility';
import IconLayer from '@/icons/IconLayer'
import React from 'react'
import functionsData from "./functionsData";

const Functions = () => {
  return (
    <section
      id="function"
      className="relative py-24"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className=" font-inter text-zinc-100 flex flex-row gap-3 justify-center items-center text-center">
          <span className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Construye la web que realmente necesitas</span> 
          <IconLayer className=' size-6 sm:size-8 lg:size-10' />
        </h2>
        <p className=" text-center font-inter text-sm md:text-lg text-gray-300 mt-2 px-64">Empieza con el diseño que más te guste y conviértelo en una web hecha a tu medida. Añade solo las funcionalidades que necesitas hay y sigue ampliandolo en el futuro sin tener que empezar desde cerol</p>

        <div className=' text-center justify-center items-center flex px-64 mt-12'>
          <div className="
                    group
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/60
                    backdrop-blur-xl
                    p-4
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-500/40
                    hover:shadow-[0_0_40px_rgba(34,197,94,.12)]
                  ">Cada funcionalidad se adapta al diseño que elijas. Se integra respetando el estilo visual de tu template para que todo se vea como un solo producto</div>
        </div>

        <div className="grid sm:grid-cols-4 gap-6 mt-12">
            {functionsData.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="
                    group
                    rounded-3xl
                    border
                    border-zinc-800
                    bg-zinc-900/60
                    backdrop-blur-xl
                    p-4
                    transition-all
                    duration-500
                    hover:-translate-y-2
                    hover:border-green-500/40
                    hover:shadow-[0_0_40px_rgba(34,197,94,.12)]
                  "
                >

                  <div
                    className="
                      mb-2
                      inline-flex
                      rounded-xl
                      bg-green-500/10
                      p-2
                      text-green-400
                      transition
                      group-hover:scale-110
                    "
                  >
                    <Icon className="size-6" />
                  </div>

                  <h3 className="text-white text-base font-semibold">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-zinc-400 text-sm">
                    {item.description}
                  </p>

                  <div className="mt-2 flex items-center gap-2">

                    <span className="w-2 h-2 rounded-full bg-green-400"/>

                    <span className="text-sm text-zinc-500">
                      Compatible con cualquier template
                    </span>

                  </div>

                </div>
              );

            })}

          </div>
      </div>
    </section>
  )
}

export default Functions
