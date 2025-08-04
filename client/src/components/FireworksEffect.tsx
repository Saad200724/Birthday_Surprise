import { useEffect, useRef } from "react";

export default function FireworksEffect() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const createFireworks = () => {
      const container = containerRef.current;
      if (!container) return;

      const colors = ['#f472b6', '#facc15', '#ffffff', '#fbbf24'];
      
      for (let i = 0; i < 20; i++) {
        setTimeout(() => {
          const firework = document.createElement('div');
          firework.style.position = 'absolute';
          firework.style.left = Math.random() * 100 + '%';
          firework.style.top = Math.random() * 100 + '%';
          
          // Create particles for each firework
          for (let j = 0; j < 12; j++) {
            const particle = document.createElement('div');
            particle.className = 'absolute w-1 h-1 rounded-full animate-firework';
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            particle.style.left = '50%';
            particle.style.top = '50%';
            particle.style.transform = `translate(-50%, -50%) rotate(${j * 30}deg) translateX(50px)`;
            firework.appendChild(particle);
          }
          
          container.appendChild(firework);
          
          // Remove firework after animation
          setTimeout(() => {
            if (container && container.contains(firework)) {
              container.removeChild(firework);
            }
          }, 1000);
        }, i * 300);
      }
    };

    createFireworks();
    
    // Create multiple rounds of fireworks
    const timeouts = [2000, 4000, 6000].map(delay => 
      setTimeout(createFireworks, delay)
    );

    return () => {
      timeouts.forEach(clearTimeout);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none z-45"></div>;
}
