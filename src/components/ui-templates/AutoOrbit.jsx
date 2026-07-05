"use client";

import { OrbitControls } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useEffect } from "react";

export default function Controls() {
  const controls = useRef();

  const dragging = useRef(false);
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);

  useEffect(() => {
    const c = controls.current;

    const start = () => {
      dragging.current = true;
    };

    const end = () => {
      dragging.current = false;

      // Continúa desde donde el usuario dejó la cámara
      targetAngle.current = c.getAzimuthalAngle();
    };

    c.addEventListener("start", start);
    c.addEventListener("end", end);

    return () => {
      c.removeEventListener("start", start);
      c.removeEventListener("end", end);
    };
  }, []);

  useFrame((state, delta) => {
    if (!controls.current) return;

    // Mientras el usuario mueve el mouse
    if (dragging.current) {
      currentAngle.current = controls.current.getAzimuthalAngle();
      return;
    }

    // Movimiento tipo péndulo
    targetAngle.current += delta * 0.18;

    const desired =
      Math.sin(targetAngle.current) * 0.4;

    // Lerp para que nunca sea brusco
    currentAngle.current +=
      (desired - currentAngle.current) * 0.04;

    controls.current.setAzimuthalAngle(currentAngle.current);

    controls.current.update();
  });

  return (
    <OrbitControls
      ref={controls}
      enableZoom={false}
      enablePan={false}

      enableDamping
      dampingFactor={0.08}
      rotateSpeed={0.7}

      minPolarAngle={Math.PI / 2.3}
      maxPolarAngle={Math.PI / 2.3}

      minAzimuthAngle={-0.4}
      maxAzimuthAngle={0.4}
    />
  );
}