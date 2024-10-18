import React from 'react';
import { Link } from 'react-router-dom';

const popularStores = [
  { name: 'Store 1', image: 'https://source.unsplash.com/featured/?supermarket' },
  { name: 'Store 2', image: 'https://source.unsplash.com/featured/?grocery' },
  { name: 'Store 3', image: 'https://source.unsplash.com/featured/?market' },
  { name: 'Store 4', image: 'https://source.unsplash.com/featured/?store' },
  { name: 'Store 5', image: 'https://source.unsplash.com/featured/?shop' },
];

const featuredCategories = [
  { name: 'Fruits & Vegetables', image: 'https://source.unsplash.com/featured/?fruits,vegetables' },
  { name: 'Meat', image: 'https://source.unsplash.com/featured/?meat' },
  { name: 'Dairy', image: 'https://source.unsplash.com/featured/?dairy' },
  { name: 'Bakery', image: 'https://source.unsplash.com/featured/?bakery' },
  { name: 'Snacks', image: 'https://source.unsplash.com/featured/?snacks' },
];

const moreWaysToShop = [
  { name: 'Alcohol', image: 'https://source.unsplash.com/featured/?alcohol', grayscale: true },
  { name: 'Pet Supplies', image: 'https://source.unsplash.com/featured/?pet,food' },
  { name: 'Beauty & Personal Care', image: 'https://source.unsplash.com/featured/?beauty,care' },
];

const Home: React.FC = () => {
  return (
    <div className="space-y-12">
      <nav className="flex space-x-4 justify-center">
        <Link to="/" className="text-green-600 font-semibold">Deals</Link>
        <Link to="/" className="text-gray-600 hover:text-green-600">Meals</Link>
        <Link to="/" className="text-gray-600 hover:text-green-600">Prime</Link>
        <Link to="/" className="text-gray-600 hover:text-green-600">Fresh</Link>
        <Link to="/" className="bg-blue-500 text-white px-3 py-1 rounded-full">Reorder</Link>
        <Link to="/" className="text-gray-600 hover:text-green-600">Deli</Link>
      </nav>

      <section>
        <h2 className="text-2xl font-bold mb-6">Popular stores</h2>
        <div className="grid grid-cols-5 gap-4">
          {popularStores.map((store, index) => (
            <div key={index} className="text-center">
              <img src={store.image} alt={store.name} className="w-full h-24 object-cover rounded-full" />
              <p className="mt-2 text-sm">{store.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">Featured categories</h2>
        <div className="grid grid-cols-5 gap-4">
          {featuredCategories.map((category, index) => (
            <div key={index} className="text-center">
              <img src={category.image} alt={category.name} className="w-full h-24 object-cover rounded-full" />
              <p className="mt-2 text-sm">{category.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-6">More ways to shop</h2>
        <div className="grid grid-cols-3 gap-4">
          {moreWaysToShop.map((item, index) => (
            <div key={index} className="text-center">
              <img 
                src={item.image} 
                alt={item.name} 
                className={`w-full h-48 object-cover rounded-lg ${item.grayscale ? 'filter grayscale' : ''}`} 
              />
              <p className="mt-2 text-lg font-semibold">{item.name}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-sm text-gray-500">
        <a href="#" className="hover:underline">Need help? Contact customer service at 1-888-742-8900</a>
      </footer>
    </div>
  );
};

export default Home;