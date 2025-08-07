"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaStickyNote } from "react-icons/fa";

export const Resume = () => {
    return (
        <div className="w-full bg-white p-4 sm:p-6 shadow rounded-lg">
            <h2 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Resumen del pedido</h2>
            <div className="flex justify-between items-center mb-2 sm:mb-4">
                <span className="text-sm sm:text-base">Total</span>
                <span className="font-medium text-sm sm:text-base">S/ 139.00 PEN</span>
            </div>

            {/* Sección de Nota */}
            <div className="mb-2 sm:mb-4">
                <div className="flex border-b">
                    <div className="flex-1 py-1 sm:py-2 text-center font-medium text-sm sm:text-base border-b-2 border-[var(--primary)]">
                        <FaStickyNote className="inline mr-1 sm:mr-2" /> Nota
                    </div>
                </div>

                {/* Contenido de la nota */}
                <div className="mt-2 sm:mt-4">
                    <label className="block text-xs sm:text-sm font-medium mb-1 sm:mb-2">Nota</label>
                    <input
                        type="text"
                        placeholder="Agregar nota de pedido"
                        className="w-full p-1 sm:p-2 border rounded text-xs sm:text-base"
                    />
                </div>
            </div>

            <Link
                href="/checkout"
                className="block w-full bg-[var(--primary)] text-white py-1 sm:py-2 rounded mt-2 sm:mt-4 text-sm sm:text-base text-center"
            >
                Verificar
            </Link>
        </div>
    );
};