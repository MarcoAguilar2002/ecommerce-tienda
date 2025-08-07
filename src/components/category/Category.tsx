"use client";

import { Category as CategoryProps } from "@/interfaces/category";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { titleFont } from "@/config/fonts";

export const Category = ({ img, name, slug }: CategoryProps) => {
  return (
    <Link href={slug} className="block w-full">
      <div className="flex flex-col items-start">
        <motion.div className="overflow-hidden rounded-lg w-full aspect-[3/4]">
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              alt={name}
              src={img}
              fill
              className="object-cover rounded-lg"
              sizes="(max-width: 768px) 100vw, 450px"
            />
          </motion.div>
        </motion.div>

        <p className={`mt-2 font-semibold text-lg ${titleFont.className}`}>{name}</p>
      </div>
    </Link>
  );
};
