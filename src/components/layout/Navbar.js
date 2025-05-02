import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaUser, FaBell, FaWallet, FaSignOutAlt } from 'react-icons/fa';
import { toast } from 'react-toastify';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userData, setUserData] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  const handleLogout = () => {
    // Clear user data from localStorage
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    setUserData(null);
    
    // Show success notification
    toast.success('Logged out successfully');
    
    // Redirect to home page
    navigate('/');
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Rides', path: '/search' },
    { name: 'Offers', path: '/offer-ride' },
    { name: 'About Us', path: '/about' },
    { name: 'Help', path: '/help' },
  ];

  return (
    <nav className="bg-white shadow-ola">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
               
            <img 
                src="https://media.istockphoto.com/id/1294467610/vector/eco-steering-wheel-vector-logo-design.jpg?s=612x612&w=0&k=20&c=zMyEpw01M57yVmOKMuFiI9eBebjux-mL815hrU_Uuv4=" 
                alt="RideShare Logo" 
                className="h-16 w-auto"
              />

              <span className='text-3xl app-title font-extrabold font-sans'>GariLaGBE</span>

            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'text-primary-500'
                      : 'text-neutral-600 hover:text-primary-500'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Right Side Icons */}
          <div className="hidden md:flex items-center space-x-4">
            {isLoggedIn ? (
              <>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full text-neutral-600 hover:text-primary-500 hover:bg-primary-50"
                >
                  <FaWallet className="text-xl" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-2 rounded-full text-neutral-600 hover:text-primary-500 hover:bg-primary-50"
                >
                  <FaBell className="text-xl" />
                </motion.button>
                <Link to="/profile">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex items-center p-2 rounded-full text-neutral-600 hover:text-primary-500 hover:bg-primary-50"
                  >
                    <FaUser className="text-xl" />
                    {userData && userData.name && (
                      <span className="ml-2 font-medium text-sm">{userData.name.split(' ')[0]}</span>
                    )}
                  </motion.div>
                </Link>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLogout}
                  className="p-2 rounded-full text-neutral-600 hover:text-primary-500 hover:bg-primary-50"
                  title="Logout"
                >
                  <FaSignOutAlt className="text-xl" />
                </motion.button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 rounded-md text-neutral-600 hover:text-primary-500 border border-neutral-300 hover:border-primary-500 transition-colors"
                  >
                    Login
                  </motion.button>
                </Link>
                <Link to="/register">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="px-4 py-2 rounded-md bg-primary-500 text-white hover:bg-primary-600 transition-colors"
                  >
                    Sign Up
                  </motion.button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-neutral-600 hover:text-primary-500 hover:bg-primary-50"
            >
              {isOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden"
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`${
                location.pathname === item.path
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-600 hover:bg-primary-50 hover:text-primary-500'
              } block px-3 py-2 rounded-md text-base font-medium`}
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          
          {isLoggedIn ? (
            <>
              <Link 
                to="/profile"
                className="block px-3 py-2 text-neutral-600 hover:bg-primary-50 hover:text-primary-500 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <button 
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
                className="block w-full text-left px-3 py-2 text-neutral-600 hover:bg-primary-50 hover:text-primary-500 rounded-md text-base font-medium"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/login"
                className="block px-3 py-2 text-neutral-600 hover:bg-primary-50 hover:text-primary-500 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                to="/register"
                className="block px-3 py-2 bg-primary-500 text-white hover:bg-primary-600 rounded-md text-base font-medium"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;