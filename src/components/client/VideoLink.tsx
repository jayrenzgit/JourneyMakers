import React from 'react';
import { FiPlayCircle } from 'react-icons/fi';

interface VideoLinkProps {
  videoUrl: string;
  thumbnailUrl: string;
  description: string;
}

export function VideoLink({ videoUrl, thumbnailUrl, description }: VideoLinkProps) {
  return (
    <div>
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Watch Client Story</h3>
      <a 
        href={videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="relative block rounded-lg overflow-hidden group mb-4"
      >
        <img 
          src={thumbnailUrl}
          alt="Video thumbnail"
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center group-hover:bg-opacity-50 transition-all duration-300">
          <FiPlayCircle className="w-16 h-16 text-white opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </a>
      <p className="text-gray-700 leading-relaxed">{description}</p>
    </div>
  );
}