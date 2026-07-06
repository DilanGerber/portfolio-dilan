"use client";

import React from "react";
import IconBriefcase from "@/icons/IconBriefcase";

const TemplateCard = ({ template }) => {
  return (
    <article
      className="
      group
      rounded-3xl
      border
      border-zinc-800
      bg-zinc-950/60
      backdrop-blur-xl
      overflow-hidden

      transition-all
      duration-500

      hover:-translate-y-2
      hover:border-green-500
      hover:shadow-[0_0_40px_rgba(34,197,94,.15)]
    "
    >
      {/* Preview */}

      <div
        className="
        relative
        aspect-[16/10]

        bg-gradient-to-br
        from-zinc-900
        via-zinc-800
        to-zinc-950

        overflow-hidden
      "
      >
        {/* Glow */}

        <div
          className="
          absolute
          inset-0

          opacity-0

          transition-opacity
          duration-500

          group-hover:opacity-100

          bg-[radial-gradient(circle_at_center,_rgba(34,197,94,.12)_0%,transparent_70%)]
        "
        />

        {/* Desktop Placeholder */}

        <div
          className="
          absolute

          left-1/2
          top-1/2

          -translate-x-1/2
          -translate-y-1/2

          w-[82%]
          h-[72%]

          rounded-xl

          border
          border-zinc-700

          bg-zinc-900

          flex
          items-center
          justify-center
        "
        >
          <span className="text-zinc-500 text-sm">
            Preview del Template
          </span>
        </div>
      </div>

      {/* Content */}

      <div className="p-7 space-y-5">
        <div>
          <h3 className="text-2xl font-semibold text-white">
            {template.name}
          </h3>

          <p className="text-zinc-500 mt-1">
            {template.description}
          </p>
        </div>

        {/* Badges */}

        <div className="flex flex-wrap gap-2">
          {template.badges.map((badge) => (
            <span
              key={badge}
              className="
              rounded-full
              border
              border-green-500/20

              bg-green-500/5

              px-3
              py-1

              text-xs

              text-green-300
            "
            >
              {badge}
            </span>
          ))}
        </div>

        {/* Footer */}

        <div className="flex justify-between items-center pt-2">
          <div>
            <p className="text-zinc-500 text-sm">
              Desde
            </p>

            <span className="text-white text-xl font-bold">
              ${template.price}
            </span>
          </div>

          <button
            className="
            flex
            items-center
            gap-2

            text-green-400

            transition-all

            group-hover:gap-3
          "
          >
            Ver Demo

            <IconBriefcase
              size={18}
              className="transition-transform group-hover:rotate-45"
            />
          </button>
        </div>
      </div>
    </article>
  );
};

export default TemplateCard;