
import { useState } from 'react';
import { Search, ShoppingCart, Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface HeaderProps {
  cartItemCount: number;
  onCartOpen: () => void;
}

const Header = ({ cartItemCount, onCartOpen }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems = [
    { name: 'Camisetas', href: '#camisetas' },
    { name: 'Toalhas', href: '#toalhas' },
    { name: 'Necessaires', href: '#necessaires' },
    { name: 'Bolsas', href: '#bolsas' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <header className="bg-white shadow-sm border-b border-pink-light sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar */}
        <div className="hidden md:flex justify-center py-2 text-sm text-gray-600 bg-pink-light">
          <span>✨ Frete grátis para compras acima de R$ 150 ✨</span>
        </div>

        {/* Main header */}
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-heading text-2xl md:text-3xl font-bold text-pink-dark">
              Imaginne Bordados
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-pink-dark transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center space-x-2">
              <Input
                type="search"
                placeholder="Buscar produtos..."
                className="w-64 border-pink-medium focus:border-pink-dark"
              />
              <Button size="sm" className="bg-pink-dark hover:bg-pink-dark/90">
                <Search className="h-4 w-4" />
              </Button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={onCartOpen}
              className="relative border-pink-medium hover:bg-pink-light"
            >
              <ShoppingCart className="h-4 w-4" />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-dark text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-pink-light">
            <div className="flex flex-col space-y-4">
              <div className="flex items-center space-x-2 mb-4">
                <Input
                  type="search"
                  placeholder="Buscar produtos..."
                  className="flex-1 border-pink-medium"
                />
                <Button size="sm" className="bg-pink-dark hover:bg-pink-dark/90">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
              {navigationItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-pink-dark transition-colors duration-200 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
