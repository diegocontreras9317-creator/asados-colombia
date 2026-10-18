import React, { useState } from 'react';
import { Flame, Check, Info, Plus } from 'lucide-react';

export interface MenuItem {
  id: string;
  name: string;
  category: 'cortes' | 'acompanamientos' | 'entradas' | 'salsas';
  categoryLabel: string;
  price: number;
  description: string;
  originNote?: string;
  badge?: string;
  highlights: string[];
}

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'picanha_angus',
    name: 'Picanha Angus (Punta de Anca)',
    category: 'cortes',
    categoryLabel: 'Cortes de Carne',
    price: 38000,
    badge: 'ESTRELLA DE LA CASA',
    description: 'Corte emblemático sudamericano con capa de grasa dorada a la parrilla, extremadamente suave y jugoso.',
    originNote: 'Carne madurada 21 días',
    highlights: ['250g de carne magra', 'Sal marina gruesa', 'Término a elección']
  },
  {
    id: 'baby_beef',
    name: 'Baby Beef Premium',
    category: 'cortes',
    categoryLabel: 'Cortes de Carne',
    price: 36000,
    description: 'Corte magro de lomo ancho súper tierno, perfecto para paladares exigentes que buscan suavidad absoluta.',
    originNote: 'Sin gordo ni nervio',
    highlights: ['220g corte grueso', 'Sello a fuego vivo', 'Hierbas finas']
  },
  {
    id: 'lomo_trapo',
    name: 'Lomo al Trapo Tradicional',
    category: 'cortes',
    categoryLabel: 'Cortes de Carne',
    price: 35000,
    badge: 'TRADICIONAL',
    description: 'Lomo fino envuelto en lienzo saturado en sal marina y vino, asado directamente sobre las brasas ardientes.',
    originNote: 'Sabor ahumado inigualable',
    highlights: ['Cocción directa en brasas', 'Corte en medallones', 'Jugosidad máxima']
  },
  {
    id: 'costillas_bbq',
    name: 'Costillas de Cerdo BBQ Ahumadas',
    category: 'cortes',
    categoryLabel: 'Cortes de Carne',
    price: 34000,
    description: 'Costillas tiernas de cerdo ahumadas durante 4 horas con leña de guayabo y bañadas en salsa BBQ de frutos rojos.',
    originNote: 'Se desprenden del hueso',
    highlights: ['Ahumado lento 4h', 'Salsa BBQ casera', 'Sabor agridulce']
  },
  {
    id: 'chorizo_santander',
    name: 'Chorizo Santandereano Artesanal',
    category: 'entradas',
    categoryLabel: 'Entradas & Pinchos',
    price: 12000,
    badge: 'INCAPAZ DE RESISTIR',
    description: 'Chorizo de carne picada 100% de cerdo, curado con ajo, cilantro y pimentón ahumado. Servido con limón criollo.',
    highlights: ['Sin embutidos industriales', 'Piel crocante', 'Servido con limón']
  },
  {
    id: 'morcilla_finca',
    name: 'Morcilla Especial de Finca',
    category: 'entradas',
    categoryLabel: 'Entradas & Pinchos',
    price: 10000,
    description: 'Morcilla criolla elaborada con arroz, arveja verde, poleo y hierbas frescas de Norte de Santander.',
    highlights: ['Capa exterior dorada', 'Relleno cremoso']
  },
  {
    id: 'arepa_choclo',
    name: 'Arepa de Choclo con Queso Costeño',
    category: 'acompanamientos',
    categoryLabel: 'Acompañamientos',
    price: 8000,
    badge: 'FAVORITA',
    description: 'Arepa dulce de maíz tierno asada a la parrilla y servida caliente con abundante queso costeño derretido.',
    highlights: ['Maíz tierno natural', 'Queso abundante']
  },
  {
    id: 'platano_bocadillo',
    name: 'Plátano Maduro con Queso y Bocadillo',
    category: 'acompanamientos',
    categoryLabel: 'Acompañamientos',
    price: 9000,
    description: 'Plátano maduro asado entero a la brasa con queso doble crema hilado y bocadillo veleño derretido.',
    highlights: ['Asado con cáscara', 'Queso y bocadillo']
  },
  {
    id: 'chimichurri_casa',
    name: 'Chimichurri Gaucho-Colombiano (250ml)',
    category: 'salsas',
    categoryLabel: 'Salsas Artesanales',
    price: 12000,
    badge: 'RECETA SECRETA',
    description: 'Nuestra salsa insignia preparada con perejil fresco picado a mano, ajo morado, orégano, pimienta y aceite de oliva.',
    highlights: ['100% fresco sin conservantes', 'Macerado 48 horas']
  }
];

interface MenuProps {
  onAddToCart: (item: MenuItem) => void;
}

export const MenuShowcase: React.FC<MenuProps> = ({ onAddToCart }) => {
  const [activeTab, setActiveTab] = useState<'todos' | 'cortes' | 'acompanamientos' | 'entradas' | 'salsas'>('todos');

  const filteredItems = activeTab === 'todos'
    ? MENU_ITEMS
    : MENU_ITEMS.filter((item) => item.category === activeTab);

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="menu" className="py-24 bg-[#080808] relative text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
            <Flame className="w-4 h-4" /> Calidad & Sazón a la Brasa
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            NUESTRO MENÚ A LA <span className="text-[#E30613]">PARRILLA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Selecciona tus platos y cortes favoritos para pedir directo a domicilio.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {[
            { id: 'todos', label: 'Todos los Productos' },
            { id: 'cortes', label: 'Cortes de Carne' },
            { id: 'entradas', label: 'Entradas & Chorizos' },
            { id: 'acompanamientos', label: 'Acompañamientos' },
            { id: 'salsas', label: 'Salsas Artesanales' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? 'bg-[#E30613] text-white shadow-[0_0_20px_rgba(227,6,19,0.5)]'
                  : 'bg-[#141414] text-slate-400 hover:text-white hover:bg-white/10 border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Menu Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="bg-[#121212] rounded-3xl p-6 border border-white/10 hover:border-[#E30613]/50 transition-all duration-300 group flex flex-col justify-between hover:shadow-[0_0_25px_rgba(227,6,19,0.2)]"
            >
              <div>
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="text-[10px] font-mono text-[#FF8800] uppercase tracking-wider block mb-1">
                      {item.categoryLabel}
                    </span>
                    <h3 className="font-brand text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                      {item.name}
                    </h3>
                  </div>
                  {item.badge && (
                    <span className="text-[10px] bg-[#E30613] text-white px-2.5 py-0.5 rounded-full font-bold uppercase shrink-0 shadow-[0_0_10px_rgba(227,6,19,0.5)]">
                      {item.badge}
                    </span>
                  )}
                </div>

                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.originNote && (
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-black/50 border border-white/5 text-[11px] text-amber-300 font-medium mb-4">
                    <Info className="w-3.5 h-3.5 text-[#FF5500]" />
                    <span>{item.originNote}</span>
                  </div>
                )}
              </div>

              <div>
                <div className="pt-4 border-t border-white/5 space-y-1.5 mb-5">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-[11px] text-slate-400">
                      <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-white/10">
                  <span className="font-brand text-xl font-black text-[#FFB800]">
                    {formatCOP(item.price)}
                  </span>
                  <button
                    onClick={() => onAddToCart(item)}
                    className="px-4 py-2 rounded-full bg-[#E30613] hover:bg-[#c90510] text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-[0_0_15px_rgba(227,6,19,0.4)] active:scale-95 cursor-pointer"
                  >
                    <Plus className="w-4 h-4" />
                    <span>Agregar</span>
                  </button>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
