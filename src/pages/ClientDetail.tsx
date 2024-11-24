import React, { useEffect, useRef } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FiArrowLeft, FiCalendar } from 'react-icons/fi';
import { PhotoCarousel } from '../components/client/PhotoCarousel';
import { ClientTestimonial } from '../components/client/ClientTestimonial';
import { VideoLink } from '../components/client/VideoLink';

const clients = [
  {
    id: 1,
    title: '2X OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE!',
    images: [
      '/assets/clients/1/1.jpg',
      '/assets/clients/1/2.jpg',
      '/assets/clients/1/3.jpg'
    ],
    location: 'Dubai International Airport',
    date: 'November 19, 2024',
    service: 'Visa Assistance Service',
    description: 'Thanks again Sir. Ervin for choosing and trusting Journey Makers! Thanks for letting us assist your travel journey to Dubai, UAE!',
    testimonial: 'The service was excellent! Our driver was professional and punctual.',
    rating: 5,
    facebookVideo: 'https://www.facebook.com/share/v/78oUz7J1VmmaSFJD/',
    videoThumbnail: '/assets/clients/1/1.jpg',
    videoDescription: '2X OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE! Every journey starts with a choice. Thank you for choosing us Sir Ervin and welcome to Dubai!'
  },
  {
    id: 2,
    title: 'Successful Direct Flight from Manila to Dubai UAE via Employment Visa with a previous 4x offload record!',
    images: [
      '/assets/clients/2/1.jpg',
      '/assets/clients/2/2.jpg'
    ],
    location: 'Dubai International Airport',
    date: 'November 10, 2024',
    service: 'Visa Assistance Service',
    description: 'Thank you again Sir Marlon! We at Journey Makers are truly grateful that you chose us to process your journey to Dubai, UAE. Your trust in our expertise means the world to us. Welcome to Dubai!',
    testimonial: 'Very comfortable ride and friendly service. Highly recommended!',
    rating: 5,
    facebookVideo: 'https://www.facebook.com/share/v/Qxms4sfZgLYXz81u/',
    videoThumbnail: '/assets/clients/2/1.jpg',
    videoDescription: '4x OFFLOAD record but now successful Direct Flight from Manila to Dubai UAE via Employment Visa! Thank you for choosing Journey Makers for your travel needs Sir Marlon! We truly appreciate your trust in our services. Welcome to Dubai!'
  },
  {
    id: 3,
    title: 'From 2X Offload to TOUCHDOWN Dubai! Thank you for trusting us with processing the documents needed and welcome to Dubai!',
    images: [
      '/assets/clients/3/1.jpg'
    ],
    location: 'Dubai International Airport',
    date: 'November 3, 2024',
    service: 'Visa Assistance Service',
    description: "Don't let visa hurdles stand in the way of your UAE Dubai adventures. Trust Journey Makers to be your reliable partner in securing the necessary documentation for your international travels. Contact us today and embark on your journey with confidence and peace of mind.",
    testimonial: 'Amazing city tour experience! The guide was knowledgeable and friendly.',
    rating: 5,
    facebookVideo: 'https://www.facebook.com/share/v/fPMVRMR5p6hi8hgk/',
    videoThumbnail: '/assets/clients/3/1.jpg',
    videoDescription: "From 2X Offload to TOUCHDOWN Dubai! Thank you for trusting us with processing the documents needed and welcome to Dubai! Don't let visa hurdles stand in the way of your UAE Dubai adventures. Trust Journey Makers to be your reliable partner in securing the necessary documentation for your international travels. Contact us today and embark on your journey with confidence and peace of mind."
  }
];

function ClientDetail() {
  const { id } = useParams<{ id: string }>();
  const client = clients.find(c => c.id === Number(id));
  const topRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (topRef.current) {
      topRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [id]);

  if (!client) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Client not found</h2>
          <Link
            to="/"
            className="text-primary-600 hover:text-primary-700 flex items-center justify-center"
          >
            <FiArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12" ref={topRef}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link
          to="/"
          className="inline-flex items-center text-primary-600 hover:text-primary-700 mb-8"
        >
          <FiArrowLeft className="mr-2" />
          Back to Recent Clients
        </Link>

        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <PhotoCarousel 
            images={client.images}
            title={client.title}
            location={client.location}
          />

          <div className="p-8">
            <div className="flex items-center text-gray-600 mb-6">
              <FiCalendar className="mr-2" />
              {client.date}
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-primary-600 mb-4">
                {client.service}
              </h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                {client.description}
              </p>

              <ClientTestimonial 
                testimonial={client.testimonial}
                rating={client.rating}
              />

              {client.facebookVideo && (
                <VideoLink 
                  videoUrl={client.facebookVideo}
                  thumbnailUrl={client.videoThumbnail}
                  description={client.videoDescription}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ClientDetail;