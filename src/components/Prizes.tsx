import React from 'react';
import { motion } from 'framer-motion';
import { Trophy } from 'lucide-react';

const Prizes = () => {
  const prizes = [
    {
      place: '1st Place',
      amount: '₹50,000',
      emoji: '🥇',
      delay: 0,
    },
    {
      place: '2nd Place',
      amount: '₹30,000',
      emoji: '🥈',
      delay: 0.2,
    },
    {
      place: '3rd Place',
      amount: '₹20,000',
      emoji: '🥉',
      delay: 0.4,
    },
  ];

  return (
    <section id="prizes" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-center mb-12">
          <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
          <h2 className="text-3xl md:text-4xl font-bold text-gradient">
            Prizes
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prizes.map((prize) => (
            <motion.div
              key={prize.place}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              <div className="relative p-8 rounded-lg bg-glass text-center">
                <div className="text-4xl mb-4">{prize.emoji}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{prize.place}</h3>
                <p className="text-3xl font-bold text-gradient">{prize.amount}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes;