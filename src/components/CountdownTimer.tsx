import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CountdownTimer = () => {
  const targetDate = new Date("2025-04-16T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      return distance > 0
        ? {
            days: Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds: Math.floor((distance % (1000 * 60)) / 1000),
          }
        : { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      key={`${label}-${value}`}
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 15 }}
      className="flex flex-col items-center mx-1 sm:mx-2 md:mx-3"
    >
      <div className="relative">
        <motion.div
          className="absolute inset-0 bg-blue-500/10 rounded-lg blur-sm"
          animate={{
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        />
        <div className="relative text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-400 to-blue-600 px-3 py-2 sm:px-4 sm:py-3">
          {value.toString().padStart(2, "0")}
        </div>
      </div>
      <div className="text-xs sm:text-sm text-gray-400 uppercase mt-1 sm:mt-2">
        {label}
      </div>
    </motion.div>
  );

  const Separator = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex items-center justify-center text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-bold text-blue-400 mx-1 sm:mx-2"
    >
      :
    </motion.div>
  );

  return (
    <div className="w-full py-8 sm:py-12 bg-gradient-to-b from-[#0a0a0a] to-[#1a1a2e] text-white flex flex-col items-center">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-300 mb-4 sm:mb-6"
      >
        Countdown to InnovateX 2025
      </motion.h2>
      
      <div className="flex items-center justify-center">
        <TimeUnit value={timeLeft.days} label="Days" />
        <Separator />
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <Separator />
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <Separator />
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-xs sm:text-sm text-gray-500 mt-6 text-center max-w-md px-4"
      >
        April 16, 2025 | 00:00 UTC
      </motion.p>
    </div>
  );
};

export default CountdownTimer;