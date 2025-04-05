// import React from 'react';
// import { motion } from 'framer-motion';
// import { Trophy } from 'lucide-react';

// const Prizes = () => {
//   const prizes = [
//     {
//       place: '1st Place',
//       amount: '₹50,000',
//       emoji: '🥇',
//       delay: 0,
//     },
//     {
//       place: '2nd Place',
//       amount: '₹30,000',
//       emoji: '🥈',
//       delay: 0.2,
//     },
//     {
//       place: '3rd Place',
//       amount: '₹20,000',
//       emoji: '🥉',
//       delay: 0.4,
//     },
//   ];

//   return (
//     <section id="prizes" className="py-16 bg-[#0a0a0a]">
//       <div className="max-w-6xl mx-auto px-4">
//         <div className="flex items-center justify-center mb-12">
//           <Trophy className="w-8 h-8 text-yellow-500 mr-3" />
//           <h2 className="text-3xl md:text-4xl font-bold text-gradient">
//             Prizes
//           </h2>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {prizes.map((prize) => (
//             <motion.div
//               key={prize.place}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: prize.delay }}
//               className="relative group"
//             >
//               <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
//               <div className="relative p-8 rounded-lg bg-glass text-center">
//                 <div className="text-4xl mb-4">{prize.emoji}</div>
//                 <h3 className="text-xl font-semibold text-white mb-2">{prize.place}</h3>
//                 <p className="text-3xl font-bold text-gradient">{prize.amount}</p>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Prizes;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Zap, Gift } from "lucide-react";

const Prizes = () => {
  const [revealed, setRevealed] = useState(false);

  const toggleReveal = () => {
    setRevealed(!revealed);
  };

  // Prize data for 1st, 2nd, and 3rd place
  const prizeData = [
    {
      title: "Winner",
      amount: "",
      icon: <Trophy className="w-12 h-12 text-yellow-400" />,
    },
    {
      title: "1st Runners Up",
      amount: "",
      icon: <Trophy className="w-12 h-12 text-gray-400" />,
    },
  ];

  return (
    <section id="prizes" className="py-16 bg-[#0a0a0a] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        {/* Prize Pool Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            animate={{
              scale: [1, 1.05, 1],
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="flex justify-center mb-6"
          >
            <div className="relative">
              <Trophy className="w-12 h-12 text-yellow-500 z-10 relative" />
              <motion.div
                className="absolute -inset-2 bg-yellow-500 rounded-full blur-lg opacity-30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>
          </motion.div>

          <h2 className="text-3xl md:text-4xl font-bold text-gradient mb-4">
            Prize Pool
          </h2>

          <motion.div
            onClick={toggleReveal}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer inline-block"
          >
            {revealed ? (
              <motion.div
                initial={{ scale: 0.5 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200 }}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600 mb-4"
              >
                ₹1,00,000
              </motion.div>
            ) : (
              <motion.div
                initial={{ scale: 1 }}
                className="text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4 px-8 py-4 rounded-xl bg-glass border border-purple-500/30"
              >
                Reveal Prize Pool
              </motion.div>
            )}
          </motion.div>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Exciting prizes for the most innovative projects
          </p>
        </motion.div>

        {/* Prize Tiers - Centered */}
        <div className="flex justify-center px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl w-full mx-auto">
            {prizeData.map((prize, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100,
                }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl blur opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>

                <div className="relative p-8 rounded-xl bg-glass border border-gray-800 group-hover:border-blue-500/30 transition-all duration-300 h-full flex flex-col items-center justify-center">
                  <motion.div
                    animate={{
                      rotate: [0, 5, -5, 0],
                      scale: [1, 1.05, 1],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      repeatType: "reverse",
                    }}
                    className="mb-6"
                  >
                    {prize.icon}
                  </motion.div>

                  <h3 className="text-xl font-semibold text-white mb-2">
                    {prize.title}
                  </h3>
                  <div className="text-2xl font-bold text-gradient">
                    {prize.amount}
                  </div>

                  <motion.div
                    animate={{
                      opacity: [0.4, 0.8, 0.4],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="mt-6 text-gray-400 text-sm"
                  >
                    Exciting rewards for top performers
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Categories */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-semibold text-white mb-6 flex items-center justify-center">
            <Zap className="w-6 h-6 text-blue-400 mr-2" />
            Special Categories
          </h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
            className="bg-glass p-6 rounded-xl border border-gray-800 max-w-2xl mx-auto"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "Best Design",
                "Most Innovative",
                "People's Choice",
                "Best First Hack",
              ].map((category, index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  className="p-4 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-colors"
                >
                  <div className="text-blue-400 font-medium">{category}</div>
                  <div className="text-yellow-400 text-sm">Exciting prizes</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Prizes;
