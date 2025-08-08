'use server'

import prisma from "@/lib/prisma"

export const getPaginatedProducts = async () => {

    try {
        const products = await prisma.product.findMany({
            
        })
    } catch (error) {
        
    }
}