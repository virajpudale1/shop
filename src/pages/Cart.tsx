import React from 'react';
import { Link } from 'react-router-dom';

interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
  unit: string;
}

interface CartProps {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

const Cart: React.FC<CartProps> = ({ cart, setCart }) => {
  const updateQuantity = (id: number, newQuantity: number) => {
    setCart(cart.map(item => 
      item.id === id ? { ...item, quantity: Math.max(0, newQuantity) } : item
    ).filter(item => item.quantity > 0));
  };

  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-[920px] mx-auto text-center py-12">
        <h2 className="text-2xl font-bold mb-4">Your cart</h2>
        <p className="text-lg">The cart is empty</p>
        <Link to="/products" className="text-blue-600 hover:underline mt-4 inline-block">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-[920px] mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your cart</h2>
      <div className="flex gap-6">
        <div className="flex-grow">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center justify-between py-4 border-b">
              <div className="flex items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded mr-4" />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-gray-600">${item.price.toFixed(2)} / {item.unit}</p>
                </div>
              </div>
              <div className="flex items-center">
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">
                  {item.quantity}
                </span>
                <button 
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                  className="bg-gray-200 text-gray-800 px-2 py-1 rounded-r"
                >
                  +
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[360px]">
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="font-bold mb-2">Delivery details</h3>
            <p className="text-gray-600 mb-2">Thu, 8:30 AM - 9:30 AM</p>
            <button className="text-blue-600 mb-4">Change</button>
            
            <h3 className="font-bold mb-2">Promo codes</h3>
            <input
              type="text"
              placeholder="Enter code"
              className="w-full p-2 border rounded mb-4"
            />
            
            <h3 className="font-bold mb-2">Add a gift message</h3>
            <button className="w-full bg-gray-200 text-gray-800 py-2 rounded mb-4">
              Add gift message
            </button>
            
            <h3 className="font-bold mb-2">Your item will be delivered by</h3>
            <div className="flex items-center mb-4">
              <img src="https://placekitten.com/40/40" alt="Delivery Person" className="rounded-full mr-2" />
              <div>
                <p>Thu, 8:30 AM - 9:30 AM</p>
                <p className="text-gray-600">Delivery</p>
              </div>
            </div>
            
            <div className="border-t pt-4">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <Link to="/checkout">
                <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition duration-300">
                  Checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;