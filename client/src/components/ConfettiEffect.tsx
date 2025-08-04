import { useEffect, useRef } from "react";

export default function ConfettiEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createConfetti = () => {
      const container = containerRef.current;
      if (!container) return;

      const colors = ['#f472b6', '#facc15', '#ffffff', '#fbbf24', '#ec4899'];
      const shapes = ['circle', 'square', 'triangle'];
      
      for (let i = 0; i < 50; i++) {
        const confetti = document.createElement('div');
        const color = colors[Math.floor(Math.random() * colors.length)];
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        
        confetti.className = `absolute animate-confetti-fall`;
        confetti.style.left = Math.random() * 100 + '%';
        confetti.style.width = '10px';
        confetti.style.height = '10px';
        confetti.style.backgroundColor = color;
        confetti.style.animationDelay = Math.random() * 2 + 's';
        confetti.style.animationDuration = (Math.random() * 2 + 3) + 's';
        
        if (shape === 'circle') {
          confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
          confetti.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
        }
        
        container.appendChild(confetti);
      }
      
      // Clean up confetti after animation
      setTimeout(() => {
        if (container) {
          container.innerHTML = '';
        }
      }, 5000);
    };

    createConfetti();
    
    // Create additional bursts
    const intervals = [1000, 2000, 3500];
    const timeouts = intervals.map(delay => 
      setTimeout(createConfetti, delay)
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
