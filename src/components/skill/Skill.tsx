import { motion, useAnimation } from 'framer-motion';
import { useState } from 'react';

interface Props {
  title: string;
  text: string;
  icon: React.ReactNode;
}

export const Skill = ({ title, text, icon }: Props) => {
  const controls = useAnimation();

  return (
    <motion.div
      className="rounded-lg text-center bg-[#e7e7e6] p-4 relative transition-colors duration-300"
      onHoverStart={() =>
        controls.start({
          y: [0, -10, 0],
          transition: {
            duration: 0.8,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        })
      }
      onHoverEnd={() => controls.stop()}
    >
      <div className="flex justify-center">
        <motion.div className="inline-block" animate={controls}>
          {icon}
        </motion.div>
      </div>
      <p className="mt-2 text-lg font-semibold">{title}</p>
      <p className="text-sm">{text}</p>
    </motion.div>
  );
};
