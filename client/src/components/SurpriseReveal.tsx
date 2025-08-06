import { motion } from "framer-motion";
import { useEffect } from "react";
import ConfettiEffect from "./ConfettiEffect";
import lamborghiniImage from "@assets/f_1754463921903.png";

interface SurpriseRevealProps {
  onSecretWishClick: () => void;
}

export default function SurpriseReveal({ onSecretWishClick }: SurpriseRevealProps) {
  useEffect(() => {
    // Play car engine sound effect on mount
    const carSound = new Audio();
    // Note: In real implementation, load actual car engine sound
    // carSound.src = "/assets/car-engine-sound.mp3";
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

      {/* Main birthday message */}
      <motion.div className="text-center space-y-3 md:space-y-4 relative z-20 flex flex-col items-center justify-center min-h-screen px-4 -mt-12 md:-mt-16 lg:-mt-20">
        
        {/* Lamborghini racing car - perfectly centered above text */}
        <motion.img
          src={lamborghiniImage}
          alt="Lamborghini Racing Car"
          className="w-64 h-auto xs:w-72 sm:w-80 md:w-[30rem] lg:w-[36rem] xl:w-[40rem] 2xl:w-[48rem] object-contain pointer-events-none mb-1 sm:mb-2 md:mb-3"
          initial={{ x: "-100vw", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        />

        <motion.h1
          className="font-great-vibes text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-gradient-birthday birthday-title leading-relaxed px-2 max-w-full break-words"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Happy Birthday Beautiful! 🎉
        </motion.h1>

        <motion.p
          className="font-caveat text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl text-white px-2 max-w-4xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 1 }}
        >
          You deserve all the love and happiness in the world! ✨💖
        </motion.p>

        <motion.div
          className="space-y-4 mt-4 md:mt-6 lg:mt-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 3, duration: 0.8 }}
        >
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-yellow-400 text-slate-900 font-semibold py-3 px-6 md:py-4 md:px-8 rounded-full transform transition-all duration-300 hover:scale-105 hover:shadow-2xl font-inter animate-bounce-fun button-mobile text-sm md:text-base"
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