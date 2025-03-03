"use client"

import { technologyIcons } from "@/lib/technologyIcons";
import { useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";

const skills = [
    "Redux", "Prisma", "PostgreSQL", "Firebase", "Docker",
    "Vercel", "Railway", "Postman", "Figma", "Framer Motion",
    "Git", "Python", "TypeScript", "OAuth", "JWT",
    "MySQL", "React", "Nodemailer", "Auth.js", "ShadCN"
  ];
  
  const splitIndex = Math.ceil(skills.length / 2);
  const topRow = skills.slice(0, splitIndex);
  const bottomRow = skills.slice(splitIndex);
  

export default function SkillsSlider() {
    const controlsTop = useAnimation();
    const controlsBottom = useAnimation();
    const topRef = useRef(null);
    const bottomRef = useRef(null);
  
    useEffect(() => {
      const startAnimation = async () => {
        await controlsTop.start({ x: [0, "-100%"], transition: { repeat: Infinity, duration: 10, ease: "linear" } });
        await controlsBottom.start({ x: ["-100%", 0], transition: { repeat: Infinity, duration: 10, ease: "linear" } });
      };
      startAnimation();
    }, [controlsTop, controlsBottom]);
  
    return (
      <div className="w-full overflow-hidden py-10 bg-zinc-900">
        {/* Primera fila */}
        <div
          ref={topRef}
          className="flex w-max space-x-10"
          onMouseEnter={() => controlsTop.stop()}
          onMouseLeave={() => controlsTop.start({ x: [0, "-100%"], transition: { repeat: Infinity, duration: 10, ease: "linear" } })}
        >
          <motion.div animate={controlsTop} className="flex space-x-10">
            {[...topRow, ...topRow].map((tech, index) => (
              <img key={index} src={technologyIcons[tech]} alt={tech} className="w-12 h-12" />
            ))}
          </motion.div>
        </div>
  
        {/* Segunda fila */}
        <div
          ref={bottomRef}
          className="flex w-max space-x-10 mt-6"
          onMouseEnter={() => controlsBottom.stop()}
          onMouseLeave={() => controlsBottom.start({ x: ["-100%", 0], transition: { repeat: Infinity, duration: 10, ease: "linear" } })}
        >
          <motion.div animate={controlsBottom} className="flex space-x-10">
            {[...bottomRow, ...bottomRow].map((tech, index) => (
              <img key={index} src={technologyIcons[tech]} alt={tech} className="w-12 h-12" />
            ))}
          </motion.div>
        </div>
      </div>
    );
  };