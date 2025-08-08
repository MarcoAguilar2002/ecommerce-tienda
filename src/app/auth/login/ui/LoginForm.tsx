"use client"

import Link from "next/link"
import { useEffect, useState } from "react";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/actions";
import clsx from 'clsx';

import { AiOutlineEye, AiOutlineEyeInvisible, AiOutlineArrowLeft } from "react-icons/ai";
import { IoInformationOutline } from "react-icons/io5";

export const LoginForm = () => {

    const [showPassword, setShowPassword] = useState(false);

    const [state, dispatch] = useFormState(authenticate, undefined);

    console.log(state)
    useEffect(() => {
        if (state === 'Success') {
            window.location.replace('/');
        }
    }, [state]);

    return (
        <div className="bg-white w-full max-w-md rounded-2xl shadow-lg p-6 sm:p-8">
            {/* Botón Volver */}
            <div className="mb-4">
                <Link
                    href="/"
                    className="flex items-center text-sm text-gray-600 hover:text-[var(--primary)] transition"
                >
                    <AiOutlineArrowLeft className="mr-2 font-semibold" /> Volver al inicio
                </Link>
            </div>

            {/* Título */}
            <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 text-gray-800">
                Iniciar sesión
            </h1>

            {/* Formulario */}
            <form action={dispatch} className="space-y-5">
                {/* Email */}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Correo electrónico
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        placeholder="tucorreo@ejemplo.com"
                        className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-[var(--primary)]"
                    />
                </div>

                {/* Password */}
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                        Contraseña
                    </label>
                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            id="password"
                            name="password"
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

                {/* Mensaje de error */}
                <div
                    className="flex h-8 items-end space-x-1"
                    aria-live="polite"
                    aria-atomic="true"
                >
                    {state === "CredentialsSignin" && (
                        <div className="flex flex-row items-center text-red-500">
                            <IoInformationOutline className="h-5 w-5 mr-1" />
                            <p className="text-sm">Credenciales no son correctas</p>
                        </div>
                    )}
                </div>

                {/* Botón login */}
                <LoginButton />
            </form>

            {/* Registro */}
            <p className="text-center text-sm text-gray-600 mt-5">
                ¿No tienes cuenta?{" "}
                <Link
                    href="/auth/new-account"
                    className="text-[var(--primary)] font-medium hover:underline"
                >
                    Regístrate aquí
                </Link>
            </p>
        </div>
    );
}


function LoginButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            className={clsx(
                "w-full py-2 rounded-lg font-medium transition",
                pending
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-[var(--primary)] text-white hover:opacity-90"
            )}
            disabled={pending}
        >
            {pending ? "Ingresando..." : "Ingresar"}
        </button>
    );
}
