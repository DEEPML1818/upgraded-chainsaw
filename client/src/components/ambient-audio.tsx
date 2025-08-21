import { useEffect, useRef, useState } from 'react';
import { Volume2, VolumeX } from 'lucide-react';

export function AmbientAudio() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.3);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    // Create Web Audio API context for ambient soundscape
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    
    // Create oscillators for ambient tones
    const createAmbientTone = (frequency: number, volume: number) => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.type = 'sine';
      oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
      
      gainNode.gain.setValueAtTime(0, audioContext.currentTime);
      gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 2);
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      return { oscillator, gainNode };
    };

    let tones: Array<{ oscillator: OscillatorNode; gainNode: GainNode }> = [];

    const startAmbientAudio = () => {
      if (audioContext.state === 'suspended') {
        audioContext.resume();
      }

      // Create multiple ambient tones
      const frequencies = [60, 120, 180, 240]; // Low frequency ambient tones
      const volumes = [0.02, 0.015, 0.01, 0.008];

      tones = frequencies.map((freq, index) => createAmbientTone(freq, volumes[index] * volume));
      
      tones.forEach(({ oscillator }) => {
        oscillator.start();
      });

      setIsPlaying(true);
    };

    const stopAmbientAudio = () => {
      tones.forEach(({ oscillator, gainNode }) => {
        gainNode.gain.linearRampToValueAtTime(0, audioContext.currentTime + 1);
        setTimeout(() => {
          try {
            oscillator.stop();
          } catch (e) {
            // Oscillator may already be stopped
          }
        }, 1000);
      });
      
      setIsPlaying(false);
    };

    // Auto-start ambient audio on user interaction
    const handleUserInteraction = () => {
      if (!isPlaying && !isMuted) {
        startAmbientAudio();
      }
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
    };

    document.addEventListener('click', handleUserInteraction);
    document.addEventListener('touchstart', handleUserInteraction);

    return () => {
      stopAmbientAudio();
      document.removeEventListener('click', handleUserInteraction);
      document.removeEventListener('touchstart', handleUserInteraction);
      audioContext.close();
    };
  }, [volume, isMuted]);

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (!isMuted) {
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (newVolume: number) => {
    setVolume(newVolume);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 p-4 shadow-xl">
        <div className="flex items-center gap-3">
          <button
            onClick={toggleMute}
            className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200"
            data-testid="audio-toggle"
            aria-label={isMuted ? 'Unmute ambient audio' : 'Mute ambient audio'}
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
          
          {!isMuted && (
            <div className="flex items-center gap-2">
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={volume}
                onChange={(e) => handleVolumeChange(parseFloat(e.target.value))}
                className="w-20 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer"
                data-testid="volume-slider"
                style={{
                  background: `linear-gradient(to right, #6366f1 0%, #6366f1 ${volume * 100}%, rgba(255,255,255,0.2) ${volume * 100}%, rgba(255,255,255,0.2) 100%)`
                }}
              />
              <span className="text-white/70 text-xs font-medium min-w-[3ch]">
                {Math.round(volume * 100)}%
              </span>
            </div>
          )}
        </div>
        
        {isPlaying && (
          <div className="flex items-center gap-1 mt-2">
            <div className="w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-400 text-xs font-medium">Ambient Audio Active</span>
          </div>
        )}
      </div>
    </div>
  );
}