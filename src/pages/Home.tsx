// src/pages/Home.tsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileModal from '../components/ProfileModal';

interface Store {
  id: number;
  name: string;
  image: string;
}

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  storeId: number;
}

const Home: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<(Store | Product)[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isProfileModalOpen, setIsProfileModalOpen] = useState(false);

  const popularStores: Store[] = [
    { id: 1, name: "Electronic Store", image: "https://images.unsplash.com/photo-1562447208-3d5f81e66179?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Vegetable Shop", image: "https://images.unsplash.com/photo-1601601376204-64cfaeab4aa9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Fruit Shop", image: "https://images.unsplash.com/photo-1602595366984-709ba7028122?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Juice Shop", image: "https://images.unsplash.com/photo-1588421024623-940056140e58?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Supermarket", image: "https://images.unsplash.com/photo-1606824722920-4c652a70f348?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Pet Paws", image: "https://images.unsplash.com/photo-1626204451832-91eb35617cc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const allProducts: Product[] = [
    { id: 1, name: "Smartphone", price: 599.99, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D", storeId: 1 },
    { id: 2, name: "Laptop", price: 999.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww", storeId: 1 },
    { id: 3, name: "Carrots", price: 1.99, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D", storeId: 2 },
    { id: 4, name: "Apples", price: 2.99, image: "https://images.unsplash.com/photo-1569870499705-504209102861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGVzfGVufDB8fDB8fHww", storeId: 3 },
    { id: 5, name: "Orange Juice", price: 3.99, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D", storeId: 4 },
  ];

  const featuredCategories = [
    { id: 1, name: "Fruits", image: "https://images.unsplash.com/photo-1602595366984-709ba7028122?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Vegetables", image: "https://images.unsplash.com/photo-1601601376204-64cfaeab4aa9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Electronics", image: "https://images.unsplash.com/photo-1562447208-3d5f81e66179?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Beverages", image: "https://images.unsplash.com/photo-1588421024623-940056140e58?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "Pet Supplies", image: "https://images.unsplash.com/photo-1626204451832-91eb35617cc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const moreWaysToShop = [
    { id: 1, name: "Alcohol", image: "https://images.unsplash.com/photo-1663738797534-d9c327516967?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Pet Supplies", image: "https://images.unsplash.com/photo-1626204451832-91eb35617cc6?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Beauty & Personal Care", image: "https://images.unsplash.com/photo-1526045478516-99145907023c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  const handleStoreClick = (storeId: number) => {
    navigate(`/products/${storeId}`);
  };

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = [
      ...popularStores.filter(store => 
        store.name.toLowerCase().includes(searchTerm.toLowerCase())
      ),
      ...allProducts.filter(product => 
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
    ];
    setSearchResults(results);
    setShowResults(true);
  };

  return (
    <div className="px-40 flex flex-1 justify-center py-5">
      <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
        {/* Header with search bar and profile button */}
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-black text-3xl font-bold leading-tight tracking-[-0.015em]">Grocery Delivery</h1>
          <div className="flex-1 ml-8 flex items-center">
            <form onSubmit={handleSearch} className="flex-1 mr-4">
              <div className="relative">
              <input
                  type="text"
                  placeholder="Search for stores or products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <button
                  type="submit"
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-blue-500 text-white px-4 py-1 rounded-full hover:bg-blue-600 transition duration-300"
                >
                  Search
                </button>
              </div>
            </form>
            <button
              onClick={() => setIsProfileModalOpen(true)}
              className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition duration-300"
            >
              Profile
            </button>
          </div>
        </div>

        {/* Search Results */}
        {showResults && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Search Results</h2>
            {searchResults.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {searchResults.map((item) => (
                  <div key={item.id} className="border rounded-lg p-4 flex flex-col items-center">
                    <img src={item.image} alt={item.name} className="w-32 h-32 object-cover rounded-full mb-2" />
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    {'price' in item && <p className="text-gray-600">${item.price.toFixed(2)}</p>}
                    <button
                      onClick={() => 'storeId' in item ? handleStoreClick(item.storeId) : handleStoreClick(item.id)}
                      className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                      {'price' in item ? 'View Product' : 'View Store'}
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">Nothing found</p>
            )}
          </div>
        )}

        <h1 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Popular stores</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {popularStores.map((store) => (
            <div key={store.id} className="flex flex-col gap-3 text-center" onClick={() => handleStoreClick(store.id)}>
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full cursor-pointer"
                  style={{ backgroundImage: `url("${store.image}")` }}
                ></div>
              </div>
              <p className="text-black text-base font-medium leading-normal">{store.name}</p>
            </div>
          ))}
        </div>

        <h1 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 text-left pb-3 pt-5">Featured categories</h1>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {featuredCategories.map((category) => (
            <div key={category.id} className="flex flex-col gap-3 text-center">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                  style={{ backgroundImage: `url("${category.image}")` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <h2 className="text-black text-[22px] font-bold leading-tight tracking-[-0.015em] px-4 pb-3 pt-5">More ways to shop</h2>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(158px,1fr))] gap-3 p-4">
          {moreWaysToShop.map((item) => (
            <div key={item.id} className="flex flex-col gap-3 text-center pb-3">
              <div className="px-4">
                <div
                  className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-full"
                  style={{ backgroundImage: `url("${item.image}")` }}
                ></div>
              </div>
              <p className="text-black text-base font-medium leading-normal">{item.name}</p>
            </div>
          ))}
        </div>

        <p className="text-[#6B6B6B] text-sm font-normal leading-normal pb-3 pt-1 px-4 text-center underline">
          Need help? Contact customer service at 1-888-743-8100
        </p>
      </div>

      <ProfileModal isOpen={isProfileModalOpen} onClose={() => setIsProfileModalOpen(false)} />
    </div>
  );
};

export default Home;