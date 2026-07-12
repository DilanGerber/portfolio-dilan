"use client";

import IconCode from "@/icons/IconCode";
import IconCV from "@/icons/IconCV";

const OrbitalPreview = () => {
  return (
    <div className="relative my-16 flex justify-center">

      {/* Orbita exterior */}

      <div
        className="
        absolute
        w-[900px]
        h-[380px]
        rounded-full
        border
        border-green-500/20
      "
      />

      {/* Orbita interior */}

      <div
        className="
        absolute
        top-10
        w-[720px]
        h-[280px]
        rounded-full
        border
        border-green-500/10
      "
      />

      {/* Placeholder */}

          <div
      className="
        relative

        w-full
        max-w-[760px]
        aspect-[16/10]

        rounded-[30px]

        border
        border-zinc-800

        bg-gradient-to-b
        from-zinc-900
        to-zinc-950

        overflow-hidden
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          inset-0

          bg-[radial-gradient(circle_at_center,rgba(34,197,94,.08),transparent_70%)]
        "
      />

      {/* Tu diseño */}
      <div
        className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[42%]
          aspect-[16/10]

          rounded-2xl

          border
          border-zinc-700

          bg-gradient-to-br
        from-zinc-900
        via-zinc-800
        to-zinc-950

          flex
          flex-col
          items-center
          justify-center

          gap-4
        "
      >
        <div
          className="
            w-24
            h-24

            rounded-2xl

            border
            border-zinc-700

            bg-zinc-800/80

            flex
            items-center
            justify-center
          "
        >
          <IconCV className="size-12 text-zinc-500" />
        </div>

        <div className="space-y-2 text-center">
          <h3 className="text-2xl font-semibold text-zinc-100">
            Diseño de tu web
          </h3>

          {/* <p className="text-zinc-500 text-sm max-w-sm">
            Aquí aparecerá la plantilla seleccionada con todas las
            funcionalidades que decidas añadir.
          </p> */}
        </div>
      </div>

      {/* Destellos */}

      <div className="absolute top-10 left-12 w-2 h-2 rounded-full bg-green-400/70 blur-sm" />
      <div className="absolute bottom-12 right-20 w-2 h-2 rounded-full bg-green-400/60 blur-sm" />
      <div className="absolute top-24 right-24 w-1.5 h-1.5 rounded-full bg-green-300 blur-sm" />
      <div className="absolute bottom-20 left-20 w-1.5 h-1.5 rounded-full bg-green-300 blur-sm" />
    </div>

    </div>
  );
};

export default OrbitalPreview;