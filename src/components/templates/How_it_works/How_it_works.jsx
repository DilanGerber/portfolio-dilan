import IconEnergy from '@/icons/IconEnergy'
import IconGitHub from '@/icons/IconGitHub'
import React from 'react'

const How_it_works = () => {
  return (
    <section
      id="how_it_works"
      className="relative py-24"
    >
      <div className="text-center max-w-4xl mx-auto">

          <div className="flex justify-center mb-5">
            <IconEnergy className="size-10 text-green-400" />
          </div>

          <h2 className=" text-5xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">

            De la idea al{" "}

            <span className="
                  leading-normal
                  text-transparent
                  bg-clip-text

                  bg-[linear-gradient(30deg,#22c55e,#16a34a,#4ade80,#16a34a,#22c55e)]
                  bg-[length:250%_100%]

                  animate-[gradient_6s_linear_infinite]
                ">
              lanzamiento
            </span>
          </h2>

          <p
            className="text-center font-inter text-sm md:text-lg text-gray-300 mt-8"
          >
            Un proceso transparente, pensado para que sepas exactamente qué esperar desde el primer momento.

            <br />

            5 pasos. Sin sorpresas. Desde la idea hasta el lanzamiento.
          </p>

          <div className=" flex justify-center items-center mb-16">
            <p className=" text-zinc-300 flex flex-row items-center text-lg gap-2"> <IconGitHub className=" text-green-400 size-6"/> No compras una plantilla con funciones cerradas. Empiezas con un diseño que evoluciona junto a tu negocio y construimos sobre él exactamente lo que necesitas, cuando lo necesitas.</p>
          </div>
        </div>
    </section>
  )
}

export default How_it_works
