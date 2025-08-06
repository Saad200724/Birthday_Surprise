import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarryBackground from "@/components/StarryBackground";
import GiftBox from "@/components/GiftBox";
import SurpriseReveal from "@/components/SurpriseReveal";
import SecretWishModal from "@/components/SecretWishModal";
import FinalCelebration from "@/components/FinalCelebration";
import BirthdayCountdown from "@/components/BirthdayCountdown";
import MagicalCursor from "@/components/MagicalCursor";
import SoundManager from "@/components/SoundManager";

type Phase = 'countdown' | 'landing' | 'surprise' | 'final';

export default function Home() {
  const [currentPhase, setCurrentPhase] = useState<Phase>('countdown');
  const [showSecretModal, setShowSecretModal] = useState(false);
  const [backgroundMusic, setBackgroundMusic] = useState<HTMLAudioElement | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(true);

  useEffect(() => {
    // Initialize background music
    const audio = new Audio();
    // Note: In a real implementation, you would load an actual birthday jingle MP3
    // audio.src = "/assets/birthday-music.mp3";
    audio.loop = true;
    audio.volume = 0.3;
    setBackgroundMusic(audio);

    return () => {
      if (audio) {
        audio.pause();
        audio.src = '';
      }
    };
  }, []);

  const handleCountdownComplete = () => {
    setCurrentPhase('landing');
  };

  const handleGiftClick = () => {
    setCurrentPhase('surprise');
    // Play click sound effect
    if (soundEnabled && (window as any).playClickSound) {
      (window as any).playClickSound();
    }
    // Start background music
    if (backgroundMusic && soundEnabled) {
      backgroundMusic.play().catch(console.log); // Handle autoplay restrictions gracefully
    }
  };

  const handleSecretWishClick = () => {
    setShowSecretModal(true);
  };

  const handleWishAnimation = () => {
    setShowSecretModal(false);
    // Play firework sound effect
    if (soundEnabled && (window as any).playFireworkSound) {
      setTimeout(() => (window as any).playFireworkSound(), 500);
    }
    // Brief delay before showing final celebration
    setTimeout(() => {
      setCurrentPhase('final');
    }, 1000);
  };

  const handleRestart = () => {
    setCurrentPhase('countdown');
    setShowSecretModal(false);
    if (backgroundMusic) {
      backgroundMusic.pause();
      backgroundMusic.currentTime = 0;
    }
  };

  const toggleSound = () => {
    setSoundEnabled(!soundEnabled);
    if (!soundEnabled && backgroundMusic) {
      backgroundMusic.play().catch(console.log);
    } else if (soundEnabled && backgroundMusic) {
      backgroundMusic.pause();
    }
  };

  return (
    <div className="min-h-screen overflow-hidden relative">
      <StarryBackground />
      <MagicalCursor />
      <SoundManager isPlaying={soundEnabled} onSoundToggle={toggleSound} />
      
      <AnimatePresence mode="wait">
        {currentPhase === 'countdown' && (
          <BirthdayCountdown key="countdown" onComplete={handleCountdownComplete} />
        )}

        {currentPhase === 'landing' && (
          <motion.div
            key="landing"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="flex flex-col items-center justify-center min-h-screen p-8 relative z-10"
          >
            <GiftBox onClick={handleGiftClick} />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-center mt-6 sm:mt-8 space-y-3 sm:space-y-4 px-4"
            >
              <h1 className="font-great-vibes text-2xl sm:text-3xl md:text-4xl lg:text-6xl text-white leading-tight">
                A Special Surprise Awaits...
              </h1>
              <p className="font-caveat text-lg sm:text-xl md:text-2xl text-gray-300 px-2">
                Click to unwrap your surprise... ✨
              </p>
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="flex items-center justify-center space-x-2 text-yellow-400"
              >
                <i className="fas fa-hand-pointer text-sm sm:text-base"></i>
                <span className="font-inter text-xs sm:text-sm">Tap the gift</span>
              </motion.div>
            </motion.div>
          </motion.div>
        )}

        {currentPhase === 'surprise' && (
          <SurpriseReveal
            key="surprise"
            onSecretWishClick={handleSecretWishClick}
          />
        )}

        {currentPhase === 'final' && (
          <FinalCelebration
            key="final"
            onRestart={handleRestart}
          />
        )}
      </AnimatePresence>

      <SecretWishModal
        isOpen={showSecretModal}
        onClose={() => setShowSecretModal(false)}
        onCarAnimation={handleWishAnimation}
      />
    </div>
  );
}
