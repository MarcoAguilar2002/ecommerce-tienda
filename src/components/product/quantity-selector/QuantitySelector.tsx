'use client';

import { useState } from 'react';
import { IoAddCircleOutline, IoRemoveCircleOutline } from 'react-icons/io5';

interface Props {
    quantity: number;
}

export const QuantitySelector = ({ quantity }: Props) => {
    const [count, setCount] = useState(quantity);

    const onQuantityChanged = (value: number) => {
        if (count + value < 1) return;

        setCount(count + value);
    };

    return (
        <div className="flex items-center space-x-3">
            <div className='border flex items-center space-x-3 p-3 rounded-lg'>
                {/* Botón para disminuir la cantidad */}
                <button
                    onClick={() => onQuantityChanged(-1)}
                    className="text-gray-500 hover:text-green-600 transition-colors duration-300 p-1"
                    aria-label="Disminuir cantidad"
                >
                    <IoRemoveCircleOutline size={30} />
                </button>

                {/* Display de la cantidad */}
                <span className="
                w-16 text-center text-xl font-semibold
                bg-[var(--primary)] text-white
                py-1 rounded-lg
            ">
                    {count}
                </span>

                {/* Botón para aumentar la cantidad */}
                <button
                    onClick={() => onQuantityChanged(+1)}
                    className="text-gray-500 hover:text-green-600 transition-colors duration-300 p-1"
                    aria-label="Aumentar cantidad"
                >
                    <IoAddCircleOutline size={30} />
                </button>
            </div>
        </div>
    );
}