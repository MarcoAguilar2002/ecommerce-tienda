"use client";
import Link from "next/link";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

export default function NewAccount() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
            <div className="bg-white w-full max-w-lg rounded-2xl shadow-lg p-6 sm:p-8">
                {/* Título */}
                <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                    Crear nueva cuenta
                </h1>

                <form className="space-y-5">
                    {/* Nombre */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                            Nombre completo
                        </label>
                        <input
                            type="text"
                            id="name"
                            placeholder="Ej: Maria Aguirre"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                        />
                    </div>

                    {/* Teléfono */}
                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Teléfono
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="987654321"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                        />
                    </div>

                    {/* Correo */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Correo electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="tucorreo@ejemplo.com"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                        />
                    </div>

                    {/* Contraseña */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Contraseña
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="••••••••"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                            >
                                {showPassword ? (
                                    <AiOutlineEyeInvisible className="w-5 h-5" />
                                ) : (
                                    <AiOutlineEye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Confirmar contraseña */}
                    <div>
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                            Confirmar contraseña
                        </label>
                        <div className="relative">
                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                id="confirmPassword"
                                placeholder="••••••••"
                                className="w-full border border-gray-300 rounded-lg px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                            />
                            <button
                                type="button"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                            >
                                {showConfirmPassword ? (
                                    <AiOutlineEyeInvisible className="w-5 h-5" />
                                ) : (
                                    <AiOutlineEye className="w-5 h-5" />
                                )}
                            </button>
                        </div>
                    </div>

                    {/* Botón */}
                    <button
                        type="submit"
                        className="w-full bg-[var(--primary)] text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
                    >
                        Registrarse
                    </button>
                </form>

                {/* Iniciar sesión */}
                <p className="text-center text-sm text-gray-600 mt-5">
                    ¿Ya tienes cuenta?{" "}
                    <Link href="/auth/login" className="text-[var(--primary)] font-medium hover:underline">
                        Inicia sesión aquí
                    </Link>
                </p>
            </div>
        </div>
    );
}
