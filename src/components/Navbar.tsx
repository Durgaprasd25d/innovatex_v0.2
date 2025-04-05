import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';
import logoImage from '../components/Layer 3.png'; // Update this path

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const menuItems = [
    { name: 'Home', path: "/" },
    { name: 'Tracks', path: "/tracks" },
    { name: 'Timeline', path: "/timeline" },
    { name: 'Prizes', path: "/prizes" },
    { name: 'Sponsors', path: "/sponsors" },
    { name: 'Guidelines', path: "/guideline" },
    { name: 'Team', path: "/team" }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-glass backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Enhanced Logo Section with Image */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <NavLink to="/" className="flex items-center space-x-3 group">
              {/* Logo Image Container */}
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="flex items-center justify-center"
              >
                <img 
                  src={logoImage} 
                  alt="InnovateX Logo"
                  className="h-12 w-auto object-contain" // Adjust height as needed
                />
              </motion.div>
              
              {/* Logo Text */}
              <div className="flex flex-col items-start">
                <motion.span 
                  className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400 group-hover:from-blue-300 group-hover:to-purple-300 transition-all"
                  whileHover={{ scale: 1.02 }}
                >
                  InnovateX
                </motion.span>
                <span className="text-xs text-gray-400">Hackathon 2025</span>
              </div>
            </NavLink>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `relative px-3 py-2 text-gray-300 hover:text-white transition-colors duration-200 ${
                      isActive ? 'text-white font-medium' : ''
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {item.name}
                      {isActive && (
                        <motion.div 
                          layoutId="navUnderline"
                          className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-400"
                          transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              ))}
             
              <NavLink to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-6 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition-all"
                >
                  Register Now
                </motion.button>
              </NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button 
              onClick={() => setIsOpen(!isOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm"
            >
              {isOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-gray-900/95 backdrop-blur-lg border-t border-gray-800"
        >
          <div className="px-4 py-4 space-y-2">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block px-4 py-3 rounded-lg text-gray-300 hover:bg-gray-800/50 transition-colors ${
                    isActive ? 'text-white bg-gray-800/70 font-medium' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/register">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 px-4 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium"
              >
                Register Now
              </motion.button>
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;