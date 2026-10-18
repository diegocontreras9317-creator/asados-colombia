import React from 'react';
import { Flame, MessageSquare, Phone, MapPin, Instagram, Facebook } from 'lucide-react';
import footerLogoPath from '../assets/images/regenerated_image_1791408030347.png';

export const INSTAGRAM_URL = 'https://www.instagram.com/asadoscolombia/?hl=es';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#030303] border-t border-white/10 text-slate-400 py-16 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Brand Column (Col 4) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#inicio" className="flex items-center gap-3">
              <img
                src={footerLogoPath}
                alt="Logo Asados Colombia"
                className="w-10 h-10 rounded-full object-cover border border-[#E30613]"
                referrerPolicy="no-referrer"
              />
              <span className="font-brand font-bold text-xl tracking-wider text-white">
                ASADOS <span className="text-[#E30613]">COLOMBIA</span>
              </span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              Servicio líder en asados y parrilladas a domicilio en Cúcuta y Norte de Santander. Cortes premium, parrillero en vivo y la más alta calidad gastronómica.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#E30613] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Instagram @asadoscolombia"
              >
                <Instagram className="w-4 h-4 text-[#C13584]" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#E30613] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/573009876543"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-white/5 hover:bg-[#25D366] text-white flex items-center justify-center transition-colors border border-white/10"
                aria-label="WhatsApp"
              >
                <MessageSquare className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Nav Links Column (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-brand text-sm font-bold text-white uppercase tracking-wider">Navegación</h4>
            <ul className="space-y-2 text-xs">
              <li><a href="#inicio" className="hover:text-amber-400 transition-colors">Inicio</a></li>
              <li><a href="#paquetes" className="hover:text-amber-400 transition-colors">Paquetes de Asados</a></li>
              <li><a href="#cotizador" className="hover:text-amber-400 transition-colors">Cotizador WhatsApp</a></li>
              <li><a href="#menu" className="hover:text-amber-400 transition-colors">Nuestros Cortes & Menú</a></li>
              <li><a href="#nosotros" className="hover:text-amber-400 transition-colors">Nosotros</a></li>
              <li><a href="#cobertura" className="hover:text-amber-400 transition-colors">Cobertura en Norte de Santander</a></li>
              <li><a href="#contacto" className="hover:text-amber-400 transition-colors">Contacto & Reservas</a></li>
            </ul>
          </div>

          {/* Coverage Cities Column (Col 2) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-brand text-sm font-bold text-white uppercase tracking-wider">Cobertura</h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>Cúcuta (Caobos, Riviera)</li>
              <li>Los Patios</li>
              <li>Villa del Rosario</li>
              <li>Chinácota</li>
              <li>Pamplona</li>
              <li>Ocaña</li>
              <li>El Zulia</li>
            </ul>
          </div>

          {/* Contact Summary (Col 3) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-brand text-sm font-bold text-white uppercase tracking-wider">Contacto</h4>
            <div className="space-y-2 text-xs">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#FF5500]" />
                <span>+57 300 987 6543</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E30613]" />
                <span>Calle 13 #2E-45, Caobos, Cúcuta</span>
              </div>
              <div className="flex items-center gap-2">
                <Flame className="w-3.5 h-3.5 text-[#FFB800]" />
                <span>Atención: Lunes a Domingo</span>
              </div>
            </div>
          </div>

        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Asados Colombia. Todos los derechos reservados. Cúcuta, Norte de Santander.</p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">Aviso de Privacidad</span>
            <span>•</span>
            <span className="hover:text-slate-400 transition-colors">Términos del Servicio</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
