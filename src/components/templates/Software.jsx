import Image from "next/image";
import React from "react";

import IconCode from "@/icons/IconCode";
import icon0 from "@/app/icon0.svg";

// Contenedor de referencia: el tamaño máximo del "cuadrado" (w-[min(100%,500px)]).
// Todo lo que va dentro de las tarjetas se expresa en % de ese ancho (cqw),
// así mantiene la misma proporción que en desktop sin importar cuánto se achique.
const REF_CONTAINER = 500;
const cw = (px) => (px / REF_CONTAINER) * 100;
const fluid = (px, minRatio = 0.6) =>
  `clamp(${Math.round(px * minRatio)}px, ${cw(px)}cqw, ${px}px)`;

const Software = () => {
  return (
    <section id="software" className="relative px-6 py-16 sm:py-20 lg:py-24">
      <div
        className="
          max-w-7xl
          mx-auto
          px-5 sm:px-6 lg:px-8
          py-8 sm:py-10 lg:py-12
          rounded-3xl
          border
          border-green-500/20
          bg-gradient-to-b
          from-zinc-900
          via-zinc-900
          to-zinc-950
          overflow-hidden
        "
      >
        <div className="relative grid lg:grid-cols-[40%_60%] gap-10 sm:gap-12 lg:gap-16 items-center">
          {/* ================= LEFT ================= */}
          <div>
            <div
              className="
                w-fit
                rounded-full
                border border-green-500/20
                bg-green-500/5
                px-3 py-1.5
                text-xs
                text-green-300
                flex gap-2 items-center
                mb-4
              "
            >
              <IconCode className="size-4 sm:size-5 text-green-400" />
              <span>¿Y si tu proyecto necesita algo más?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">
              ¿Tienes una{" "}
              <span
                className="
                  text-transparent
                  bg-clip-text
                  bg-[linear-gradient(30deg,#22c55e,#16a34a,#4ade80,#16a34a,#22c55e)]
                  bg-[length:250%_100%]
                  animate-[gradient_6s_linear_infinite]
                "
              >
                idea diferente?
              </span>
            </h2>

            <p className="text-base sm:text-lg text-zinc-300 mt-4 leading-7 sm:leading-8">
              No todos los proyectos empiezan con una plantilla.
              <br />
              Algunos comienzan con una conversación.
            </p>

            <p className="text-zinc-400 text-sm sm:text-base leading-7 sm:leading-8 mt-4 max-w-xl">
              Si tienes una idea que no encaja en el catálogo, este es el
              espacio para plantearla. Juntos definiremos el alcance del
              proyecto, exploraremos las diferentes posibilidades y
              construiremos una solución pensada exclusivamente para lo que
              imaginas.
            </p>

            <button
              className="
                mt-6
                group
                relative
                overflow-hidden
                rounded-2xl
                px-5 sm:px-6 lg:px-8
                py-3.5 sm:py-4 lg:py-5
                border border-green-500
                bg-green-950/20
                transition-all duration-300
                hover:scale-[1.03]
                hover:shadow-[0_0_80px_rgba(34,197,94,.18)]
              "
            >
              <div
                className="
                  absolute inset-0
                  bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.35)_50%,transparent_85%)]
                  bg-[length:400%]
                  bg-[position:100%]
                  transition-all duration-700
                  group-hover:bg-[position:0%]
                "
              />

              <div className="relative flex items-center gap-3 sm:gap-4">
                <IconCode className="size-6 sm:size-7 lg:size-8 text-green-400" />

                <div className="text-left">
                  <div className="font-semibold text-zinc-100 text-base sm:text-lg">
                    Cuéntame tu idea
                  </div>
                  <div className="text-zinc-400 text-xs sm:text-sm flex items-center gap-1">
                    <span>Agendemos una reunión</span>
                    <span
                      className="
                        inline-block
                        transition-transform duration-300 ease-out
                        group-hover:translate-x-1.5
                      "
                    >
                      →
                    </span>
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* ================= RIGHT ================= */}
          <div className="relative flex justify-center items-center w-full py-4 sm:py-6">
            {/* Zona interna que contiene la gema y las tarjetas.
                container-type: convierte este div en la referencia de medida
                para las tarjetas de adentro (unidades cqw) */}
            <div
              className="
                relative
                w-[min(100%,500px)]
                aspect-square
                flex items-center justify-center
                [container-type:inline-size]
              "
            >
              {/* Glow */}
              <div className="absolute inset-[20%] rounded-full bg-green-500/10 blur-3xl" />

              {/* Logo */}
              <Image
                src={icon0}
                alt="Idea"
                className="
                  relative z-10
                  w-[52%] h-auto
                  opacity-95
                  drop-shadow-[0_0_70px_rgba(34,197,94,.80)]
                  animate-[pulse_6s_ease-in-out_infinite]
                "
              />

              {/* ================= CARD 1 ================= */}
              <div
                className="
                  absolute z-20
                  top-[15%] left-[-3%]
                  rounded-2xl
                  border border-zinc-700
                  bg-zinc-900/80
                  backdrop-blur-xl
                  whitespace-nowrap
                  shadow-xl
                  animate-[float_6s_ease-in-out_infinite]
                "
                style={{
                  paddingInline: fluid(20, 0.55),
                  paddingBlock: fluid(16, 0.55),
                }}
              >
                <p
                  className="text-green-400 font-semibold"
                  style={{ fontSize: fluid(14, 0.7) }}
                >
                  💡 Comparte tu idea
                </p>
              </div>

              {/* ================= CARD 2 ================= */}
              <div
                className="
                  absolute z-20
                  top-[28%] right-[-5%]
                  rounded-2xl
                  border border-zinc-700
                  bg-zinc-900/80
                  backdrop-blur-xl
                  whitespace-nowrap
                  shadow-xl
                  animate-[float_7s_ease-in-out_infinite]
                "
                style={{
                  paddingInline: fluid(20, 0.55),
                  paddingBlock: fluid(16, 0.55),
                }}
              >
                <p
                  className="text-green-400 font-semibold"
                  style={{ fontSize: fluid(14, 0.7) }}
                >
                  🎯 Definimos objetivos
                </p>
                <p
                  className="text-zinc-400"
                  style={{ fontSize: fluid(12, 0.7), marginTop: fluid(4, 0.5) }}
                >
                  y el alcance del proyecto
                </p>
              </div>

              {/* ================= CARD 3 ================= */}
              <div
                className="
                  absolute z-20
                  bottom-[20%] left-[-10%]
                  rounded-2xl
                  border border-zinc-700
                  bg-zinc-900/80
                  backdrop-blur-xl
                  whitespace-nowrap
                  shadow-xl
                  animate-[float_5.5s_ease-in-out_infinite]
                "
                style={{
                  paddingInline: fluid(20, 0.55),
                  paddingBlock: fluid(16, 0.55),
                }}
              >
                <p
                  className="text-green-400 font-semibold"
                  style={{ fontSize: fluid(14, 0.7) }}
                >
                  ⚙️ Exploramos las mejores
                </p>
                <p
                  className="text-zinc-400"
                  style={{ fontSize: fluid(12, 0.7), marginTop: fluid(4, 0.5) }}
                >
                  posibilidades para tu idea
                </p>
              </div>

              {/* ================= CARD 4 ================= */}
              <div
                className="
                  absolute z-20
                  bottom-[5%] right-[-5%]
                  rounded-2xl
                  border border-green-500/30
                  bg-green-500/5
                  backdrop-blur-xl
                  whitespace-nowrap
                  shadow-[0_0_30px_rgba(34,197,94,.15)]
                  animate-[float_6.5s_ease-in-out_infinite]
                "
                style={{
                  paddingInline: fluid(20, 0.55),
                  paddingBlock: fluid(16, 0.55),
                }}
              >
                <p
                  className="text-green-300 font-semibold"
                  style={{ fontSize: fluid(14, 0.7) }}
                >
                  ✨ Construimos una solución
                </p>
                <p
                  className="text-zinc-300"
                  style={{ fontSize: fluid(12, 0.7), marginTop: fluid(4, 0.5) }}
                >
                  hecha completamente a tu medida
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Software;