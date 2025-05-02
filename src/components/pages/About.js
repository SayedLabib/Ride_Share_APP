import React from 'react';
import { motion } from 'framer-motion';
import { colors } from '../../theme/colors';

const About = () => {
  const features = [
    {
      title: 'Real-time Tracking',
      description: 'Track your ride in real-time with our advanced GPS technology. Know exactly when your driver will arrive and follow their progress throughout the journey.',
      icon: '🚗',
    },
    {
      title: 'Secure Payments',
      description: 'Enjoy seamless and secure payments with our integrated payment system. Multiple payment options available with end-to-end encryption.',
      icon: '💳',
    },
    {
      title: 'Smart Matching',
      description: 'Our intelligent algorithm matches you with the perfect driver based on your location, preferences, and ride requirements.',
      icon: '🎯',
    },
    {
      title: 'Safety First',
      description: 'Your safety is our priority. All drivers are verified, and we provide emergency assistance and ride sharing options.',
      icon: '🛡️',
    },
  ];

  const stats = [
    { number: '10M+', label: 'Happy Riders' },
    { number: '50K+', label: 'Verified Drivers' },
    { number: '100+', label: 'Cities Covered' },
    { number: '24/7', label: 'Customer Support' },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-neutral-900 mb-4">
            About RideShare
          </h1>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            We're revolutionizing the way people travel by connecting riders with drivers
            in a safe, efficient, and affordable way.
          </p>
        </motion.div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-neutral-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-primary-500 rounded-lg p-8 mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-white opacity-90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="bg-white rounded-lg shadow-lg p-8 mb-16"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-4">
            Our Mission
          </h2>
          <p className="text-neutral-600 mb-6">
            At RideShare, we're committed to making transportation more accessible,
            affordable, and sustainable. We believe in creating a community where
            everyone can move freely and safely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Sustainability
              </h3>
              <p className="text-neutral-600">
                We're working towards reducing carbon emissions by optimizing routes
                and promoting carpooling.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                Community
              </h3>
              <p className="text-neutral-600">
                Building a strong community of riders and drivers who share our
                values of safety, reliability, and trust.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center"
        >
          <h2 className="text-2xl font-bold text-neutral-900 mb-8">
            Join Our Team
          </h2>
          <p className="text-neutral-600 mb-6 max-w-2xl mx-auto">
            We're always looking for passionate individuals to join our team and
            help us shape the future of transportation.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 text-white px-6 py-3 rounded-lg font-medium"
          >
            View Open Positions
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default About; 