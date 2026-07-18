"use client";

import IconLayer from "@/icons/IconLayer";
import functionsData from "./functionsData";
import FunctionCard from "./FunctionCard";
import OrbitalPreview from "./OrbitalPreview";
import IconGitHub from "@/icons/IconGitHub";

const Functions = () => {
  return (
    <section id="function" className="relative py-16 sm:py-20 lg:py-24 overflow-hidden">
      {/* Glow de fondo */}
      <div
        className="
          absolute left-1/2 top-56 sm:top-64 lg:top-72 -translate-x-1/2
          w-[220px] h-[220px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px]
          rounded-full bg-green-500/10
          blur-[110px] sm:blur-[150px] lg:blur-[180px]
          pointer-events-none
        "
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-5">
            <IconLayer className="size-8 sm:size-9 lg:size-10 text-green-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">
            Haz{" "}
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
              crecer
            </span>{" "}
            tu web
          </h2>

          <p className="text-center font-inter text-sm sm:text-base md:text-lg text-gray-300 mt-6 sm:mt-8">
            Empieza con el diseño que más te guste y conviértelo en una web
            hecha a tu medida.
            <br />
            Añade solo las funcionalidades que necesitas hoy y amplía tu
            proyecto cuando lo necesites, sin tener que empezar desde cero.
          </p>
        </div>

        {/* Preview */}
        <OrbitalPreview />

        <div className="my-10 sm:my-14 lg:my-16 flex justify-center px-2">
          <p
            className="
              max-w-3xl
              text-center
              text-zinc-400
              text-sm md:text-base
              leading-7 sm:leading-8
              flex flex-row items-center gap-2
            "
          >
            <IconGitHub className="text-green-400 size-5 sm:size-6 flex-shrink-0" />
            Todas estas capacidades puedes integrarlas respetando el estilo
            visual del diseño que elijas.
          </p>
        </div>

        {/* Grid — 2 columnas desde mobile, 4 desde xl */}
        <div className="grid grid-cols-2 xl:grid-cols-4 gap-3 sm:gap-6 lg:gap-8">
          {functionsData.map((item) => (
            <FunctionCard key={item.title} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Functions;