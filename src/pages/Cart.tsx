import React from 'react';
import { Link } from 'react-router-dom';

// Mock product data (in a real app, this would come from an API or database)
const mockProducts = [
  { id: 1, name: 'Organic Apples', price: 2.99, image: 'https://source.unsplash.com/featured/?apple' },
  { id: 2, name: 'Fresh Milk', price: 3.49, image: 'https://source.unsplash.com/featured/?milk' },
  { id: 3, name: 'Whole Grain Bread', price: 4.99, image: 'https://source.unsplash.com/featured/?bread' },
  { id: 4, name: 'Free Range Eggs', price: 5.99, image: 'https://source.unsplash.com/featured/?eggs' },
  { id: 5, name: 'Organic Spinach', price: 3.99, image: 'https://source.unsplash.com/featured/?spinach' },
  { id: 6, name: 'Grass-fed Beef', price: 12.99, image: 'https://source.unsplash.com/featured/?beef' },
];

interface CartProps {
  cart: { id: number; quantity: number }[];
  setCart: React.Dispatch<React.SetStateAction<{ id: number; quantity: number }[]>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const updateQuantity = (id: number, newQuantity: number) => {
    if (newQuantity === 0) {
      setCart(cart.filter(item => item.id !== id));
    } else {
      setCart(cart.map(item => item.id === id ? { ...item, quantity: newQuantity } : item));
    }
  };

  const totalPrice = cart.reduce((total, item) => {
    const product = mockProducts.find(p => p.id === item.id);
    return total + (product ? product.price * item.quantity : 0);
  }, 0);

  if (cart.length === 0) {
    return (
      <div className="text-center">
        <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
        <p>Your shopping cart is empty.</p>
        <Link to="/products" className="text-green-600 hover:underline">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cart.map(item => {
          const product = mockProducts.find(p => p.id === item.id);
          if (!product) return null;
          return (
            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
              <img src={product.image} alt={product.name} className="w-16 h-16 object-cover rounded" />
              <div className="flex-grow">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">${product.price.toFixed(2)} each</p>
              </div>
              <div className="flex items-center space-x-2">
                <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="px-2 py-1 bg-gray-200 rounded">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="px-2 py-1 bg-gray-200 rounded">+</button>
              </div>
              <p className="font-semibold">${(product.price * item.quantity).toFixed(2)}</p>
            </div>
          );
        })}
      </div>
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${totalPrice.toFixed(2)}</p>
        <Link to="/checkout" className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700">
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;
