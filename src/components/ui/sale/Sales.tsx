"use client";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { titleFont } from "@/config/fonts";
import { FiChevronLeft, FiChevronRight, FiSearch, FiX } from "react-icons/fi";
import type { NavigationOptions } from "swiper/types";
import { Button } from "../button/Button";
import { Preview } from "@/components/viewPreview/Preview";


interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    link: string;
}

const products: Product[] = [
    { id: 1, name: "Blusa Dora - Vino", price: "50.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 2, name: "Blusa Susy - Verde", price: "135.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 3, name: "Blusa Enriqueta - Burdeo", price: "150.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 4, name: "Blusa Marisa - Marrón", price: "155.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 5, name: "Blusa Enriqueta - Burdeo", price: "150.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 6, name: "Blusa Marisa - Marrón", price: "155.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 7, name: "Blusa Enriqueta - Burdeo", price: "150.00", image: "/images/ropa/sale.webp", link: "#" },
    { id: 8, name: "Blusa Marisa - Marrón", price: "155.00", image: "/images/ropa/sale.webp", link: "#" },
];



export const Sales = () => {

    const prevRef = useRef<HTMLButtonElement | null>(null);
    const nextRef = useRef<HTMLButtonElement | null>(null);
    const swiperRef = useRef<SwiperCore | null>(null);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    useEffect(() => {
        if (
            swiperRef.current &&
            prevRef.current &&
            nextRef.current &&
            swiperRef.current.params.navigation
        ) {
            const navigation = swiperRef.current.params.navigation as NavigationOptions;
            navigation.prevEl = prevRef.current;
            navigation.nextEl = nextRef.current;
            swiperRef.current.navigation.destroy();
            swiperRef.current.navigation.init();
            swiperRef.current.navigation.update();
        }
    }, []);

    const openModal = (product: Product) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setSelectedProduct(null);
    };

    return (
        <div className="relative">
            <div>
                <h2 className="text-3xl font-bold text-[rgb(var(--foreground-rgb))] text-center mb-8">
                    Nuestras Mejores Prendas
                </h2>

                <Swiper className="">


                    {products.map((product) => (
                        <SwiperSlide key={product.id} className="flex flex-col">

                            <div className="relative group w-full h-[700px] overflow-hidden rounded-xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                                    width={600}
                                    height={600}
                                />

                                {/* Overlay - Botón lupa y texto */}
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileHover={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    className="absolute inset-0 flex items-end justify-center mb-3"
                                >
                                    <div className="bg-white/90 px-4 py-2 rounded-full shadow-xl hover:shadow-2xl hover:scale-105 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300">
                                        <button
                                            onClick={() => openModal(product)}
                                            className="flex items-center gap-2"
                                        >
                                            <FiSearch className="text-green-700 text-xl" />
                                            <span className="text-green-700 text-sm font-medium">Vista rápida</span>
                                        </button>
                                    </div>
                                </motion.div>
                            </div>

                            {/* Nombre y precio */}
                            <div className="p-4 text-center">
                                <a
                                    href={product.link}
                                    className={`text-lg font-semibold text-[rgb(var(--foreground-rgb))] hover:underline ${titleFont.className}`}
                                >
                                    {product.name}
                                </a>
                                <p className={`text-gray-600 ${titleFont.className}`}>S/. {product.price}</p>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    )
}
