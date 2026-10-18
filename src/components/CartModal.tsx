import React from 'react';
import { X, Trash2, Plus, Minus, MessageSquare, ShoppingCart, Flame } from 'lucide-react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  description: string;
}

interface CartModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onClearCart: () => void;
}

export const CartModal: React.FC<CartModalProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onClearCart
}) => {
  if (!isOpen) return null;

  const totalCOP = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formatCOP = (val: number) => {
    return new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
    }).format(val);
  };

  const handleCheckoutWhatsApp = () => {
    if (items.length === 0) return;

    const orderList = items
      .map((item) => `• ${item.quantity}x ${item.name} (${formatCOP(item.price * item.quantity)})`)
      .join('\n');

    const message = 
`🔥 *PEDIDO ASADOS COLOMBIA* 🔥
----------------------------------------
${orderList}

----------------------------------------
💰 *TOTAL PEDIDO: ${formatCOP(totalCOP)} COP*

📍 *Dirección de Entrega:* Cúcuta / Norte de Santander
Deseo confirmar la hora de entrega y disponibilidad. ¡Gracias!`;

    window.open(`https://wa.me/573009876543?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="w-full max-w-md bg-[#0f0f0f] border-l border-white/10 h-full flex flex-col justify-between p-6 shadow-2xl relative">
        
        {/* Header */}
        <div>
          <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
            <div className="flex items-center gap-2">
              <ShoppingCart className="w-5 h-5 text-[#E30613]" />
              <h3 className="font-bold text-lg text-white tracking-wider uppercase">TUS PEDIDOS A LA PARRILLA</h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Cart Items List */}
          {items.length === 0 ? (
            <div className="text-center py-16 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#E30613]/10 border border-[#E30613]/30 flex items-center justify-center mx-auto text-[#E30613]">
                <Flame className="w-8 h-8" />
              </div>
              <h4 className="text-base font-bold text-white">Tu Carrito está Vacío</h4>
              <p className="text-xs text-slate-400 max-w-xs mx-auto">
                Explora nuestro menú y añade tus cortes favoritos de carne, parrilladas y acompañamientos.
              </p>
            </div>
          ) : (
            <div className="space-y-4 max-h-[55vh] overflow-y-auto pr-1">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="bg-[#181818] p-4 rounded-2xl border border-white/5 flex items-center justify-between gap-3"
                >
                  <div className="flex-1">
                    <h4 className="text-sm font-bold text-white mb-0.5">{item.name}</h4>
                    <span className="text-xs font-mono text-amber-400 font-bold">
                      {formatCOP(item.price)}
                    </span>
                  </div>

                  <div className="flex items-center gap-2">
                    <div className="flex items-center bg-black rounded-xl border border-white/10 p-1">
                      <button
                        onClick={() => onUpdateQuantity(item.id, -1)}
                        className="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/20 text-white flex items-center justify-center text-xs"
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-7 text-center text-xs font-bold text-white">{item.quantity}</span>
                      <button
                        onClick={() => onUpdateQuantity(item.id, 1)}
                        className="w-6 h-6 rounded-lg bg-white/5 hover:bg-white/20 text-white flex items-center justify-center text-xs"
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                    </div>

                    <button
                      onClick={() => onRemoveItem(item.id)}
                      className="p-1.5 text-slate-500 hover:text-[#E30613] transition-colors"
                      title="Eliminar producto"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer & Checkout Button */}
        {items.length > 0 && (
          <div className="pt-6 border-t border-white/10 space-y-4">
            <div className="flex justify-between items-baseline">
              <span className="text-sm text-slate-400">Total a pagar:</span>
              <span className="font-brand text-2xl font-black text-[#E30613]">
                {formatCOP(totalCOP)}
              </span>
            </div>

            <button
              onClick={handleCheckoutWhatsApp}
              className="w-full py-4 rounded-full font-bold text-sm text-white bg-gradient-to-r from-[#25D366] via-[#128C7E] to-[#075E54] hover:from-[#20bd5a] hover:to-[#0a6b5e] transition-all duration-300 shadow-[0_0_20px_rgba(37,211,102,0.5)] flex items-center justify-center gap-2 uppercase tracking-wider"
            >
              <MessageSquare className="w-5 h-5 fill-white/20" />
              <span>Pedir por WhatsApp</span>
            </button>

            <button
              onClick={onClearCart}
              className="w-full text-center text-xs text-slate-500 hover:text-slate-300 transition-colors"
            >
              Vaciar Carrito
            </button>
          </div>
        )}

      </div>
    </div>
  );
};
