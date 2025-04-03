import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const CountdownTimer = () => {
  const targetDate = new Date('2024-04-16T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      };
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Update every second
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center p-4"
    >
      <div className="text-4xl md:text-6xl font-bold text-blue-500 mb-2">
        {value.toString().padStart(2, '0')}
      </div>
      <div className="text-sm text-gray-400 uppercase">{label}</div>
    </motion.div>
  );

  return (
    <div className="w-full py-12 bg-[#0a0a0a]">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center items-center space-x-4 md:space-x-8">
          <TimeUnit value={timeLeft.days} label="Days" />
          <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
          <TimeUnit value={timeLeft.hours} label="Hours" />
          <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
          <TimeUnit value={timeLeft.minutes} label="Minutes" />
          <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
          <TimeUnit value={timeLeft.seconds} label="Seconds" />
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;