import IconEnergy from "@/icons/IconEnergy";
import IconGitHub from "@/icons/IconGitHub";
import React from "react";
import steps from "./stepsData";

const How_it_works = () => {
  return (
    <section
      id="how_it_works"
      className="relative py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center max-w-4xl mx-auto">

          <div className="flex justify-center mb-5">
            <IconEnergy className="size-10 text-green-400" />
          </div>

          <h2 className="text-5xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">
            De la idea al{" "}
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
              lanzamiento
            </span>
          </h2>

          <p className="text-center font-inter text-sm md:text-lg text-gray-300 mt-8">
            Un proceso transparente, pensado para que sepas exactamente qué
            esperar desde el primer momento.
            <br />
            5 pasos. Sin sorpresas. Desde la idea hasta el lanzamiento.
          </p>

        </div>

        {/* Timeline */}

        <div className="relative mt-24">

          <div className="absolute left-[8%] right-[8%] -top-3 h-px bg-green-500/30" />

          <div className="grid grid-cols-5 gap-2.5">

  {steps.map((step) => (

    <div key={step.number} className="relative">

      {/* Número */}

      <div
        className={`
          absolute
          left-1/2
          -top-8
          -translate-x-1/2

          w-12
          h-12

          rounded-full

          border

          flex
          items-center
          justify-center

          text-xl
          font-bold

          z-20

          ${
            step.active
              ? "bg-gradient-to-b from-green-900 to-green-950 backdrop-blur-xl border-green-400 text-white shadow-[0_0_35px_rgba(34,197,94,.45)]"
              : "bg-gradient-to-b from-zinc-900 to-zinc-950 backdrop-blur-xl border-green-500/40 text-green-500"
          }
        `}
      >
        {step.number}
      </div>

      {/* Card */}

      <div
        className={`
          relative

          rounded-3xl
          pt-5
          p-2.5
          h-full

          transition-all
          duration-300

          ${
            step.active
              ? "border border-green-500/40 bg-green-500/[0.05] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_0_75px_rgba(34,197,94,.25)]"
              : "border border-zinc-700 bg-zinc-900 transition-all duration-700 bg-[linear-gradient(120deg,transparent_20%,rgba(255,255,255,.12)_50%,transparent_80%)] bg-[length:400%_400%] bg-[position:100%] hover:bg-[position:0%]"
          }
        `}
      >

        <h3 className="text-lg font-bold text-zinc-100 text-center mb-2">
          {step.title}
        </h3>

        {/* Skeleton */}

        <div className="mb-3 rounded-2xl border border-zinc-700 bg-zinc-900 p-3 mx-2">

          <div className="flex items-center justify-between mb-2">

            <div className="flex gap-2">
              <div className="size-2 rounded-full bg-zinc-600" />
              <div className="size-2 rounded-full bg-zinc-600" />
              <div className="size-2 rounded-full bg-zinc-600" />
            </div>

            <div className="w-10 h-3 rounded bg-zinc-700" />

          </div>

          <div className="h-24 rounded-xl bg-zinc-800 border border-zinc-700" />

          <div className="space-y-2 mt-2">

            <div className="h-3 rounded-full bg-zinc-700 w-5/6" />
            <div className="h-3 rounded-full bg-zinc-800 w-4/6" />

          </div>

        </div>

        <p className="text-zinc-400 leading-2 text-center text-[0.84rem]">
          {step.description}
        </p>

        {/* Nota especial del paso 4 */}

        {step.number === "4" && (
          <div
            className="
              absolute

              left-1/2
              -translate-x-1/2

              -bottom-6

              w-[90%]

              rounded-2xl

              border
              border-green-500/20

              bg-gradient-to-b
              from-zinc-900
              to-zinc-950

              backdrop-blur-xl

              px-2
              py-2

              flex
              items-center
              gap-2

              shadow-[0_10px_35px_rgba(0,0,0,.45)]

              z-30
            "
          >
            <IconGitHub className="size-6 text-green-400 flex-shrink-0 mt-0.5" />

            <p className="text-xs text-zinc-400 leading-2">
              Cualquier ampliación del proyecto será evaluada antes de incorporarse al desarrollo.
            </p>
          </div>
        )}

      </div>

    </div>

  ))}

</div>

        </div>

        <div className="flex justify-center items-center mt-16">
          <p className="text-zinc-300 flex flex-row items-center text-lg gap-2 text-center max-w-5xl">
            <IconGitHub className="text-green-400 size-6 flex-shrink-0" />
            No compras una plantilla con funciones cerradas. Empiezas con un
            diseño que evoluciona junto a tu negocio y construimos sobre él
            exactamente lo que necesitas, cuando lo necesitas.
          </p>
        </div>
      </div>
    </section>
  );
};

export default How_it_works;