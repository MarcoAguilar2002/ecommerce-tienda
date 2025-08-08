"use client"

import { ColorSelector, QuantitySelector, SizeSelector } from "@/components"
import { Button } from "@/components/ui/button/Button"
import { Color, Product, Size } from "@/interfaces"
import { useState, useMemo } from "react"

interface Props {
    product: Product
}

export const AddToCart = ({ product }: Props) => {

    const [size, setSize] = useState<Size | undefined>();
    const [color, setColor] = useState<Color | undefined>();

    const availableColors = useMemo(() => {
        if (!product.variants) return []
        const unique: { [id: string]: Color } = {}
        product.variants.forEach(v => {
            if (v.color && !unique[v.color.id]) {
                unique[v.color.id] = v.color
            }
        })
        return Object.values(unique)
    }, [product.variants])

    const availableSizes = useMemo(() => {
        if (!product.variants) return []
        const sizes = new Set<Size>()
        product.variants.forEach(v => {
            if (v.size) sizes.add(v.size)
        })
        return Array.from(sizes)
    }, [product.variants])

    return (
        <>
            {/* Selector de Talla */}
            <SizeSelector
                availableSizes={availableSizes}
                selectedSize={size}
                onSizeChanged={setSize}
            />

            {/* Selector de Color */}
            <ColorSelector
                colors={availableColors}
                selectedColor={color}
                onColorChanged={setColor}
            />

            {/* Cantidad */}
            <div className="my-5">
                <QuantitySelector quantity={1} />
            </div>

            {/* Botón */}
            <div>
                <Button fullWidth className="cursor-pointer">
                    Agregar al carrito
                </Button>
            </div>
        </>
    )
}
