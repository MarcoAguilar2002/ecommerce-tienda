"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FaStickyNote } from "react-icons/fa";
import { titleFont } from "@/config/fonts";

export const Order = () => {
  const isPaid = false; // Cambia a true si está pagado

  return (
    <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-6 p-4">
      {/* 🛍 Lista de productos */}
      <div className="w-full bg-white p-4 sm:p-6 shadow rounded-lg space-y-4">
        {/* Estado de pago */}


        <div className="flex flex-wrap items-center justify-between gap-2">
          <h2 className="text-lg sm:text-xl font-semibold">Resumen del pedido</h2>
          <h2 className="text-sm sm:text-lg font-semibold text-gray-400">(2 productos)</h2>
        </div>

        <div className="border-t pt-4 space-y-4">
          {/* Header en pantallas grandes */}
          <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:gap-4 font-semibold">
            <p>Producto</p>
            <p className="text-center">Cantidad</p>
            <p className="text-right">Subtotal</p>
          </div>

          {/* Producto */}
          <div className="grid grid-cols-1 sm:grid-cols-[2fr_1fr_1fr] gap-4 items-center">
            <div className="flex items-center gap-4">
              <Image
                src="/images/product-example.jpg"
                alt="Producto"
                width={80}
                height={80}
                className="rounded w-16 h-16 sm:w-20 sm:h-20 object-cover"
              />
              <div>
                <p className="font-medium text-sm sm:text-base">Blusa Enriqueta - Burdeo</p>
                <p className="text-xs sm:text-sm text-gray-600">Talla: S</p>
                <p className="text-xs sm:text-sm">S/ 139.00</p>
              </div>
            </div>

            <div className="flex justify-center">3</div>

            <div className="font-semibold text-right">
              <p className={`text-xs sm:text-sm ${titleFont.className}`}>S/ 139.00</p>
            </div>
          </div>
        </div>
      </div>

      {/* 📋 Resumen */}
      <div className="w-full ">
        <div className={`${isPaid
          ? "bg-green-600 text-white"
          : "bg-red-600 text-white"
          }  shadow rounded-t-lg`}>
          <div className="flex justify-start p-2">
            <span
              className={`px-4 py-1 rounded-full text-sm font-semibold `}
            >
              {isPaid ? "Pagado" : "Pendiente de pago"}
            </span>
          </div>
        </div>
        <div className="bg-white p-4 sm:p-6 shadow rounded-mb-lg">
          <h2 className="text-lg sm:text-xl font-semibold mb-4">Resumen del pedido</h2>

          <div className="flex justify-between items-center mb-2 sm:mb-4">
            <span className="text-sm sm:text-base">N° Productos</span>
            <span className="font-medium text-sm sm:text-base">2 productos</span>
          </div>

          <div className="flex justify-between items-center mb-4 sm:mb-6 border-t pt-2 sm:pt-3">
            <span className="text-sm sm:text-base">Total</span>
            <span className="font-semibold text-sm sm:text-base">S/ 278.00 PEN</span>
          </div>

          <div className="mb-4">
            <div className="flex border-b">
              <div className="flex-1 py-1 sm:py-2 text-center font-medium text-sm sm:text-base border-b-2 border-[var(--primary)]">
                <FaStickyNote className="inline mr-2" /> Detalles
              </div>
            </div>

            <div className="mt-4 space-y-1 text-xs sm:text-sm text-gray-700">
              <p>Nota:</p>
              <p>Detalles de nota del pedido</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};
