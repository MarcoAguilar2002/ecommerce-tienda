"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { QuantitySelector } from "@/components";
import { titleFont } from "@/config/fonts";

export const Details = () => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 shadow rounded-lg">
            <div className="flex items-center justify-between mb-4">
                <h2 className="text-lg sm:text-xl font-semibold">Mi Carrito</h2>
                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">(1 <span>producto</span>)</h2>
            </div>
            <div className="border-t pt-4">
                {/* Header for larger screens */}
                <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:gap-4 font-semibold mb-2">
                    <p>Producto</p>
                    <p className="text-center">Cantidad</p>
                    <p className="text-right">Subtotal</p>
                </div>
                {/* Product Row */}
                <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-4 items-center justify-between">
                    <div className="flex items-center gap-4">
                        <Image
                            src="/images/product-example.jpg"
                            alt="Producto"
                            width={60}
                            height={60}
                            className="rounded w-16 h-16 sm:w-20 sm:h-20"
                        />
                        <div>
                            <p className="font-medium text-sm sm:text-base">Blusa Enriqueta - Burdeo</p>
                            <p className="text-xs sm:text-sm text-gray-600">Talla: S</p>
                            <p className="text-xs sm:text-sm">S/ 139.00</p>
                        </div>
                    </div>
                    <div className="flex justify-center sm:justify-center">
                        <QuantitySelector quantity={1} />
                    </div>
                    <div className="font-semibold text-right">
                        <p className={`text-xs sm:text-sm ${titleFont.className}`}>S/ 139.00</p>
                    </div>
                </div>
            </div>
            <Link href="/" className="text-orange-500 mt-4 inline-block text-sm sm:text-base hover:underline">
                Seguir comprando →
            </Link>
        </div>
    );
};