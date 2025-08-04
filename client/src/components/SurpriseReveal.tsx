import { motion } from "framer-motion";
import { useEffect } from "react";
import ConfettiEffect from "./ConfettiEffect";
import lamborghiniImage from "@assets/image_1754245394281.png";

interface SurpriseRevealProps {
  onSecretWishClick: () => void;
}

export default function SurpriseReveal({ onSecretWishClick }: SurpriseRevealProps) {
  useEffect(() => {
    // Play car sound effect on mount
    const carSound = new Audio();
    // Note: In real implementation, load actual car sound
    // carSound.src = "/assets/car-sound.mp3";
    carSound.play().catch(console.log);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex flex-col items-center justify-center min-h-screen p-8 relative z-20"
    >
      <ConfettiEffect />

      {/* Lamborghini image - enters from left to center */}
      <motion.img
        src={lamborghiniImage}
        alt="Lamborghini"
        className="absolute top-10 md:top-20 left-1/2 transform -translate-x-1/2 w-64 h-auto sm:w-80 md:w-96 lg:w-[500px] xl:w-[600px] object-contain pointer-events-none z-25"
        initial={{ x: "-100vw", opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Main birthday message */}
      <motion.div className="text-center space-y-4 md:space-y-6 relative z-20 mt-32 sm:mt-40 md:mt-48 lg:mt-56 px-4">
        <motion.h1
          className="font-great-vibes text-3xl sm:text-4xl md:text-6xl lg:text-8xl text-gradient-birthday birthday-title leading-tight"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Happy Birthday Beautiful! 🎉
        </motion.h1>

        <motion.p
          className="font-caveat text-lg sm:text-xl md:text-2xl lg:text-3xl text-white px-2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          You deserve all the love and happiness in the world! ✨💖
        </motion.p>

        <motion.div
          className="space-y-4 mt-6 md:mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.button
            className="animate-color-wave text-slate-900 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl font-inter animate-bounce-fun button-mobile text-sm md:text-base"
            onClick={onSecretWishClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            animate={{ 
              boxShadow: [
                "0 0 20px rgba(244, 114, 182, 0.3)",
                "0 0 40px rgba(244, 114, 182, 0.6)",
                "0 0 60px rgba(250, 204, 21, 0.4)",
                "0 0 40px rgba(244, 114, 182, 0.6)",
                "0 0 20px rgba(244, 114, 182, 0.3)"
              ]
            }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <motion.span
              className="animate-heart-beat block"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <span className="hidden sm:inline">🎁 Click to Reveal Your Secret Wish 💖</span>
              <span className="sm:hidden">🎁 Secret Wish 💖</span>
            </motion.span>
          </motion.button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}