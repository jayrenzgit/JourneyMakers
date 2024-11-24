import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <div className="relative h-[90vh] overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>
        <div className="shooting-star" style={{ top: '20%', left: '10%' }}></div>
        <div className="shooting-star" style={{ top: '40%', left: '60%', animationDelay: '2s' }}></div>
        <div className="shooting-star" style={{ top: '70%', left: '30%', animationDelay: '3.5s' }}></div>
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="text-center w-full max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl sm:text-2xl text-white/90 mb-8">
            Explore the world with our curated travel experiences
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/packages"
              className="bg-primary-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary-700 transition-colors"
            >
              View Packages
            </Link>
            <Link
              to="/contact"
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}