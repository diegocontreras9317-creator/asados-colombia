import React, { useState } from 'react';
import { MapPin, Navigation, Check, PhoneCall, Shield } from 'lucide-react';

interface Zone {
  id: string;
  name: string;
  department: string;
  badge: string;
  feeText: string;
  sectors: string[];
  notice: string;
}

const ZONES: Zone[] = [
  {
    id: 'cucuta',
    name: 'Cúcuta (Área Urbana)',
    department: 'Norte de Santander',
    badge: 'COBERTURA TOTAL',
    feeText: 'Flete Gratis en paquetes > 15 personas',
    sectors: ['Caobos', 'Quinta Bosch', 'La Riviera', 'Bellavista', 'Ceiba', 'Prados del Norte', 'San Eduardo', 'Nisa', 'San Luis', 'Guaimaral'],
    notice: 'Llegada 1 hora antes para encendido de carbón.'
  },
  {
    id: 'patios',
    name: 'Los Patios',
    department: 'Norte de Santander',
    badge: 'COBERTURA DIRECTA',
    feeText: 'Flete Gratis en paquetes > 15 personas',
    sectors: ['Pinar del Río', 'Valles de San Diego', 'Sabana', 'Llanitos', 'Kilómetro 8', 'Montebello'],
    notice: 'Servicio disponible de lunes a domingo.'
  },
  {
    id: 'rosario',
    name: 'Villa del Rosario',
    department: 'Norte de Santander',
    badge: 'COBERTURA DIRECTA',
    feeText: 'Flete Gratis en paquetes > 15 personas',
    sectors: ['Centro Histórico', 'La Esperanza', 'Lomitas', 'Brapia', 'Conjuntos Residenciales', 'Fincas de descanso'],
    notice: 'Atención a casas campestres y clubes.'
  },
  {
    id: 'chinacota',
    name: 'Chinácota (Fincas y Cabañas)',
    department: 'Norte de Santander',
    badge: 'ZONA CAMPESTRE',
    feeText: 'Logística especial de transporte',
    sectors: ['Vereda Iscalá', 'Cabañas Turísticas', 'Pueblo', 'Fincas de Recreo', 'Hoteles Campestres'],
    notice: 'Ideal para celebraciones de fin de semana.'
  },
  {
    id: 'otros',
    name: 'Pamplona, Ocaña, El Zulia, Bochalema',
    department: 'Norte de Santander',
    badge: 'EVENTOS ESPECIALES',
    feeText: 'Previa cotización de transporte',
    sectors: ['Pamplona', 'Ocaña', 'El Zulia', 'Salazar de las Palmas', 'Bochalema', 'Gramalote'],
    notice: 'Cotización especial para bodas y grados corporativos.'
  }
];

export const CoverageSection: React.FC = () => {
  const [selectedZone, setSelectedZone] = useState<string>('cucuta');

  const activeZoneData = ZONES.find((z) => z.id === selectedZone) || ZONES[0];

  return (
    <section id="cobertura" className="py-24 bg-[#080808] relative text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
            <MapPin className="w-4 h-4" /> Cobertura Departamental
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            ASADOS A DOMICILIO EN <span className="text-[#E30613]">NORTE DE SANTANDER</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Llegamos a tu casa, conjunto residencial, empresa o finca de descanso con toda la logística parrillera.
          </p>
        </div>

        {/* Interactive Zone Tabs Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Zone Selector Buttons (Col 5) */}
          <div className="lg:col-span-5 space-y-3">
            {ZONES.map((zone) => {
              const isSelected = selectedZone === zone.id;
              return (
                <div
                  key={zone.id}
                  onClick={() => setSelectedZone(zone.id)}
                  className={`p-5 rounded-2xl border cursor-pointer transition-all duration-300 flex items-center justify-between ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#E30613]/25 via-[#1a0a0a] to-[#111111] border-[#E30613] shadow-[0_0_20px_rgba(227,6,19,0.3)]'
                      : 'bg-[#111111] border-white/5 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected ? 'bg-[#E30613] text-white' : 'bg-white/5 text-slate-400'
                    }`}>
                      <Navigation className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-brand text-base font-bold text-white">{zone.name}</h3>
                      <span className="text-xs text-slate-400">{zone.department}</span>
                    </div>
                  </div>
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${
                    isSelected ? 'bg-[#FF5500] text-white' : 'bg-white/5 text-slate-400'
                  }`}>
                    {zone.badge}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Active Zone Detail Panel (Col 7) */}
          <div className="lg:col-span-7 bg-[#111111] p-6 sm:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
              <div>
                <span className="text-xs text-[#FF5500] font-bold uppercase tracking-wider block">
                  Detalles de Cobertura
                </span>
                <h3 className="font-brand text-2xl font-bold text-white">{activeZoneData.name}</h3>
              </div>
              <span className="text-xs bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-3 py-1 rounded-full font-semibold">
                {activeZoneData.feeText}
              </span>
            </div>

            <div className="space-y-6">
              <div>
                <span className="text-xs text-slate-400 font-bold uppercase tracking-wider block mb-3">
                  📍 Sectores & Barrios Atendidos:
                </span>
                <div className="flex flex-wrap gap-2">
                  {activeZoneData.sectors.map((sec, idx) => (
                    <span
                      key={idx}
                      className="text-xs bg-black/60 text-slate-200 px-3 py-1.5 rounded-xl border border-white/10 flex items-center gap-1.5"
                    >
                      <Check className="w-3.5 h-3.5 text-[#FF5500]" />
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-black/60 border border-white/5 space-y-2">
                <div className="flex items-center gap-2 text-amber-300 text-xs font-bold">
                  <Shield className="w-4 h-4 text-[#FF5500]" /> Nota Logística
                </div>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {activeZoneData.notice} Llevamos asador portátil protegido, hieleras térmicas para conservar la carne a 2°C y todos los suministros.
                </p>
              </div>

              <div className="pt-2">
                <a
                  href={`https://wa.me/573009876543?text=Hola%20Asados%20Colombia,%20quisiera%20saber%20disponibilidad%20para%20un%20asado%20en%20*${encodeURIComponent(
                    activeZoneData.name
                  )}*.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-6 py-3.5 rounded-xl font-bold text-xs sm:text-sm text-white bg-gradient-to-r from-[#E30613] to-[#FF5500] hover:from-[#FF1E00] hover:to-[#FF8800] transition-all duration-300 shadow-[0_0_20px_rgba(227,6,19,0.5)] flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4" />
                  <span>Consultar Disponibilidad en {activeZoneData.name}</span>
                </a>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
