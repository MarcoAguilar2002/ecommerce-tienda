'use server'
import prisma from "@/lib/prisma"


export const getCollection = async () => {
    try {
        const collection = await prisma.collection.findMany()
        return collection

    } catch (error) {
        console.error("Error al obtener colecciones:", error);
        throw new Error("No se pudieron obtener las colecciones");
    }

}