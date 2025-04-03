import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Alice Johnson',
      role: 'Frontend Developer',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Bob Smith',
      role: 'UI/UX Designer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
    {
      name: 'Charlie Brown',
      role: 'Backend Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      social: {
        twitter: '#',
        linkedin: '#',
        github: '#',
      },
    },
  ];

  return (
    <section className="py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gradient">
          Meet Our Team
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
              <div className="relative p-6 rounded-lg bg-glass text-center">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-4">{member.role}</p>
                
                <div className="flex justify-center space-x-4">
                  <a href={member.social.twitter} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a href={member.social.linkedin} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a href={member.social.github} className="text-gray-400 hover:text-blue-500 transition-colors">
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;