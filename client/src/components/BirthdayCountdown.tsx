import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface BirthdayCountdownProps {
  onComplete: () => void;
}

export default function BirthdayCountdown({ onComplete }: BirthdayCountdownProps) {
  const [count, setCount] = useState(3);

  useEffect(() => {
    if (count === 0) {
      onComplete();
      return;
    }

    const timer = setTimeout(() => {
      setCount(count - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [count, onComplete]);

  if (count === 0) return null;

  return (
    <motion.div
      className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="text-center px-4"
        key={count}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: [0, 1.2, 1], opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <motion.div
          className="countdown-number text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-great-vibes text-gradient-birthday"
          animate={{
            rotate: [0, 5, -5, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{
            duration: 0.5,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        >
          {count}
        </motion.div>
        <motion.p
          className="text-lg sm:text-xl md:text-2xl font-caveat text-white mt-4 px-2"
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          Get ready for magic...
        </motion.p>
      </motion.div>
    </motion.div>
  );
}