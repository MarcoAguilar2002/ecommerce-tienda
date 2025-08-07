"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
}

export const Button = ({ children, className = "", fullWidth = false }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div
            className={clsx(
                "relative inline-block text-center cursor-pointer",
                fullWidth ? "w-full" : "w-fit", // <-- cambia según prop
                className
            )}
        >
            <motion.a
                onHoverStart={() => setHovered(true)}
                onHoverEnd={() => setHovered(false)}
                className={clsx(
                    "relative overflow-hidden inline-block px-6 py-3 rounded-md font-semibold border z-10 w-full",
                    "border-[var(--primary)]",
                    !fullWidth && "w-fit"
                )}
                style={{
                    backgroundColor: hovered ? "#ffffff" : "var(--primary)",
                    color: hovered ? "var(--primary)" : "#ffffff",
                    transition: "color 0.3s ease, background-color 0.3s ease",
                }}
            >
                {/* Fondo animado de arriba hacia abajo */}
                <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: hovered ? "100%" : 0 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 left-0 w-full bg-white z-0"
                />

                {/* Texto por encima del fondo */}
                <span className="relative z-10">{children}</span>
            </motion.a>
        </div>
    );
};
