"use client"

import React from 'react'
import { Canvas } from '@react-three/fiber';
import { Box, OrbitControls } from "@react-three/drei";
import MacbookModel from '../ui-templates/Macbook';
import StudioLights from '../ui-templates/StudioLights';
   
const Product = () => {
  return (
        <section className="relative max-w-7xl mx-auto px-6 py-24">
            <div className="grid lg:grid-cols-2 items- gap-8">
                <div className="space-y-8 mt-14">
    
        <h1 className="font-inter font-bold text-5xl lg:text-5xl leading-tight text-zinc-100">
            Elige un diseño y adáptalo a tu negocio
        </h1>
     
        <p className="text-zinc-400 text-lg max-w-lg leading-8">
            Elige uno de nuestros templates profesionales y personalízalo.
            Nosotros nos encargamos del desarrollo, optimización y lanzamiento.
        </p>
    
        <button className="rounded-xl bg-white text-black px-8 py-4 font-semibold hover:scale-105 transition">
            Explorar templates
        </button>
    
    </div>
    
    {/*  */}
    
    <div className="absolute right-1 h-[350px] md:h-[500px] lg:h-[700px]">
        <Canvas
        camera={{
            position: [0, 1.3, 5],
            fov: 30
        }}
    >
        <StudioLights />
        <MacbookModel
        scale={0.06}
        position={[0,0,0]}
    />
    <OrbitControls
        enableZoom={false}
        enablePan={false}
        minPolarAngle={Math.PI / 2.3}
        maxPolarAngle={Math.PI / 2.3}
        minAzimuthAngle={-0.4}
        maxAzimuthAngle={0.4}
    />
    </Canvas>
    </div>
            </div>
        </section>
  )
}

export default Product
