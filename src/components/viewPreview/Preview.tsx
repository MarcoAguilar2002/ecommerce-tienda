"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '../ui/button/Button';

// Define la interfaz de las props para el componente Preview
interface Product {
    id: number;
    name: string;
    price: string;
    image: string;
    link: string;
}

interface PreviewProps {
    product: Product;
    onClose: () => void;
}

export const Preview: React.FC<PreviewProps> = ({ product, onClose }) => {
    const [selectedSize, setSelectedSize] = useState<'S' | 'M' | 'L'>('S');
    const [quantity, setQuantity] = useState<number>(1);

    const handleSizeChange = (size: 'S' | 'M' | 'L') => setSelectedSize(size);
    const handleQuantityChange = (change: number) => setQuantity((prev) => Math.max(1, prev + change));

    return (
        <div className="container mx-auto">
            <div className="flex flex-col md:flex-row gap-6">
                {/* Image Gallery */}
                <div className="flex-1">
                    <div className="relative w-full h-[500px] overflow-hidden rounded-lg">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="flex gap-2 mt-4">
                        {[1, 2, 3, 4].map((index) => (
                            <div key={index} className="w-20 h-20 overflow-hidden rounded-lg border-2 border-gray-200 hover:border-[var(--primary)] transition">
                                <Image
                                    src={product.image} // Reemplaza con rutas de thumbnails si las tienes
                                    alt={`Thumbnail ${index}`}
                                    width={80}
                                    height={80}
                                    className="object-cover cursor-pointer"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Details */}
                <div className="flex-1">
                    <h1 className="text-2xl font-bold text-[rgb(var(--foreground-rgb))]">{product.name}</h1>
                    <p className="text-orange-500 text-sm mt-1">ID: {product.id}</p> {/* Ejemplo de cómo mostrar un ID */}
                    <p className="text-yellow-600 text-sm mt-2">• Stock bajo</p>
                    <p className="text-[rgb(var(--foreground-rgb))] text-lg font-semibold mt-2">S/. {product.price}</p>
                    <p className="text-gray-500 text-xs mt-1">Impuesto incluido. Envío calculado a la salida.</p>

                    {/* Size Selection */}
                    <div className="mt-4">
                        <label className="block text-[rgb(var(--foreground-rgb))] font-medium">Talla</label>
                        <div className="flex gap-2 mt-2">
                            {['S', 'M', 'L'].map((size) => (
                                <button
                                    key={size}
                                    onClick={() => handleSizeChange(size as 'S' | 'M' | 'L')}
                                    className={`w-10 h-10 border rounded flex items-center justify-center ${selectedSize === size ? 'bg-[var(--primary)] text-white' : 'bg-white text-[rgb(var(--foreground-rgb))]'
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Quantity Selection */}
                    <div className="mt-4">
                        <label className="block text-[rgb(var(--foreground-rgb))] font-medium">Cantidad</label>
                        <div className="flex items-center gap-2 mt-2">
                            <button
                                onClick={() => handleQuantityChange(-1)}
                                className="w-8 h-8 border rounded flex items-center justify-center"
                            >
                                -
                            </button>
                            <span className="w-10 text-center">{quantity}</span>
                            <button
                                onClick={() => handleQuantityChange(1)}
                                className="w-8 h-8 border rounded flex items-center justify-center"
                            >
                                +
                            </button>
                        </div>
                    </div>

                    <div className="w-full my-5 flex items-center justify-center">
                        <Button fullWidth>Agregar al carrito</Button>
                    </div>
                </div>
            </div>
        </div>
    );
};