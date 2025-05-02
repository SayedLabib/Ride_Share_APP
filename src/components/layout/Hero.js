import React from 'react';
import { motion } from 'framer-motion';
import { FaCar, FaMotorcycle, FaBicycle } from 'react-icons/fa';

const Hero = () => {
  const rideOptions = [
    {
      icon: <FaCar className="text-4xl text-primary-500" />,
      title: 'Car',
      description: 'Comfortable rides for your daily commute',
    },
    {
      icon: <FaMotorcycle className="text-4xl text-primary-500" />,
      title: 'Bike',
      description: 'Quick and affordable rides around the city',
    },
    {
      icon: <FaBicycle className="text-4xl text-primary-500" />,
      title: 'Bicycle',
      description: 'Eco-friendly rides for short distances',
    },
  ];

  return (
    <div className="relative min-h-[80vh] bg-gradient-to-r from-primary-500 to-primary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('https://img.freepik.com/free-vector/abstract-pattern-design_1053-527.jpg')] opacity-10" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h1 className="text-5xl font-bold mb-6">
              Ride with Confidence
            </h1>
            <p className="text-xl mb-8 text-white/90">
              Book your ride in seconds. Safe, reliable, and affordable transportation at your fingertips.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-primary-500 px-8 py-3 rounded-ola font-semibold shadow-ola"
              >
                Book Now
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-ola font-semibold"
              >
                Learn More
              </motion.button>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-ola shadow-ola-lg p-8"
          >
            <h2 className="text-2xl font-semibold text-neutral-800 mb-6">
              Choose Your Ride
            </h2>
            <div className="space-y-6">
              {rideOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-neutral-50 cursor-pointer transition-colors"
                >
                  <div className="bg-primary-50 p-3 rounded-lg">
                    {option.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-800">
                      {option.title}
                    </h3>
                    <p className="text-sm text-neutral-600">
                      {option.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '10M+', label: 'Happy Riders' },
            { number: '50K+', label: 'Verified Drivers' },
            { number: '100+', label: 'Cities Covered' },
            { number: '24/7', label: 'Customer Support' },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-4xl font-bold text-white mb-2"
              >
                {stat.number}
              </motion.div>
              <div className="text-white/90">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;