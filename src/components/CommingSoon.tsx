import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Rocket, Flame, Zap, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const ComingSoon = () => {
  const { track } = useParams();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Set target date to April 10, 2025
    const targetDate = new Date('April 10, 2025 00:00:00').getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setIsComplete(true);
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    // Run immediately to avoid initial delay
    updateCountdown();
    
    // Then set up the interval
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedTrack = track 
    ? track.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') 
    : 'Track';

  // Animation variants for countdown numbers
  const numberVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 15 }
    },
    exit: { y: 20, opacity: 0 }
  };

  // Animation for rocket trail
  const flameVariants = {
    initial: { scale: 1, opacity: 0.7 },
    animate: { 
      scale: [1, 1.2, 1],
      opacity: [0.7, 1, 0.7],
      transition: { repeat: Infinity, duration: 0.8 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a2e] text-white flex items-center justify-center p-4 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl w-full text-center relative"
      >
        {/* Animated background elements */}
        <motion.div 
          className="absolute -top-20 -left-20 w-40 h-40 rounded-full bg-blue-900/20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute -bottom-20 -right-20 w-60 h-60 rounded-full bg-purple-900/20 blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />

        <div className="relative z-10">
          {/* Rocket with animated flames */}
          <div className="flex justify-center mb-8 relative">
            <motion.div
              animate={{ 
                y: [0, -15, 0],
                rotate: [0, 2, -2, 0]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 4,
                ease: "easeInOut" 
              }}
              className="relative"
            >
              <Rocket className="w-20 h-20 text-blue-400 z-10 relative" />
              <motion.div 
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2"
                variants={flameVariants}
                initial="initial"
                animate="animate"
              >
                <Flame className="w-8 h-8 text-orange-500" />
                <motion.div 
                  className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-yellow-400 rounded-full blur-sm"
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 0.6,
                    delay: 0.2
                  }}
                />
              </motion.div>
            </motion.div>
          </div>

          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600">
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              {formattedTrack} Launching!
            </motion.span>
          </h1>

          <motion.p 
            className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Mark your calendars for <span className="text-blue-400">April 10, 2025</span>!
          </motion.p>

          {/* Countdown with flip animations */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mb-12 max-w-2xl mx-auto">
            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-glass p-5 rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-blue-900/10 rounded-xl border border-blue-500/30" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={timeLeft.days}
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-4xl font-bold text-blue-400 mb-1"
                >
                  {timeLeft.days.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <div className="text-gray-400 text-sm">DAYS</div>
              <Sparkles className="absolute top-2 right-2 w-3 h-3 text-blue-400 opacity-70" />
            </motion.div>

            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="bg-glass p-5 rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-purple-900/10 rounded-xl border border-purple-500/30" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={timeLeft.hours}
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-4xl font-bold text-purple-400 mb-1"
                >
                  {timeLeft.hours.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <div className="text-gray-400 text-sm">HOURS</div>
              <Sparkles className="absolute top-2 right-2 w-3 h-3 text-purple-400 opacity-70" />
            </motion.div>

            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="bg-glass p-5 rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-pink-900/10 rounded-xl border border-pink-500/30" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={timeLeft.minutes}
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-4xl font-bold text-pink-400 mb-1"
                >
                  {timeLeft.minutes.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <div className="text-gray-400 text-sm">MINUTES</div>
              <Sparkles className="absolute top-2 right-2 w-3 h-3 text-pink-400 opacity-70" />
            </motion.div>

            <motion.div 
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 1.0 }}
              className="bg-glass p-5 rounded-xl relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-green-900/10 rounded-xl border border-green-500/30" />
              <AnimatePresence mode="wait">
                <motion.div
                  key={timeLeft.seconds}
                  variants={numberVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="text-4xl font-bold text-green-400 mb-1"
                >
                  {timeLeft.seconds.toString().padStart(2, '0')}
                </motion.div>
              </AnimatePresence>
              <div className="text-gray-400 text-sm">SECONDS</div>
              <Sparkles className="absolute top-2 right-2 w-3 h-3 text-green-400 opacity-70" />
            </motion.div>
          </div>

          {/* Status indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="flex flex-col items-center justify-center gap-4 text-gray-400"
          >
            <motion.div 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900/50 border border-gray-700/50"
              whileHover={{ scale: 1.05 }}
            >
              <Zap className="w-4 h-4 text-yellow-400" />
              <span>Time until April 10, 2025</span>
            </motion.div>
          </motion.div>

          {/* Launch complete animation */}
          <AnimatePresence>
            {isComplete && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="mt-8"
              >
                <motion.div 
                  className="text-green-400 text-xl font-medium flex items-center justify-center gap-2"
                  initial={{ scale: 0.5 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring' }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Launch sequence complete!</span>
                  <Sparkles className="w-5 h-5" />
                </motion.div>
                <motion.p
                  className="text-gray-400 mt-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  The {formattedTrack.toLowerCase()} is now live!
                </motion.p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};

export default ComingSoon;