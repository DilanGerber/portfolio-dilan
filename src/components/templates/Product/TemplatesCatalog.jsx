"use client";

import { useMemo, useState } from "react";

import SidebarFilters from "./SidebarFilters";
import TemplateCard from "./TemplateCard";
import FilterSelect from "./FilterSelect";
import templatesData from "./templatesData";
import IconGitHub from "@/icons/IconGitHub";

const TemplatesCatalog = () => {
  const [filters, setFilters] = useState({
    search: "",
    niche: "",
    style: "",
    complexity: "",
    animation: "",
    feature: "",
    sort: "",
  });

  const styles = [
    "Minimalista",
    "Glass",
    "Luxury",
    "Corporate",
    "Dark",
    "Cyber",
  ];

  const complexities = [
    "Simple",
    "Premium",
    "Muy Premium",
  ];

  const animations = [
    "GSAP",
    "Parallax",
    "Scroll",
    "Hover",
    "3D",
  ];

  const features = [
    "CMS",
    "Blog",
    "Dashboard",
    "Reservas",
    "Tienda",
  ];

  const sortOptions = [
    "Más recientes",
    "Más populares",
    "Precio menor",
    "Precio mayor",
  ];

  const filteredTemplates = useMemo(() => {
    return templatesData.filter((template) =>
      template.name
        .toLowerCase()
        .includes(filters.search.toLowerCase())
    );
  }, [filters]);

  return (
    <div className="max-w-7xl mx-auto px-6 mt-20">

          <h2 className="text-lg lg:text-4xl font-bold font-inter mt-12 mb-4 flex flex-row gap-2 md:gap-4 items-center">
            <IconGitHub className="size-8 md:size-10" /> Explorar todas las plantillas
          </h2>
          <p className="font-inter text-sm md:text-lg text-gray-300 mb-8">
            Filtra y encuentra un diseño perfecto para tu negoco
          </p>

      <div className="grid lg:grid-cols-[260px_1fr] gap-4">

        <SidebarFilters
          filters={filters}
          setFilters={setFilters}
        />

        <div>

          <div className="flex flex-wrap justify-between gap-4">

            <div className="flex flex-wrap gap-3">

              <FilterSelect
                label="Estilo"
                value={filters.style}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    style: e.target.value,
                  })
                }
                options={styles}
              />

              <FilterSelect
                label="Complejidad"
                value={filters.complexity}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    complexity: e.target.value,
                  })
                }
                options={complexities}
              />

              <FilterSelect
                label="Animaciones"
                value={filters.animation}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    animation: e.target.value,
                  })
                }
                options={animations}
              />

              <FilterSelect
                label="Características"
                value={filters.feature}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    feature: e.target.value,
                  })
                }
                options={features}
              />

            </div>

            <FilterSelect
              label="Ordenar"
              value={filters.sort}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sort: e.target.value,
                })
              }
              options={sortOptions}
            />

          </div>

          {/* <div className="flex justify-between items-center mt-8 mb-10">

            <p className="text-zinc-500">
              Mostrando{" "}
              <span className="text-white font-semibold">
                {filteredTemplates.length}
              </span>{" "}
              templates
            </p>

          </div> */}

          <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4 mt-4">

            {filteredTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
              />
            ))}

          </div>

        </div>

      </div>

    </div>
  );
};

export default TemplatesCatalog;