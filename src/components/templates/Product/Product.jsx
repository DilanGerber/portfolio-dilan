"use client";

import React from "react";
import IconBriefcase from "@/icons/IconBriefcase";
import templatesData from "./templatesData";
import TemplateCard from "./TemplateCard";

const Product = () => {
  return (
    <section
      id="product"
      className="relative py-36"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}

      <h2 className=" font-inter text-zinc-100 flex flex-row gap-3 justify-center items-center">
        <span className='text-2xl sm:text-3xl lg:text-4xl font-bold'>Plantillas destacadas</span> 
        <IconBriefcase className=' size-6 sm:size-8 lg:size-10' />
      </h2>

      <p className=" text-center font-inter text-sm md:text-lg text-gray-300 mt-2">Diseños seleccionados para inspirarte y acelerar tu próximo proyecto</p>

      <div className="flex items-center justify-center">
        <button
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

        <div className="grid md:grid-cols-2 gap-8 mt-20">

          {templatesData.map((template) => (
            <TemplateCard
              key={template.id}
              template={template}
            />
          ))}

        </div>

      </div>
    </section>
  );
};

export default Product;    