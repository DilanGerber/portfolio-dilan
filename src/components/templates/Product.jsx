"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MacbookModel from "../ui-templates/Macbook";
import StudioLights from "../ui-templates/StudioLights";

const Product = () => {
  return (
    <section className="relative overflow-hidden py-44 border-b-green-500 border-y-2 " >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-10">
          {/* Texto */}

          <div className="space-y-8 z-50">
            <h1 className="font-inter font-bold text-5xl lg:text-5xl leading-tight text-zinc-100">
              Elige un diseño y <br /> <span className=" bg-gradient-to-r block text-transparent from-green-500 to-green-800 bg-clip-text">adáptalo a tu negocio</span> 
            </h1>

            <p className="text-zinc-400 text-lg max-w-lg leading-8">
              Cada template es un punto de partida. Personalízalo, añade las
        funcionalidades que necesites y deja que nosotros nos encargamos del desarrollo, optimización y
              lanzamiento.
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

      hover:scale-[1.05]
      hover:shadow-[0_0_25px_rgba(34,197,94,.85)]
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
      border-green-500

      bg-green-950/30

      backdrop-blur-xl

      transition-all
      duration-300

      hover:scale-[1.05]

      hover:border-green-500
      hover:text-white
      hover:shadow-[0_0_80px_rgba(34,197,94,.2)]
    "
  >
    {/* Barrido */}

    <div
      className="
        absolute
        inset-0

        bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.40)_50%,transparent_85%)]

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

            

            <div className="flex items-center gap-4">

  <div className="flex -space-x-3">

    <div className="w-9 h-9 rounded-full bg-zinc-700 border-2 border-zinc-900" />
    <div className="w-9 h-9 rounded-full bg-zinc-600 border-2 border-zinc-900" />
    <div className="w-9 h-9 rounded-full bg-zinc-500 border-2 border-zinc-900" />

  </div>

  <p className="text-sm text-zinc-400">
    Más de <span className="text-white font-semibold">20 templates</span> listos para personalizar.
  </p>

</div>
            
          </div>

          {/* Canvas */}

          <div className="absolute h-[350px] md:h-[500px] lg:h-[700px] w-[140%] -ml-16 mt-64">
            <Canvas
              camera={{
                position: [0, 1.3, 5],
                fov: 30,
              }}
            >
              <StudioLights />

              <MacbookModel
                scale={0.06}
                position={[0, 0, 0]}
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
      </div>
    </section>
  );
};

export default Product;     