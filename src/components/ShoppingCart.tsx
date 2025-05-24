
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { X, Plus, Minus, ShoppingCart as CartIcon } from 'lucide-react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

interface ShoppingCartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemoveItem: (id: string) => void;
}

const ShoppingCart = ({ isOpen, onClose, items, onUpdateQuantity, onRemoveItem }: ShoppingCartProps) => {
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = items.reduce((sum, item) => sum + item.quantity, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black bg-opacity-50 flex justify-end">
      <div className="bg-white w-full max-w-md h-full overflow-y-auto shadow-xl">
        <Card className="h-full rounded-none">
          <CardHeader className="border-b border-pink-light">
            <div className="flex items-center justify-between">
              <CardTitle className="flex items-center gap-2 text-pink-dark">
                <CartIcon className="h-5 w-5" />
                Carrinho ({itemCount} {itemCount === 1 ? 'item' : 'itens'})
              </CardTitle>
              <Button variant="ghost" size="sm" onClick={onClose}>
                <X className="h-5 w-5" />
              </Button>
            </div>
          </CardHeader>

          <CardContent className="flex-1 p-0">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-center p-6">
                <CartIcon className="h-16 w-16 text-gray-300 mb-4" />
                <h3 className="text-lg font-semibold text-gray-700 mb-2">
                  Seu carrinho está vazio
                </h3>
                <p className="text-gray-500 mb-4">
                  Adicione alguns produtos para começar suas compras
                </p>
                <Button onClick={onClose} className="bg-pink-dark hover:bg-pink-dark/90">
                  Continuar Comprando
                </Button>
              </div>
            ) : (
              <>
                {/* Cart items */}
                <div className="p-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 border border-pink-light rounded-lg">
                      <div className="w-16 h-16 bg-pink-light rounded-lg flex items-center justify-center">
                        <span className="text-2xl">📸</span>
                      </div>
                      
                      <div className="flex-1">
                        <h4 className="font-medium text-gray-900">{item.name}</h4>
                        <p className="text-pink-dark font-semibold">
                          R$ {item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))}
                          className="h-8 w-8 p-0"
                        >
                          <Minus className="h-4 w-4" />
                        </Button>
                        
                        <span className="w-8 text-center font-medium">
                          {item.quantity}
                        </span>
                        
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                          className="h-8 w-8 p-0"
                        >
                          <Plus className="h-4 w-4" />
                        </Button>
                      </div>

                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => onRemoveItem(item.id)}
                        className="text-red-500 hover:text-red-700"
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>

                {/* Checkout section */}
                <div className="border-t border-pink-light p-4 space-y-4">
                  <div className="flex justify-between items-center text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-pink-dark">R$ {total.toFixed(2)}</span>
                  </div>

                  {total >= 150 && (
                    <Badge className="w-full justify-center bg-green-500 text-white">
                      🎉 Frete Grátis!
                    </Badge>
                  )}

                  <div className="space-y-2">
                    <Button 
                      className="w-full bg-pink-dark hover:bg-pink-dark/90 text-white"
                      onClick={() => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de finalizar minha compra.', '_blank')}
                    >
                      Finalizar Compra no WhatsApp
                    </Button>
                    <Button variant="outline" className="w-full" onClick={onClose}>
                      Continuar Comprando
                    </Button>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ShoppingCart;
