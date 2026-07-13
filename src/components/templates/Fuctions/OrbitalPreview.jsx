"use client";

import IconCV from "@/icons/IconCV";
import functionsOrbitData from "./functionsOrbitData";

const ORBIT_DURATION = 20;
const MAIN_ORBIT_RADIUS = 280; // 👈 subí este número para agrandar la órbita (antes 220)
const DECORATIVE_RINGS = [
  { radius: 250, opacity: 0.08 },
  { radius: 380, opacity: 0.05 },
]; // 👈 ajustá estos radios en la misma proporción

const OrbitalPreview = () => {
  const total = functionsOrbitData.length;

  return (
    <div className="relative flex justify-center my-8">
      <div className="relative w-full max-w-[760px] aspect-[16/14]">
        <div className="absolute inset-1 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.08),transparent_70%)]" />

        <div
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[36%] aspect-[5/5] rounded-[30px]
            border border-zinc-700
            bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950
            shadow-[0_20px_70px_rgba(0,0,0,.45)]
            p-5 z-30
          "
        >
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

          <div className="flex gap-4 mt-3">
            <div className="w-[42%] aspect-square rounded-xl border border-zinc-700 bg-zinc-800 flex items-center justify-center">
              <IconCV className="size-12 text-zinc-600" />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="h-3 rounded-full bg-zinc-700 w-5/6" />
              <div className="h-3 rounded-full bg-zinc-800 w-4/6 mt-3" />
              <div className="h-3 rounded-full bg-zinc-800 w-3/6 mt-2" />
              <div className="mt-3">
                <div className="w-20 h-5 rounded-lg bg-green-500/10 border border-green-500/30" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3 mt-3">
            {[1, 2, 3].map((item) => (
              <div key={item} className="rounded-xl border border-zinc-700 bg-zinc-800/80 p-2">
                <div className="h-8 rounded bg-zinc-700" />
                <div className="h-2 rounded bg-zinc-700 mt-2" />
                <div className="h-2 rounded bg-zinc-700 mt-1 w-3/4" />
              </div>
            ))}
          </div>

          <div className="mt-3 h-8 justify-center flex flex-col items-center rounded-xl bg-zinc-800 border border-zinc-700">
            <div className="h-2 rounded bg-zinc-700 w-3/6" />
            <div className="h-2 rounded bg-zinc-700 mt-1 w-2/6" />
          </div>
        </div>

        <div className="mt-32 text-center">
          <h3 className="text-2xl font-bold text-white">Diseño elegido</h3>
        </div>

        {/* {DECORATIVE_RINGS.map((ring, i) => (
          <div
            key={`ring-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none z-10"
            style={{
              width: ring.radius * 2,
              height: ring.radius * 2,
              borderColor: `rgba(34,197,94,${ring.opacity})`,
            }}
          />
        ))} */}

        {/* Órbita principal */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 pointer-events-none z-20">
          {functionsOrbitData.map((item, index) => {
            const Icon = item.icon;
            const angle = (360 / total) * index;

            return (
              <div
                key={index}
                className="absolute top-0 left-0"
                style={{
                  animation: `orbit-rotate ${ORBIT_DURATION}s linear infinite`,
                  "--start-angle": `${angle}deg`,
                  "--radius": `${MAIN_ORBIT_RADIUS}px`,
                }}
              >
                {/* 👇 clave del fix de centrado: sin esto, cada tarjeta
                    queda anclada por su esquina, no por su centro */}
                <div
                  className="
                    absolute -translate-x-1/2 -translate-y-1/2
                    pointer-events-auto
                    flex flex-row items-center justify-center gap-1
                    w-[126px] h-[62px]
                    rounded-2xl
                    border border-green-500/20
          border-zinc-800
          bg-gradient-to-b
          from-zinc-900
          to-zinc-950
                    backdrop-blur-xl
                    px-2 py-3
                    shadow-[0_0_25px_rgba(34,197,94,.15)]
                    transition-all duration-300
                    hover:border-green-500/60 hover:shadow-[0_0_55px_rgba(34,197,94,.25)]
                  "
                >
                  <Icon className="size-8 text-green-400 shrink-0" />
                  <span className="text-xs text-zinc-300 font-semibold text-center leading-tight">
                    {item.name}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @keyframes orbit-rotate {
          from {
            transform: rotate(var(--start-angle, 0deg)) translateX(var(--radius, 200px)) rotate(calc(-1 * var(--start-angle, 0deg)));
          }
          to {
            transform: rotate(calc(var(--start-angle, 0deg) + 360deg)) translateX(var(--radius, 200px)) rotate(calc(-1 * (var(--start-angle, 0deg) + 360deg)));
          }
        }
      `}</style>
    </div>
  );
};

export default OrbitalPreview;