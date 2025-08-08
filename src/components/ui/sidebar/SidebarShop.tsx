"use client";
import Link from "next/link";
import Image from "next/image";
import { IoCloseOutline } from "react-icons/io5";
import { useShop } from "@/store";
import clsx from "clsx";
import { QuantitySelector } from "@/components";
import { titleFont } from "@/config/fonts";
import { Button } from "../button/Button";

export const SidebarShop = () => {
    const isSideMenuOpen = useShop((state) => state.isSideMenuShopOpen);
    const closeMenu = useShop((state) => state.closeSideShopMenu);

    // Ejemplo de items (reemplazar por tu store real)
    const cartItems = [
        {
            id: 1,
            name: "Blusa Enriqueta - Burdeo",
            size: "S",
            price: 139,
            quantity: 1,
            image: "/images/product-example.jpg",
        },
        {
            id: 2,
            name: "Camisa Algodón - Blanca",
            size: "M",
            price: 159,
            quantity: 2,
            image: "/images/product-example.jpg",
        },
    ];

    const isEmpty = cartItems.length === 0;

    return (
        <div>
            {/* Overlay */}
            {isSideMenuOpen && (
                <div
                    onClick={closeMenu}
                    className="fixed top-0 left-0 w-screen h-screen z-10 bg-black/40 backdrop-blur-sm transition-all duration-300"
                />
            )}

            {/* Sidebar */}
            <nav
                className={clsx(
                    "fixed p-5 top-0 right-0 h-screen bg-white z-20 shadow-2xl transform transition-transform duration-300 flex flex-col",
                    "w-[90%] max-w-screen-md",
                    {
                        "translate-x-full": !isSideMenuOpen,
                        "translate-x-0": isSideMenuOpen,
                    }
                )}
            >
                {/* Botón cerrar */}
                <IoCloseOutline
                    size={40}
                    className="absolute top-5 right-5 cursor-pointer hover:text-red-500 transition"
                    onClick={closeMenu}
                />

                {/* Contenido */}
                <div className="mt-14 flex-1 flex flex-col">
                    {isEmpty ? (
                        <div className="flex flex-col items-center justify-center h-full text-center space-y-4">
                            <Image
                                src="/images/empty-cart.svg"
                                alt="Carrito vacío"
                                width={150}
                                height={150}
                            />
                            <h2 className="text-lg font-semibold">Tu carrito está vacío</h2>
                            <p className="text-gray-500 text-sm">
                                Agrega productos para continuar con tu compra.
                            </p>
                            <Link
                                href="/shop"
                                onClick={closeMenu}
                                className="bg-[var(--primary)] text-white px-4 py-2 rounded hover:bg-red-700 transition"
                            >
                                Ir a la tienda
                            </Link>
                        </div>
                    ) : (
                        <div className="flex flex-col space-y-6 h-full">
                            {/* Encabezado */}
                            <div className="flex items-center justify-between border-b pb-3">
                                <h2 className="text-lg sm:text-xl font-semibold">Mi Carrito</h2>
                                <h2 className="text-lg sm:text-xl font-semibold text-gray-400">
                                    ({cartItems.length}{" "}
                                    {cartItems.length === 1 ? "producto" : "productos"})
                                </h2>
                            </div>



                            {/* Lista scrollable */}
                            <div className="space-y-5 flex-1 overflow-y-auto pr-2">
                                {/* Header para pantallas grandes */}
                                <div className="hidden sm:grid sm:grid-cols-[2fr_1fr_1fr] sm:gap-4 font-semibold text-sm  pb-2">
                                    <p>Producto</p>
                                    <p className="text-center">Cantidad</p>
                                    <p className="text-right">Subtotal</p>
                                </div>

                                <div className="">
                                    {cartItems.map((item) => (
                                        <div
                                            key={item.id}
                                            className="
            flex flex-col sm:grid sm:grid-cols-[2fr_1fr_1fr] gap-4 items-center
            border-b pb-4
        "
                                        >
                                            {/* Producto */}
                                            <div className="flex items-center gap-4 w-full sm:w-auto">
                                                <Image
                                                    src={item.image}
                                                    alt={item.name}
                                                    width={60}
                                                    height={60}
                                                    className="rounded w-16 h-16 sm:w-20 sm:h-20"
                                                />
                                                <div>
                                                    <p className="font-medium text-sm sm:text-base">{item.name}</p>
                                                    <p className="text-xs sm:text-sm text-gray-600">
                                                        Talla: {item.size}
                                                    </p>
                                                    <p className="text-xs sm:text-sm">S/ {item.price.toFixed(2)}</p>
                                                </div>
                                            </div>

                                            {/* Cantidad + Subtotal en móvil */}
                                            <div className="flex items-center justify-between w-full sm:hidden">
                                                <QuantitySelector quantity={item.quantity} />
                                                <p className={`font-semibold ${titleFont.className} text-sm`}>
                                                    S/ {(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>

                                            {/* Cantidad (solo escritorio) */}
                                            <div className="hidden sm:flex justify-center">
                                                <QuantitySelector quantity={item.quantity} />
                                            </div>

                                            {/* Subtotal (solo escritorio) */}
                                            <div className="hidden sm:block font-semibold text-right">
                                                <p className={`text-xs sm:text-sm ${titleFont.className}`}>
                                                    S/ {(item.price * item.quantity).toFixed(2)}
                                                </p>
                                            </div>
                                        </div>
                                    ))}

                                </div>
                            </div>
                        </div>
                    )}
                </div>

                {/* Total y botón Ir al carrito */}
                {!isEmpty && (
                    <div className="border-t pt-4 space-y-3">
                        <div className="flex justify-between font-semibold text-lg">
                            <p>Total:</p>
                            <p>
                                S/{" "}
                                {cartItems
                                    .reduce(
                                        (acc, item) => acc + item.price * item.quantity,
                                        0
                                    )
                                    .toFixed(2)}
                            </p>
                        </div>
                        <Button href="/cart" onClick={closeMenu} fullWidth>
                            Ir al carrito
                        </Button>
                    </div>
                )}
            </nav>
        </div>
    );
};
