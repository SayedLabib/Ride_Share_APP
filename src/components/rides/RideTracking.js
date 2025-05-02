import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Map, Marker, NavigationControl } from 'react-map-gl';
import { io } from 'socket.io-client';
import { colors } from '../../theme/colors';

const RideTracking = ({ rideId, driverLocation, passengerLocation }) => {
  const [driverPosition, setDriverPosition] = useState(driverLocation);
  const [passengerPosition, setPassengerPosition] = useState(passengerLocation);
  const [viewport, setViewport] = useState({
    latitude: driverLocation.latitude,
    longitude: driverLocation.longitude,
    zoom: 12
  });

  useEffect(() => {
    const socket = io(process.env.REACT_APP_SOCKET_URL);

    socket.on('driverLocationUpdate', (location) => {
      setDriverPosition(location);
    });

    socket.on('passengerLocationUpdate', (location) => {
      setPassengerPosition(location);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[500px] rounded-lg overflow-hidden shadow-lg"
    >
      <Map
        {...viewport}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        onViewportChange={setViewport}
        mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
      >
        <NavigationControl />
        
        <AnimatePresence>
          <Marker
            latitude={driverPosition.latitude}
            longitude={driverPosition.longitude}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-8 h-8 bg-primary-500 rounded-full border-4 border-white shadow-lg"
            />
          </Marker>

          <Marker
            latitude={passengerPosition.latitude}
            longitude={passengerPosition.longitude}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="w-8 h-8 bg-accent-500 rounded-full border-4 border-white shadow-lg"
            />
          </Marker>
        </AnimatePresence>
      </Map>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="absolute bottom-4 left-4 bg-white p-4 rounded-lg shadow-lg"
      >
        <h3 className="text-lg font-semibold text-neutral-800">Ride Status</h3>
        <div className="mt-2 space-y-2">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-primary-500 rounded-full mr-2" />
            <span className="text-sm text-neutral-600">Driver</span>
          </div>
          <div className="flex items-center">
            <div className="w-3 h-3 bg-accent-500 rounded-full mr-2" />
            <span className="text-sm text-neutral-600">Passenger</span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default RideTracking; 