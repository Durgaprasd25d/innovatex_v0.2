import React from 'react';
import { Mail, Phone } from 'lucide-react';

const Footer = () => {
  const quickLinks = ['Home', 'Tracks', 'Prizes', 'FAQ', 'Contact Us'];

  return (
    <footer className="bg-[#0a0a0a] py-12 border-t border-gray-800">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <div className="flex items-center text-gray-400">
                <Mail className="w-5 h-5 mr-2" />
                <a href="mailto:contact@innovatex.com" className="hover:text-blue-500 transition-colors">
                  contact@innovatex.com
                </a>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-5 h-5 mr-2" />
                <a href="tel:+918895555987" className="hover:text-blue-500 transition-colors">
                  +91 123456789
                </a>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Stay Updated</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 text-white focus:outline-none focus:border-blue-500"
              />
              <button
                type="submit"
                className="w-full px-4 py-2 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2025 InnovateX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;