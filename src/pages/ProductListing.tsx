import React from 'react';
import { CartItem } from '../types';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  unit: string;
}

interface ProductListingProps {
  addToCart: (product: CartItem) => void;
}

const mockProducts: Product[] = [
  { 
    id: 1, 
    name: 'Organic Strawberries', 
    price: 4.99, 
    image: 'https://images.unsplash.com/photo-1518635017498-87f514b751ba?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    unit: '1 lb' 
  },
  { 
    id: 2, 
    name: 'Organic Blueberries', 
    price: 5.99, 
    image: 'https://images.unsplash.com/photo-1624244245044-3276904951c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    unit: '1 lb' 
  },
  { 
    id: 3, 
    name: 'Organic Raspberries', 
    price: 6.99, 
    image: 'https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?q=80&w=2076&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    unit: '1 lb' 
  },
  { 
    id: 4, 
    name: 'Organic Blackberries', 
    price: 7.99, 
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 
    unit: '1 lb' 
  },
];

const ProductListing: React.FC<ProductListingProps> = ({ addToCart }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h3 className="font-bold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">${product.price.toFixed(2)} / {product.unit}</p>
            <button 
              onClick={() => addToCart({ ...product, quantity: 1 })}
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductListing;