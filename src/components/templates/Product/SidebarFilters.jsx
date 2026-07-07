"use client";

import SearchBar from "./SearchBar";

const FilterSection = ({ title, children }) => (
  <div className=" border-zinc-800 pb-1">
    <h3 className="text-white font-semibold mb-5">
      {title}
    </h3>

    {children}
  </div>
);

const SidebarFilters = ({
  filters,
  setFilters,
}) => {
  const niches = [
    "Todos",
    "Marketing",
    "Cowork",
    "Portfolio",
    "Dentistas",
    "Inmobiliaria",
  ];

  return (
    <aside
      className="
        
        top-28

        h-fit

        rounded-3xl

        border
        border-zinc-800

        bg-zinc-950/70

        backdrop-blur-xl

        p-4

        space-y-4
      "
    >

      <SearchBar
        value={filters.search}
        onChange={(e) =>
          setFilters({
            ...filters,
            search: e.target.value,
          })
        }
      />

      <FilterSection title="Nicho">

        <div className="space-y-4">

          {niches.map((item) => (

            <label
              key={item}
              className="
                flex
                items-center
                gap-3

                cursor-pointer

                text-zinc-400

                hover:text-white

                transition-colors
              "
            >

              <input
                type="radio"
                name="niche"
                value={item}
                checked={
                  filters.niche === item ||
                  (filters.niche === "" && item === "Todos")
                }
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    niche:
                      e.target.value === "Todos"
                        ? ""
                        : e.target.value,
                  })
                }
                className="accent-green-500"
              />

              {item}

            </label>

          ))}

        </div>

      </FilterSection>

    </aside>
  );
};

export default SidebarFilters;