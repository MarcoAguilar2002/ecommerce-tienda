"use client";
import { Collection as CollectionProps } from "@/interfaces/collection";
import Image from "next/image";
import Link from "next/link";

export const Collection = ({ description, img, name, slug }: CollectionProps) => {
  return (
    <Link href={slug} className="block w-full group">
      <div className="relative w-full h-[700px] overflow-hidden rounded-xl transform transition-transform duration-300 group-hover:scale-[1.03]">
        <Image
          src={img}
          alt={name}
          className="w-full h-full object-cover"
          width={500}
          height={600}
        />
        <div className="absolute inset-x-0 bottom-0 bg-[#cac1c0] bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 p-4 rounded-b-xl mb-4 mx-3">
          <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
            {name}
          </h3>
        </div>
      </div>
    </Link>
  );
};
