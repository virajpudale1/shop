import React, { useState } from 'react';
import { Filter, Star } from 'lucide-react';

// Mock data for products
const mockProducts = [
  { id: 1, name: 'Organic Apples', price: 2.99, rating: 4.5, image: 'https://source.unsplash.com/featured/?apple' },
  { id: 2, name: 'Fresh Milk', price: 3.49, rating: 4.2, image: 'https://source.unsplash.com/featured/?milk' },
  { id: 3, name: 'Whole Grain Bread', price: 4.99, rating: 4.7, image: 'https://source.unsplash.com/featured/?bread' },
  { id: 4, name: 'Free Range Eggs', price: 5.99, rating: 4.8, image: 'https://source.unsplash.com/featured/?eggs' },
  { id: 5, name: 'Organic Spinach', price: 3.99, rating: 4.3, image: 'https://source.unsplash.com/featured/?spinach' },
  { id: 6, name: 'Grass-fed Beef', price: 12.99, rating: 4.6, image: 'https://source.unsplash.com/featured/?beef' },
];

interface ProductListingProps {
  addToCart: (productId: number) => void;
}

const ProductListing: React.FC<ProductListingProps> = ({ addToCart }) => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">Products</h1>
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="flex items-center space-x-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
        >
          <Filter size={20} />
          <span>Filters</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {showFilters && (
          <div className="md:col-span-1 space-y-4">
            {/* ... (filter content remains the same) ... */}
          </div>
        )}

        <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ${showFilters ? 'md:col-span-3' : 'md:col-span-4'}`}>
          {mockProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-green-600 font-bold">${product.price.toFixed(2)}</span>
                  <div className="flex items-center">
                    <Star size={16} className="text-yellow-400 fill-current mr-1" />
                    <span>{product.rating}</span>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart(product.id)}
                  className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition duration-300"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductListing;