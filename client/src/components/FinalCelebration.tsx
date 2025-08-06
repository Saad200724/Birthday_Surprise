import { motion } from "framer-motion";
import { useEffect } from "react";
import FireworksEffect from "./FireworksEffect";
import ConfettiEffect from "./ConfettiEffect";
import FloatingEmojis from "./FloatingEmojis";

interface FinalCelebrationProps {
  onRestart: () => void;
}

export default function FinalCelebration({ onRestart }: FinalCelebrationProps) {
  useEffect(() => {
    // Play firework sound effect
    const fireworkSound = new Audio();
    // Note: In real implementation, load actual firework sound
    // fireworkSound.src = "/assets/firework-sound.mp3";
    fireworkSound.play().catch(console.log);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col items-center justify-center p-8 z-40"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <FireworksEffect />
      <ConfettiEffect />
      <FloatingEmojis />
      
      <motion.div className="text-center space-y-6 sm:space-y-8 relative z-40 px-4">
        <motion.h1
          className="font-great-vibes text-3xl sm:text-4xl md:text-5xl lg:text-7xl text-white"
          animate={{ 
            scale: [1, 1.05, 1],
            rotate: [0, 1, -1, 0]
          }}
          transition={{ repeat: Infinity, duration: 4 }}
        >
          🎆 The Grand Finale 🎆
        </motion.h1>
        
        <motion.div
          className="bg-white/10 backdrop-blur-lg rounded-2xl sm:rounded-3xl p-4 sm:p-6 md:p-8 max-w-xs sm:max-w-md md:max-w-2xl mx-auto border border-white/20"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          <p className="final-message font-caveat text-lg sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed">
            "May all your dreams ride fast and reach far. 
            Happy Birthday to someone truly extraordinary! 🚗✨"
          </p>
          <motion.div
            className="mt-4 sm:mt-6 flex justify-center space-x-3 sm:space-x-4"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <motion.i
              className="fas fa-heart text-pink-500 text-lg sm:text-xl md:text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0 }}
            />
            <motion.i
              className="fas fa-star text-yellow-400 text-lg sm:text-xl md:text-2xl"
              animate={{ rotate: [0, 360] }}
              transition={{ repeat: Infinity, duration: 3 }}
            />
            <motion.i
              className="fas fa-heart text-pink-500 text-lg sm:text-xl md:text-2xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, delay: 0.5 }}
            />
          </motion.div>
        </motion.div>
        
        <motion.button
          className="bg-gradient-to-r from-pink-500 to-yellow-400 text-slate-900 font-bold py-3 px-6 sm:py-4 sm:px-8 rounded-full transform transition-all duration-300 hover:scale-105 font-inter text-sm sm:text-base"
          onClick={onRestart}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <span className="hidden sm:inline">🔄 Experience the Magic Again</span>
          <span className="sm:hidden">🔄 Magic Again</span>
        </motion.button>
      </motion.div>
    </motion.div>
  );
}
