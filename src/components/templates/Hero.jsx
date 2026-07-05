"use client";

import React from "react";
import { Canvas } from "@react-three/fiber";
import { motion } from "framer-motion";

import MacbookModel from "../ui-templates/Macbook";
import StudioLights from "../ui-templates/StudioLights";
import SideRays from "../ui-templates/SideRays";
import AutoOrbit from "../ui-templates/AutoOrbit";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.94,
  },
  show: {
    opacity: 1,
    x: 0,
    scale: 1,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

const Hero = () => {
  return (
    <section
      id="templates"
      className="relative overflow-hidden py-36"
    >
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <SideRays
          origin="bottom-right"
          speed={3.8}
          rayColor1="#166534"
          rayColor2="#14B973"
          intensity={2}
          spread={2.5}
          tilt={1}
          saturation={1.5}
          blend={2.25}
          falloff={1.6}
          opacity={0.8}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 items-center gap-10">

          {/* TEXTO */}

          <motion.div
            className="space-y-8 z-50"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.h1
              variants={fadeUp}
              className="font-inter font-bold text-5xl lg:text-5xl leading-tight text-zinc-100"
            >
              Elige un diseño y
              <br />

              <span
                className="
                  leading-normal
                  text-transparent
                  bg-clip-text

                  bg-[linear-gradient(30deg,#22c55e,#16a34a,#4ade80,#16a34a,#22c55e)]
                  bg-[length:250%_100%]

                  animate-[gradient_6s_linear_infinite]
                "
              >
                adáptalo a tu negocio
              </span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-zinc-400 text-lg max-w-lg leading-8"
            >
              Cada template es un punto de partida.
              Personalízalo, añade las funcionalidades que necesites y deja
              que nosotros nos encargamos del desarrollo, optimización y
              lanzamiento.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row gap-5"
            >

              {/* BOTÓN PRINCIPAL */}

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
                <div
                  className="
                    absolute inset-0
                    bg-[radial-gradient(circle_at_center,_rgba(34,197,94,.25)_10%,_transparent_60%)]
                    opacity-0
                    transition-opacity
                    duration-300
                    group-hover:opacity-100
                  "
                />

                <div
                  className="
                    absolute inset-0
                    bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.22)_50%,transparent_85%)]
                    bg-[length:400%]
                    bg-[position:100%]
                    transition-all
                    duration-700
                    group-hover:bg-[position:0%]
                  "
                />

                <div
                  className="
                    absolute inset-0
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

              {/* BOTÓN SECUNDARIO */}

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
                <div
                  className="
                    absolute inset-0
                    bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.40)_50%,transparent_85%)]
                    bg-[length:400%]
                    bg-[position:100%]
                    transition-all
                    duration-700
                    group-hover:bg-[position:0%]
                  "
                />

                <div
                  className="
                    absolute inset-0
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

            </motion.div>

            <motion.div
              variants={fadeUp}
              className="flex items-center gap-4"
            >
              <div className="flex flex-wrap items-center gap-6 pt-3">

                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-green-400">4+</span>
                  <span className="text-sm text-zinc-500">Templates</span>
                </div>

                <div className="w-px h-10 bg-zinc-700" />

                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-green-400">3</span>
                  <span className="text-sm text-zinc-500">Nichos</span>
                </div>

                <div className="w-px h-10 bg-zinc-700" />

                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-green-400">2</span>
                  <span className="text-sm text-zinc-500">Estilos</span>
                </div>

                <div className="w-px h-10 bg-zinc-700" />

                <div className="flex flex-col">
                  <span className="text-2xl font-bold text-green-400">∞</span>
                  <span className="text-sm text-zinc-500">Personalización</span>
                </div>

              </div>
            </motion.div>

          </motion.div>

          {/* CANVAS */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="absolute h-[350px] md:h-[500px] lg:h-[700px] w-[140%] -ml-16 mt-64"
          >
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

              <AutoOrbit />
            </Canvas>
          </motion.div>
   
        </div>
      </div>
    </section>
  );
};

export default Hero;