
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      id: 1,
      name: 'Maria Silva',
      rating: 5,
      comment: 'Adorei minha camiseta bordada! A qualidade é excepcional e o atendimento foi perfeito. Super recomendo!',
      product: 'Camiseta Bordada Floral',
      date: '15/11/2024'
    },
    {
      id: 2,
      name: 'Ana Carolina',
      rating: 5,
      comment: 'As toalhas ficaram lindas! O bordado personalizado superou minhas expectativas. Muito obrigada!',
      product: 'Kit Toalhas Família',
      date: '10/11/2024'
    },
    {
      id: 3,
      name: 'Fernanda Costa',
      rating: 4,
      comment: 'Necessaire perfeita para presente! Chegou bem embalada e no prazo. Já fiz novo pedido.',
      product: 'Necessaire Bordada',
      date: '08/11/2024'
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating 
            ? 'text-yellow-400 fill-current' 
            : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Veja os depoimentos de quem já escolheu nossos produtos bordados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="border-pink-light hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <blockquote className="text-gray-700 mb-4 italic">
                  "{review.comment}"
                </blockquote>
                
                <div className="border-t border-pink-light pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{review.name}</p>
                      <p className="text-sm text-gray-600">{review.product}</p>
                    </div>
                    <span className="text-xs text-gray-500">{review.date}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall rating summary */}
        <div className="mt-12 text-center bg-pink-light rounded-2xl p-8">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="flex">
              {renderStars(5)}
            </div>
            <span className="text-2xl font-bold text-pink-dark">4.9</span>
          </div>
          <p className="text-gray-700 font-medium">
            Baseado em mais de 150 avaliações de clientes satisfeitos
          </p>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
