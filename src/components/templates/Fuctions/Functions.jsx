"use client";

import IconLayer from "@/icons/IconLayer";
import functionsData from "./functionsData";
import FunctionCard from "./FunctionCard";
import OrbitalPreview from "./OrbitalPreview";

const Functions = () => {
  return (
    <section
      id="functions"
      className="relative py-24 overflow-hidden"
    >
      {/* Glow de fondo */}

      <div
        className="
          absolute
          left-1/2
          top-72
          -translate-x-1/2

          w-[400px]
          h-[400px]

          rounded-full

          bg-green-500/10

          blur-[180px]

          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">

          <div className="flex justify-center mb-5">
            <IconLayer className="size-10 text-green-400" />
          </div>

          <h2 className=" text-5xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">

            Haz{" "}

            <span className="text-green-400">
              crecer
            </span>

            {" "}tu web

          </h2>

          <p
            className="text-center font-inter text-sm md:text-lg text-gray-300 mt-8"
          >
            Empieza con el diseño que más te guste y conviértelo en una web
            hecha a tu medida.

            <br />

            Añade solo las funcionalidades que necesitas hoy y amplía tu
            proyecto cuando lo necesites, sin tener que empezar desde cero.
          </p>

        </div>

        {/* Preview */}

        <OrbitalPreview />

        {/* Banner */}

        {/* <div
          className="
            mt-16

            rounded-3xl

            border
            border-green-500/20

            bg-zinc-900/70

            backdrop-blur-xl

            px-10
            py-8

            text-center
          "
        >

          <p className="text-white font-semibold text-xl">
            Todas estas capacidades se integran respetando el estilo visual del
            diseño que elijas.
          </p>

          <p className="text-zinc-400 mt-3 leading-8">
            Cada proyecto es único, pero siempre se ve y funciona como un solo
            producto.
          </p>

        </div> */}

        {/* Grid */}

        <div
          className="
            

            grid

            md:grid-cols-2

            xl:grid-cols-4

            gap-8
          "
        >

          {functionsData.map((item) => (
            <FunctionCard
              key={item.title}
              item={item}
            />
          ))}

        </div>

        {/* CTA */}

        {/* <div
          className="
            mt-16

            rounded-3xl

            border
            border-zinc-800

            bg-zinc-900/70

            backdrop-blur-xl

            px-10
            py-8

            text-center
          "
        >

          <p className="text-lg text-zinc-300 leading-8">

            ¿Necesitas algo más específico?{" "}

            <span className="text-green-400 font-medium">
              También desarrollamos funcionalidades e integraciones
              completamente personalizadas
            </span>

            {" "}para adaptarnos a las necesidades de tu negocio.

          </p>

        </div> */}

      </div>
    </section>
  );
};

export default Functions;