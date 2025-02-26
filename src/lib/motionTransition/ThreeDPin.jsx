"use client";

import { motion } from "framer-motion";

const ThreeDPin = ({ children, className = "" }) => {
  return (
    <motion.div
      initial={{ rotateX: 0 }}
      whileHover={{ rotateX: -40 }} // Inclina hacia atrás 30°
      transition={{ type: "spring", stiffness: 120, damping: 10 }}
      className={`relative rounded-xl shadow-lg cursor-pointer transform-gpu ${className}`}
      style={{ transformStyle: "preserve-3d", willChange: "transform" }}
    >
      {children}
    </motion.div>
  );
};

export default ThreeDPin;
