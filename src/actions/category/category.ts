'use server'
import prisma from "@/lib/prisma"


export const getCategory = async () => {
    try {
        const category = await prisma.category.findMany()
        return category

    } catch (error) {
        console.error("Error al obtener categorías:", error);
        throw new Error("No se pudieron obtener las categorías");
    }

}