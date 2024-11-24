import React from 'react';
import { FiInstagram, FiFacebook, FiYoutube, FiPhone } from 'react-icons/fi';

export function Contact() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect With Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Follow us on social media for travel inspiration, exclusive deals, and updates about our latest adventures!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <a
            href="https://www.instagram.com/journeymakers0404/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <FiInstagram className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Instagram</h3>
            <p className="text-gray-600">Follow our visual journey</p>
          </a>

          <a
            href="https://www.facebook.com/JourneyMakersUAE"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <FiFacebook className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Facebook</h3>
            <p className="text-gray-600">Join our travel community</p>
          </a>

          <a
            href="https://www.youtube.com/@CheltyCoroniaGeronaga"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <FiYoutube className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">YouTube</h3>
            <p className="text-gray-600">Watch travel guides & vlogs</p>
          </a>

          <a
            href="https://wa.me/971508571089"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-lg shadow-lg p-8 text-center hover:transform hover:scale-105 transition-transform duration-300"
          >
            <FiPhone className="w-12 h-12 text-primary-600 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">WhatsApp</h3>
            <p className="text-gray-600">Chat with us directly</p>
          </a>
        </div>

        <div className="text-center mt-12 text-gray-600">
          <p>Questions? Email us at info@journey-makers.com</p>
          <p className="mt-2">Available Monday to Friday, 9am - 6pm GST</p>
        </div>
      </div>
    </section>
  );
}