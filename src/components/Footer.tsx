import React from 'react';
import { Instagram, Facebook, Linkedin, Globe, Mail, Phone, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

// Replace these with your actual image imports
import sponsor1 from './Layer 3.png';
import sponsor2 from './iic.jpg';
import sponsor3 from './bput.jpg';
import sponsor4 from './Nirf.jpg';
import sponsor5 from './AICTE.jpg';
import sponsor6 from './Nba.jpg';
import sponsor7 from './Naac.jpg';
import sponsor8 from './GDG.jpg';

const Footer = () => {
  const quickLinks = ['Home', 'Tracks', 'Prizes', 'FAQ', 'Contact Us'];
  const sponsors = [
    sponsor1,
    sponsor2,
    sponsor3,
    sponsor4,
    sponsor5,
    sponsor6,
    sponsor7,
    sponsor8,
  ];
  const socialMedia = [
    { icon: Instagram, url: 'https://www.instagram.com/innovatex_4.0_giet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==' },
    { icon: Facebook, url: 'https://www.facebook.com/gietbaniatangibbsr' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/gandhi-institute-for-education-and-technology-khurda-a093ab64/' },
    { icon: Globe, url: 'https://giet.edu/' },
  ];

  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-gray-800">
      {/* Hidden scrollbar styles */}
      <style jsx>{`
        .sponsors-container::-webkit-scrollbar {
          display: none;
        }
        .sponsors-container {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sponsors/Partners Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            In Association With
          </h3>
          <div className="sponsors-container flex overflow-x-auto py-4 gap-8 items-center">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="flex-shrink-0 p-4 rounded-lg flex items-center justify-center h-24"
              >
                <img
                  src={sponsor}
                  alt={`Sponsor ${index + 1}`}
                  className="max-h-16 max-w-[120px] object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.onerror = null;
                    target.src = 'https://via.placeholder.com/150';
                  }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <motion.li
                  key={link}
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors flex items-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 text-blue-500" />
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <a href="mailto:shibammohanty8658@gmail.com">
                  shibammohanty8658@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                <Mail className="w-5 h-5 mr-2 text-blue-400" />
                <a href="mailto:chiranjeebkumarsahoo1@gmail.com">
                  chiranjeebkumarsahoo1@gmail.com
                </a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <a href="tel:+916371850005">
                  +91 6371850005
                </a>
              </div>
              <div className="flex items-center text-gray-400 hover:text-blue-500 transition-colors">
                <Phone className="w-5 h-5 mr-2 text-blue-400" />
                <a href="tel:+918458024651">
                  +91 8458024651
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter & Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
            <form className="space-y-4 mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold transition-all"
              >
                Subscribe
              </motion.button>
            </form>

            <div className="flex space-x-4 justify-center">
              {socialMedia.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="bg-gray-800 p-2 rounded-full text-gray-400 hover:text-white transition-colors"
                >
                  {React.createElement(social.icon, { className: "w-5 h-5" })}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 InnovateX. All rights reserved.</p>
          <p className="mt-2 text-sm">Made with ❤️ by the InnovateX Team</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;