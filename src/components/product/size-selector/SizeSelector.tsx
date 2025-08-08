"use client";

import { Size } from "@/interfaces";
import clsx from "clsx";

interface Props {
    selectedSize?: Size;
    availableSizes: Size[];
    onSizeChanged: (sie: Size) => void;
}

export const SizeSelector = ({ availableSizes, selectedSize,onSizeChanged }: Props) => {
    return (
        <div className="my-5">
            <h3 className="font-bold mb-4">Tallas disponibles</h3>

            <div className="flex">
                {availableSizes.map((size) => (
                    <button
                        key={size}
                        onClick={() => onSizeChanged(size)}
                        className={clsx(
                            "w-12 h-12 flex justify-center items-center text-sm font-semibold rounded-lg mx-1 transition-all duration-300 border",
                            {
                                "bg-gray-100 text-[var(--foreground-rgb)] border-[var(--primary)]":
                                    selectedSize === size,
                                "bg-white text-gray-600 hover:bg-gray-200 border-gray-400":
                                    selectedSize !== size,
                            }
                        )}
                    >
                        {size}
                    </button>
                ))}
            </div>
        </div>
    );
};
