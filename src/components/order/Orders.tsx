"use client";
import React from "react";
import Link from "next/link";

export const Orders = () => {
    // Ejemplo de datos de órdenes
    const orders = [
        {
            id: "ORD-001",
            date: "2025-08-01",
            total: 278.0,
            items: 2,
            status: "pending", // pending | paid | shipped
        },
        {
            id: "ORD-002",
            date: "2025-07-28",
            total: 520.5,
            items: 5,
            status: "paid",
        },
        {
            id: "ORD-003",
            date: "2025-07-20",
            total: 150.0,
            items: 1,
            status: "shipped",
        },
    ];

    const getStatusStyles = (status: string) => {
        switch (status) {
            case "paid":
                return "bg-green-100 text-green-700";
            case "pending":
                return "bg-red-100 text-red-700";
            case "shipped":
                return "bg-blue-100 text-blue-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getStatusLabel = (status: string) => {
        switch (status) {
            case "paid":
                return "Pagado";
            case "pending":
                return "Pendiente";
            case "shipped":
                return "Enviado";
            default:
                return "Desconocido";
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-2xl font-bold mb-6">Mis órdenes</h1>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {orders.map((order) => (
                    <div
                        key={order.id}
                        className="bg-white shadow-md rounded-xl p-5 flex flex-col justify-between hover:shadow-lg transition"
                    >
                        {/* ID y estado */}
                        <div className="flex justify-between items-center mb-3">
                            <span className="font-semibold text-gray-700">{order.id}</span>
                            <span
                                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusStyles(
                                    order.status
                                )}`}
                            >
                                {getStatusLabel(order.status)}
                            </span>
                        </div>

                        {/* Fecha */}
                        <p className="text-sm text-gray-500 mb-2">
                            Fecha: {new Date(order.date).toLocaleDateString()}
                        </p>

                        {/* Resumen */}
                        <div className="mb-3">
                            <p className="text-gray-700 text-sm">
                                <span className="font-medium">{order.items}</span>{" "}
                                {order.items > 1 ? "productos" : "producto"}
                            </p>
                            <p className="text-lg font-semibold text-gray-900">
                                S/ {order.total.toFixed(2)}
                            </p>
                        </div>

                        {/* Enlace */}
                        <Link
                            href={`/orders/${order.id}`}
                            className="mt-auto block text-center bg-[var(--primary)] text-white py-2 rounded-lg hover:opacity-90 transition text-sm font-medium"
                        >
                            Ver detalles
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};
