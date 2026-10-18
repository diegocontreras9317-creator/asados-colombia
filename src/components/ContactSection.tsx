import React, { useState } from 'react';
import { MessageSquare, Phone, MapPin, Clock, Send, CheckCircle } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    guests: '20',
    location: 'Cúcuta',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    const msg = `🔥 *CONSULTA DIRECTA - ASADOS COLOMBIA*
----------------------------------------
👤 *Nombre:* ${formData.name}
📱 *Teléfono:* ${formData.phone}
👥 *Invitados:* ${formData.guests} personas
📍 *Ubicación:* ${formData.location}
📅 *Fecha:* ${formData.date || 'Por definir'}
💬 *Mensaje:* ${formData.message || 'Sin mensaje adicional'}
----------------------------------------`;

    window.open(`https://wa.me/573009876543?text=${encodeURIComponent(msg)}`, '_blank');
    setSubmitted(true);
  };

  return (
    <section id="contacto" className="py-24 bg-[#050505] relative text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Info & Location */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
                <MessageSquare className="w-4 h-4" /> Atención Inmediata
              </div>
              <h2 className="font-brand text-3xl sm:text-4xl font-bold text-white mb-4">
                CONTÁCTANOS Y <span className="text-[#E30613]">RESERVA TU FECHA</span>
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                ¿Tienes alguna consulta especial o deseas atención personalizada para un evento corporativo o fiesta privada? Escríbenos o llámanos directamente.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0e0e0e] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#25D366]/20 text-[#25D366] flex items-center justify-center shrink-0">
                  <MessageSquare className="w-5 h-5 fill-[#25D366]/20" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">WhatsApp Directo:</h3>
                  <a
                    href="https://wa.me/573009876543"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-base font-bold text-white hover:text-[#25D366] transition-colors"
                  >
                    +57 300 987 6543
                  </a>
                  <span className="text-[11px] text-emerald-400 block mt-0.5">🟢 En línea • Respuesta inmediata</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0e0e0e] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#E30613]/20 text-[#E30613] flex items-center justify-center shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">Llamadas Telefónicas:</h3>
                  <a href="tel:+573009876543" className="text-base font-bold text-white hover:text-amber-300 transition-colors">
                    +57 (607) 571 2345 / 300 987 6543
                  </a>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Lunes a Domingo de 8:00 AM a 10:00 PM</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0e0e0e] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FF5500]/20 text-[#FF5500] flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">Centro Operativo & Prep Hub:</h3>
                  <p className="text-sm font-semibold text-white">Barrio Caobos, Calle 13 #2E-45</p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Cúcuta, Norte de Santander - Colombia</span>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#0e0e0e] border border-white/5">
                <div className="w-10 h-10 rounded-xl bg-[#FFB800]/20 text-[#FFB800] flex items-center justify-center shrink-0">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xs text-slate-400 font-medium">Horario de Eventos:</h3>
                  <p className="text-sm font-semibold text-white">Atendemos eventos los 365 días del año</p>
                  <span className="text-[11px] text-slate-400 block mt-0.5">Previa reserva con 48h de anticipación</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7 bg-[#0f0f0f] p-6 sm:p-10 rounded-3xl border border-white/10 shadow-2xl relative">
            
            <h3 className="font-brand text-2xl font-bold text-white mb-2">SOLICITA TU COTIZACIÓN PERSONALIZADA</h3>
            <p className="text-xs text-slate-400 mb-6">Completa tus datos y te enviaremos una propuesta formal en PDF/WhatsApp.</p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-center space-y-3">
                <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto animate-bounce" />
                <h4 className="font-brand text-xl font-bold text-white">¡Solicitud Enviada con Éxito!</h4>
                <p className="text-sm text-slate-300">
                  Hemos abierto WhatsApp con la información de tu evento. Te responderemos en breve.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-xs font-semibold hover:bg-white/20 transition-colors text-white"
                >
                  Enviar otra consulta
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
                      placeholder="Ej. María Fernanda"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>

                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Teléfono / WhatsApp *</label>
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

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Número Personas</label>
                    <select
                      value={formData.guests}
                      onChange={(e) => setFormData({ ...formData, guests: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                    >
                      <option value="10-15">10 - 15 Personas</option>
                      <option value="20-30">20 - 30 Personas</option>
                      <option value="40-60">40 - 60 Personas</option>
                      <option value="70-100">70 - 100 Personas</option>
                      <option value="100+">Más de 100 Personas</option>
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

                  <div>
                    <label className="text-xs text-slate-300 font-semibold mb-1 block">Lugar / Municipio</label>
                    <input
                      type="text"
                      placeholder="Ej. Cúcuta / Chinácota"
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full bg-black/80 border border-white/15 rounded-xl px-3 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs text-slate-300 font-semibold mb-1 block">Detalles o Menú Deseado</label>
                  <textarea
                    rows={3}
                    placeholder="Cuéntanos si requieres cortes específicos, bebidas o meseros..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-black/80 border border-white/15 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-[#E30613]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-[#E30613] via-[#FF3A00] to-[#FF5500] hover:from-[#FF1E00] hover:to-[#FF8800] transition-all duration-300 shadow-[0_0_25px_rgba(227,6,19,0.5)] flex items-center justify-center gap-2 group"
                >
                  <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  <span>Enviar Consulta por WhatsApp</span>
                </button>
              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
};
