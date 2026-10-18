import React, { useState } from 'react';
import { Calculator, MessageSquare, Flame, Users, Calendar, MapPin, Check, Plus, Minus, Sparkles } from 'lucide-react';

interface MeatOption {
  id: string;
  name: string;
  pricePerGuest: number;
  description: string;
  recommended?: boolean;
}

interface SideOption {
  id: string;
  name: string;
  pricePerGuest: number;
}

const MEAT_OPTIONS: MeatOption[] = [
  { id: 'picanha', name: 'Picanha Angus (Punta de Anca)', pricePerGuest: 18000, description: 'Corte magro jugoso con cubierta de grasa crujiente a la parrilla', recommended: true },
  { id: 'babybeef', name: 'Baby Beef Premium', pricePerGuest: 17000, description: 'Lomo tierno y jugoso cortado al punto exacto' },
  { id: 'lomo', name: 'Lomo al Trapo / Fino', pricePerGuest: 16000, description: 'Clásico colombiano sellado en sal marina e hierbas' },
  { id: 'costillas', name: 'Costillas BBQ Ahumadas', pricePerGuest: 15000, description: 'Ahogadas en leña con salsa BBQ artesanal dulce y picante' },
  { id: 'pechuga', name: 'Pechuga a la Parrilla Miso', pricePerGuest: 12000, description: 'Pechuga maridada en especias y asada al carbón' },
  { id: 'chorizo', name: 'Chorizo Santandereano Artesanal', pricePerGuest: 6000, description: '100% carne picada ahumada con limón criollo', recommended: true },
  { id: 'morcilla', name: 'Morcilla Especial de la Casa', pricePerGuest: 5000, description: 'Rellena de arroz, arveja y hierbas de finca' }
];

const SIDE_OPTIONS: SideOption[] = [
  { id: 'arepa_choclo', name: 'Arepa de Choclo con Queso Costeño', pricePerGuest: 4000 },
  { id: 'papas_ahogao', name: 'Papas Saladas con Ahogao Criollo', pricePerGuest: 3500 },
  { id: 'platano_bocadillo', name: 'Plátano Maduro con Queso y Bocadillo', pricePerGuest: 4500 },
  { id: 'yuquita_suero', name: 'Yuquita Frita con Suero Costeño', pricePerGuest: 4000 },
  { id: 'ensalada_casa', name: 'Ensalada Fresca de la Casa con Aderezo Maracuyá', pricePerGuest: 3000 }
];

export const QuoteCalculator: React.FC = () => {
  const [guests, setGuests] = useState<number>(25);
  const [eventType, setEventType] = useState<string>('Fiesta Familiar');
  const [selectedMeats, setSelectedMeats] = useState<string[]>(['picanha', 'chorizo', 'costillas']);
  const [selectedSides, setSelectedSides] = useState<string[]>(['arepa_choclo', 'papas_ahogao', 'platano_bocadillo']);
  const [includeDisposables, setIncludeDisposables] = useState<boolean>(true);
  const [includeBeverages, setIncludeBeverages] = useState<boolean>(false);
  const [includeWaiter, setIncludeWaiter] = useState<boolean>(false);
  
  const [eventDate, setEventDate] = useState<string>('');
  const [location, setLocation] = useState<string>('Cúcuta');
  const [clientName, setClientName] = useState<string>('');

  const toggleMeat = (id: string) => {
    if (selectedMeats.includes(id)) {
      if (selectedMeats.length > 1) {
        setSelectedMeats(selectedMeats.filter((m) => m !== id));
      }
    } else {
      setSelectedMeats([...selectedMeats, id]);
    }
  };

  const toggleSide = (id: string) => {
    if (selectedSides.includes(id)) {
      if (selectedSides.length > 1) {
        setSelectedSides(selectedSides.filter((s) => s !== id));
      }
    } else {
      setSelectedSides([...selectedSides, id]);
    }
  };

  // Base Grill Master Service Fee & Equipment Fee
  const baseGrillMasterFee = 120000; // Base parrillero fee
  
  // Meats total per guest
  const meatsCostPerGuest = MEAT_OPTIONS
    .filter((m) => selectedMeats.includes(m.id))
    .reduce((sum, m) => sum + m.pricePerGuest, 0);

  // Sides total per guest
  const sidesCostPerGuest = SIDE_OPTIONS
    .filter((s) => selectedSides.includes(s.id))
    .reduce((sum, s) => sum + s.pricePerGuest, 0);

  const disposablesCostPerGuest = includeDisposables ? 2500 : 0;
  const beveragesCostPerGuest = includeBeverages ? 5000 : 0;
  const waiterCost = includeWaiter ? 100000 : 0;

  const costPerGuest = meatsCostPerGuest + sidesCostPerGuest + disposablesCostPerGuest + beveragesCostPerGuest;
  const totalFoodsCost = costPerGuest * guests;
  const grandTotal = totalFoodsCost + baseGrillMasterFee + waiterCost;

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleSendWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();

    const chosenMeatNames = MEAT_OPTIONS
      .filter((m) => selectedMeats.includes(m.id))
      .map((m) => `• ${m.name}`)
      .join('\n');

    const chosenSideNames = SIDE_OPTIONS
      .filter((s) => selectedSides.includes(s.id))
      .map((s) => `• ${s.name}`)
      .join('\n');

    const message = 
`🔥 *COTIZACIÓN DE ASADO A DOMICILIO - ASADOS COLOMBIA* 🔥
----------------------------------------------
👤 *Cliente:* ${clientName || 'Cliente Asados Colombia'}
🎉 *Tipo de Evento:* ${eventType}
👥 *Invitados:* ${guests} personas
📍 *Ubicación:* ${location} (Norte de Santander)
📅 *Fecha estimada:* ${eventDate || 'Por definir'}

🥩 *CORTES SELECCIONADOS:*
${chosenMeatNames}

🥗 *ACOMPAÑAMIENTOS:*
${chosenSideNames}

✨ *INCLUYE:*
• Parrillero profesional en vivo y herramientas
• Carbón vegetal y leña especial de ahumado
${includeDisposables ? '• Vajilla y cubiertos ecológicos' : ''}
${includeBeverages ? '• Bebidas frías surtidas' : ''}
${includeWaiter ? '• Mesero de servicio para atención' : ''}

💰 *VALOR ESTIMADO:*
• Por persona: ${formatCOP(costPerGuest + (baseGrillMasterFee + waiterCost) / guests)}
• *TOTAL EVENTO: ${formatCOP(grandTotal)} COP*

----------------------------------------------
Por favor confirmarme disponibilidad para esta fecha. ¡Gracias!`;

    const encoded = encodeURIComponent(message);
    window.open(`https://wa.me/573009876543?text=${encoded}`, '_blank');
  };

  return (
    <section id="cotizador" className="py-20 bg-[#080808] relative overflow-hidden text-slate-100">
      
      {/* Background Subtle Fire Glow Blur */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-[#E30613]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
            <Calculator className="w-4 h-4" /> Cotizador Interactivo Instantáneo
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            CALCULA TU ASADO A DOMICILIO EN <span className="text-[#E30613]">SEGUNDOS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Personaliza el número de invitados, los cortes de carne y acompañamientos. Obtén un presupuesto exacto con envío directo a nuestro WhatsApp.
          </p>
        </div>

        {/* Main Grid: Options on Left, Live Summary on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT PANEL: Options Selector (Col Span 7) */}
          <div className="lg:col-span-7 space-y-8 bg-[#111111] p-6 sm:p-8 rounded-3xl border border-white/10 shadow-2xl">
            
            {/* Step 1: Guest Count & Event Type */}
            <div>
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center gap-2 mb-3">
                <Users className="w-4 h-4 text-[#FF5500]" /> 1. Número de Invitados y Tipo de Evento
              </label>

              {/* Slider & Counter Controls */}
              <div className="bg-black/60 p-5 rounded-2xl border border-white/5 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-slate-300">Cantidad de Personas:</span>
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      onClick={() => setGuests(Math.max(10, guests - 5))}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E30613] text-white flex items-center justify-center transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-brand text-2xl font-bold text-[#FFB800] w-12 text-center">
                      {guests}
                    </span>
                    <button
                      type="button"
                      onClick={() => setGuests(guests + 5)}
                      className="w-9 h-9 rounded-xl bg-white/10 hover:bg-[#E30613] text-white flex items-center justify-center transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                <input
                  type="range"
                  min="10"
                  max="200"
                  step="5"
                  value={guests}
                  onChange={(e) => setGuests(parseInt(e.target.value, 10))}
                  className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-[#FF5500]"
                />

                {/* Quick Presets */}
                <div className="flex flex-wrap gap-2 pt-1">
                  {[15, 25, 40, 60, 100].map((num) => (
                    <button
                      key={num}
                      type="button"
                      onClick={() => setGuests(num)}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        guests === num
                          ? 'bg-[#E30613] text-white shadow-[0_0_10px_rgba(227,6,19,0.5)]'
                          : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      {num} Personas
                    </button>
                  ))}
                </div>
              </div>

              {/* Event Type Grid */}
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 gap-2">
                {['Fiesta Familiar', 'Cumpleaños', 'Evento Empresarial', 'Boda / Grado', 'Asado de Finca', 'Amigos / Casual'].map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => setEventType(type)}
                    className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all ${
                      eventType === type
                        ? 'bg-[#FF5500]/20 border-[#FF5500] text-amber-300 font-bold'
                        : 'bg-black/40 border-white/5 text-slate-400 hover:text-white'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Select Meat Cuts */}
            <div>
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <Flame className="w-4 h-4 text-[#E30613]" /> 2. Selección de Cortes de Carne
                </span>
                <span className="text-xs text-[#FF8800] font-normal">
                  ({selectedMeats.length} seleccionados)
                </span>
              </label>

              <div className="space-y-2.5">
                {MEAT_OPTIONS.map((meat) => {
                  const isSelected = selectedMeats.includes(meat.id);
                  return (
                    <div
                      key={meat.id}
                      onClick={() => toggleMeat(meat.id)}
                      className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-gradient-to-r from-[#E30613]/20 to-black border-[#E30613] shadow-[0_0_15px_rgba(227,6,19,0.2)]'
                          : 'bg-black/50 border-white/5 hover:border-white/20 opacity-80 hover:opacity-100'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition-colors ${
                          isSelected ? 'bg-[#E30613] border-[#E30613] text-white' : 'border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-semibold text-white">{meat.name}</span>
                            {meat.recommended && (
                              <span className="text-[10px] bg-[#FF5500]/30 text-amber-300 px-2 py-0.5 rounded-full font-bold">
                                Recomendado
                              </span>
                            )}
                          </div>
                          <p className="text-xs text-slate-400">{meat.description}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-bold text-amber-400 shrink-0 ml-2">
                        +{formatCOP(meat.pricePerGuest)}/p
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 3: Side Dishes */}
            <div>
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider flex items-center justify-between mb-3">
                <span className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#FFB800]" /> 3. Acompañamientos Tradicionales
                </span>
                <span className="text-xs text-[#FF8800] font-normal">
                  ({selectedSides.length} seleccionados)
                </span>
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {SIDE_OPTIONS.map((side) => {
                  const isSelected = selectedSides.includes(side.id);
                  return (
                    <div
                      key={side.id}
                      onClick={() => toggleSide(side.id)}
                      className={`p-3 rounded-xl border cursor-pointer transition-all flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#FF5500]/20 border-[#FF5500] text-white'
                          : 'bg-black/40 border-white/5 text-slate-400 hover:text-white'
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                          isSelected ? 'bg-[#FF5500] border-[#FF5500] text-white' : 'border-slate-600'
                        }`}>
                          {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium">{side.name}</span>
                      </div>
                      <span className="text-[11px] font-mono text-amber-300">+{formatCOP(side.pricePerGuest)}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Additional Services */}
            <div>
              <label className="text-sm font-bold text-slate-200 uppercase tracking-wider block mb-3">
                4. Servicios Adicionales
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all ${
                  includeDisposables ? 'bg-white/10 border-amber-500 text-white' : 'bg-black/40 border-white/5 text-slate-400'
                }`}>
                  <input
                    type="checkbox"
                    checked={includeDisposables}
                    onChange={(e) => setIncludeDisposables(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                    includeDisposables ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-600'
                  }`}>
                    {includeDisposables && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Vajilla Ecológica</div>
                    <div className="text-[10px] text-slate-400">+$2.500/persona</div>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all ${
                  includeBeverages ? 'bg-white/10 border-amber-500 text-white' : 'bg-black/40 border-white/5 text-slate-400'
                }`}>
                  <input
                    type="checkbox"
                    checked={includeBeverages}
                    onChange={(e) => setIncludeBeverages(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                    includeBeverages ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-600'
                  }`}>
                    {includeBeverages && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Bebidas Frías</div>
                    <div className="text-[10px] text-slate-400">+$5.000/persona</div>
                  </div>
                </label>

                <label className={`p-3 rounded-xl border cursor-pointer flex items-center gap-2.5 transition-all ${
                  includeWaiter ? 'bg-white/10 border-amber-500 text-white' : 'bg-black/40 border-white/5 text-slate-400'
                }`}>
                  <input
                    type="checkbox"
                    checked={includeWaiter}
                    onChange={(e) => setIncludeWaiter(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-4 h-4 rounded flex items-center justify-center border ${
                    includeWaiter ? 'bg-amber-500 border-amber-500 text-black' : 'border-slate-600'
                  }`}>
                    {includeWaiter && <Check className="w-3 h-3 stroke-[3]" />}
                  </div>
                  <div>
                    <div className="text-xs font-semibold">Mesero de Apoyo</div>
                    <div className="text-[10px] text-slate-400">+$100.000 total</div>
                  </div>
                </label>
              </div>
            </div>

          </div>

          {/* RIGHT PANEL: Dynamic Quote Summary & Form (Col Span 5) */}
          <div className="lg:col-span-5 sticky top-28 space-y-6">
            
            <div className="bg-gradient-to-b from-[#181818] via-[#111111] to-[#0a0a0a] p-6 sm:p-8 rounded-3xl border-2 border-[#E30613]/50 shadow-[0_0_40px_rgba(227,6,19,0.25)] relative overflow-hidden">
              
              <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-5">
                <div>
                  <h3 className="font-brand text-xl font-bold text-white">RESUMEN DE COTIZACIÓN</h3>
                  <p className="text-xs text-slate-400">Presupuesto instantáneo estimado</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-[#E30613]/20 flex items-center justify-center border border-[#E30613]/50">
                  <Flame className="w-5 h-5 text-[#FF5500]" />
                </div>
              </div>

              {/* Event Location & Date Fields */}
              <div className="space-y-3 mb-6">
                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5500]" /> Municipio / Sector
                  </label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-black/80 border border-white/20 rounded-xl px-3 py-2 text-sm text-white focus:outline-none focus:border-[#E30613]"
                  >
                    <option value="Cúcuta (Caobos, La Riviera, Bellavista, etc.)">Cúcuta (Caobos, Riviera, Bellavista)</option>
                    <option value="Los Patios">Los Patios</option>
                    <option value="Villa del Rosario">Villa del Rosario</option>
                    <option value="Chinácota (Finca / Cabaña)">Chinácota (Fincas y Cabañas)</option>
                    <option value="Pamplona">Pamplona</option>
                    <option value="Ocaña">Ocaña</option>
                    <option value="El Zulia / Salazar / Otro">El Zulia / Otro Municipio</option>
                  </select>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5 text-[#FF5500]" /> Fecha Evento
                    </label>
                    <input
                      type="date"
                      value={eventDate}
                      onChange={(e) => setEventDate(e.target.value)}
                      className="w-full bg-black/80 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Tu Nombre</label>
                    <input
                      type="text"
                      placeholder="Ej. Carlos Silva"
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      className="w-full bg-black/80 border border-white/20 rounded-xl px-3 py-2 text-xs text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>
                </div>
              </div>

              {/* Price Calculation Box */}
              <div className="bg-black/80 p-5 rounded-2xl border border-white/10 space-y-3 mb-6">
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Invitados:</span>
                  <span className="font-semibold text-white">{guests} personas</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Cortes seleccionados:</span>
                  <span className="font-semibold text-amber-400">{selectedMeats.length} variedades</span>
                </div>
                <div className="flex justify-between text-xs text-slate-300">
                  <span>Parrillero profesional & Carbón:</span>
                  <span className="text-emerald-400 font-semibold">INCLUIDO</span>
                </div>
                
                <div className="pt-3 border-t border-white/10 flex justify-between items-baseline">
                  <div>
                    <span className="text-xs text-slate-400 block">Estimado por Persona:</span>
                    <span className="font-mono text-lg font-bold text-amber-300">
                      {formatCOP(costPerGuest + (baseGrillMasterFee + waiterCost) / guests)}
                    </span>
                  </div>
                  <div className="text-right">
                    <span className="text-xs text-slate-400 block">TOTAL ESTIMADO:</span>
                    <span className="font-brand text-2xl sm:text-3xl font-black text-[#E30613]">
                      {formatCOP(grandTotal)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Submit to WhatsApp Form */}
              <form onSubmit={handleSendWhatsApp}>
                <button
                  type="submit"
                  className="w-full py-4 rounded-2xl font-bold text-base text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] hover:from-[#20bd5a] hover:to-[#0a6b5e] transition-all duration-300 shadow-[0_0_25px_rgba(37,211,102,0.5)] hover:shadow-[0_0_35px_rgba(37,211,102,0.8)] flex items-center justify-center gap-3 border border-emerald-400/30 group"
                >
                  <MessageSquare className="w-5 h-5 fill-white/20 group-hover:scale-110 transition-transform" />
                  <span>Enviar Cotización a WhatsApp</span>
                </button>
              </form>

              <p className="text-[11px] text-center text-slate-400 mt-3">
                ⚡ Respuesta en menos de 15 minutos. Sin compromiso de pago.
              </p>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
