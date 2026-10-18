import React from 'react';
import { X } from 'lucide-react';
import { MenuShowcase, MenuItem } from './MenuShowcase';
import { AboutSection } from './AboutSection';
import { ContactSection } from './ContactSection';

interface InfoModalProps {
  isOpen: boolean;
  type: 'menu' | 'about' | 'contact' | null;
  onClose: () => void;
  onAddToCart: (item: MenuItem) => void;
}

export const InfoModal: React.FC<InfoModalProps> = ({
  isOpen,
  type,
  onClose,
  onAddToCart
}) => {
  if (!isOpen || !type) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200">
      <div className="bg-[#0c0c0c] border border-white/10 w-full max-w-5xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl flex flex-col relative">
        
        {/* Top Sticky Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#121212]">
          <h3 className="font-brand font-bold text-lg text-white uppercase tracking-wider">
            {type === 'menu' && 'NUESTRO MENÚ Y CORTES'}
            {type === 'about' && 'SOBRE ASADOS COLOMBIA'}
            {type === 'contact' && 'CONTACTO Y RESERVAS'}
          </h3>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-4 sm:p-8 overflow-y-auto max-h-[calc(90vh-70px)]">
          {type === 'menu' && <MenuShowcase onAddToCart={onAddToCart} />}
          {type === 'about' && <AboutSection />}
          {type === 'contact' && <ContactSection />}
        </div>

      </div>
    </div>
  );
};
