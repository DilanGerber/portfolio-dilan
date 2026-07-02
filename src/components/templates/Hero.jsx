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
