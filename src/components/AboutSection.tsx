import React from 'react';
import { ShieldCheck, Flame, Users, Sparkles, Clock, CheckCircle2 } from 'lucide-react';
import cateringImgPath from '../assets/images/catering_grillmaster_event_1791404870449.jpg';

export const AboutSection: React.FC = () => {
  return (
    <section id="nosotros" className="py-24 bg-[#050505] relative overflow-hidden text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Image Showcase with Grill Master */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden border-2 border-white/10 shadow-[0_0_50px_rgba(227,6,19,0.2)] group">
              <img
                src={cateringImgPath}
                alt="Parrillero profesional de Asados Colombia en evento"
                className="w-full h-[450px] sm:h-[520px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
              
              {/* Floating Counter Badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-black/80 backdrop-blur-md p-5 rounded-2xl border border-white/10 flex items-center justify-between">
                <div>
                  <span className="font-brand text-2xl font-black text-[#FFB800] block">+1.200</span>
                  <span className="text-xs text-slate-300">Asados Realizados con Éxito</span>
                </div>
                <div className="h-10 w-px bg-white/20" />
                <div>
                  <span className="font-brand text-2xl font-black text-[#FF5500] block">10+ Años</span>
                  <span className="text-xs text-slate-300">Líderes en Cúcuta y Norte</span>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase">
              <Flame className="w-4 h-4" /> Sobre Asados Colombia
            </div>

            <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
              LLEVAMOS EL MEJOR <span className="text-[#E30613]">ASADO A TU PUERTA</span> EN CÚCUTA
            </h2>

            <p className="text-slate-300 text-base leading-relaxed">
              En <strong className="text-white">Asados Colombia</strong> nacimos con una visión clara: transformar cualquier reunión social en una fiesta gastronómica memorable. Olvídate de pasar horas frente al carbón o de limpiar la parrilla; nuestro equipo de parrilleros profesionales se encarga de todo de principio a fin.
            </p>

            {/* Grid of Key Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#E30613]/20 flex items-center justify-center text-[#E30613]">
                  <Flame className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Carbón & Leña de Guayabo</h3>
                <p className="text-xs text-slate-400">
                  Ahumado artesanal que potencia la jugosidad natural de cada corte.
                </p>
              </div>

              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#FF5500]/20 flex items-center justify-center text-[#FF5500]">
                  <Users className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Parrilleros Uniformados</h3>
                <p className="text-xs text-slate-400">
                  Personal servicial, puntual y capacitado en técnicas de asado en vivo.
                </p>
              </div>

              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-[#FFB800]/20 flex items-center justify-center text-[#FFB800]">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Máxima Higiene</h3>
                <p className="text-xs text-slate-400">
                  Manejo de alimentos con sellado al vacío, cadena de frío y utensilios sanitizados.
                </p>
              </div>

              <div className="bg-[#111111] p-4 rounded-2xl border border-white/5 space-y-2">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-sm text-white">Puntualidad Garantizada</h3>
                <p className="text-xs text-slate-400">
                  Llegamos 1 hora antes para encender las brasas y servir exactamente a la hora fijada.
                </p>
              </div>

            </div>

            {/* Guarantees Checklist */}
            <div className="pt-4 border-t border-white/10 space-y-2 text-xs sm:text-sm text-slate-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Cubrimos eventos desde 10 personas hasta más de 300 invitados.</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Servicio a domicilio en Cúcuta, Los Patios, Villa del Rosario, Chinácota y más.</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
