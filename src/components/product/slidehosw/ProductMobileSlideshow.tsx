'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './slideshow.css';

interface Props {
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSlideshow = ({ images, title, className }: Props) => {
    return (
        <div className={className}>
            <Swiper
                style={{
                    width: '100%', // Use full width of parent container
                    aspectRatio: '4 / 3', // Maintain consistent aspect ratio
                    maxWidth: '600px', // Cap width for larger devices
                    margin: '0 auto', // Center the Swiper
                }}
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 2500,
                }}
                modules={[FreeMode, Autoplay, Pagination]}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    480: {
                        slidesPerView: 1,
                        spaceBetween: 15,
                    },
                }}
                className="mySwiper2"
            >
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            width={600}
                            height={450} // Adjusted to match 4:3 aspect ratio
                            src={image}
                            alt={title}
                            className="object-contain w-full h-full" // Use object-contain to preserve image aspect ratio
                            priority={index === 0} // Prioritize first image for faster loading
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};