"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '../button/Button';

const slides = [
    { id: 1, bgColor: 'bg-yellow-600', text: 'SUSURRO BOSQUE Collection 1' },
    { id: 2, bgColor: 'bg-red-600', text: 'SUSURRO BOSQUE Collection 2' },
    { id: 3, bgColor: 'bg-green-600', text: 'SUSURRO BOSQUE Collection 3' },
];

export const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000); // Change slide every 5 seconds
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="relative w-full h-screen overflow-hidden">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5 }}
                    className={`absolute inset-0 ${slides[currentSlide].bgColor} flex items-center justify-center text-white text-4xl font-bold`}
                >
                    {slides[currentSlide].text}
                </motion.div>
            </AnimatePresence>

            {/* Indicators */}
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
                {slides.map((slide, index) => (
                    <motion.button
                        key={slide.id}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-8 h-8 flex items-center justify-center rounded-full ${currentSlide === index ? 'text-gray-200' : 'text-gray-100'}`}
                        animate={{
                            border: currentSlide === index ? '2px solid white' : 'none',
                        }}
                        transition={{
                            duration: 0.3,
                        }}
                    >
                        {slide.id}
                    </motion.button>
                ))}
            </div>

            {/* Call to Action Button */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
                <Button
                   className='cursor-pointer'
                   
                >
                    Ver la Colección
                </Button>
            </div>
        </div>
    );
};