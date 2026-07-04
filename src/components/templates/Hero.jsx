"use client"

import React from 'react'
import IconAbility from "@/icons/IconAbility";
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel from '../ui-templates/Macbook';
import StudioLights from '../ui-templates/StudioLights';

const Hero = () => {
  return (
    <section className="relative px-4 max-w-[1200px] mx-auto mt-20 mb-24">
      <h2 className="font-inter text-zinc-100 flex flex-row gap-2 justify-center items-center mb-12">
        <span className="text-2xl sm:text-3xl lg:text-4xl font-bold">
          Elige un diseño y adáptalo a tu negocio
        </span>

        <IconAbility className="size-6 sm:size-8 lg:size-10" />
      </h2>

      <p className="text-lg font-light max-w-xl mx-auto mt-4 text-center text-zinc-400">
        Cada template es un punto de partida. Personalízalo, añade las
        funcionalidades que necesites y deja que nosotros hagamos el resto.
      </p>

      <div className="flex flex-col sm:flex-row gap-5">

  {/* Botón principal */}

  <button
    className="
      group
      relative
      overflow-hidden
      rounded-xl
      px-8
      py-4
      font-semibold
      text-white

      border
      border-green-500

      bg-[#111917]

      transition-all
      duration-300

      hover:scale-[1.03]
      hover:shadow-[0_0_25px_rgba(34,197,94,.35)]
    "
  >
    {/* Glow */}

    <div
      className="
        absolute
        inset-0

        bg-[radial-gradient(circle_at_center,_rgba(34,197,94,.25)_10%,_transparent_60%)]

        opacity-0

        transition-opacity
        duration-300

        group-hover:opacity-100
      "
    />

    {/* Barrido */}

    <div
      className="
        absolute
        inset-0

        bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.22)_50%,transparent_85%)]

        bg-[length:400%]

        bg-[position:100%]

        transition-all
        duration-700

        group-hover:bg-[position:0%]
      "
    />

    {/* Blur */}

    <div
      className="
        absolute
        inset-0

        blur-3xl

        opacity-40

        bg-[linear-gradient(120deg,transparent_20%,rgba(34,197,94,.25)_50%,transparent_80%)]

        bg-[length:350%]

        bg-[position:100%]

        transition-all
        duration-1000

        group-hover:bg-[position:0%]
      "
    />

    <span className="relative z-10">
      Explorar templates
    </span>
  </button>

  {/* Botón secundario */}

  <button
    className="
      group
      relative
      overflow-hidden

      rounded-xl

      px-8
      py-4

      font-semibold

      text-zinc-200

      border
      border-zinc-700

      bg-zinc-950/50

      backdrop-blur-sm

      transition-all
      duration-300

      hover:border-green-500
      hover:text-white
      hover:shadow-[0_0_20px_rgba(34,197,94,.2)]
    "
  >
    {/* Barrido */}

    <div
      className="
        absolute
        inset-0

        bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.20)_50%,transparent_85%)]

        bg-[length:400%]

        bg-[position:100%]

        transition-all
        duration-700

        group-hover:bg-[position:0%]
      "
    />

    {/* Glow */}

    <div
      className="
        absolute
        inset-0

        blur-3xl

        opacity-40

        bg-[linear-gradient(120deg,transparent_20%,rgba(34,197,94,.18)_50%,transparent_80%)]

        bg-[length:350%]

        bg-[position:100%]

        transition-all
        duration-1000

        group-hover:bg-[position:0%]
      "
    />

    <span className="relative z-10">
      Necesito algo a medida
    </span>
  </button>

</div>

      <div>
        <Canvas id='canvas' camera={{position: [0, 2, 5], fov: 50, near: 0.1, far: 100}}>
            <StudioLights />
            <MacbookModel scale={0.12} position={[0, 0, 0]} />
            <OrbitControls enableZoom={false} />
        </Canvas>  
      </div> 
    </section>
  )
} 

export default Hero
