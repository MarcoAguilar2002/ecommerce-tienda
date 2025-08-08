'use server'

import prisma from "@/lib/prisma"

export const getProductBySlug = async (slug: string) => {
    try {
        const product = await prisma.product.findFirst({
            where: { slug },
            include: {
                category: true,
                collection: true,
                variants: {
                    include: {
                        color: true,
                        images: {
                            select: { url: true }
                        }
                    }
                }
            }
        })

        if (!product) return null

        return {
            ...product,
            variants: product.variants.map(variant => ({
                ...variant,
                images: variant.images.map(img => img.url)
            }))
        }
    } catch (error) {
        console.error(error)
        return null
    }
}
