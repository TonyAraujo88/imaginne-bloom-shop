
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative bg-gradient-to-r from-pink-light to-white py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text content */}
          <div className="space-y-6 animate-fade-in">
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Bordados
              <span className="text-pink-dark block">
                Únicos & Especiais
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed">
              Transforme suas ideias em peças exclusivas. Camisetas bordadas, 
              toalhas personalizadas, necessaires e muito mais, feitos com carinho 
              e atenção aos detalhes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-pink-dark hover:bg-pink-dark/90 text-white px-8 py-3 text-lg"
              >
                Ver Produtos
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-pink-dark text-pink-dark hover:bg-pink-light px-8 py-3 text-lg"
              >
                Fazer Orçamento
              </Button>
            </div>
          </div>

          {/* Hero image placeholder */}
          <div className="relative">
            <div className="bg-pink-medium rounded-2xl h-96 md:h-[500px] flex items-center justify-center shadow-2xl">
              <div className="text-center text-pink-dark">
                <div className="text-6xl mb-4">✨</div>
                <p className="text-lg font-medium">
                  Imagem dos produtos<br />
                  bordados em destaque
                </p>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-light rounded-full opacity-60"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-light rounded-full opacity-40"></div>
          </div>
        </div>
      </div>

      {/* Floating WhatsApp button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg animate-pulse"
          onClick={() => window.open('https://wa.me/5511999999999', '_blank')}
        >
          <span className="text-2xl">💬</span>
        </Button>
      </div>
    </section>
  );
};

export default HeroSection;
