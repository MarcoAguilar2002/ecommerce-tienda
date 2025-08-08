"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { titleFont } from "@/config/fonts";
import { FiTrash2, FiEdit2 } from "react-icons/fi";


export const DetailsCheckout = () => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 shadow rounded-lg space-y-4">
            <div className="flex items-center justify-between ">
                <h2 className="text-lg sm:text-xl font-semibold">Resumen del pedido</h2>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">(2 <span>productos</span>)</h2>
            </div>

            <div className="">
                <Link href="/" className="text-[var(--primary)]  text-sm sm:text-base hover:underline flex items-center hover:font-semibold gap-2">
                    <FiEdit2 /> Editar compra
                </Link>
            </div>

            <div className="border-t pt-4">
                {/* Header para pantallas grandes */}
                <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:gap-4 font-semibold ">
                    <p>Producto</p>
                    <p className="text-center">Cantidad</p>
                    <p className="text-right">Subtotal</p>
                </div>

                {/* Fila de producto */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-4 items-center">
                    <div className="flex items-center gap-4 relative">
                        {/* Imagen */}
                        <div className="relative">
                            <Image
                                src="/images/product-example.jpg"
                                alt="Producto"
                                width={60}
                                height={60}
                                className="rounded w-16 h-16 sm:w-20 sm:h-20"
                            />
                            {/* Botón eliminar */}
                            <button className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[var(--primary)] text-white p-1.5 rounded-full shadow hover:bg-[#4e7254] transition">
                                <FiTrash2 size={14} />
                            </button>
                        </div>

                        {/* Info producto */}
                        <div>
                            <p className="font-medium text-sm sm:text-base">Blusa Enriqueta - Burdeo</p>
                            <p className="text-xs sm:text-sm text-gray-600">Talla: S</p>
                            <p className="text-xs sm:text-sm">S/ 139.00</p>
                        </div>
                    </div>

                    {/* Cantidad */}
                    <div className="flex justify-center">
                        3
                    </div>

                    {/* Subtotal */}
                    <div className="font-semibold text-right">
                        <p className={`text-xs sm:text-sm ${titleFont.className}`}>S/ 139.00</p>
                    </div>
                </div>
            </div>


        </div>
    );
};
