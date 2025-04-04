import React, { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";
import { motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { name: "Home", href: "#", type: "anchor" },
    { name: "Tracks", href: "#tracks", type: "anchor" },
    { name: "Timeline", href: "#timeline", type: "anchor" },
    { name: "Prizes", href: "#prizes", type: "anchor" },
    { name: "Sponsors", href: "#sponsors", type: "anchor" },
    { name: "FAQ", href: "#faq", type: "anchor" },
    { name: "Team", href: "#team", type: "anchor" },
    { name: "Admin", href: "/hakathon-dashboard", type: "route" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false); // Close mobile menu when clicking a link
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 64; // Height of the navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-glass" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a
              href="#"
              onClick={() => handleNavClick("#")}
              className="flex items-center"
            >
              <Code2 className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-gradient">
                InnovateX
              </span>
            </a>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (item.type === "anchor") {
                      e.preventDefault();
                      handleNavClick(item.href);
                    }
                  }}
                  className="text-gray-300 hover:text-blue-500 transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}

              <motion.button
                whileHover={{ scale: 1.05 }}
                onClick={() => handleNavClick("#register")}
                className="px-6 py-2 rounded-full bg-blue-600 text-white glow-effect"
              >
                Register Now
              </motion.button>
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
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.href);
                }}
                className="block px-3 py-2 text-gray-300 hover:text-blue-500"
              >
                {item.name}
              </a>
            ))}
            <button
              onClick={() => handleNavClick("#register")}
              className="w-full px-3 py-2 rounded-full bg-blue-600 text-white glow-effect"
            >
              Register Now
            </button>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
