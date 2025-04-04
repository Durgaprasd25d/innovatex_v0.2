import React from 'react';
import { motion } from 'framer-motion';

const Sponsors = () => {
  const sponsors = [
    {
      name: 'STPI',
      logo: '/stpi.png',
    },
    {
      name: 'WebBucket',
      logo: '/webbucket.png',
    },
    {
      name: 'Codex',
      logo: '/codex.png',
    },
  ];

  return (
    <section id="sponsors" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Our Sponsors
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group w-full h-48 sm:h-56 md:h-64"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>

              <div className="relative h-full rounded-xl bg-glass p-6 flex flex-col items-center justify-center text-center shadow-lg">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="w-32 sm:w-40 md:w-48 object-contain mb-4 filter grayscale group-hover:grayscale-0 transition-all duration-300"
                />
                <p className="text-white text-lg font-semibold">{sponsor.name}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
