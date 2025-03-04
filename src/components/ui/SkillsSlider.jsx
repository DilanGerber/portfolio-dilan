"use client";

import { technologyIcons } from "@/lib/technologyIcons";
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

  const animationTop = {
    x: ["0%", "-50%"],
    transition: { repeat: Infinity, duration: 8, ease: "linear" }
  };

  const animationBottom = {
    x: ["-50%", "0%"],
    transition: { repeat: Infinity, duration: 8, ease: "linear" }
  };

  return (
    <div className="w-full overflow-hidden py-10 bg-zinc-900">
      {/* Primera fila */}
      <div
        className="relative flex w-full overflow-hidden"
        onMouseEnter={() => controlsTop.pause()}
        onMouseLeave={() => controlsTop.play()}
      >
        <motion.div animate={controlsTop} initial={animationTop} className="flex space-x-10 min-w-max">
          {[...topRow, ...topRow].map((tech, index) => (
            <img key={index} src={technologyIcons[tech]} alt={tech} className="w-16 h-16" />
          ))}
        </motion.div>
      </div>

      {/* Segunda fila */}
      <div
        className="relative flex w-full overflow-hidden mt-6"
        onMouseEnter={() => controlsBottom.pause()}
        onMouseLeave={() => controlsBottom.play()}
      >
        <motion.div animate={controlsBottom} initial={animationBottom} className="flex space-x-10 min-w-max">
          {[...bottomRow, ...bottomRow].map((tech, index) => (
            <img key={index} src={technologyIcons[tech]} alt={tech} className="w-16 h-16" />
          ))}
        </motion.div>
      </div>
    </div>
  );
}