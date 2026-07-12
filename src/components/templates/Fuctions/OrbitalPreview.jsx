"use client";

import IconCV from "@/icons/IconCV";

const orbitItems = [
  { delay: 0, size: 18 },
  { delay: -2, size: 16 },
  { delay: -4, size: 14 },
  { delay: -6, size: 20 },
  { delay: -8, size: 16 },
  { delay: -10, size: 18 },
  { delay: -12, size: 15 },
  { delay: -14, size: 17 },
];

const OrbitalPreview = () => {
  return (
    <div className="relative flex justify-center ">
        {/* <div className=" absolute top-10 left-0 w-[320px] h-36 rounded-[32px] text-lg p-4

          border
          border-zinc-800
          bg-gradient-to-b
          from-zinc-900
          to-zinc-950"> Todas estas capacidades se integran respetando el estilo visual del
            diseño que elijas. </div> */}

      <div
        className="
          relative
          w-full
          max-w-[760px]
          aspect-[16/14]
        "
      >

        {/* Glow */}

        <div className="absolute inset-1 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.08),transparent_70%)]" />

        {/* Tarjeta */}

        {/* Tarjeta central */}

        <div
            className="
                absolute
                left-1/2
                top-1/2
                -translate-x-1/2
                -translate-y-1/2

                w-[36%]
                aspect-[5/5]

                rounded-[30px]

                border
                border-zinc-700

                bg-gradient-to-b
                from-zinc-900
                via-zinc-900
                to-zinc-950

                shadow-[0_20px_70px_rgba(0,0,0,.45)]

                p-5

                z-30
            "
            >

            {/* Barra superior */}

            <div className="flex items-center justify-between pb-2 border-b-zinc-500 border-b-2">

                <div className="flex gap-2">
                <div className="size-2 rounded-full bg-zinc-600" />
                <div className="size-2 rounded-full bg-zinc-600" />
                <div className="size-2 rounded-full bg-zinc-600" />
                </div>

                <div className="flex gap-2">
                <div className="w-7 h-3 rounded bg-zinc-700" />
                <div className="w-7 h-3 rounded bg-zinc-700" />
                </div>

            </div>

            {/* Hero */}

            <div className="flex gap-4 mt-3">

                {/* Imagen */}

                <div
                className="
                    w-[42%]
                    aspect-square

                    rounded-xl

                    border
                    border-zinc-700

                    bg-zinc-800

                    flex
                    items-center
                    justify-center
                "
                >
                <IconCV className="size-12 text-zinc-600" />
                </div>

                {/* Texto */}

                <div className="flex-1 flex flex-col justify-center">

                <div className="h-3 rounded-full bg-zinc-700 w-5/6" />

                <div className="h-3 rounded-full bg-zinc-800 w-4/6 mt-3" />

                <div className="h-3 rounded-full bg-zinc-800 w-3/6 mt-2" />

                <div className="mt-3">

                    <div
                    className="
                        w-20
                        h-5

                        rounded-lg

                        bg-green-500/10

                        border
                        border-green-500/30
                    "
                    />

                </div>

                </div>

            </div>

            {/* Cards */}

            <div className="grid grid-cols-3 gap-3 mt-3">

                {[1,2,3].map(item => (

                <div
                    key={item}
                    className="
                    rounded-xl

                    border
                    border-zinc-700

                    bg-zinc-800/80

                    p-2
                    "
                >

                    <div className="h-8 rounded bg-zinc-700" />

                    <div className="h-2 rounded bg-zinc-700 mt-2" />

                    <div className="h-2 rounded bg-zinc-700 mt-1 w-3/4" />

                </div>

                ))}

            </div>

            {/* Footer */}

            <div
                className="
                mt-3

                h-8
                    justify-center
                    flex
                    flex-col
                    items-center
                rounded-xl

                bg-zinc-800

                border
                border-zinc-700
                "
            > 
                <div className="h-2 rounded bg-zinc-700 w-3/6" />
                <div className="h-2 rounded bg-zinc-700 mt-1 w-2/6" />
            </div>
        </div>

        <div className="mt-36 text-center">
            <h3 className="text-2xl font-bold text-white">
                Diseño elegido
            </h3>
        </div>

        {/* Órbita */}

        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2

            w-[500px]
            h-[500px]

            pointer-events-none
            z-20
          "
        >
          {orbitItems.map((item, index) => (
            <div
              key={index}
              className="absolute inset-0 animate-[spin_16s_linear_infinite]"
              style={{
                animationDelay: `${item.delay}s`,
              }}
            >
              <div
                className="absolute left-1/2 top-0 -translate-x-1/2"
                style={{
                  width: item.size,
                  height: item.size,
                }}
              >
                <div
                  className="
                    w-full
                    h-full

                    rounded-full

                    bg-green-400

                    shadow-[0_0_18px_rgba(34,197,94,.8)]
                  "
                />
              </div>
            </div>
          ))}

          {/* línea guía */}

          <div
            className="
              absolute
              inset-0

              rounded-full

              border
              border-green-500/10
            "
          />
        </div>

      </div>

    </div>
  );
};

export default OrbitalPreview;