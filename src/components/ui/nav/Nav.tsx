"use client";
import { titleFont } from "@/config/fonts";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose, AiOutlineDown } from "react-icons/ai";
import { FiUser, FiShoppingBag } from "react-icons/fi";
import { BiSearch } from "react-icons/bi";
import { useUIStore, useShop } from "@/store";

export const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);


    const cartCount = 3;

    const openSideMenu = useUIStore(state => state.openSideMenu);
    const openSideMenuShop = useShop(state => state.openSideShopMenu);

    return (
        <nav className="bg-[#F5F3EB] text-[rgb(var(--foreground-rgb))] p-4 flex items-center w-full  justify-between md:justify-around z-50">
            <div className="hidden md:flex space-x-8 relative">
                <div className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer transition-colors relative group-hover:text-[var(--primary)]">
                        <span className="text-[var(--primary)] text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            ●
                        </span>

                        <Link
                            href="#"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            Ropa
                        </Link>

                        <AiOutlineDown className="text-xs mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                    </div>

                    <div className="absolute top-full left-0 mt-2 w-40 bg-white shadow-md rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <ul className="py-2 text-sm text-gray-700">
                            {["Camisas", "Pantalones", "Abrigos"].map((cat) => (
                                <li key={cat}>
                                    <Link
                                        href={`/ropa/${cat.toLowerCase()}`}
                                        className="group flex items-center gap-2 px-4 py-2 transition-all duration-300 hover:bg-[var(--primary)] hover:text-white"
                                    >
                                        <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                                            {cat}
                                        </span>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="relative group">
                    <div className="flex items-center gap-1 cursor-pointer transition-colors relative group-hover:text-[var(--primary)]">
                        <span className="text-[var(--primary)] text-sm opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                            ●
                        </span>

                        <Link
                            href="#"
                            className="transition-transform duration-300 group-hover:translate-x-1"
                        >
                            Colecciones
                        </Link>

                        <AiOutlineDown className="text-xs mt-0.5 group-hover:rotate-180 transition-transform duration-200" />
                    </div>
                    <div className="absolute top-full left-0 mt-4 w-screen max-w-4xl bg-white shadow-lg rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                        <div className="grid grid-cols-3 gap-6 p-6 text-sm text-gray-700">
                            {[
                                {
                                    title: "Primavera",
                                    links: [
                                        { name: "Frescos", href: "/collections/primavera/frescos" },
                                        { name: "Coloridos", href: "/collections/primavera/color" },
                                    ],
                                },
                                {
                                    title: "Invierno",
                                    links: [
                                        { name: "Abrigos", href: "/collections/invierno/abrigos" },
                                        { name: "Accesorios", href: "/collections/invierno/accesorios" },
                                    ],
                                },
                                {
                                    title: "Ediciones Especiales",
                                    links: [
                                        { name: "Colaboraciones", href: "/collections/ediciones/colab" },
                                        { name: "Limitado", href: "/collections/ediciones/limitado" },
                                    ],
                                },
                            ].map(({ title, links }) => (
                                <div key={title}>
                                    <h4 className="font-semibold mb-2">{title}</h4>
                                    <ul>
                                        {links.map(({ name, href }) => (
                                            <li key={name}>
                                                <Link
                                                    href={href}
                                                    className="group flex items-center gap-2 py-1 transition-all duration-300 hover:text-[var(--primary)]"
                                                >
                                                    <span className="relative group-hover:translate-x-1 transition-transform duration-300">
                                                        {name}
                                                    </span>

                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>

            <div className="md:hidden flex items-center space-x-4">
                <button onClick={() => openSideMenu()} className="text-2xl focus:outline-none">
                    {isOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
                </button>
            </div>


            <div className="flex-shrink-0">
                <Link href="/">
                    <Image
                        alt="logoNombreKV"
                        src="/images/logoNombreKV.png"
                        width={150}
                        height={60}
                        className="w-28 h-auto"
                        priority
                    />
                </Link>
            </div>

            {/* Iconos (desktop) */}
            <div className="flex items-center gap-1 justify-center">
                {[{ icon: <FiUser />, href: "/" }, { icon: <BiSearch />, href: "/" }].map(({ icon, href }, idx) => (
                    <Link
                        key={idx}
                        href={href}
                        className="group relative flex items-center justify-center w-10 h-10 rounded-full"
                    >
                        <span className="absolute inset-0 z-0 rounded-full bg-[var(--primary)] opacity-0 scale-75 transition-all duration-300 group-hover:scale-125 group-hover:opacity-20 pointer-events-none" />
                        <span className={`${titleFont.className} relative z-10 text-xl font-bold transition-transform duration-300 group-hover:scale-110`}>
                            {icon}
                        </span>
                    </Link>
                ))}

                <button onClick={() => openSideMenuShop()}

                    className="group relative flex items-center justify-center w-10 h-10 rounded-full"
                >
                    <span className="absolute inset-0 z-0 rounded-full bg-[var(--primary)] opacity-0 scale-75 transition-all duration-300 group-hover:scale-125 group-hover:opacity-20 pointer-events-none" />
                    <span className={`${titleFont.className} relative z-10 text-xl font-bold transition-transform duration-300 group-hover:scale-110`}>
                        <FiShoppingBag />
                    </span>
                    {cartCount > 0 && (
                        <span className="absolute -top-0.5 -right-0.5 z-10 bg-[var(--primary)] text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full shadow-md border border-white">
                            {cartCount}
                        </span>
                    )}
                </button>


            </div>


        </nav>
    );
};
