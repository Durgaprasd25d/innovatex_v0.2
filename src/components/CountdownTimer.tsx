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
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      className="flex flex-col items-center p-4"
    >
      <div className="text-4xl md:text-6xl font-bold text-blue-500">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-sm text-gray-400 uppercase">{label}</div>
    </motion.div>
  );

  return (
    <div className="w-full py-12 bg-[#0a0a0a] text-white flex justify-center items-center">
      <div className="flex space-x-3 sm:space-x-6 md:space-x-8">
        <TimeUnit value={timeLeft.days} label="Days" />
        <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
        <TimeUnit value={timeLeft.hours} label="Hours" />
        <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
        <TimeUnit value={timeLeft.minutes} label="Minutes" />
        <div className="text-4xl md:text-6xl font-bold text-blue-500">:</div>
        <TimeUnit value={timeLeft.seconds} label="Seconds" />
      </div>
    </div>
  );
};

export default CountdownTimer;
