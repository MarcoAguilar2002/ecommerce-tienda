"use client"
import React from "react";
import clsx from "clsx";
import { Color } from "@/interfaces";

interface Props {
    colors: Color[];
    selectedColor?: Color;
    onColorChanged: (color: Color) => void;
}

export const ColorSelector: React.FC<Props> = ({
    colors,
    selectedColor,
    onColorChanged
}) => {
    return (
        <div className="flex flex-wrap gap-2 my-5">
            {colors.map((color) => {
                const isSelected = selectedColor?.id === color.id;

                return (
                    <button
                        key={color.id}
                        onClick={() => onColorChanged(color)}
                        className={clsx(
                            "w-8 h-8 flex justify-center items-center rounded-lg border transition-all duration-300",
                            {
                                "border-[var(--primary)] scale-105": isSelected,
                                "border-gray-400 hover:bg-gray-100": !isSelected,
                            }
                        )}
                        style={{ backgroundColor: color.hex }}
                        title={color.name}
                    />
                );
            })}
        </div>
    );
};
