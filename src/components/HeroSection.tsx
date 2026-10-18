import React, { useEffect, useRef, useState } from 'react';
import { AsadosColombiaLogo } from './AsadosColombiaLogo';

interface HeroProps {
  onOrderNow: () => void;
  onGoToMenu: () => void;
}

export const HeroSection: React.FC<HeroProps> = ({ onOrderNow, onGoToMenu }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReducedMotion(mediaQuery.matches);

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((err) => {
        console.log("Autoplay prevented or failed:", err);
      });
    }
  }, []);

  return (
    <section id="inicio" className="relative min-h-[85vh] h-screen bg-black flex flex-col justify-between items-center overflow-hidden pt-20 pb-10 px-4">
      
      {/* Video Background */}
      {!prefersReducedMotion && (
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            onLoadedData={() => setIsVideoLoaded(true)}
            className={`w-full h-full object-cover object-center transition-opacity duration-1000 ${isVideoLoaded ? 'opacity-90' : 'opacity-0'}`}
          >
            <source src="/carbon-asadoscolombia.mp4" type="video/mp4" />
            Tu navegador no soporta videos HTML5.
          </video>
        </div>
      )}

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90 z-10 pointer-events-none" />

      {/* Center Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center my-auto flex flex-col items-center px-4">
        
        {/* Exact Official Logo Image */}
        <div className="mb-6 transform hover:scale-105 transition-transform duration-300">
          <AsadosColombiaLogo size="xl" variant="hero" />
        </div>

        {/* Headline: EL AUTÉNTICO SABOR A LAS BRASAS */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase mb-3 font-sans leading-tight drop-shadow-2xl">
          EL AUTÉNTICO SABOR A LAS BRASAS
        </h1>

        {/* Subtitle: La experiencia de la parrilla directa a tu mesa */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-200 font-normal max-w-2xl mx-auto mb-8 font-sans drop-shadow-md">
          La experiencia de la parrilla directa a tu mesa
        </p>

        {/* Two Pill Buttons: PEDIR AHORA & VER MENÚ */}
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 w-full max-w-md mx-auto">
          {/* Solid Red Pill Button */}
          <button
            onClick={onOrderNow}
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white bg-[#E30613] hover:bg-[#c90510] active:scale-95 transition-all duration-200 shadow-[0_0_30px_rgba(227,6,19,0.8)] hover:shadow-[0_0_40px_rgba(227,6,19,1)] uppercase tracking-wider shrink-0 cursor-pointer"
          >
            PEDIR AHORA
          </button>

          {/* Transparent Outline Pill Button */}
          <button
            onClick={onGoToMenu}
            className="px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm sm:text-base text-white border-2 border-white hover:bg-white hover:text-black active:scale-95 transition-all duration-200 uppercase tracking-wider shrink-0 text-center cursor-pointer"
          >
            VER MENÚ
          </button>
        </div>

      </div>
    </section>
  );
};
