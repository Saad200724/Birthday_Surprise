import { motion } from "framer-motion";
import { useState } from "react";

interface GiftBoxProps {
  onClick: () => void;
}

export default function GiftBox({ onClick }: GiftBoxProps) {
  const [isShaking, setIsShaking] = useState(false);

  const handleClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      onClick();
    }, 500);
  };

  return (
    <motion.div
      className={`gift-box cursor-pointer transition-transform duration-300 hover:scale-110 ${isShaking ? 'animate-gift-shake' : ''}`}
      onClick={handleClick}
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="relative">
        <motion.div
          className="w-24 h-24 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 bg-gradient-to-br from-pink-500 to-yellow-400 rounded-2xl shadow-2xl animate-pulse-glow"
          animate={{
            boxShadow: [
              "0 0 20px rgba(244, 114, 182, 0.5)",
              "0 0 40px rgba(244, 114, 182, 0.8)",
              "0 0 60px rgba(250, 204, 21, 0.6)",
              "0 0 40px rgba(244, 114, 182, 0.8)",
              "0 0 20px rgba(244, 114, 182, 0.5)"
            ]
          }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          {/* Gift box decoration */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl">🎁</div>
          </div>
          
          {/* Ribbon effect */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 sm:w-6 md:w-8 h-full bg-yellow-400 opacity-80"></div>
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-4 sm:h-6 md:h-8 bg-yellow-400 opacity-80"></div>
          
          {/* Bow on top */}
          <div className="absolute -top-2 sm:-top-3 md:-top-4 left-1/2 transform -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl">
            🎀
          </div>
        </motion.div>
        
        {/* Enhanced magical sparkles - responsive sizes */}
        <motion.div
          className="absolute -top-1 sm:-top-2 -right-1 sm:-right-2 text-yellow-400 text-lg sm:text-xl md:text-2xl animate-sparkle"
          animate={{ rotate: [0, 360] }}
          transition={{ repeat: Infinity, duration: 3 }}
        >
          ✨
        </motion.div>
        <motion.div
          className="absolute -bottom-1 sm:-bottom-2 -left-1 sm:-left-2 text-pink-400 text-base sm:text-lg md:text-xl animate-heart-beat"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          💖
        </motion.div>
        <motion.div
          className="absolute -top-1 sm:-top-2 -left-1 sm:-left-2 text-purple-400 text-sm sm:text-base md:text-lg animate-bounce-fun"
        >
          🌟
        </motion.div>
        <motion.div
          className="absolute -bottom-1 sm:-bottom-2 -right-1 sm:-right-2 text-blue-400 text-sm sm:text-base md:text-lg animate-rainbow"
        >
          🎊
        </motion.div>
      </div>
    </motion.div>
  );
}
