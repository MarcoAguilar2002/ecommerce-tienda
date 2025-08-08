"use client";
import { useState } from "react";
import Image from "next/image";
import { FaRegCreditCard } from "react-icons/fa";
import { FaUniversity } from "react-icons/fa";
import { AiOutlineUpload } from "react-icons/ai";

export default function PayPage() {
    const [fileName, setFileName] = useState<string>("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setFileName(file.name);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center  p-4">
            <div className="bg-white shadow-xl rounded-lg p-6 w-full max-w-lg">
                <h2 className="text-2xl font-semibold mb-6 text-center">Pagar Pedido</h2>

                {/* QR de pago */}
                <div className="flex flex-col items-center mb-6">
                    <Image
                        src="/images/qr-pago.png" // aquí pones tu QR real
                        alt="QR de pago"
                        width={250}
                        height={250}
                        className="rounded-lg border border-gray-300 object-cover"
                    />
                    <p className="mt-3 text-gray-600 text-sm sm:text-base text-center">
                        Escanea este código QR para realizar tu pago.
                    </p>
                </div>

                {/* Input de archivo */}
                <div className="mb-6 r">
                    <label className="block text-sm font-medium mb-2">
                        Subir comprobante de pago
                    </label>
                    <div className="relative flex items-center border rounded-lg overflow-hidden ">
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleFileChange}
                            className="absolute inset-0 opacity-0 cursor-pointer"
                        />
                        <div className="flex items-center gap-2 px-4 py-2 w-full">
                            <AiOutlineUpload className="text-gray-500 text-lg" />
                            <span className="text-gray-600 text-sm truncate">
                                {fileName || "Selecciona una imagen..."}
                            </span>
                        </div>
                    </div>
                </div>

                {/* Información de cuentas */}
                <div className="mb-6">
                    <h3 className="text-lg font-semibold mb-3">Cuentas bancarias</h3>
                    <div className="space-y-3">
                        {/* BCP */}
                        <div className="flex items-start gap-3">
                            <FaUniversity className="text-orange-500 text-xl" />
                            <div>
                                <p className="font-medium">Banco de Crédito del Perú (BCP)</p>
                                <p className="text-sm text-gray-600">Número de cuenta: 123-45678910-0-11</p>
                                <p className="text-sm text-gray-600">CCI: 00212300456789101157</p>
                            </div>
                        </div>

                        {/* Interbank */}
                        <div className="flex items-start gap-3">
                            <FaUniversity className="text-green-500 text-xl" />
                            <div>
                                <p className="font-medium">Interbank</p>
                                <p className="text-sm text-gray-600">Número de cuenta: 123-45678910</p>
                                <p className="text-sm text-gray-600">CCI: 00312300456789101157</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Botón de enviar */}
                <button
                    type="button"
                    className="w-full bg-[var(--primary)] text-white py-2 rounded-lg font-medium hover:opacity-90 transition"
                >
                    Confirmar Pago
                </button>
            </div>
        </div>
    );
}
