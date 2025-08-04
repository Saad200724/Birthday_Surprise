import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function MagicalCursor() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const hideOnLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseleave', hideOnLeave);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseleave', hideOnLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Main cursor trail - responsive */}
      <motion.div
        className="fixed pointer-events-none z-50 w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 rounded-full bg-gradient-to-r from-pink-400 to-yellow-400 opacity-60"
        style={{
          left: mousePosition.x - (window.innerWidth < 640 ? 8 : window.innerWidth < 768 ? 10 : 12),
          top: mousePosition.y - (window.innerWidth < 640 ? 8 : window.innerWidth < 768 ? 10 : 12),
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.8, 0.6]
        }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      {/* Sparkle trail - responsive */}
      <motion.div
        className="fixed pointer-events-none z-49 text-yellow-400 text-xs sm:text-sm"
        style={{
          left: mousePosition.x - (window.innerWidth < 640 ? 6 : 8),
          top: mousePosition.y - (window.innerWidth < 640 ? 6 : 8),
        }}
        animate={{
          rotate: [0, 360],
          scale: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        ✨
      </motion.div>
    </>
  );
}