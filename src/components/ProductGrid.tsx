
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, ShoppingCart } from 'lucide-react';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
}

interface ProductGridProps {
  onAddToCart: (product: Product) => void;
}

const ProductGrid = ({ onAddToCart }: ProductGridProps) => {
  const [selectedCategory, setSelectedCategory] = useState('todos');

  const categories = [
    { id: 'todos', name: 'Todos os Produtos' },
    { id: 'camisetas', name: 'Camisetas' },
    { id: 'toalhas', name: 'Toalhas' },
    { id: 'necessaires', name: 'Necessaires' },
    { id: 'bolsas', name: 'Bolsas' }
  ];

  const products: Product[] = [
    {
      id: '1',
      name: 'Camiseta Bordada Floral',
      price: 89.90,
      originalPrice: 119.90,
      category: 'camisetas',
      rating: 4.8,
      reviews: 23,
      image: '/placeholder-product.jpg',
      description: 'Camiseta 100% algodão com bordado floral delicado'
    },
    {
      id: '2',
      name: 'Toalha de Banho Personalizada',
      price: 65.90,
      category: 'toalhas',
      rating: 4.9,
      reviews: 15,
      image: '/placeholder-product.jpg',
      description: 'Toalha felpuda com bordado personalizado'
    },
    {
      id: '3',
      name: 'Necessaire Bordada',
      price: 45.90,
      category: 'necessaires',
      rating: 4.7,
      reviews: 31,
      image: '/placeholder-product.jpg',
      description: 'Necessaire em tecido resistente com bordado exclusivo'
    },
    {
      id: '4',
      name: 'Bolsa Tote Personalizada',
      price: 75.90,
      category: 'bolsas',
      rating: 4.6,
      reviews: 12,
      image: '/placeholder-product.jpg',
      description: 'Bolsa ecológica com bordado personalizado'
    },
    {
      id: '5',
      name: 'Camiseta DTF Exclusiva',
      price: 69.90,
      category: 'camisetas',
      rating: 4.8,
      reviews: 19,
      image: '/placeholder-product.jpg',
      description: 'Camiseta com estampa DTF de alta qualidade'
    },
    {
      id: '6',
      name: 'Kit Toalhas Família',
      price: 189.90,
      originalPrice: 230.90,
      category: 'toalhas',
      rating: 4.9,
      reviews: 8,
      image: '/placeholder-product.jpg',
      description: 'Kit com 4 toalhas bordadas personalizadas'
    }
  ];

  const filteredProducts = selectedCategory === 'todos' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < Math.floor(rating) 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-gray-50" id="produtos">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Nossos Produtos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra nossa coleção de produtos bordados únicos, 
            feitos especialmente para você
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={
                selectedCategory === category.id
                  ? "bg-pink-dark hover:bg-pink-dark/90"
                  : "border-pink-medium text-pink-dark hover:bg-pink-light"
              }
            >
              {category.name}
            </Button>
          ))}
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <Card key={product.id} className="group hover:shadow-lg transition-shadow duration-300 border-pink-light">
              <CardContent className="p-0">
                {/* Product image */}
                <div className="relative overflow-hidden rounded-t-lg bg-pink-light h-64 flex items-center justify-center">
                  <div className="text-pink-dark text-center">
                    <div className="text-4xl mb-2">📸</div>
                    <p className="text-sm">Imagem do produto</p>
                  </div>
                  
                  {product.originalPrice && (
                    <Badge className="absolute top-3 left-3 bg-pink-dark text-white">
                      Promoção
                    </Badge>
                  )}
                </div>

                {/* Product info */}
                <div className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.description}
                  </p>

                  {/* Rating */}
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {renderStars(product.rating)}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.reviews} avaliações)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-xl font-bold text-pink-dark">
                      R$ {product.price.toFixed(2)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-gray-500 line-through">
                        R$ {product.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Add to cart button */}
                  <Button
                    className="w-full bg-pink-dark hover:bg-pink-dark/90 text-white"
                    onClick={() => onAddToCart(product)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Adicionar ao Carrinho
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;
