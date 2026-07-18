"use client";

import { useState } from "react";

import IconAbility from "@/icons/IconAbility";
import faqsData from "./faqsData";
import IconGitHub from "@/icons/IconGitHub";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="relative py-16 sm:py-20 lg:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex justify-center mb-4 sm:mb-5">
            <IconAbility className="size-8 sm:size-9 lg:size-10 text-green-400" />
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-inter text-zinc-100 leading-tight">
            Preguntas{" "}
            <span
              className="
                text-transparent
                bg-clip-text
                bg-[linear-gradient(30deg,#22c55e,#16a34a,#4ade80,#16a34a,#22c55e)]
                bg-[length:250%_100%]
                animate-[gradient_6s_linear_infinite]
              "
            >
              frecuentes
            </span>
          </h2>

          <p className="text-zinc-400 text-base sm:text-lg leading-7 sm:leading-8 mt-6 sm:mt-8">
            Todo lo que necesitas saber antes de comenzar a construir tu
            proyecto.
          </p>
        </div>

        {/* FAQs */}
        <div className="mt-8 space-y-3 sm:space-y-4">
          {faqsData.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className={`
                  rounded-2xl sm:rounded-3xl
                  border
                  overflow-hidden
                  transition-all
                  duration-500
                  ${
                    isOpen
                      ? "border-green-500/40 bg-green-500/[0.04] shadow-[0_0_50px_rgba(34,197,94,.08)]"
                      : "border-zinc-800 bg-zinc-900/60 hover:border-green-500/30"
                  }
                `}
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    w-full
                    flex items-center justify-between
                    gap-3 sm:gap-4 lg:gap-6
                    px-4 sm:px-5 lg:px-6
                    py-4 sm:py-5 lg:py-6
                    text-left
                    group
                  "
                >
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div
                      className={`
                        flex items-center justify-center
                        size-7 sm:size-8
                        rounded-xl
                        border
                        shrink-0
                        transition-all duration-300
                        ${
                          isOpen
                            ? "border-green-500/40 bg-green-500/10"
                            : "border-zinc-700 bg-zinc-800/80 group-hover:border-green-500/30"
                        }
                      `}
                    >
                      <span
                        className={`
                          text-xs sm:text-sm
                          font-semibold
                          transition-colors duration-300
                          ${
                            isOpen
                              ? "text-green-400"
                              : "text-zinc-500 group-hover:text-green-400"
                          }
                        `}
                      >
                        {String(index + 1).padStart(2)}
                      </span>
                    </div>

                    <span
                      className={`
                        text-sm sm:text-base md:text-lg
                        font-semibold
                        transition-colors duration-300
                        ${
                          isOpen
                            ? "text-zinc-100"
                            : "text-zinc-300 group-hover:text-zinc-100"
                        }
                      `}
                    >
                      {faq.question}
                    </span>
                  </div>

                  {/* Plus */}
                  <div
                    className={`
                      size-7 sm:size-8
                      rounded-full
                      border
                      flex items-center justify-center
                      shrink-0
                      transition-all duration-300
                      ${
                        isOpen
                          ? "rotate-45 border-green-500/40 bg-green-500/10 text-green-400"
                          : "border-zinc-700 text-zinc-500 group-hover:border-green-500/30 group-hover:text-green-400"
                      }
                    `}
                  >
                    <span className="block text-lg sm:text-xl font-light leading-none -translate-y-[1px]">
                      +
                    </span>
                  </div>
                </button>

                {/* Answer */}
                <div
                  className={`
                    grid
                    transition-all duration-500 ease-in-out
                    ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }
                  `}
                >
                  <div className="overflow-hidden">
                    <div
                      className="
                        px-4 sm:px-5 lg:px-6
                        pb-4 sm:pb-5 lg:pb-6
                        pl-12 sm:pl-14 lg:pl-[5.25rem]
                        text-zinc-400
                        text-sm md:text-base
                        leading-7 sm:leading-8
                      "
                    >
                      {faq.answer}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom message */}
        <div className="mt-10 sm:mt-12 lg:mt-16 flex justify-center px-2">
          <p
            className="
              max-w-3xl
              text-center
              text-zinc-400
              text-sm md:text-base
              leading-7 sm:leading-8
              flex flex-row items-center gap-2
            "
          >
            <IconGitHub className="text-green-400 size-5 sm:size-6 flex-shrink-0" />
            ¿Todavía tienes alguna duda? No hay problema. Durante la
            planificación revisaremos juntos todos los detalles de tu proyecto
            antes de comenzar el desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQs;