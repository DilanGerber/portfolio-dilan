import IconArrowTop from "@/icons/IconArrowTop";
import IconCode from "@/icons/IconCode";
import IconEnergy from "@/icons/IconEnergy";
import IconGitHub from "@/icons/IconGitHub";
import IconCheck from "@/icons/IconCheck";

const CTA = () => {
  return (
    <section
      id="cta"
      className="relative py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Contenedor principal */}

        <div
          className="
            relative
            overflow-hidden

            rounded-[32px]

            border
            border-green-500/20

            bg-gradient-to-b
            from-zinc-900
            via-zinc-900
            to-zinc-950

            px-6
            py-20
            md:px-12
            lg:px-24
          "
        >

          {/* Glow central */}

          <div
            className="
              pointer-events-none
              absolute
              left-1/2
              top-1/2

              h-[500px]
              w-[700px]

              -translate-x-1/2
              -translate-y-1/2

              rounded-full

              bg-green-500/[0.06]

              blur-[120px]
            "
          />

          {/* Decoraciones */}

          <div
            className="
              pointer-events-none
              absolute
              -top-32
              left-1/2

              h-64
              w-64

              -translate-x-1/2

              rounded-full

              border
              border-green-500/10
            "
          />

          <div
            className="
              pointer-events-none
              absolute
              -top-24
              left-1/2

              h-48
              w-48

              -translate-x-1/2

              rounded-full

              border
              border-green-500/10
            "
          />


          <div className="relative z-10 max-w-4xl mx-auto text-center">

            {/* Label */}

            <div
              className="
                inline-flex
                items-center
                gap-2

                rounded-full

                border
                border-green-500/20

                bg-green-500/[0.05]

                px-4
                py-2

                text-sm
                text-green-300
              "
            >
              <IconEnergy className="size-5 text-green-400" />

              <span>
                El siguiente paso empieza contigo
              </span>
            </div>


            {/* Título */}

            <h2
              className="
                mt-8

                text-4xl
                md:text-5xl
                lg:text-6xl

                font-bold
                font-inter

                leading-tight

                text-zinc-100
              "
            >
              ¿Listo para empezar{" "}
              <span
                className="
                  text-transparent
                  bg-clip-text

                  bg-[linear-gradient(30deg,#22c55e,#16a34a,#4ade80,#16a34a,#22c55e)]
                  bg-[length:250%_100%]

                  animate-[gradient_6s_linear_infinite]
                "
              >
                tu proyecto?
              </span>
            </h2>


            {/* Texto */}

            <p
              className="
                mx-auto
                mt-8

                max-w-2xl

                text-base
                md:text-lg

                leading-8

                text-zinc-400
              "
            >
              Has encontrado un diseño que te gusta o tienes una idea
              completamente diferente.
              <br />
              El siguiente paso es convertirla en un proyecto real.
            </p>


            {/* Caminos */}

            <div
              className="
                mt-12

                grid
                md:grid-cols-2

                gap-4

                max-w-2xl
                mx-auto
              "
            >

              {/* Template */}

              <div
                className="
                  group

                  rounded-3xl

                  border
                  border-green-500/20

                  bg-zinc-950/60

                  p-6

                  text-left

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-500/40
                  hover:shadow-[0_0_50px_rgba(34,197,94,.12)]
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      size-10
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-green-500/20

                      bg-green-500/10
                    "
                  >
                    <IconCheck className="size-5 text-green-400" />
                  </div>

                  <div>

                    <p className="text-xs text-zinc-500">
                      Ya elegí un diseño
                    </p>

                    <h3 className="text-lg font-semibold text-zinc-100">
                      Solicitar una propuesta
                    </h3>

                  </div>

                </div>


                <button
                  className="
                    group/button

                    mt-6

                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-green-500/40

                    bg-green-500/10

                    px-5
                    py-3

                    font-semibold

                    text-green-300

                    transition-all
                    duration-300

                    hover:bg-green-500/20
                    hover:text-green-200
                  "
                >
                  Solicitar una propuesta

                  <IconArrowTop
                    className="
                      size-5

                      transition-transform
                      duration-300

                      group-hover/button:-translate-y-1
                      group-hover/button:translate-x-1
                    "
                  />

                </button>

              </div>


              {/* Proyecto personalizado */}

              <div
                className="
                  group

                  rounded-3xl

                  border
                  border-zinc-700

                  bg-zinc-950/60

                  p-6

                  text-left

                  transition-all
                  duration-300

                  hover:-translate-y-1
                  hover:border-green-500/30
                  hover:shadow-[0_0_50px_rgba(34,197,94,.08)]
                "
              >

                <div className="flex items-center gap-3">

                  <div
                    className="
                      flex
                      size-10
                      items-center
                      justify-center

                      rounded-xl

                      border
                      border-zinc-700

                      bg-zinc-800
                    "
                  >
                    <IconCode className="size-5 text-green-400" />
                  </div>

                  <div>

                    <p className="text-xs text-zinc-500">
                      Tengo una idea diferente
                    </p>

                    <h3 className="text-lg font-semibold text-zinc-100">
                      Cuéntame tu proyecto
                    </h3>

                  </div>

                </div>


                <button
                  className="
                    group/button

                    mt-6

                    flex
                    w-full
                    items-center
                    justify-center
                    gap-2

                    rounded-xl

                    border
                    border-zinc-700

                    bg-zinc-800/60

                    px-5
                    py-3

                    font-semibold

                    text-zinc-200

                    transition-all
                    duration-300

                    hover:border-green-500/30
                    hover:bg-zinc-800
                    hover:text-white
                  "
                >
                  Cuéntame tu proyecto

                  <IconArrowTop
                    className="
                      size-5

                      transition-transform
                      duration-300

                      group-hover/button:-translate-y-1
                      group-hover/button:translate-x-1
                    "
                  />

                </button>

              </div>

            </div>


            {/* Seguridad */}

            <div
              className="
                mt-10

                flex
                items-center
                justify-center
                gap-2

                text-sm
                text-zinc-500
              "
            >
              <IconCheck className="size-4 text-green-500" />

              <span>
                Sin compromiso inicial. La primera conversación sirve para
                entender tu proyecto y definir la mejor forma de desarrollarlo.
              </span>

            </div>


            {/* Cierre */}

            <div
              className="
                mt-16
                pt-8

                border-t
                border-zinc-800
              "
            >

              <p
                className="
                  flex
                  items-center
                  justify-center
                  gap-2

                  text-lg
                  md:text-xl

                  font-medium

                  text-zinc-300
                "
              >
                <IconGitHub className="size-5 text-green-400" />

                Toda gran web empieza con una decisión.
              </p>

              <p
                className="
                  mt-2

                  text-lg
                  md:text-xl

                  font-semibold

                  text-zinc-100
                "
              >
                El resto lo construimos juntos.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default CTA;