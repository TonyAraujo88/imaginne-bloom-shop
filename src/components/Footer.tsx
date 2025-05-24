
import { Button } from '@/components/ui/button';
import { Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <h3 className="font-heading text-2xl font-bold text-pink-medium">
              Imaginne Bordados
            </h3>
            <p className="text-gray-300">
              Transformando suas ideias em peças únicas e especiais através do bordado artesanal.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-pink-medium"
                onClick={() => window.open('https://instagram.com/imaginnebordados', '_blank')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                className="text-gray-300 hover:text-pink-medium"
                onClick={() => window.open('https://facebook.com/imaginnebordados', '_blank')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Produtos</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#camisetas" className="hover:text-pink-medium transition-colors">Camisetas Bordadas</a></li>
              <li><a href="#toalhas" className="hover:text-pink-medium transition-colors">Toalhas Personalizadas</a></li>
              <li><a href="#necessaires" className="hover:text-pink-medium transition-colors">Necessaires</a></li>
              <li><a href="#bolsas" className="hover:text-pink-medium transition-colors">Bolsas Customizadas</a></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Atendimento</h4>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#" className="hover:text-pink-medium transition-colors">Como Comprar</a></li>
              <li><a href="#" className="hover:text-pink-medium transition-colors">Política de Troca</a></li>
              <li><a href="#" className="hover:text-pink-medium transition-colors">Frete e Entrega</a></li>
              <li><a href="#" className="hover:text-pink-medium transition-colors">Perguntas Frequentes</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-lg">Contato</h4>
            <div className="text-gray-300 space-y-2">
              <p>📧 contato@imaginnebordados.com.br</p>
              <p>📱 WhatsApp: (11) 99999-9999</p>
              <p>📍 São Paulo, SP</p>
              <p>🕒 Seg - Sex: 9h às 18h</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Imaginne Bordados. Todos os direitos reservados.</p>
          <p className="mt-2">www.imaginnebordados.com.br</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
