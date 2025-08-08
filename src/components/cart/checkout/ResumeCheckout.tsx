"use client";
import Link from "next/link";
import React from "react";
import { FaStickyNote } from "react-icons/fa";

export const ResumeCheckout = () => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 shadow rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Resumen del pedido</h2>

            {/* Total productos */}
            <div className="flex justify-between items-center mb-2 sm:mb-4">
                <span className="text-sm sm:text-base">N° Productos</span>
                <span className="font-medium text-sm sm:text-base">2 productos</span>
            </div>

            {/* Total a pagar */}
            <div className="flex justify-between items-center mb-4 sm:mb-6 border-t pt-2 sm:pt-3">
                <span className="text-sm sm:text-base">Total</span>
                <span className="font-semibold text-sm sm:text-base">S/ 278.00 PEN</span>
            </div>

            {/* Sección de detalles */}
            <div className="mb-2 sm:mb-4">
                <div className="flex border-b">
                    <div className="flex-1 py-1 sm:py-2 text-center font-medium text-sm sm:text-base border-b-2 border-[var(--primary)]">
                        <FaStickyNote className="inline mr-1 sm:mr-2" /> Detalles
                    </div>
                </div>

                {/* Contenido de los detalles */}
                <div className="mt-2 sm:mt-4 space-y-1 sm:space-y-2 text-xs sm:text-sm text-gray-700">

                    <p>Nota:</p>
                    <p>Detalles de nota</p>

                </div>
            </div>

            {/* Botón de verificación */}
            <Link
                href="/orders/pay/a"
                className="block w-full bg-[var(--primary)] text-white py-1 sm:py-2 rounded mt-2 sm:mt-4 text-sm sm:text-base text-center hover:opacity-90 transition"
            >
                Generar pedido
            </Link>
            <p></p>
        </div>
    );
};
