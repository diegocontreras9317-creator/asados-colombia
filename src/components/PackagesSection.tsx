import React from 'react';
import { Flame, Check, MessageSquare, Award, Star } from 'lucide-react';
import packageImgPath from '../assets/images/package_premium_asado_1791404860456.jpg';

interface PackageItem {
  id: string;
  name: string;
  price: string;
  badge?: string;
  description: string;
  isPopular?: boolean;
  meats: string[];
  sides: string[];
  extras: string[];
}

const PACKAGES: PackageItem[] = [
  {
    id: 'tradicional',
    name: 'Paquete Tradicional Colombiano',
    price: '$38.000',
    description: 'El clásico asado criollo ideal para reuniones familiares y amigos.',
    meats: [
      'Punta de Anca / Picanha Nacional (200g)',
      'Pechuga a la Parrilla Maridada (150g)',
      'Chorizo Santandereano Artesanal'
    ],
    sides: [
      'Arepa con Queso Costeño',
      'Papa Salada con Ahogao Criollo',
      'Ensalada Fresca de la Casa'
    ],
    extras: [
      'Parrillero profesional en vivo',
      'Chimichurri de la casa & Ají criollo',
      'Carbón vegetal de guayabo'
    ]
  },
  {
    id: 'master_premium',
    name: 'Paquete Master Premium Angus',
    price: '$58.000',
    badge: 'MÁS VENDIDO',
    isPopular: true,
    description: 'Experiencia gastronómica superior con cortes importados y madurados.',
    meats: [
      'Picanha Angus Importada (250g)',
      'Baby Beef o Lomo Fino (180g)',
      'Costillas Ahumadas BBQ (150g)',
      'Chorizo Artesanal de la Casa'
    ],
    sides: [
      'Arepa de Choclo con Queso',
      'Yuquita Frita con Suero Costeño',
      'Plátano Maduro con Queso y Bocadillo',
      'Ensalada Gourmet con Vinagreta Maracuyá'
    ],
    extras: [
      'Parrillero Master & Utensilios completos',
      'Salsas artesanales gourmet',
      'Vajilla ecológica bio-compostable'
    ]
  },
  {
    id: 'especial_cucuta',
    name: 'Paquete Especial Cúcuta & Norte',
    price: '$46.000',
    badge: 'SABOR REGIONAL',
    description: 'Sabores autóctonos con el toque parrillero cucuteño y santandereano.',
    meats: [
      'Lomo al Trapo en Sal Marina (220g)',
      'Punta de Anca Tierna (180g)',
      'Chorizo Santandereano Especial',
      'Morcilla de Finca con Hierbas'
    ],
    sides: [
      'Arepa de Choclo Dorada',
      'Papa Salada con Ahogao',
      'Plátano con Queso Costeño',
      'Guacamole Artesanal'
    ],
    extras: [
      'Parrillero profesional en el sitio',
      'Chimichurri tradicional picante/suave',
      'Salsa tártara de la casa'
    ]
  },
  {
    id: 'empresarial',
    name: 'Paquete Empresarial & Eventos',
    price: 'Cotizar',
    badge: 'CORPORATIVO',
    description: 'Estación de parrilla en vivo para más de 50 personas con servicio continuo.',
    meats: [
      'Cortes de carne variados a elección',
      'Estación de mini pinchos de entrada',
      'Chorizos gourmet y picadas parrilleras'
    ],
    sides: [
      'Bar de acompañamientos a la carta',
      'Variedad de ensaladas frescas',
      'Salsas variadas en barra'
    ],
    extras: [
      'Equipo completo de parrilleros y meseros',
      'Bebidas frías y logística integral',
      'Facturación electrónica para empresas'
    ]
  }
];

export const PackagesSection: React.FC = () => {
  return (
    <section id="paquetes" className="py-24 bg-[#050505] relative overflow-hidden text-slate-100">
      
      {/* Decorative Ember Image Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
            <Award className="w-4 h-4" /> Menús Diseñados a la Medida
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            NUESTROS PAQUETES DE <span className="text-[#E30613]">ASADOS A DOMICILIO</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Todo incluido: llevamos la parrilla, el carbón vegetal, los cortes marinados y nuestro parrillero profesional a tu casa o finca en Cúcuta y Norte de Santander.
          </p>
        </div>

        {/* Feature Image Banner Spotlight */}
        <div className="mb-16 rounded-3xl overflow-hidden border border-white/10 bg-[#0f0f0f] relative group">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-4">
              <span className="text-xs font-bold text-[#FFB800] uppercase tracking-widest flex items-center gap-2">
                <Star className="w-4 h-4 fill-[#FFB800]" /> Experiencia Parrillera Completa
              </span>
              <h3 className="font-brand text-2xl sm:text-4xl font-bold text-white">
                ¿QUÉ INCLUYE CADA SERVICIO DE ASADOS COLOMBIA?
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Nos encargamos de absolutamente todo para que disfrutes tu evento como un invitado más. Llevamos parrilla móvil limpia, utensilios de asador, carbón de guayabo de alto poder calórico, preparación al término de tu preferencia y la mejor sazón.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs font-medium text-slate-200">
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5500]" /> Parrillero Uniformado en Vivo
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5500]" /> Limpieza Posterior de la Parrilla
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5500]" /> Carnes Maradas y Frescas
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#FF5500]" /> Chimichurri Casero Ilimitado
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 h-64 lg:h-full relative overflow-hidden">
              <img
                src={packageImgPath}
                alt="Bandeja de Asado Master Premium"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent lg:bg-gradient-to-r lg:from-[#0f0f0f] lg:via-transparent lg:to-transparent" />
            </div>
          </div>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PACKAGES.map((pkg) => (
            <div
              key={pkg.id}
              className={`rounded-3xl p-6 flex flex-col justify-between transition-all duration-300 relative border ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#1a0a0a] via-[#111111] to-[#0a0a0a] border-[#E30613] shadow-[0_0_30px_rgba(227,6,19,0.3)] scale-102'
                  : 'bg-[#0f0f0f] border-white/10 hover:border-white/20'
              }`}
            >
              {pkg.badge && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#E30613] to-[#FF5500] text-white text-[11px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-lg">
                  {pkg.badge}
                </div>
              )}

              <div>
                <div className="mt-2 mb-4">
                  <h3 className="font-brand text-lg font-bold text-white mb-2 leading-snug">{pkg.name}</h3>
                  <p className="text-xs text-slate-400 mb-4">{pkg.description}</p>
                  
                  <div className="flex items-baseline gap-1">
                    <span className="font-brand text-3xl font-black text-[#FFB800]">{pkg.price}</span>
                    {pkg.price !== 'Cotizar' && <span className="text-xs text-slate-400">/ persona</span>}
                  </div>
                </div>

                <div className="space-y-4 pt-4 border-t border-white/10 text-xs">
                  <div>
                    <span className="font-bold text-[#FF5500] uppercase tracking-wider block mb-2 text-[10px]">
                      🥩 Cortes Incluidos:
                    </span>
                    <ul className="space-y-1.5 text-slate-300">
                      {pkg.meats.map((m, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Flame className="w-3.5 h-3.5 text-[#E30613] shrink-0 mt-0.5" />
                          <span>{m}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="font-bold text-[#FFB800] uppercase tracking-wider block mb-2 text-[10px]">
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
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href={`https://wa.me/573009876543?text=Hola%20Asados%20Colombia,%20me%20interesa%20reservar%20el%20*${encodeURIComponent(
                    pkg.name
                  )}*%20para%20un%20evento%20en%20Cúcuta.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 transition-all ${
                    pkg.isPopular
                      ? 'bg-gradient-to-r from-[#E30613] to-[#FF5500] hover:from-[#FF1E00] hover:to-[#FF8800] text-white shadow-[0_0_20px_rgba(227,6,19,0.5)]'
                      : 'bg-white/10 hover:bg-white/20 text-white border border-white/10'
                  }`}
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Pedir este Paquete</span>
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
