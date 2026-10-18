import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Flame } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQS: FaqItem[] = [
  {
    question: '¿Ustedes traen la parrilla, el carbón y los utensilios o debo poner algo?',
    answer: 'Nosotros nos encargamos de absolutamente TODO. Llevamos asador móvil limpio, carbón vegetal de guayabo de larga duración, leña de aromáticas, utensilios de acero inoxidable, tablas de picar sanitizadas y recipientes térmicos para servir las carnes calientes.'
  },
  {
    question: '¿Con cuánta anticipación debo reservar mi asado a domicilio?',
    answer: 'Recomendamos reservar con mínimo 48 a 72 horas de anticipación para garantizar disponibilidad de parrillero e insumos frescos. Para fines de semana, festivos y eventos grandes (bodas o eventos corporativos en Chinácota o Cúcuta), aconsejamos reservar con 1 a 2 semanas de antelación.'
  },
  {
    question: '¿Cómo es el proceso el día del evento?',
    answer: 'Nuestro parrillero profesional llega aproximadamente 1 hora antes de la hora fijada para servido. Monta el asador portátil, enciende las brasas con técnicas limpias sin olores químicos y cocina las carnes en vivo según los términos de preferencia de tus invitados.'
  },
  {
    question: '¿Limpian la parrilla y el espacio al finalizar el servicio?',
    answer: '¡Por supuesto! Es uno de nuestros compromisos principales. Al terminar el asado, nuestro equipo retira el carbón consumido de forma segura, limpia el área de parrilla y deja la zona totalmente aseada.'
  },
  {
    question: '¿Cuáles son las formas de pago aceptadas?',
    answer: 'Aceptamos transferencias por Nequi, Daviplata, Bancolombia, pagos con tarjeta de crédito/débito y efectivo el día del evento. Para reservar requerimos un anticipo del 30% al 50% y el saldo restante se cancela al finalizar la atención.'
  },
  {
    question: '¿Tienen opciones para personas que no comen carne roja o niños?',
    answer: 'Sí, contamos con opciones de Pechuga a la Parrilla Maridada, Chorizos artesanales de pollo, pimentones asados rellenos de queso costeño y porciones especiales para niños con papitas saladas y arepitas de choclo.'
  }
];

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#080808] relative text-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FF5500]/10 border border-[#FF5500]/30 text-[#FF5500] text-xs font-semibold tracking-wider uppercase mb-3">
            <HelpCircle className="w-4 h-4" /> Resolvemos tus Dudas
          </div>
          <h2 className="font-brand text-3xl sm:text-4xl font-bold text-white mb-4">
            PREGUNTAS <span className="text-[#E30613]">FRECUENTES</span>
          </h2>
          <p className="text-slate-300 text-sm sm:text-base">
            Todo lo que necesitas saber antes de contratar tu servicio de asado a domicilio en Cúcuta y Norte de Santander.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-[#121212] border-[#E30613]/50 shadow-[0_0_15px_rgba(227,6,19,0.15)]'
                    : 'bg-[#0e0e0e] border-white/5 hover:border-white/20'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-semibold text-white text-base sm:text-lg focus:outline-none"
                >
                  <span className="flex items-center gap-3">
                    <Flame className={`w-4 h-4 shrink-0 transition-colors ${isOpen ? 'text-[#FF5500]' : 'text-slate-500'}`} />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF5500] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 text-[#E30613]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-sm text-slate-300 leading-relaxed border-t border-white/5 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
