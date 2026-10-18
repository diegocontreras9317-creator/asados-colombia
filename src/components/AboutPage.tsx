import React from 'react';
import { ShieldCheck, Flame, Users, Clock, CheckCircle2 } from 'lucide-react';
import { ReelsSection } from './ReelsSection';
import cateringImgPath from '../assets/images/catering_grillmaster_event_1791404870449.jpg';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-28 pb-20 bg-[#050505] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-bold tracking-wider uppercase mb-3">
            <Flame className="w-4 h-4" /> La Pasión de la Parrilla en Cúcuta
          </div>
          <h1 className="font-brand text-3xl sm:text-5xl font-extrabold text-white mb-4 uppercase">
            SOBRE <span className="text-[#E30613]">ASADOS COLOMBIA</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Más de 10 años llevando el sabor auténtico de la carne madurada al carbón directamente a hogares, empresas y fincas de recreo en Norte de Santander.
          </p>
        </div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(227,6,19,0.25)] group">
              <img
                src={cateringImgPath}
                alt="Parrillero profesional de Asados Colombia"
                className="w-full h-[450px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 bg-black/85 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-brand text-2xl font-black text-[#FFB800] block">+1.200</span>
                  <span className="text-xs text-slate-300">Asados Exitosos</span>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div>
                  <span className="font-brand text-2xl font-black text-[#FF5500] block">10+ Años</span>
                  <span className="text-xs text-slate-300">Experiencia en Norte</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <h2 className="font-brand text-2xl sm:text-4xl font-bold text-white leading-tight">
              NUESTRA MISIÓN: <span className="text-[#E30613]">TÚ DISFRUTAS, NOSOTROS ASAMOS</span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              En <strong className="text-white">Asados Colombia</strong> nos especializamos en convertir cualquier evento o reunión en un festín gastronómico inolvidable. Olvídate del estrés de encender el carbón o limpiar la parrilla; nuestro equipo de parrilleros profesionales uniformados se encarga de todo el proceso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Flame className="w-4 h-4 text-[#E30613]" /> Carbón de Guayabo
                </div>
                <p className="text-xs text-slate-400">Ahumado artesanal que resalta la jugosidad natural.</p>
              </div>

              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Users className="w-4 h-4 text-[#FF5500]" /> Parrilleros Expertos
                </div>
                <p className="text-xs text-slate-400">Personal profesional capacitado en servicio en vivo.</p>
              </div>

              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-[#FFB800]" /> Higiene Impecable
                </div>
                <p className="text-xs text-slate-400">Carnes frescas con cadena de frío y empaque al vacío.</p>
              </div>

              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-1">
                <div className="flex items-center gap-2 text-white font-bold text-sm">
                  <Clock className="w-4 h-4 text-emerald-400" /> Puntualidad Total
                </div>
                <p className="text-xs text-slate-400">Llegamos 1 hora antes para encendido de brasas.</p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Atención a reuniones desde 6 hasta más de 200 personas.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cobertura en Cúcuta, Los Patios, Villa del Rosario, Chinácota y Norte de Santander.</span>
              </div>
            </div>

          </div>

        </div>

        {/* Section to upload and display 3 Instagram Reel videos */}
        <ReelsSection />

      </div>
    </div>
  );
};
