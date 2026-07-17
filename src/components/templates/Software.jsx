import Image from "next/image";
import React from "react";

import IconCode from "@/icons/IconCode";
import icon0 from "@/app/icon0.svg";

const Software = () => {
  return (
    <section
      id="software"
      className="relative py-24"
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-8
          py-20

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
        {/* Glow */}

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,rgba(34,197,94,.08),transparent_55%)]" />

        <div className="relative grid lg:grid-cols-2 gap-16 items-center">

          {/* ================= LEFT ================= */}

          <div>

            {/* <div className="flex mb-5">
              <IconCode className="size-10 text-green-400" />
            </div> */}

            <h2 className="text-5xl font-bold font-inter text-zinc-100 leading-tight">
              ¿Tienes unaaa{" "}

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

            <p className="text-lg text-zinc-300 mt-8 leading-8">
              No todos los proyectos empiezan con una plantilla.
              <br />
              Algunos comienzan con una conversación.
            </p>

            <p className="text-zinc-400 leading-8 mt-8 max-w-xl">
              Si tienes una idea que no encaja en el catálogo, este es el
              espacio para plantearla. Juntos definiremos el alcance del
              proyecto, exploraremos las diferentes posibilidades y
              construiremos una solución pensada exclusivamente para lo que
              imaginas.
            </p>

            <button
              className="
                mt-10

                group
                relative

                overflow-hidden

                rounded-2xl

                px-8
                py-5

                border
                border-green-500

                bg-green-950/20

                transition-all
                duration-300

                hover:scale-[1.03]
                hover:shadow-[0_0_80px_rgba(34,197,94,.18)]
              "
            >
              <div
                className="
                  absolute
                  inset-0

                  bg-[linear-gradient(120deg,transparent_15%,rgba(34,197,94,.35)_50%,transparent_85%)]

                  bg-[length:400%]

                  bg-[position:100%]

                  transition-all
                  duration-700

                  group-hover:bg-[position:0%]
                "
              />

              <div className="relative flex items-center gap-4">

                <IconCode className="size-8 text-green-400" />

                <div className="text-left">

                  <div className="font-semibold text-zinc-100 text-lg">
                    Cuéntame tu idea
                  </div>

                  <div className="text-zinc-400 text-sm">
                    Agendemos una reunión →
                  </div>

                </div>

              </div>

            </button>

          </div>

          {/* ================= RIGHT ================= */}

          <div className="relative flex justify-center items-center h-[520px]">

            {/* Logo */}

            <Image
              src={icon0}
              alt="Idea"
              className="
                w-[260px]
                h-auto

                opacity-95

                drop-shadow-[0_0_70px_rgba(34,197,94,.20)]

                animate-[pulse_6s_ease-in-out_infinite]
              "
            />

            {/* Card 1 */}

            <div
              className="
                absolute

                top-8
                left-0

                rounded-2xl

                border
                border-zinc-700

                bg-zinc-900/80

                backdrop-blur-xl

                px-5
                py-4

                shadow-xl

                animate-[float_6s_ease-in-out_infinite]
              "
            >
              <p className="text-green-400 text-sm font-semibold">
                💡 Comparte tu idea
              </p>
            </div>

            {/* Card 2 */}

            <div
              className="
                absolute

                top-20
                right-0

                rounded-2xl

                border
                border-zinc-700

                bg-zinc-900/80

                backdrop-blur-xl

                px-5
                py-4

                shadow-xl

                animate-[float_7s_ease-in-out_infinite]
              "
            >
              <p className="text-green-400 text-sm font-semibold">
                🎯 Definimos objetivos
              </p>

              <p className="text-zinc-400 text-xs mt-1">
                y el alcance del proyecto
              </p>
            </div>

            {/* Card 3 */}

            <div
              className="
                absolute

                bottom-24
                left-6

                rounded-2xl

                border
                border-zinc-700

                bg-zinc-900/80

                backdrop-blur-xl

                px-5
                py-4

                shadow-xl

                animate-[float_5.5s_ease-in-out_infinite]
              "
            >
              <p className="text-green-400 text-sm font-semibold">
                ⚙️ Exploramos las mejores
              </p>

              <p className="text-zinc-400 text-xs mt-1">
                posibilidades para tu idea
              </p>
            </div>

            {/* Card 4 */}

            <div
              className="
                absolute

                bottom-8
                right-4

                rounded-2xl

                border
                border-green-500/30

                bg-green-500/5

                backdrop-blur-xl

                px-5
                py-4

                shadow-[0_0_30px_rgba(34,197,94,.15)]

                animate-[float_6.5s_ease-in-out_infinite]
              "
            >
              <p className="text-green-300 text-sm font-semibold">
                ✨ Construimos una solución
              </p>

              <p className="text-zinc-300 text-xs mt-1">
                hecha completamente a tu medida
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Software;