import { motion } from "framer-motion";
import { Rocket, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Hero = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRegisterClick = () => {
    navigate("/register"); // Navigate to the "/team" route
  };

  return (
    <div
      id="home"
      className="min-h-screen flex items-center justify-center bg-[#0a0a0a] relative overflow-hidden"
    >
      {/* Animated space background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stars */}
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: [0, -20],
            }}
            transition={{
              duration: 5 + Math.random() * 10,
              delay: Math.random() * 5,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="absolute bg-white rounded-full"
            style={{
              width: `${Math.random() * 3}px`,
              height: `${Math.random() * 3}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Animated grid */}
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute inset-0 bg-[linear-gradient(to_right,#080808_1px,transparent_1px),linear-gradient(to_bottom,#080808_1px,transparent_1px)] bg-[size:24px_24px]"
        />
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        {/* Rocket animation */}
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, type: "spring" }}
          className="flex justify-center mb-8"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
              rotate: [0, 2, -2, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            <Rocket className="w-16 h-16 md:w-24 md:h-24 text-blue-400 z-10 relative" />
            <motion.div
              className="absolute -bottom-4 left-1/2 transform -translate-x-1/2"
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
              }}
            >
              <div className="w-8 h-8 md:w-12 md:h-12 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full blur-sm" />
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
        >
          <span className="text-gradient bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
            Dream | Design | Develop
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto mb-8"
        >
          Join the Ultimate Hackathon – Solve Real-World Challenges and Compete
          for Exciting Rewards!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <motion.div
            className="flex justify-center items-center min-h-[100px]" // Center horizontally and vertically
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleRegisterClick} // Use the handler for navigation
              className="px-8 py-4 rounded-full bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold glow-effect flex items-center space-x-2"
            >
              <span>Register Now</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Countdown timer placeholder */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-16 text-gray-400"
        ></motion.div>
      </div>

      {/* Floating planets/asteroids */}
      <motion.div
        animate={{
          rotate: [0, 360],
          x: [0, 20, 0],
          y: [0, 10, 0],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute top-1/4 left-1/4 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"
      />

      <motion.div
        animate={{
          rotate: [360, 0],
          x: [0, -30, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-blue-500/10 rounded-full blur-xl"
      />
    </div>
  );
};

export default Hero;