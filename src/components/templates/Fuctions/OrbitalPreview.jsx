"use client";

import IconCV from "@/icons/IconCV";
import functionsOrbitData from "./functionsOrbitData";

const ORBIT_DURATION = 20;

// Valores de referencia originales, tomados sobre un contenedor de 760px
// (el max-w del diseño). Todo se expresa en % de ese ancho (cqw) para
// escalar proporcionalmente, con un piso (clamp) para no volverse ilegible.
const REF_CONTAINER = 760;
const cw = (px) => (px / REF_CONTAINER) * 100;

const MAIN_ORBIT_RADIUS_PX = 280;
const MAIN_ORBIT_RADIUS_CQW = cw(MAIN_ORBIT_RADIUS_PX);

const CARD_WIDTH_PX = 126;
const CARD_HEIGHT_PX = 62;
const CARD_WIDTH_CQW = cw(CARD_WIDTH_PX);
const CARD_HEIGHT_CQW = cw(CARD_HEIGHT_PX);

const ICON_SIZE_PX = 32;
const ICON_SIZE_CQW = cw(ICON_SIZE_PX);

const TITLE_MARGIN_PX = 128;
const TITLE_MARGIN_CQW = cw(TITLE_MARGIN_PX);

// --- Tarjeta central (el "preview" del medio) ---
const PREVIEW_PADDING_PX = 20; // p-5
const PREVIEW_RADIUS_PX = 30; // rounded-[30px]
const PREVIEW_GAP_PX = 16; // gap-4
const PREVIEW_ICON_BIG_PX = 48; // size-12
const PREVIEW_BAR_PX = 12; // h-3
const PREVIEW_BAR_SM_PX = 8; // h-2
const PREVIEW_GRID_ICON_PX = 32; // h-8 (bloque superior de cada card del grid 3x)
const PREVIEW_BADGE_W_PX = 80; // w-20
const PREVIEW_BADGE_H_PX = 20; // h-5
const PREVIEW_DOT_PX = 8; // size-2
const PREVIEW_TOPBAR_W_PX = 28; // w-7
const PREVIEW_TOPBAR_H_PX = 12; // h-3
const PREVIEW_BOTTOM_H_PX = 32; // h-8 barra inferior

const DECORATIVE_RINGS = [
  { radiusPx: 250, opacity: 0.08 },
  { radiusPx: 380, opacity: 0.05 },
];

// Helper para no repetir clamp(min, Xcqw, max) en cada estilo
const fluid = (px, minRatio = 0.5) =>
  `clamp(${Math.round(px * minRatio)}px, ${cw(px)}cqw, ${px}px)`;

const OrbitalPreview = () => {
  const total = functionsOrbitData.length;

  return (
    <div className="relative flex justify-center my-8">
      <div className="relative w-full max-w-[760px] aspect-[16/14] [container-type:inline-size]">
        <div className="absolute inset-1 bg-[radial-gradient(circle_at_center,rgba(34,197,94,.08),transparent_70%)]" />

        {/* Tarjeta central */}
        <div
          className="
            absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
            w-[36%] aspect-[5/5]
            border border-zinc-700
            bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950
            shadow-[0_20px_70px_rgba(0,0,0,.45)]
            z-30
          "
          style={{
            padding: fluid(PREVIEW_PADDING_PX, 0.4),
            borderRadius: fluid(PREVIEW_RADIUS_PX, 0.45),
          }}
        >
          <div
            className="flex items-center justify-between border-b-zinc-500 border-b-2"
            style={{ paddingBottom: fluid(PREVIEW_BAR_SM_PX, 0.5) }}
          >
            <div className="flex" style={{ gap: fluid(8, 0.5) }}>
              <div
                className="rounded-full bg-zinc-600"
                style={{ width: fluid(PREVIEW_DOT_PX, 0.6), height: fluid(PREVIEW_DOT_PX, 0.6) }}
              />
              <div
                className="rounded-full bg-zinc-600"
                style={{ width: fluid(PREVIEW_DOT_PX, 0.6), height: fluid(PREVIEW_DOT_PX, 0.6) }}
              />
              <div
                className="rounded-full bg-zinc-600"
                style={{ width: fluid(PREVIEW_DOT_PX, 0.6), height: fluid(PREVIEW_DOT_PX, 0.6) }}
              />
            </div>
            <div className="flex" style={{ gap: fluid(8, 0.5) }}>
              <div
                className="rounded bg-zinc-700"
                style={{ width: fluid(PREVIEW_TOPBAR_W_PX, 0.5), height: fluid(PREVIEW_TOPBAR_H_PX, 0.5) }}
              />
              <div
                className="rounded bg-zinc-700"
                style={{ width: fluid(PREVIEW_TOPBAR_W_PX, 0.5), height: fluid(PREVIEW_TOPBAR_H_PX, 0.5) }}
              />
            </div>
          </div>

          <div className="flex" style={{ gap: fluid(PREVIEW_GAP_PX, 0.4), marginTop: fluid(12, 0.4) }}>
            <div className="w-[42%] aspect-square rounded-xl border border-zinc-700 bg-zinc-800 flex items-center justify-center">
              <IconCV
                className="text-zinc-600"
                style={{ width: fluid(PREVIEW_ICON_BIG_PX, 0.45), height: fluid(PREVIEW_ICON_BIG_PX, 0.45) }}
              />
            </div>
            <div className="flex-1 flex flex-col justify-center">
              <div className="rounded-full bg-zinc-700 w-5/6" style={{ height: fluid(PREVIEW_BAR_PX, 0.5) }} />
              <div
                className="rounded-full bg-zinc-800 w-4/6"
                style={{ height: fluid(PREVIEW_BAR_PX, 0.5), marginTop: fluid(12, 0.4) }}
              />
              <div
                className="rounded-full bg-zinc-800 w-3/6"
                style={{ height: fluid(PREVIEW_BAR_PX, 0.5), marginTop: fluid(8, 0.4) }}
              />
              <div style={{ marginTop: fluid(12, 0.4) }}>
                <div
                  className="rounded-lg bg-green-500/10 border border-green-500/30"
                  style={{ width: fluid(PREVIEW_BADGE_W_PX, 0.5), height: fluid(PREVIEW_BADGE_H_PX, 0.5) }}
                />
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-3"
            style={{ gap: fluid(12, 0.4), marginTop: fluid(12, 0.4) }}
          >
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="rounded-xl border border-zinc-700 bg-zinc-800/80"
                style={{ padding: fluid(8, 0.5) }}
              >
                <div className="rounded bg-zinc-700" style={{ height: fluid(PREVIEW_GRID_ICON_PX, 0.4) }} />
                <div
                  className="rounded bg-zinc-700"
                  style={{ height: fluid(PREVIEW_BAR_SM_PX, 0.5), marginTop: fluid(8, 0.4) }}
                />
                <div
                  className="rounded bg-zinc-700 w-3/4"
                  style={{ height: fluid(PREVIEW_BAR_SM_PX, 0.5), marginTop: fluid(4, 0.4) }}
                />
              </div>
            ))}
          </div>

          <div
            className="justify-center flex flex-col items-center rounded-xl bg-zinc-800 border border-zinc-700"
            style={{ height: fluid(PREVIEW_BOTTOM_H_PX, 0.4), marginTop: fluid(12, 0.4) }}
          >
            <div className="rounded bg-zinc-700 w-3/6" style={{ height: fluid(PREVIEW_BAR_SM_PX, 0.5) }} />
            <div
              className="rounded bg-zinc-700 w-2/6"
              style={{ height: fluid(PREVIEW_BAR_SM_PX, 0.5), marginTop: fluid(4, 0.4) }}
            />
          </div>
        </div>

        <div
          className="text-center"
          style={{ marginTop: `clamp(48px, ${TITLE_MARGIN_CQW}cqw, ${TITLE_MARGIN_PX}px)` }}
        >
          <h3 className="text-xl sm:text-2xl font-bold text-white">Diseño elegido</h3>
        </div>

        {/* {DECORATIVE_RINGS.map((ring, i) => (
          <div
            key={`ring-${i}`}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border pointer-events-none z-10"
            style={{
              width: `${cw(ring.radiusPx) * 2}cqw`,
              height: `${cw(ring.radiusPx) * 2}cqw`,
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
                  "--radius": `clamp(78px, ${MAIN_ORBIT_RADIUS_CQW}cqw, ${MAIN_ORBIT_RADIUS_PX}px)`,
                }}
              >
                <div
                  className="
                    absolute -translate-x-1/2 -translate-y-1/2
                    pointer-events-auto
                    flex flex-row items-center justify-center gap-1
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
                  style={{
                    width: `clamp(84px, ${CARD_WIDTH_CQW}cqw, ${CARD_WIDTH_PX}px)`,
                    height: `clamp(48px, ${CARD_HEIGHT_CQW}cqw, ${CARD_HEIGHT_PX}px)`,
                  }}
                >
                  <Icon
                    className="text-green-400 shrink-0"
                    style={{
                      width: `clamp(20px, ${ICON_SIZE_CQW}cqw, ${ICON_SIZE_PX}px)`,
                      height: `clamp(20px, ${ICON_SIZE_CQW}cqw, ${ICON_SIZE_PX}px)`,
                    }}
                  />
                  <span className="text-[10px] sm:text-xs text-zinc-300 font-semibold text-center leading-tight">
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