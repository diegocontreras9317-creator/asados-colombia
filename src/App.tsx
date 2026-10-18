import React, { useState } from 'react';
import { Header, PageType } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { PackagesPage, BBQPackage } from './components/PackagesPage';
import { AboutPage } from './components/AboutPage';
import { ContactPage } from './components/ContactPage';
import { Footer } from './components/Footer';
import { CartModal, CartItem } from './components/CartModal';
import { WhatsAppStickyButton } from './components/WhatsAppStickyButton';

export default function App() {
  const [activePage, setActivePage] = useState<PageType>('inicio');

  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'paquete_amigos',
      name: 'Paquete Amigos (6 Personas)',
      price: 180000,
      quantity: 1,
      description: 'Asado para 6 personas con Punta de Anca y chorizos'
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const totalCartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const handleAddPackageToCart = (pkg: BBQPackage) => {
    setCartItems((prev) => {
      const existing = prev.find((item) => item.id === pkg.id);
      if (existing) {
        return prev.map((item) =>
          item.id === pkg.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [
        ...prev,
        {
          id: pkg.id,
          name: `${pkg.name} (${pkg.peopleLabel})`,
          price: pkg.price,
          quantity: 1,
          description: pkg.description
        }
      ];
    });
    setIsCartOpen(true);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleClearCart = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen bg-black text-slate-100 font-sans selection:bg-[#E30613] selection:text-white relative">
      {/* Top Navigation Header */}
      <Header
        activePage={activePage}
        onNavigate={(page) => setActivePage(page)}
        cartCount={totalCartCount}
        onOpenCart={() => setIsCartOpen(true)}
      />

      {/* Main Pages View Switching */}
      <main className="min-h-screen">
        {activePage === 'inicio' && (
          <HeroSection
            onOrderNow={() => setActivePage('menu')}
            onGoToMenu={() => setActivePage('menu')}
          />
        )}

        {activePage === 'menu' && (
          <PackagesPage onSelectPackageCart={handleAddPackageToCart} />
        )}

        {activePage === 'nosotros' && (
          <AboutPage />
        )}

        {activePage === 'contacto' && (
          <ContactPage />
        )}
      </main>

      {/* Footer (Rendered on secondary pages or bottom) */}
      {activePage !== 'inicio' && <Footer />}

      {/* Floating Action WhatsApp Button */}
      <WhatsAppStickyButton />

      {/* Shopping Cart Drawer */}
      <CartModal
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onClearCart={handleClearCart}
      />
    </div>
  );
}
