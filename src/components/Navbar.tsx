import React, { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { NavLink, useLocation } from 'react-router-dom';

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

  // Close mobile menu when route changes
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
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-glass' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex items-center">
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gradient">InnovateX</span>
            </NavLink>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) => 
                    `text-gray-300 hover:text-blue-500 transition-colors duration-200 ${
                      isActive ? 'text-blue-500 font-medium' : ''
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              ))}
             
              <NavLink to="/register">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="px-6 py-2 rounded-full bg-blue-600 text-white glow-effect"
                >
                  Register Now
                </motion.button>
              </NavLink>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <X className="h-6 w-6 text-gray-300" />
              ) : (
                <Menu className="h-6 w-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-glass"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {menuItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) => 
                  `block px-3 py-2 text-gray-300 hover:text-blue-500 ${
                    isActive ? 'text-blue-500 font-medium' : ''
                  }`
                }
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink to="/register">
              <button className="w-full px-3 py-2 rounded-full bg-blue-600 text-white glow-effect">
                Register Now
              </button>
            </NavLink>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;