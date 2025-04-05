import React from 'react';
import { motion } from 'framer-motion';
import { Phone } from 'lucide-react';
import raja from "./raja.jpg"
import uday from "./uday.jpg"

const Team = () => {
  const students = [
    {
      name: 'Shibam Mohanty',
      role: 'Student Co-ordinator',
      contact: '+91 8458024651',
      image: './shibam.jpg',
    },
    {
      name: 'Chiranjeeb Kumar Sahoo',
      role: 'Student Co-ordinator',
      contact: '+91 6371850005',
      image: './chiranjeeb.jpg',
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
    {
      name: 'Subham Jyoti Pradhan',
      role: 'Student Co-ordinator',
      contact: '+91 7735361525',
      image: raja,
    },
    {
      name: 'Uday Raj',
      role: 'Student Co-ordinator',
      contact: '+91 8809663721',
      image: uday,
    },
  ];

  const faculty = [
    {
      name: 'Dr. John Doe',
      role: 'Faculty Co-ordinator',
      contact: '+91 9876543210',
      image: './faculty1.jpg',
    },
    {
      name: 'Dr. Jane Smith',
      role: 'Faculty Co-ordinator',
      contact: '+91 9876543211',
      image: './faculty2.jpg',
    },
  ];

  return (
    <section className="py-12 md:py-16 bg-[#0a0a0a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Faculty Co-ordinators Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Faculty Co-ordinators
          </h2>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-2xl">
              {faculty.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative group flex flex-col items-center"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <div className="relative p-6 rounded-xl bg-glass w-full h-full flex flex-col items-center">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-teal-400"
                    />
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">
                      {member.name}
                    </h3>
                    <p className="text-teal-400 mb-3 text-center">{member.role}</p>
                    <div className="flex items-center space-x-2 text-gray-300 mt-auto">
                      <Phone className="w-5 h-5 text-teal-400" />
                      <span>{member.contact}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Student Co-ordinators Section */}
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-12">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {students.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative group flex flex-col items-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl blur opacity-25 group-hover:opacity-50 transition-opacity duration-300"></div>
                <div className="relative p-6 rounded-xl bg-glass w-full h-full flex flex-col items-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover mb-4 border-2 border-blue-400"
                  />
                  <h3 className="text-xl font-semibold text-white mb-2 text-center">
                    {member.name}
                  </h3>
                  <p className="text-blue-400 mb-3 text-center">{member.role}</p>
                  <div className="flex items-center space-x-2 text-gray-300 mt-auto">
                    <Phone className="w-5 h-5 text-blue-400" />
                    <span>{member.contact}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;