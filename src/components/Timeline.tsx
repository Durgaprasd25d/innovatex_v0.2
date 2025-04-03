import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Clock } from 'lucide-react';

const Timeline = () => {
  const timelineItems = [
    {
      title: 'Registration Open',
      status: 'completed',
      icon: CheckCircle,
    },
    {
      title: 'Idea Submission',
      status: 'upcoming',
      icon: Clock,
    },
    {
      title: 'Check-in',
      status: 'upcoming',
      icon: Clock,
    },
    {
      title: 'Hacking Begins',
      status: 'upcoming',
      icon: Clock,
    },
  ];

  return (
    <div id="timeline" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Event Timeline
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/20"></div>
          
          {timelineItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`relative flex items-center mb-8 ${
                index % 2 === 0 ? 'justify-start' : 'justify-end'
              }`}
            >
              <div
                className={`w-full md:w-5/12 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}
              >
                <div className="p-6 rounded-lg neon-border bg-glass">
                  <div className="flex items-center mb-2">
                    <item.icon
                      className={`w-6 h-6 mr-2 ${
                        item.status === 'completed' ? 'text-green-500' : 'text-blue-500'
                      }`}
                    />
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                  </div>
                  <p className="text-gray-400">
                    {item.status === 'completed' ? 'Completed' : 'Coming Soon'}
                  </p>
                </div>
              </div>
              
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-500 glow-effect"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;