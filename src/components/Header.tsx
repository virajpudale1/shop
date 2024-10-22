import React from 'react';
import { Link } from 'react-router-dom';

interface HeaderProps {
  cartItemCount: number;
}

const Header: React.FC<HeaderProps> = ({ cartItemCount }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold text-green-600">GrocerHub</Link>
        <nav className="flex items-center space-x-4">
          <Link to="/" className="text-gray-600 hover:text-green-600">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-green-600">Products</Link>
          <Link to="/cart" className="text-gray-600 hover:text-green-600 flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            Cart ({cartItemCount})
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;