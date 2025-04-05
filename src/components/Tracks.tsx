import React from 'react';
import { motion } from 'framer-motion';
import { 
  Blocks, 
  Cpu, 
  Lightbulb, 
  BrainCircuit, 
  Shield, 
  Map 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Tracks = () => {
  const navigate = useNavigate();

  const tracks = [
    {
      title: 'Software Development',
      description: 'Build innovative applications, frameworks, or tools that push the boundaries of modern software engineering.',
      icon: Blocks,
      iconColor: 'text-blue-500',
      path: '/commingsoon'
    },
    {
      title: 'Hardware & IoT',
      description: 'Create cutting-edge hardware solutions or IoT devices that bridge the physical and digital worlds.',
      icon: Cpu,
      iconColor: 'text-purple-500',
      path: '/commingsoon'
    },
    {
      title: 'Open Innovation',
      description: 'Propose groundbreaking solutions that don\'t fit traditional categories but have real-world impact potential.',
      icon: Lightbulb,
      iconColor: 'text-yellow-500',
      path: '/commingsoon'
    },
    {
      title: 'AI & ML',
      description: 'Develop intelligent systems, machine learning models, or AI applications that solve complex problems.',
      icon: BrainCircuit,
      iconColor: 'text-green-500',
      path: '/commingsoon'
    },
    {
      title: 'Cyber Security',
      description: 'Design security solutions, encryption methods, or systems to protect against emerging digital threats.',
      icon: Shield,
      iconColor: 'text-red-500',
      path: '/commingsoon'
    },
    {
      title: 'Smart City & Urban Tech',
      description: 'Create technologies that improve urban living, transportation, infrastructure, or sustainability.',
      icon: Map,
      iconColor: 'text-orange-500',
      path: '/commingsoon'
    },
  ];

  const handleTrackClick = (path: string) => {
    navigate(path);
  };

  return (
    <section id="tracks" className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Choose Your Track
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tracks.map((track, index) => {
            const IconComponent = track.icon;
            return (
              <motion.div
                key={track.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-lg neon-border bg-glass group cursor-pointer"
                onClick={() => handleTrackClick(track.path)}
              >
                <div className="flex flex-col items-center text-center h-full">
                  <IconComponent 
                    className={`w-12 h-12 mb-4 group-hover:scale-110 transition-all duration-300 ${track.iconColor}`} 
                  />
                  <h3 className="text-xl font-semibold text-white mb-2">{track.title}</h3>
                  <p className="text-gray-400 mb-4">{track.description}</p>
                  <div className="mt-auto text-blue-400 group-hover:text-blue-300 transition-colors">
                    Learn more →
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Tracks;