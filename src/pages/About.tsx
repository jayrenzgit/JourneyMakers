import React from 'react';
import { FiUsers, FiAward, FiHeart, FiMapPin, FiPhone, FiMail, FiMessageCircle } from 'react-icons/fi';

function About() {
  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Journey-Makers</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Your trusted partner in creating unforgettable travel experiences in the UAE and beyond.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
              <FiUsers className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Team</h2>
            <p className="text-gray-600">
              Dedicated professionals with years of experience in crafting perfect travel itineraries.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
              <FiAward className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To create extraordinary travel experiences that exceed expectations and create lasting memories.
            </p>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <div className="inline-block p-4 bg-primary-100 rounded-full mb-6">
              <FiHeart className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-600">
              Excellence, integrity, and personalized service in everything we do.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="p-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded with a passion for travel and a commitment to excellence, Journey-Makers has been helping travelers 
                discover the beauty of the UAE since 2020. Our deep local knowledge and personalized approach ensure that 
                every journey is unique and memorable.
              </p>
              <p className="text-gray-600">
                We take pride in our attention to detail and our ability to create custom travel experiences that match 
                our clients' interests and preferences. Whether you're visiting for business or pleasure, we're here to 
                make your journey extraordinary.
              </p>
            </div>
            <div 
              className="h-96 md:h-auto bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://images.unsplash.com/photo-1512453979798-5ea266f8880c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80")'
              }}
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Contact Info</h2>
          <div className="max-w-2xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              <div className="flex items-center p-6 bg-gray-50 rounded-lg">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <FiMapPin className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Service Area</h3>
                  <p className="text-gray-600">Dubai, UAE</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-lg">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <FiPhone className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Mobile</h3>
                  <p className="text-gray-600">+971 50 857 1089</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-lg">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <FiMessageCircle className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">WhatsApp</h3>
                  <p className="text-gray-600">+971 50 857 1089</p>
                </div>
              </div>

              <div className="flex items-center p-6 bg-gray-50 rounded-lg">
                <div className="p-3 bg-primary-100 rounded-full mr-4">
                  <FiMail className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900">Email</h3>
                  <p className="text-gray-600">journeymakers0404@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;