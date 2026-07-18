"use client";

const FunctionCard = ({ item }) => {
  const Icon = item.icon;

  return (
    <div
      className="
        group
        rounded-2xl sm:rounded-3xl
        border border-zinc-800
        bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-950
        backdrop-blur-xl
        p-3.5 sm:p-5
        transition-all duration-500
        hover:-translate-y-2
        hover:shadow-[0_0_55px_rgba(34,197,94,.25)]
      "
    >
      {/* Icono */}
      <div
        className="
          w-11 h-11 sm:w-14 sm:h-14 lg:w-16 lg:h-16
          rounded-xl sm:rounded-2xl
          bg-green-500/10
          border border-green-500/20
          flex items-center justify-center
          text-green-400
          transition-all duration-500
          group-hover:scale-110
          group-hover:bg-green-500/15
        "
      >
        <Icon className="size-5 sm:size-7 lg:size-8" />
      </div>

      {/* Título */}
      <h3 className="mt-3 sm:mt-4 text-white text-base sm:text-xl lg:text-2xl font-semibold leading-snug">
        {item.title}
      </h3>

      {/* Descripción */}
      <p className="mt-2 sm:mt-4 text-zinc-400 text-xs sm:text-sm lg:text-base leading-5 sm:leading-6">
        {item.description}
      </p>

      {/* Link */}
      <button
        className="
          mt-3 sm:mt-4
          flex items-center gap-1.5 sm:gap-2
          text-green-400
          text-sm sm:text-base
          font-medium
          transition-all duration-300
          group-hover:gap-3 sm:group-hover:gap-4
        "
      >
        Ver más
        <span className="transition-transform duration-300 group-hover:translate-x-1">
          →
        </span>
      </button>
    </div>
  );
};

export default FunctionCard;