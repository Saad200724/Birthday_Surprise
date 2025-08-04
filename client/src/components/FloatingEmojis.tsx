import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export default function FloatingEmojis() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createFloatingEmoji = () => {
      const container = containerRef.current;
      if (!container) return;

      const emojis = ['🎈', '🎊', '🌟', '💝', '🦋', '🌸', '💖', '✨', '🎀', '🌙'];
      
      for (let i = 0; i < 15; i++) {
        setTimeout(() => {
          const emoji = emojis[Math.floor(Math.random() * emojis.length)];
          const emojiDiv = document.createElement('div');
          emojiDiv.textContent = emoji;
          emojiDiv.className = 'fixed text-2xl pointer-events-none z-30';
          emojiDiv.style.left = Math.random() * 100 + 'vw';
          emojiDiv.style.top = '100vh';
          // Responsive emoji sizes
          const isSmallScreen = window.innerWidth < 640;
          const baseSize = isSmallScreen ? 16 : 20;
          emojiDiv.style.fontSize = (Math.random() * baseSize + baseSize) + 'px';
          
          container.appendChild(emojiDiv);
          
          // Animate the emoji
          const animation = emojiDiv.animate([
            { 
              transform: 'translateY(0) rotate(0deg)', 
              opacity: 1 
            },
            { 
              transform: `translateY(-120vh) translateX(${(Math.random() - 0.5) * 200}px) rotate(360deg)`, 
              opacity: 0 
            }
          ], {
            duration: (Math.random() * 3000 + 4000),
            easing: 'ease-out'
          });
          
          animation.onfinish = () => {
            if (container && container.contains(emojiDiv)) {
              container.removeChild(emojiDiv);
            }
          };
        }, i * 200);
      }
    };

    createFloatingEmoji();
    
    // Create multiple waves of floating emojis
    const intervals = [2000, 4500, 7000];
    const timeouts = intervals.map(delay => 
      setTimeout(createFloatingEmoji, delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-30"></div>;
}