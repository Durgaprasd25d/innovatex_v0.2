import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Users, 
  Clock, 
  Trophy, 
  ShieldCheck,
  Lightbulb,
  Mail,
  Calendar,
  GitBranch,
  Presentation
} from 'lucide-react';

const HackathonGuidelines = () => {
  const guidelines = [
    {
      icon: Users,
      title: "Team Composition",
      items: [
        "Teams of 2-5 participants (Female Mandatory)",
        "Can be formed before or at the event",
        "Interdisciplinary teams encouraged"
      ]
    },
    {
      icon: Code2,
      title: "Project Requirements",
      items: [
        "Must be built during the hackathon",
        "Can use any tech stack",
        "Must include demo/presentation"
      ]
    },
    {
      icon: Clock,
      title: "Time Management",
      items: [
        "30-hour coding period",
        "Regular check-ins with mentors"
      ]
    },
    {
      icon: Trophy,
      title: "Judging Criteria",
      items: [
        "Innovation (40%)",
        "Technical Complexity (30%)",
        "Design/UX (20%)",
        "Practical Impact (10%)"
      ]
    },
    {
      icon: ShieldCheck,
      title: "Code of Conduct",
      items: [
        "Respect all participants",
        "No harassment tolerated",
        "Open source licenses required"
      ]
    },
    {
      icon: Lightbulb,
      title: "Tips for Success",
      items: [
        "Focus on a clear problem",
        "Build a working prototype",
        "Prepare a compelling pitch"
      ]
    }
  ];

  const schedule = [
    {
      time: "Saturday, 4 April 2025, 09:00 AM",
      event: "Registration Open"
    },
    {
      time: "Thursday,10 April 2025, 10AM",
      event: "Problem Statement Live"
    },
    {
      time: "Wednesday,16 April 2025, 09AM",
      event: "Opening Ceremony & Team Formations"
    },
    {
      time: "Wednesday , 16 April 2025, 10AM",
      event: "Hacking Begins !"
    },
    {
      time: "Wednesday Night",
      event: "Night Party"
    },
    {
      time: "Thursday 17 April 2025 , 03:00 Pm",
      event: "Awards & Closing"
    }
  ];

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] text-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            Hackathon Guidelines
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to know to make the most of InnovateX Hackathon 2024
          </p>
        </motion.div>

        {/* Main Guidelines */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {guidelines.map((section, index) => {
            const Icon = section.icon;
            return (
              <motion.div
                key={section.title}
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-glass p-6 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-lg bg-blue-900/20 mr-4">
                    <Icon className="w-6 h-6 text-blue-400" />
                  </div>
                  <h2 className="text-xl font-semibold">{section.title}</h2>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, i) => (
                    <motion.li 
                      key={i}
                      whileHover={{ x: 5 }}
                      className="flex items-start text-gray-300"
                    >
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Schedule Section */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <div className="flex items-center justify-center mb-8">
            <Calendar className="w-8 h-8 text-purple-400 mr-3" />
            <h2 className="text-3xl font-bold text-center">Event Schedule</h2>
          </div>
          
          <div className="relative">
            {/* Timeline bar */}
            <div className="absolute left-5 h-full w-1 bg-gradient-to-b from-blue-500 to-purple-600 md:left-1/2 md:-ml-1"></div>
            
            {/* Timeline items */}
            <div className="space-y-8">
              {schedule.map((item, index) => (
                <motion.div
                  key={item.time}
                  initial="hidden"
                  animate="visible"
                  variants={fadeIn}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className={`relative pl-10 md:pl-0 md:w-1/2 ${index % 2 === 0 ? 'md:mr-auto md:pr-10 md:text-right' : 'md:ml-auto md:pl-10'}`}
                >
                  {/* Timeline dot */}
                  <div className={`absolute top-1 w-3 h-3 rounded-full bg-blue-400 left-2 md:left-1/2 md:-ml-1.5 ${index === schedule.length - 1 ? 'ring-4 ring-purple-500/30' : ''}`}></div>
                  
                  <div className="bg-glass p-5 rounded-xl border border-gray-800 hover:border-blue-500/30 transition-all duration-300">
                    <h3 className="font-bold text-blue-400">{item.time}</h3>
                    <p className="text-gray-300">{item.event}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Additional Resources */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="bg-glass rounded-xl p-8 border border-gray-800 mb-12"
        >
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <GitBranch className="w-6 h-6 text-green-400 mr-3" />
            Submission & Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-blue-400">Submission Process</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Submit GitHub repo link via DevPost
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  3-minute demo video required
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2">•</span>
                  Include README with setup instructions
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-purple-400">Helpful Resources</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  API & Dataset Library
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Design Assets Repository
                </li>
                <li className="flex items-start">
                  <span className="text-purple-400 mr-2">•</span>
                  Mentorship Schedule
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Final CTA */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <Presentation className="w-10 h-10 text-yellow-400" />
          </div>
          <h2 className="text-2xl font-bold mb-4">Ready to Build Something Amazing?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Still have questions? Reach out to our organizers at hackathon@innovatex.dev
          </p>
          
          <a href="/team">
            <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full text-white font-medium glow-effect"
          >
            <Mail className="inline mr-2 w-5 h-5" />
            Contact Organizers
          </motion.button></a>
        </motion.div>
      </div>
    </div>
  );
};

export default HackathonGuidelines;