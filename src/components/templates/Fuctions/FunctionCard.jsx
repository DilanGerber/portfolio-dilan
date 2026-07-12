"use client";

const FunctionCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group

        rounded-3xl

        border
        border-zinc-800

        bg-zinc-900/70

        backdrop-blur-xl

        p-5

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-green-500/30
        hover:shadow-[0_0_40px_rgba(34,197,94,.10)]
      "
    >
      {/* Icono */}

      <div
        className="
          w-16
          h-16

          rounded-2xl

          bg-green-500/10

          border
          border-green-500/20

          flex
          items-center
          justify-center

          text-green-400

          transition-all
          duration-500

          group-hover:scale-110
          group-hover:bg-green-500/15
        "
      >
        <Icon className="size-8" />
      </div>

      {/* Título */}

      <h3
        className="
          mt-4

          text-white

          text-2xl

          font-semibold
        "
      >
        {item.title}
      </h3>

      {/* Descripción */}

      <p
        className="
          mt-4

          text-zinc-400

          leading-6
        "
      >
        {item.description}
      </p>

      {/* Link */}

      <button
        className="
          mt-4

          flex
          items-center
          gap-2

          text-green-400

          font-medium

          transition-all
          duration-300

          group-hover:gap-4
        "
      >
        Ver más

        <span
          className="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          →
        </span>
      </button>
    </div>
  );
};

export default FunctionCard;