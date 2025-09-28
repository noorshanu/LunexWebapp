import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { FiCircle } from 'react-icons/fi';

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Stake', path: '/', active: location.pathname === '/' },
    { name: 'Swap', path: '/swap', active: location.pathname === '/swap' },
    { name: 'Vote', path: '/vote', active: location.pathname === '/vote' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <header className="bg-black border-b border-gray-800 relative z-50 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between ">
            {/* Logo and Navigation together */}
            <div className="flex items-center space-x-8">
              {/* Logo */}
              <motion.div 
                className="flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img src="/images/logo.png" alt="Lunex Logo" className="h-8 w-auto" />
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    className="relative px-6 py-2 text-sm font-medium transition-colors duration-200"
                  >
                    <div className="flex items-center space-x-2">
                      <FiCircle 
                        className={`w-5 h-5 ${
                          item.active ? 'text-[#34FCB4] fill-current p-1 border border-gray-500 rounded-full' : 'text-gray-500'
                        }`}
                      />
                      <span className={item.active ? 'text-white' : 'text-gray-400 hover:text-white'}>
                        {item.name}
                      </span>
                    </div>
                    {item.active && (
                      <motion.div
                        className="absolute bottom-[-24px] left-5 right-0 h-1 bg-[#34FCB4] w-[80%] mx-auto "
                        layoutId="activeTab"
                        initial={false}
                        transition={{ duration: 0.3 }}
                      />
                    )}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Right side items */}
            <div className="flex items-center space-x-4 gap-4">
              {/* Country Flag */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="hidden md:block"
              >
                <img 
                  src="https://flagcdn.com/w20/us.png" 
                  alt="US Flag" 
                  className="w-5 h-4 "
                />
              </motion.div>

              {/* Connect Wallet Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white  px-2 py-2  font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-200 text-sm flex items-center space-x-2 border border-green-400 relative"
              >
                <img src="images/button.png" alt="" className=' absolute left-[-10px]' />
       
                <span className='py-2 px-4 border border-gray-700'>Connect Wallet</span>
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={toggleMobileMenu}
                className="md:hidden text-gray-400 hover:text-white transition-colors"
              >
                {isMobileMenuOpen ? (
                  <HiX className="w-6 h-6" />
                ) : (
                  <HiMenuAlt3 className="w-6 h-6" />
                )}
              </motion.button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden"
              onClick={toggleMobileMenu}
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="fixed top-0 right-0 h-full w-80 bg-gray-900 border-l border-gray-800 z-50 md:hidden"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-800">
                  <div className="flex items-center space-x-2">
                    <img src="/images/logo.png" alt="Lunex Logo" className="h-8 w-auto" />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={toggleMobileMenu}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <HiX className="w-6 h-6" />
                  </motion.button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-8">
                  <div className="space-y-6">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          onClick={toggleMobileMenu}
                          className="flex items-center space-x-4 py-3 px-4 rounded-lg hover:bg-gray-800 transition-colors"
                        >
                          <FiCircle 
                            className={`w-4 h-4 ${
                              item.active ? 'text-cyan-400 fill-current' : 'text-gray-500'
                            }`}
                          />
                          <span className={`text-lg font-medium ${
                            item.active ? 'text-white' : 'text-gray-400'
                          }`}>
                            {item.name}
                          </span>
                          {item.active && (
                            <motion.div
                              className="w-2 h-2 bg-cyan-400 rounded-full ml-auto"
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              transition={{ duration: 0.2 }}
                            />
                          )}
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </nav>

                {/* Bottom Section */}
                <div className="p-6 border-t border-gray-800">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-400 text-sm">Region</span>
                    <img 
                      src="https://flagcdn.com/w20/us.png" 
                      alt="US Flag" 
                      className="w-5 h-4 rounded-sm"
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-cyan-500 to-green-500 text-black px-4 py-3 rounded-xl font-semibold hover:from-cyan-600 hover:to-green-600 transition-all duration-200 flex items-center justify-center space-x-2 border border-green-400"
                  >
                    <div className="w-4 h-4 rounded-full border border-black flex items-center justify-center">
                      <div className="w-2 h-2 bg-black rounded-full"></div>
                    </div>
                    <span>Connect Wallet</span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
