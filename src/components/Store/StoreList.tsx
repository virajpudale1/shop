import React, { useState } from 'react';

interface Store {
  id: number;
  name: string;
  location: string;
  category: string;
}

const initialStores: Store[] = [
  { id: 1, name: 'Spice Paradise', location: 'Mumbai', category: 'Grocery' },
  { id: 2, name: 'Saree House', location: 'Delhi', category: 'Clothing' },
  { id: 3, name: 'Bollywood DVDs', location: 'Kolkata', category: 'Entertainment' },
  { id: 4, name: 'Chai Wala', location: 'Bengaluru', category: 'Beverages' },
  { id: 5, name: 'Desi Delights', location: 'Chennai', category: 'Restaurant' },
  { id: 6, name: 'Ayurvedic Herbs', location: 'Hyderabad', category: 'Health' },
  { id: 7, name: 'Punjab Textiles', location: 'Amritsar', category: 'Clothing' },
  { id: 8, name: 'Goan Fish Market', location: 'Panaji', category: 'Grocery' },
];

const StoreList: React.FC = () => {
  const [stores, setStores] = useState<Store[]>(initialStores);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredStores = initialStores.filter(store => 
      store.name.toLowerCase().includes(term) ||
      store.location.toLowerCase().includes(term) ||
      store.category.toLowerCase().includes(term)
    );

    setStores(filteredStores);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">Indian Stores</h2>
      <input
        type="text"
        placeholder="Search stores by name, location, or category"
        value={searchTerm}
        onChange={handleSearch}
        className="w-full px-4 py-2 mb-6 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-600"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {stores.map(store => (
          <div key={store.id} className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">{store.name}</h3>
            <p className="text-gray-600 mb-1">Location: {store.location}</p>
            <p className="text-gray-600">Category: {store.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StoreList;