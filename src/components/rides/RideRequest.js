import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { io } from 'socket.io-client';
import { colors } from '../../theme/colors';

const RideRequest = ({ rideId, onAccept, onReject }) => {
  const [status, setStatus] = useState('pending');
  const [showDetails, setShowDetails] = useState(false);

  const handleAccept = () => {
    setStatus('accepted');
    onAccept(rideId);
  };

  const handleReject = () => {
    setStatus('rejected');
    onReject(rideId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg p-6 mb-4"
    >
      <div className="flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.02 }}
          className="flex-1 cursor-pointer"
          onClick={() => setShowDetails(!showDetails)}
        >
          <h3 className="text-xl font-semibold text-neutral-800">Ride Request #{rideId}</h3>
          <p className="text-sm text-neutral-600">Click for details</p>
        </motion.div>

        <AnimatePresence>
          {status === 'pending' && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex space-x-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleAccept}
                className="px-4 py-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
              >
                Accept
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleReject}
                className="px-4 py-2 bg-error text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Reject
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>

        {status !== 'pending' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`px-4 py-2 rounded-lg ${
              status === 'accepted' ? 'bg-accent-500' : 'bg-error'
            } text-white`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {showDetails && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-4 overflow-hidden"
          >
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-600">Pickup Location</h4>
                  <p className="text-neutral-800">123 Main Street</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-600">Destination</h4>
                  <p className="text-neutral-800">456 Park Avenue</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-neutral-600">Passenger</h4>
                  <p className="text-neutral-800">John Doe</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-neutral-600">Fare</h4>
                  <p className="text-neutral-800">$25.00</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default RideRequest; 