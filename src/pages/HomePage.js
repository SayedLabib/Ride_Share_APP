import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaCalendarAlt, FaSearch, FaCar } from 'react-icons/fa';

const HomePage = () => {
  const [searchType, setSearchType] = useState('now');

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="relative h-[600px] bg-gradient-to-br from-primary-500 to-primary-600">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white max-w-2xl"
          >
            <h1 className="text-5xl font-bold mb-6">
              Book a ride in minutes
            </h1>
            <p className="text-xl mb-8">
              Safe, reliable, and affordable rides at your fingertips
            </p>
          </motion.div>
        </div>
      </div>

      {/* Search Section */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-ola p-6"
        >
          {/* Search Type Toggle */}
          <div className="flex space-x-4 mb-6">
            <button
              onClick={() => setSearchType('now')}
              className={`flex-1 py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                searchType === 'now'
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Ride Now
            </button>
            <button
              onClick={() => setSearchType('later')}
              className={`flex-1 py-3 px-4 rounded-lg text-center font-medium transition-colors ${
                searchType === 'later'
                  ? 'bg-primary-500 text-white'
                  : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
              }`}
            >
              Schedule Later
            </button>
          </div>

          {/* Search Form */}
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  Pickup Location
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-primary-500" />
                  <input
                    type="text"
                    placeholder="Enter pickup location"
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium text-neutral-600 mb-1">
                  Drop Location
                </label>
                <div className="relative">
                  <FaMapMarkerAlt className="absolute left-3 top-3 text-primary-500" />
                  <input
                    type="text"
                    placeholder="Enter drop location"
                    className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>
            </div>

            {searchType === 'later' && (
              <div className="flex items-center space-x-4">
                <div className="flex-1">
                  <label className="block text-sm font-medium text-neutral-600 mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3 text-primary-500" />
                    <input
                      type="date"
                      className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-medium text-neutral-600 mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <FaCalendarAlt className="absolute left-3 top-3 text-primary-500" />
                    <input
                      type="time"
                      className="w-full pl-10 pr-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            )}

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-primary-500 text-white py-3 rounded-lg font-medium flex items-center justify-center space-x-2"
            >
              <FaSearch />
              <span>Search Rides</span>
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaCar className="text-4xl text-primary-500" />,
              title: 'Safe Rides',
              description: 'Verified drivers and secure payment options for your peace of mind'
            },
            {
              icon: <FaMapMarkerAlt className="text-4xl text-primary-500" />,
              title: 'Easy Booking',
              description: 'Book your ride in just a few taps with our user-friendly app'
            },
            {
              icon: <FaCalendarAlt className="text-4xl text-primary-500" />,
              title: 'Flexible Options',
              description: 'Choose between instant rides or schedule for later'
            }
          ].map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-xl shadow-ola text-center"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage; 