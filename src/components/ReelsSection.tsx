import React, { useState } from 'react';
import { Volume2, VolumeX, Instagram } from 'lucide-react';

interface ReelItem {
  id: number;
  videoUrl: string;
  title: string;
}

export const ReelsSection: React.FC = () => {
  const reels: ReelItem[] = [
    { id: 1, videoUrl: '/asados-colombia-video-1.mp4', title: 'Asados Colombia Reel 1' },
    { id: 2, videoUrl: '/asados-colombia-video-2.mp4', title: 'Asados Colombia Reel 2' },
    { id: 3, videoUrl: '/asados-colombia-video-3.mp4', title: 'Asados Colombia Reel 3' },
  ];

  const [mutedStates, setMutedStates] = useState<{ [key: number]: boolean }>({
    1: true,
    2: true,
    3: true,
  });

  const toggleSound = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setMutedStates((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="w-full py-8">
      <div className="text-center max-w-2xl mx-auto mb-10 px-4">
        {/* Elegant Brand Header & Logo Space */}
        <div className="bg-gradient-to-b from-[#1a1a1a] to-[#111111] border border-white/10 rounded-2xl p-6 shadow-2xl relative overflow-hidden mb-6">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E30613] via-orange-500 to-[#E30613]"></div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-4">
            {/* Logo Space */}
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-black/90 border-2 border-[#E30613] flex items-center justify-center overflow-hidden shadow-2xl">
              <img 
                src="/chinmi-app.png" 
                alt="Logo" 
                className="w-full h-full object-cover rounded-full" 
              />
            </div>

            {/* Brand Name */}
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-brand font-black uppercase tracking-wider text-white">
                Asados <span className="text-[#E30613]">Colombia</span>
              </h2>
              <p className="text-xs sm:text-sm text-slate-400 mt-1 tracking-wide font-sans">
                El auténtico sabor del carbón y la tradición
              </p>
            </div>
          </div>

          {/* Instagram Link Button */}
          <a
            href="https://www.instagram.com/asadoscolombia/?hl=es"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-500 hover:via-pink-500 hover:to-orange-400 text-white font-brand font-bold text-sm sm:text-base rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 uppercase tracking-wide"
          >
            <Instagram className="w-5 h-5" />
            SÍGUENOS EN INSTAGRAM
          </a>
        </div>

        <p className="text-slate-400 text-xs sm:text-sm">
          Disfruta de nuestros mejores momentos y preparaciones en formato vertical.
        </p>
      </div>

      {/* 3 Vertical Video Slots */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
        {reels.map((reel) => {
          const isMuted = mutedStates[reel.id] ?? true;
          return (
            <div
              key={reel.id}
              className="relative aspect-[9/16] w-full rounded-2xl overflow-hidden bg-[#111111] border-2 border-white/20 hover:border-[#E30613] transition-all duration-300 shadow-xl group"
            >
              <video
                src={reel.videoUrl}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Sound Toggle Button in Bottom Right */}
              <button
                type="button"
                onClick={(e) => toggleSound(reel.id, e)}
                className="absolute bottom-3 right-3 z-20 p-2.5 bg-black/70 hover:bg-[#E30613] text-white rounded-full backdrop-blur-md border border-white/20 transition-all shadow-lg group/btn cursor-pointer"
                title={isMuted ? 'Activar sonido' : 'Desactivar sonido'}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 text-slate-300 group-hover/btn:text-white" />
                ) : (
                  <Volume2 className="w-4 h-4 text-[#E30613] group-hover/btn:text-white animate-pulse" />
                )}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
