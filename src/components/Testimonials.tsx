import React from 'react';
import Slider from 'react-slick';
import { FiStar, FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  id: number;
  name: string;
  image: string;
  location: string;
  text: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Dubai, UAE',
    text: 'Journey-Makers made our family vacation absolutely unforgettable! Their attention to detail and personalized service exceeded all expectations.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mohammed Al-Hassan',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Abu Dhabi, UAE',
    text: 'The team went above and beyond to create a perfect travel experience. Their local knowledge and connections made all the difference.',
    rating: 5,
  },
  {
    id: 3,
    name: 'Emily Chen',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    location: 'Sharjah, UAE',
    text: 'Professional, responsive, and incredibly helpful. They planned everything perfectly, making our honeymoon truly magical.',
    rating: 5,
  },
];

const NextArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
    aria-label="Next slide"
  >
    <FiChevronRight className="w-6 h-6 text-gray-600" />
  </button>
);

const PrevArrow = ({ onClick }: { onClick?: () => void }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50 transition-colors"
    aria-label="Previous slide"
  >
    <FiChevronLeft className="w-6 h-6 text-gray-600" />
  </button>
);

export function Testimonials() {
  const renderStars = (rating: number) => {
    return [...Array(rating)].map((_, index) => (
      <FiStar key={index} className="w-5 h-5 text-yellow-400 fill-current" />
    ));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-12 sm:px-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
          What Our Clients Say
        </h2>
        <div className="relative px-8">
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="px-4">
                <div className="bg-white rounded-lg shadow-lg p-8 h-full">
                  <div className="flex flex-col items-center text-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-24 h-24 rounded-full object-cover mb-6 border-4 border-primary-100"
                    />
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4">{testimonial.location}</p>
                    <div className="flex mb-6">{renderStars(testimonial.rating)}</div>
                    <p className="text-gray-700 italic leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}