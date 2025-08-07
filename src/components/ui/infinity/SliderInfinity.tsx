"use client";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import {
  FaStar,
  FaShippingFast,
  FaLeaf,
  FaGem,
  FaSmile,
} from "react-icons/fa";

interface Slide {
  text: string;
  icon: React.ComponentType<{ className?: string }>;
}

const slides: Slide[] = [
  { text: "¡STOCK LIMITADO DE PRENDAS EXCLUSIVAS", icon: FaStar },
  { text: "ENVÍOS RÁPIDOS A TODO PERÚ", icon: FaShippingFast },
  { text: "MODA CON IDENTIDAD Y ESTILO", icon: FaLeaf },
  { text: "CALIDAD PREMIUM EN CADA DETALLE", icon: FaGem },
  { text: "¡CLIENTAS FELICES NOS INSPIRAN!", icon: FaSmile },
];

export const SliderInfinity = () => {
  const pathname = usePathname();

  if (pathname !== "/") return null;

  const duplicatedSlides = [...slides, ...slides];

  return (
    <div className="relative w-full overflow-hidden">
      <motion.div
        className="flex py-1 whitespace-nowrap"
        animate={{
          x: ["-100%", "0%"],
          transition: {
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          },
        }}
      >
        {duplicatedSlides.map((slide, index) => (
          <div
            key={index}
            className="flex-shrink-0 flex items-center justify-center py-1 mx-2" /* Added mx-2 for spacing */
            style={{ width: `${100 / slides.length}%`, minWidth: "240px" }}
          >
            <div className="flex items-center justify-center h-full text-center gap-2">
              <slide.icon className="text-[var(--primary)] w-6 h-6" />
              <span className="text-[var(--primary)] text-[12px] font-bold whitespace-nowrap overflow-hidden text-ellipsis">
                {slide.text}
              </span>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  );
};