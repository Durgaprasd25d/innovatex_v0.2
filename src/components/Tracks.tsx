import React from 'react';
import { motion } from 'framer-motion';
import { Blocks, Brain, Lightbulb } from 'lucide-react';

const Tracks = () => {
  const tracks = [
    {
      title: 'Blockchain & Web3',
      description: 'Revolutionize Decentralization',
      icon: Blocks,
    },
    {
      title: 'AI & Machine Learning',
      description: 'Shape the Future with AI',
      icon: Brain,
    },
    {
      title: 'Open Innovation',
      description: 'Solve Real-World Problems',
      icon: Lightbulb,
    },
  ];

  return (
    <section id="tracks" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Pick Your Challenge
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <motion.div
              key={track.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-lg neon-border bg-glass group cursor-pointer"
            >
              <div className="flex flex-col items-center text-center">
                <track.icon className="w-12 h-12 text-blue-500 mb-4 group-hover:text-blue-400 transition-colors duration-300" />
                <h3 className="text-xl font-semibold text-white mb-2">{track.title}</h3>
                <p className="text-gray-400">{track.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks;