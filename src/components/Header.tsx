import React, { useState } from 'react';
import { ShoppingCart, Menu as MenuIcon, X } from 'lucide-react';
import { AsadosColombiaLogo } from './AsadosColombiaLogo';

export type PageType = 'inicio' | 'menu' | 'nosotros' | 'contacto';

interface HeaderProps {
  activePage: PageType;
  onNavigate: (page: PageType) => void;
  cartCount: number;
  onOpenCart: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activePage,
  onNavigate,
  cartCount,
  onOpenCart,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { name: string; page: PageType }[] = [
    { name: 'INICIO', page: 'inicio' },
    { name: 'MENÚ', page: 'menu' },
    { name: 'NOSOTROS', page: 'nosotros' },
    { name: 'CONTACTO', page: 'contacto' },
  ];

  const handleNavClick = (page: PageType) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/85 backdrop-blur-md border-b border-white/10 py-3 px-4 sm:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Left: Official Logo Image */}
        <button
          onClick={() => handleNavClick('inicio')}
          className="flex items-center gap-3 group transition-transform duration-200 hover:scale-105 cursor-pointer"
        >
          <AsadosColombiaLogo size="sm" variant="header" />
        </button>

        {/* Center: Navigation Links */}
        <nav className="hidden md:flex items-center gap-10">
          {navItems.map((item) => {
            const isActive = activePage === item.page;
            return (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`text-xs sm:text-sm font-bold tracking-widest transition-colors relative py-1 cursor-pointer ${
                  isActive ? 'text-[#E30613]' : 'text-slate-200 hover:text-[#E30613]'
                }`}
              >
                {item.name}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#E30613] transition-all duration-300 rounded-full ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* Right: Shopping Cart Icon */}
        <div className="flex items-center gap-4">
          <button
            onClick={onOpenCart}
            className="relative p-2 text-slate-200 hover:text-white transition-colors focus:outline-none group cursor-pointer"
            aria-label="Ver Carrito de Compras"
          >
            <ShoppingCart className="w-6 h-6 stroke-[1.8] group-hover:scale-110 transition-transform" />
            {cartCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#E30613] text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center border-2 border-black animate-pulse">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-200 hover:text-white"
            aria-label="Abrir Menú"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-black/95 border-b border-white/10 px-6 py-6 space-y-4 animate-in fade-in slide-in-from-top-2">
          {navItems.map((item) => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`w-full text-left text-base font-bold tracking-wider py-2 border-b border-white/5 ${
                activePage === item.page ? 'text-[#E30613]' : 'text-slate-200'
              }`}
            >
              {item.name}
            </button>
          ))}

          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCart();
              }}
              className="w-full py-3 rounded-full bg-[#E30613] text-white font-bold text-sm flex items-center justify-center gap-2"
            >
              <ShoppingCart className="w-4 h-4" />
              <span>Ver Carrito ({cartCount})</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
