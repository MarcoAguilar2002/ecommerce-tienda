"use client";
import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import { Collection } from "../collecction/Collection";
import { Collection as CollectionProps } from "@/interfaces/collection";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import type { NavigationOptions } from "swiper/types";

interface Props {
  collections: CollectionProps[]
}

export const Collections = ({collections}:Props) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<SwiperCore | null>(null);

  

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      const navigation = swiperRef.current.params.navigation as NavigationOptions;

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div className="w-full py-16 px-4 md:px-8 xl:px-16 relative">
      <h2 className="text-4xl font-bold text-center mb-12 text-[rgb(var(--foreground-rgb))]">
        Descubre todas las colecciones
      </h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2, spaceBetween: 30 },
          1024: { slidesPerView: 3, spaceBetween: 35 },
          1280: { slidesPerView: 4, spaceBetween: 40 },
        }}
        className="w-full"
      >
        {collections.map((collection, index) => (
          <SwiperSlide key={`${collection.slug}-${index}`}>
            <Collection {...collection} />
          </SwiperSlide>
        ))}

        {/* Botón anterior */}
        <button
          ref={prevRef}
          className="swiper-button-prev-custom absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20
                     w-14 h-14 rounded-full
                     bg-[var(--primary)] hover:bg-[#5a7b61]
                     text-[var(--footer-text)]
                     shadow-lg hover:shadow-2xl
                     hover:w-16 transition-all duration-300 ease-in-out
                     flex items-center justify-center group
                     focus:outline-none focus:ring-4 focus:ring-[var(--primary)] focus:ring-opacity-40"
          aria-label="Anterior"
        >
          <FiChevronLeft className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Botón siguiente */}
        <button
          ref={nextRef}
          className="swiper-button-next-custom absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-20
                     w-14 h-14 rounded-full
                     bg-[var(--primary)] hover:bg-[#5a7b61]
                     text-[var(--footer-text)]
                     shadow-lg hover:shadow-2xl
                     hover:w-16 transition-all duration-300 ease-in-out
                     flex items-center justify-center group
                     focus:outline-none focus:ring-4 focus:ring-[var(--primary)] focus:ring-opacity-40"
          aria-label="Siguiente"
        >
          <FiChevronRight className="w-7 h-7 transition-transform duration-300 group-hover:scale-110" />
        </button>
      </Swiper>
    </div>
  );
};
