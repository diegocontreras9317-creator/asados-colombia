import React from 'react';
import { MessageSquare, Flame } from 'lucide-react';

export const WhatsAppStickyButton: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group">
      
      {/* Floating Tooltip Callout */}
      <div className="hidden sm:flex items-center gap-2 bg-[#121212] border border-[#25D366]/40 text-slate-100 text-xs py-2 px-3.5 rounded-2xl shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <Flame className="w-3.5 h-3.5 text-[#FF5500] animate-pulse" />
        <span>Cotiza tu asado en <strong className="text-emerald-400">WhatsApp</strong></span>
      </div>

      {/* Main Floating Button */}
      <a
        href="https://wa.me/573009876543?text=Hola%20Asados%20Colombia,%20quisiera%20cotizar%20un%20asado%20a%20domicilio%20en%20Cúcuta."
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Cotizar por WhatsApp"
        className="relative w-14 h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#20bd5a] text-white flex items-center justify-center shadow-[0_0_25px_rgba(37,211,102,0.6)] hover:shadow-[0_0_40px_rgba(37,211,102,0.9)] hover:scale-110 transition-all duration-300 border-2 border-white/20"
      >
        <MessageSquare className="w-7 h-7 fill-white/20" />
        
        {/* Pulsing Ember Aura */}
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5500] rounded-full border-2 border-black animate-ping" />
        <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#FF5500] rounded-full border-2 border-black" />
      </a>
    </div>
  );
};
