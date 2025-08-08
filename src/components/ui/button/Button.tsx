"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import clsx from "clsx";

interface ButtonProps {
    children: React.ReactNode;
    className?: string;
    fullWidth?: boolean;
    href?: string; // si existe, se comporta como Link
    onClick?: () => void; // si existe, se comporta como botón
    type?: "button" | "submit" | "reset"; // tipo de botón para formularios
}

export const Button = ({
    children,
    className = "",
    fullWidth = false,
    href,
    onClick,
    type = "button",
}: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    const baseStyles = clsx(
        "relative overflow-hidden inline-block px-6 py-3 rounded-md font-semibold border z-10",
        "border-[var(--primary)]",
        fullWidth ? "w-full" : "w-fit"
    );

    const styleColors = {
        backgroundColor: hovered ? "#ffffff" : "var(--primary)",
        color: hovered ? "var(--primary)" : "#ffffff",
        transition: "color 0.3s ease, background-color 0.3s ease",
    };

    const content = (
        <motion.div
            onHoverStart={() => setHovered(true)}
            onHoverEnd={() => setHovered(false)}
            className={baseStyles}
            style={styleColors}
        >
            <motion.div
                initial={{ height: 0 }}
                animate={{ height: hovered ? "100%" : 0 }}
                transition={{ duration: 0.3 }}
                className="absolute top-0 left-0 w-full bg-white z-0"
            />
            <span className="relative z-10">{children}</span>
        </motion.div>
    );

    if (href) {
        // 📌 Si hay href => Link
        return (
            <Link href={href} className={clsx("inline-block text-center", fullWidth && "w-full", className)}>
                {content}
            </Link>
        );
    }

    // 📌 Si no hay href => Button nativo
    return (
        <button
            type={type}
            onClick={onClick}
            className={clsx("inline-block text-center", fullWidth && "w-full", className)}
        >
            {content}
        </button>
    );
};
