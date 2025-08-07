"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { QuantitySelector } from "@/components";
import { titleFont } from "@/config/fonts";

export const Details = () => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 shadow rounded-lg">
            <div className="flex items-center justify-between">
                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Mi Carrito </h2>

                <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4 text-gray-400">(1)</h2>
            </div>
            <div className="border-t pt-2 sm:pt-4">
                <div className="font-semibold flex items-center justify-between">
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Total</p>
                </div>
                <div className="flex flex-col sm:flex-row items-center justify-between  ">
                    <div className="flex items-center">
                        <Image
                            src="/images/product-example.jpg"
                            alt="Producto"
                            width={60}
                            height={60}
                            className="rounded w-16 h-16 sm:w-20 sm:h-20"
                        />
                        <div className="">
                            <p className="font-medium text-sm sm:text-base">Blusa Enriqueta - Burdeo</p>
                            <p className="text-xs sm:text-sm text-gray-600">Talla: S</p>
                            <p className="text-xs sm:text-sm">S/ 139.00</p>
                        </div>
                    </div>

                    <div>
                        <QuantitySelector quantity={1} />
                    </div>

                    <div className="font-semibold">
                        <p className={`text-xs sm:text-sm ${titleFont.className}`}>S/ 139.00</p>
                    </div>
                </div>
            </div>
            <Link href="/" className="text-orange-500 mt-2 sm:mt-4 inline-block text-sm sm:text-base">
                Seguir comprando →
            </Link>
        </div>
    );
};