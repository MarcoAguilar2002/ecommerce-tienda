"use client"
import Link from "next/link"
import { IoCloseOutline, IoLogInOutline, IoLogOutOutline, IoPersonOutline, IoShirtOutline, IoTicketOutline } from "react-icons/io5"
import { GiClothes } from "react-icons/gi";
import { MdOutlineNewReleases } from "react-icons/md";
import { useUIStore } from "@/store";
import clsx from "clsx";

export const Sidebar = () => {
    const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
    const closeMenu = useUIStore(state => state.closeSideMenu);

    return (
        <div>
            {/* Overlay negro al fondo */}
            {isSideMenuOpen && (
                <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30" />
            )}

            {isSideMenuOpen && (
                <div
                    onClick={closeMenu}
                    className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
                />
            )}

            <nav className={clsx(
                "fixed p-5 left-0 top-0 h-screen bg-white z-20 shadow-2xl transform transition-all duration-300",
                "w-[80%] max-w-xs", // responsive
                {
                    "-translate-x-full": !isSideMenuOpen
                }
            )}>
                <IoCloseOutline
                    size={40}
                    className="absolute top-5 right-5 cursor-pointer"
                    onClick={closeMenu}
                />

                <div className="mt-14 flex flex-col space-y-4">
                    <SidebarLink href="/" icon={<IoPersonOutline size={25} />} text="Perfil" />
                    <SidebarLink href="/" icon={<IoTicketOutline size={25} />} text="Mis Pedidos" />
                    <SidebarLink href="/" icon={<IoShirtOutline size={25} />} text="Ropa" />
                    <SidebarLink href="/" icon={<GiClothes size={25} />} text="Colecciones" />
                    <SidebarLink href="/" icon={<IoLogInOutline size={25} />} text="Ingresar" />
                    <SidebarLink href="/" icon={<IoLogOutOutline size={25} />} text="Salir" />
                    <hr className="my-4" />
                    <SidebarLink href="/" icon={<IoShirtOutline size={25} />} text="Productos" />
                    <SidebarLink href="/" icon={<IoTicketOutline size={25} />} text="Pedidos" />
                    <SidebarLink href="/" icon={<MdOutlineNewReleases size={25} />} text="Usuarios" />
                </div>
            </nav>
        </div>
    )
}

const SidebarLink = ({ href, icon, text }: { href: string, icon: React.ReactNode, text: string }) => (
    <Link
        href={href}
        className="flex items-center p-2 hover:bg-gray-100 rounded transition-all"
        onClick={(e) => e.stopPropagation()} 
    >
        {icon}
        <span className="ml-3 text-lg">{text}</span>
    </Link>
);
