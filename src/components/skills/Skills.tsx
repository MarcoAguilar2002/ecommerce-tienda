"use client"
import { Skill } from "../skill/Skill";
import { FaHandHolding, FaHeadset, FaFlag, FaLock } from 'react-icons/fa';
import { HiOutlineChatAlt2 } from "react-icons/hi";

export const Skills = () => {
    return (
        <div className="container mx-auto py-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <Skill
                    title="Envío a Todo El Perú"
                    text="Recibe tus prendas desde nuestro taller directo a tu hogar. ¡Entrega en tiempo récord!"
                    icon={<FaHandHolding className="h-10 w-10" />}
                />
                <Skill
                    title="Asesoría en Línea"
                    text="¡Contáctanos! Te guiaremos en cada paso de tu compra y resolveremos todas tus dudas."
                    icon={<HiOutlineChatAlt2  className="h-10 w-10" />}
                />
                <Skill
                    title="¡Marca 100% 🇵🇪!"
                    text="KV: Comercializamos prendas con orgullo peruano"
                    icon={<FaFlag className="h-10 w-10" />}
                />
                <Skill
                    title="Pago Seguro"
                    text="Envia tu constancia de pago y nos comunicaremos cuando validemos tu pago. ¡Tu compra está protegida!"
                    icon={<FaLock className="h-10 w-10" />}
                />
            </div>
        </div>
    );
};