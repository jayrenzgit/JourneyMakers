import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface PhotoCarouselProps {
  images: string[];
  title: string;
  location: string;
}

export function PhotoCarousel({ images, title, location }: PhotoCarouselProps) {
  return (
    <div className="relative h-96">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="h-full w-full"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <img
              src={image}
              alt={`${title} - Photo ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />
      <div className="absolute bottom-8 left-8 right-8 text-white pointer-events-none">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <div className="flex items-center text-lg">
          <FiMapPin className="mr-2" />
          {location}
        </div>
      </div>
    </div>
  );
}