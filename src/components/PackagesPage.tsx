import React from 'react';
import { Users, Flame, Check, MessageSquare, Star, ShoppingCart, Award } from 'lucide-react';

export interface BBQPackage {
  id: string;
  name: string;
  badge?: string;
  isPopular?: boolean;
  peopleCount: number;
  peopleLabel: string;
  price: number;
  priceFormatted: string;
  pricePerPerson: string;
  description: string;
  meats: string[];
  sides: string[];
  extras: string[];
}

export const BBQ_PACKAGES: BBQPackage[] = [
  {
    id: 'paquete_amigos',
    name: 'Paquete Amigos',
    peopleCount: 6,
    peopleLabel: 'Ideal para 6 Personas',
    price: 180000,
    priceFormatted: '$180.000',
    pricePerPerson: '$30.000 / persona',
    description: 'La opción perfecta para un asado casual entre amigos o fin de semana.',
    meats: [
      '1.2 kg Punta de Anca / Picanha Seleccionada',
      '6 Chorizos Santandereanos Artesanales'
    ],
    sides: [
      '6 Arepas de Choclo con Queso Costeño',
      'Papas Saladas con Ahogao Criollo Fresco'
    ],
    extras: [
      'Parrillero profesional en vivo',
      'Chimichurri casero & Ají parrillero',
      'Carbón vegetal de guayabo de alto poder'
    ]
  },
  {
    id: 'paquete_familiar',
    name: 'Paquete Familiar',
    badge: 'MÁS VENDIDO',
    isPopular: true,
    peopleCount: 12,
    peopleLabel: 'Ideal para 12 Personas',
    price: 340000,
    priceFormatted: '$340.000',
    pricePerPerson: '$28.333 / persona',
    description: 'Banquete abundante para cumpleaños, reuniones familiares y celebraciones.',
    meats: [
      '1.8 kg Picanha Angus Importada',
      '1.2 kg Baby Beef jugoso en corte grueso',
      '1.0 kg Costillas de Cerdo BBQ Ahumadas',
      '12 Chorizos Artesanales de la Casa'
    ],
    sides: [
      '12 Arepas de Choclo con Queso',
      'Yuquita Frita con Suero Costeño',
      'Plátanos Maduros con Queso y Bocadillo',
      'Ensalada Fresca con Vinagreta Maracuyá'
    ],
    extras: [
      'Parrillero profesional uniformado',
      'Chimichurri gaucho + Guacamole casero',
      'Limpieza posterior del área de asador'
    ]
  },
  {
    id: 'paquete_asado_colombia',
    name: 'Paquete Asado Colombia',
    badge: 'EDICIÓN ESPECIAL',
    peopleCount: 18,
    peopleLabel: 'Ideal para 18 Personas',
    price: 490000,
    priceFormatted: '$490.000',
    pricePerPerson: '$27.222 / persona',
    description: 'El festín parrillero más completo para grandes fiestas y eventos familiares.',
    meats: [
      '2.5 kg Picanha Angus Madurada 21 días',
      '2.0 kg Baby Beef & Lomo Fino',
      '1.5 kg Lomo al Trapo en Sal Marina y Vino',
      '1.5 kg Costillas de Cerdo Ahumadas 4h',
      '18 Chorizos Santandereanos & Morcillas'
    ],
    sides: [
      '18 Arepas de Choclo Doradas',
      'Papas Saladas con Ahogao & Yuquita Frita',
      'Plátanos Maduros con Queso y Bocadillo',
      'Barra de Ensaladas Frescas'
    ],
    extras: [
      'Servicio de Parrillero Master capacitado',
      'Barra libre de salsas artesanales',
      'Vajilla y cubiertos ecológicos bio-compostables'
    ]
  }
];

interface PackagesPageProps {
  onSelectPackageCart: (pkg: BBQPackage) => void;
}

export const PackagesPage: React.FC<PackagesPageProps> = ({ onSelectPackageCart }) => {
  const handleOrderWhatsApp = (pkg: BBQPackage) => {
    const message = 
`🔥 *SOLICITUD DE PAQUETE - ASADOS COLOMBIA* 🔥
----------------------------------------------
🍖 *Paquete Seleccionado:* ${pkg.name}
👥 *Capacidad:* ${pkg.peopleLabel}
💰 *Precio Total:* ${pkg.priceFormatted} COP

📍 *Ubicación:* Cúcuta / Norte de Santander
Deseo confirmar disponibilidad para mi evento. ¡Gracias!`;

    window.open(`https://wa.me/573009876543?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="pt-28 pb-20 bg-[#050505] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-bold tracking-wider uppercase mb-3">
            <Award className="w-4 h-4" /> Parrilladas a Domicilio en Cúcuta
          </div>
          <h1 className="font-brand text-3xl sm:text-5xl font-extrabold text-white mb-4 uppercase">
            NUESTROS <span className="text-[#E30613]">PAQUETES DE ASADOS</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Elige el paquete diseñado para el número de invitados de tu evento. Llevamos las carnes marinadas, la parrilla móvil, el carbón y el parrillero profesional directo a tu casa o finca.
          </p>
        </div>

        {/* 3 Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {BBQ_PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#1c0808] via-[#111111] to-[#0a0a0a] border-[#E30613] shadow-[0_0_35px_rgba(227,6,19,0.35)] md:-translate-y-2'
                  : 'bg-[#0f0f0f] border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E30613] to-[#FF5500] text-white text-[11px] font-black tracking-widest uppercase px-4 py-1 rounded-full shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                {/* Title & People Capacity */}
                <div className="text-center pb-5 mb-5 border-b border-white/10">
                  <div className="inline-flex items-center justify-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FFB800] text-xs font-bold mb-3">
                    <Users className="w-4 h-4" /> {pkg.peopleLabel}
                  </div>
                  <h2 className="font-brand text-2xl font-black text-white mb-2">{pkg.name}</h2>
                  <p className="text-xs text-slate-400 leading-relaxed mb-4">{pkg.description}</p>
                  
                  <div className="space-y-1">
                    <span className="font-brand text-4xl font-black text-[#E30613] block">
                      {pkg.priceFormatted}
                    </span>
                    <span className="text-xs font-mono text-slate-400">{pkg.pricePerPerson}</span>
                  </div>
                </div>

                {/* Contents Breakdown */}
                <div className="space-y-4 text-xs">
                  <div>
                    <span className="font-bold text-[#FF5500] uppercase tracking-wider block mb-2 text-[11px] flex items-center gap-1">
                      <Flame className="w-3.5 h-3.5 text-[#E30613]" /> Cortes de Carne Incluidos:
                    </span>
                    <ul className="space-y-2 text-slate-200">
                      {pkg.meats.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-[#FF5500] font-bold">•</span>
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-[#FFB800] uppercase tracking-wider block mb-2 text-[11px]">
                      🥗 Acompañamientos:
                    </span>
                    <ul className="space-y-1.5 text-slate-300">
                      {pkg.sides.map((s, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{s}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-amber-300 uppercase tracking-wider block mb-2 text-[11px]">
                      ✨ Servicios Incluidos:
                    </span>
                    <ul className="space-y-1.5 text-slate-400">
                      {pkg.extras.map((e, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-3.5 h-3.5 text-amber-400 shrink-0 mt-0.5" />
                          <span>{e}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-6 mt-6 border-t border-white/10 space-y-2">
                <button
                  onClick={() => handleOrderWhatsApp(pkg)}
                  className="w-full py-3.5 rounded-full font-bold text-xs uppercase tracking-wider text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] hover:from-[#20bd5a] hover:to-[#0a6b5e] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                >
                  <MessageSquare className="w-4 h-4 fill-white/20" />
                  <span>Pedir por WhatsApp</span>
                </button>

                <button
                  onClick={() => onSelectPackageCart(pkg)}
                  className="w-full py-2.5 rounded-full font-bold text-xs uppercase tracking-wider text-slate-300 hover:text-white bg-white/5 hover:bg-white/15 border border-white/10 flex items-center justify-center gap-2 transition-colors cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Añadir al Carrito</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
