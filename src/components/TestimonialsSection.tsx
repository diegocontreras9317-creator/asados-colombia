import React from 'react';
import { Star, Quote, Heart } from 'lucide-react';

interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  rating: number;
  comment: string;
  event: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Andrés Mauricio Gómez',
    role: 'Anfitrión de Cumpleaños',
    location: 'Caobos, Cúcuta',
    rating: 5,
    event: 'Asado Familiar (35 personas)',
    comment: 'Contraté el Paquete Master Premium para el cumpleaños de mi papá en Caobos. La picanha y el lomo al trapo estaban en el punto jugoso perfecto. El parrillero super respetuoso y dejó todo limpio al terminar. ¡100% recomendados!'
  },
  {
    id: '2',
    name: 'Dra. Patricia Villamizar',
    role: 'Gerente de Recursos Humanos',
    location: 'Quinta Bosch, Cúcuta',
    rating: 5,
    event: 'Evento Corporativo Fin de Año (80 personas)',
    comment: 'Excelente organización logística para la integración de nuestra empresa. La atención fue ágil, las carnes calientes y los chorizos santandereanos volaron. Nos facilitaron factura electrónica sin ningún problema.'
  },
  {
    id: '3',
    name: 'Santiago & Natalia',
    role: 'Novios Boda Campestre',
    location: 'Cabaña en Chinácota',
    rating: 5,
    event: 'Recepción de Boda (65 invitados)',
    comment: 'Buscábamos un catering de parrilla gourmet para nuestra boda en Chinácota y Asados Colombia superó las expectativas. Las arepas de choclo y las costillas BBQ conquistaron a todos los invitados. Gracias por su puntualidad.'
  },
  {
    id: '4',
    name: 'Camilo Eduardo Rojas',
    role: 'Reunión de Amigos',
    location: 'Pinar del Río, Los Patios',
    rating: 5,
    event: 'Asado de Fin de Semana (20 personas)',
    comment: 'La facilidad para cotizar por la página y enviar el mensaje a WhatsApp hizo todo instantáneo. Llegaron a la hora exacta a Pinar del Río y las salsas chimichurri caseras son otro nivel. Repetiremos seguro.'
  }
];

export const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#050505] relative text-slate-100 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
            <Heart className="w-4 h-4 fill-[#E30613]" /> Experiencias Reales
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            LO QUE DICEN NUESTROS <span className="text-[#E30613]">CLIENTES</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Más de 1.200 eventos realizados en Cúcuta, Los Patios, Villa del Rosario y Chinácota.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-[#0e0e0e] p-6 sm:p-8 rounded-3xl border border-white/10 hover:border-[#FF5500]/40 transition-all duration-300 relative flex flex-col justify-between"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#E30613]/20 pointer-events-none" />

              <div>
                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFB800] fill-[#FFB800]" />
                  ))}
                </div>

                <p className="text-slate-200 text-sm sm:text-base leading-relaxed italic mb-6">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <div>
                  <h3 className="font-bold text-sm text-white">{t.name}</h3>
                  <span className="text-xs text-[#FF8800] block">{t.role}</span>
                  <span className="text-[11px] text-slate-400">{t.location}</span>
                </div>
                <span className="text-[10px] bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-full font-mono">
                  {t.event}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
