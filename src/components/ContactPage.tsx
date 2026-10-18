import React, { useState } from 'react';
import { MessageSquare, Phone, MapPin, Clock, Send, CheckCircle, Flame } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '6',
    package: 'Paquete Amigos (6 personas)',
    location: 'Cúcuta',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const msg = `🔥 *CONSULTA / RESERVA - ASADOS COLOMBIA*
----------------------------------------
👤 *Nombre:* ${formData.name}
📱 *Teléfono:* ${formData.phone}
🍖 *Paquete Interés:* ${formData.package}
👥 *Invitados:* ${formData.guests} personas
📍 *Ubicación:* ${formData.location}
📅 *Fecha:* ${formData.date || 'Por definir'}
💬 *Mensaje:* ${formData.message || 'Sin mensaje adicional'}
----------------------------------------`;

    window.open(`https://wa.me/573009876543?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="pt-28 pb-20 bg-[#050505] min-h-screen text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-bold tracking-wider uppercase mb-3">
            <MessageSquare className="w-4 h-4" /> Reservas & Atención al Cliente
          </div>
          <h1 className="font-brand text-3xl sm:text-5xl font-extrabold text-white mb-4 uppercase">
            CONTÁCTANOS Y <span className="text-[#E30613]">RESERVA TU ASADO</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Estamos listos para atender tu evento en Cúcuta, Los Patios, Villa del Rosario y Chinácota. Escríbenos o llena el formulario para atención inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Info Side (Col 5) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0e0e0e] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-[#25D366]/20" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">WhatsApp Principal:</h3>
                  <a
                    href="https://wa.me/573009876543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    +57 300 987 6543
                  </a>
                  <span className="text-[11px] text-emerald-400 block">🟢 Respuesta Inmediata</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0e0e0e] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#E30613]/20 text-[#E30613] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">Llamadas Directas:</h3>
                  <a href="tel:+573009876543" className="text-lg font-bold text-white hover:text-amber-300 transition-colors">
                    +57 300 987 6543
                  </a>
                  <span className="text-[11px] text-slate-400 block">Lunes a Domingo (8:00 AM - 10:00 PM)</span>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-3xl bg-[#0e0e0e] border border-white/10 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">Ubicación & Centro Operativo:</h3>
                  <p className="text-base font-bold text-white">Barrio Caobos, Calle 13 #2E-45</p>
                  <span className="text-xs text-slate-400 block">Cúcuta, Norte de Santander</span>
                </div>
              </div>
            </div>
          </div>

          {/* Form Side (Col 7) */}
          <div className="lg:col-span-7 bg-[#0f0f0f] p-8 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            <h2 className="font-brand text-2xl font-bold text-white mb-2">FORMULARIO DE RESERVA</h2>
            <p className="text-xs text-slate-400 mb-6">Dinos los detalles de tu evento y te confirmaremos disponibilidad al instante.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h3 className="font-brand text-xl font-bold text-white">¡Solicitud Enviada!</h3>
                <p className="text-sm text-slate-300">
                  Hemos generado tu mensaje a WhatsApp. Te responderemos en breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-full bg-white/10 text-xs font-semibold hover:bg-white/20 transition-colors text-white"
                >
                  Enviar otra solicitud
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Nombre Completo *</label>
                    <input
                      type="text"
                      required
                      placeholder="Ej. Carlos Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Teléfono WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="Ej. 300 123 4567"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Paquete de Interés</label>
                    <select
                      value={formData.package}
                      onChange={(e) => setFormData({ ...formData, package: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#E30613]"
                    >
                      <option value="Paquete Amigos (6 personas)">Paquete Amigos (6 personas)</option>
                      <option value="Paquete Familiar (12 personas)">Paquete Familiar (12 personas)</option>
                      <option value="Paquete Asado Colombia (18 personas)">Paquete Asado Colombia (18 personas)</option>
                      <option value="Paquete Personalizado">Paquete Personalizado / Evento Grande</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Fecha Estimada</label>
                    <input
                      type="date"
                      value={formData.date}
                      onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-3 text-xs text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Municipio / Lugar del Evento</label>
                  <input
                    type="text"
                    placeholder="Ej. Caobos, Cúcuta / Finca en Chinácota / Los Patios"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                  />
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Notas o Requerimientos Especiales</label>
                  <textarea
                    rows={3}
                    placeholder="Escribe aquí si deseas bebidas adicionales o cortes específicos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#E30613] via-[#FF3A00] to-[#FF5500] hover:from-[#FF1E00] hover:to-[#FF8800] transition-all duration-300 shadow-[0_0_25px_rgba(227,6,19,0.5)] flex items-center justify-center gap-2 group uppercase tracking-wider cursor-pointer"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Reserva a WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </div>
  );
};
