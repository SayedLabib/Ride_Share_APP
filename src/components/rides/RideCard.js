import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaUser, FaCar, FaMapMarkerAlt } from 'react-icons/fa';

const RideCard = ({ ride }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-ola shadow-ola overflow-hidden"
    >
      {/* Ride Image */}
      <div className="relative h-48">
        <img
          src={ride.image || '/src/assets/images/ride-placeholder.jpg'}
          alt={ride.type}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full text-sm font-semibold text-primary-500">
          {ride.type}
        </div>
      </div>

      {/* Ride Details */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <FaCar className="text-primary-500" />
            <h3 className="text-xl font-semibold text-neutral-800">
              {ride.vehicleName}
            </h3>
          </div>
          <div className="flex items-center gap-1">
            <FaStar className="text-yellow-400" />
            <span className="text-neutral-600">{ride.rating}</span>
          </div>
        </div>

        {/* Route Information */}
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary-500" />
            <div>
              <p className="text-sm text-neutral-600">From</p>
              <p className="font-medium text-neutral-800">{ride.pickup}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <FaMapMarkerAlt className="text-primary-500" />
            <div>
              <p className="text-sm text-neutral-600">To</p>
              <p className="font-medium text-neutral-800">{ride.destination}</p>
            </div>
          </div>
        </div>

        {/* Driver Information */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                src={ride.driverImage || '/src/assets/images/driver-placeholder.jpg'}
                alt={ride.driverName}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <p className="text-sm text-neutral-600">Driver</p>
              <p className="font-medium text-neutral-800">{ride.driverName}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <FaUser className="text-neutral-400" />
            <span className="text-neutral-600">{ride.seatsAvailable} seats</span>
          </div>
        </div>

        {/* Price and Book Button */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-neutral-600">Price</p>
            <p className="text-2xl font-bold text-primary-500">
              ₹{ride.price}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-primary-500 text-white px-6 py-2 rounded-ola font-semibold"
          >
            Book Now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default RideCard; 