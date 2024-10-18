import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Menu, X } from 'lucide-react';
import LoginSignup from './LoginSignup';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">GrocerHub</Link>
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-green-600">Products</Link>
          <Link to="/seller" className="text-gray-600 hover:text-green-600">Sell</Link>
        </nav>
        <div className="flex items-center space-x-4">
          <Link to="/cart" className="text-gray-600 hover:text-green-600 relative">
            <ShoppingCart size={24} />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                {cartItemCount}
              </span>
            )}
          </Link>
          <button 
            onClick={() => setIsLoginOpen(true)} 
            className="text-gray-600 hover:text-green-600"
          >
            <User size={24} />
          </button>
          <button
            className="md:hidden text-gray-600 hover:text-green-600"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-white py-2">
          <div className="container mx-auto px-4 flex flex-col space-y-2">
            <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
            <Link to="/products" className="text-gray-600 hover:text-green-600">Products</Link>
            <Link to="/seller" className="text-gray-600 hover:text-green-600">Sell</Link>
          </div>
        </div>
      )}
      {isLoginOpen && <LoginSignup onClose={() => setIsLoginOpen(false)} />}
    </header>
  );
};

export default Header;