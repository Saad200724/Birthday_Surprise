import { useEffect, useState } from "react";

interface SoundManagerProps {
  isPlaying: boolean;
  onSoundToggle: () => void;
}

export default function SoundManager({ isPlaying, onSoundToggle }: SoundManagerProps) {
  const [audioContext, setAudioContext] = useState<AudioContext | null>(null);

  useEffect(() => {
    // Initialize Web Audio API for sound effects
    const initAudio = () => {
      try {
        const context = new (window.AudioContext || (window as any).webkitAudioContext)();
        setAudioContext(context);
      } catch (error) {
        console.log("Web Audio API not supported");
      }
    };

    initAudio();
  }, []);

  // Play celebration sound effect
  const playClickSound = () => {
    if (!audioContext) return;

    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.1);

    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);

    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.1);
  };

  // Play firework sound effect
  const playFireworkSound = () => {
    if (!audioContext) return;

    const noise = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filter = audioContext.createBiquadFilter();

    noise.type = 'sawtooth';
    noise.frequency.setValueAtTime(100, audioContext.currentTime);
    
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(2000, audioContext.currentTime);
    filter.frequency.exponentialRampToValueAtTime(50, audioContext.currentTime + 0.5);

    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);

    noise.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioContext.destination);

    noise.start(audioContext.currentTime);
    noise.stop(audioContext.currentTime + 0.5);
  };

  // Expose sound functions globally for other components
  useEffect(() => {
    (window as any).playClickSound = playClickSound;
    (window as any).playFireworkSound = playFireworkSound;
  }, [audioContext]);

  return (
    <div className="fixed top-2 sm:top-4 right-2 sm:right-4 z-50">
      <button
        onClick={onSoundToggle}
        className="bg-white/20 backdrop-blur-sm rounded-full p-2 sm:p-3 text-white hover:bg-white/30 transition-all duration-300"
      >
        {isPlaying ? (
          <i className="fas fa-volume-up text-sm sm:text-base md:text-lg"></i>
        ) : (
          <i className="fas fa-volume-mute text-sm sm:text-base md:text-lg"></i>
        )}
      </button>
    </div>
  );
}