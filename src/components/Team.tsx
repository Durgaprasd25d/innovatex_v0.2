import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';

const Team = () => {
  const team = [
    {
      name: 'Shibam Mohanty',
      role: 'Student Co-ordinator',
      contact: '+91 8458024651',
      image: './shibam.jpg',
    },
    {
      name: 'Durgaprasad Dalai',
      role: 'Student Co-ordinator',
      contact: '+91 8895555987',
      image: './durga.jpg',
    },
    {
      name: 'Jyotiranjan Dhal',
      role: 'Student Co-ordinator',
      contact: '+91 9827778066',
      image: './jyotiranjan.jpg',
    },
    {
      name: 'Chiranjeeb Kumar Sahoo',
      role: 'Student Co-ordinator',
      contact: '+91 6371850005',
      image: './chiranjeeb.jpg',
    },
    {
      name: 'Abhishek Emmanual Hansdak',
      role: 'Student Co-ordinator',
      contact: '+91 9798264985',
      image: './abhishek.jpg',
    },
    {
      name: 'Tanmya Kumar Puti',
      role: 'Student Co-ordinator',
      contact: '+91 6371560859',
      image: './tanmya.jpg',
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
                <p className="text-blue-400 mb-2">{member.role}</p>
                
                <div className="flex items-center justify-center space-x-2 text-gray-300 mt-2">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>{member.contact}</span>
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
