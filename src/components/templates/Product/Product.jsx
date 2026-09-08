"use client";

import React from "react";
import IconBriefcase from "@/icons/IconBriefcase";
import templatesData from "./templatesData";
import TemplateCard from "./TemplateCard";
import TemplatesCatalog from "./TemplatesCatalog";

const Product = () => {
  const handleSmoothScroll = (id) => {
  const section = document.getElementById(id);

  if (section) {
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <section
      id="product"
      className="relative py-24"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center max-w-4xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-5">
            <IconBriefcase className="size-8 sm:size-9 lg:size-10 text-green-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">
            Plantillas{" "}
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
              destacadas
            </span>
          </h2>

          <p className="text-center font-inter text-sm sm:text-base md:text-lg text-gray-300 mt-6 sm:mt-8">
            Diseños seleccionados para inspirarte y acelerar tu próximo proyecto
          </p>
        </div>

      <div className="flex items-center justify-center">
        <button
        onClick={() => handleSmoothScroll("all")}
            className="
            text-green-400

            hover:text-green-300

            transition-colors
          "
          >
            Ver todas →
          </button>
      </div>

        {/* Grid */}

        <div className="grid md:grid-cols-3 gap-8 mt-8">

          {templatesData.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
            />
          ))}

        </div>

      </div>
      <TemplatesCatalog />
    </section>
  );
};

export default Product;      