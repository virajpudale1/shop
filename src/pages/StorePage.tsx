import React from 'react';
import { useParams } from 'react-router-dom';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

interface StorePageProps {
  addToCart: (product: Product) => void;
}

const StorePage: React.FC<StorePageProps> = ({ addToCart }) => {
  const { storeId } = useParams<{ storeId: string }>();

  // Function to get products based on store type
  const getProductsForStore = (storeId: string): Product[] => {
    switch (storeId) {
      case '1': // Electronic Store
        return [
          { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lc3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 2, name: "Smartphone", price: 599.99, image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c21hcnRwaG9uZXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 3, name: "Laptop", price: 999.99, image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww" },
          { id: 4, name: "Smart Watch", price: 199.99, image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNtYXJ0JTIwd2F0Y2h8ZW58MHx8MHx8fDA%3D" },
        ];
      case '2': // Vegetable Shop
        return [
          { id: 5, name: "Fresh Tomatoes", price: 2.99, image: "https://images.unsplash.com/photo-1546094096-0df4bcaaa337?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8dG9tYXRvZXN8ZW58MHx8MHx8fDA%3D" },
          { id: 6, name: "Organic Carrots", price: 1.99, image: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2Fycm90c3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 7, name: "Green Lettuce", price: 1.49, image: "https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGV0dHVjZXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 8, name: "Bell Peppers", price: 3.49, image: "https://images.unsplash.com/photo-1592578630135-917fb3133d65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YmVsbCUyMHBlcHBlcnN8ZW58MHx8MHx8fDA%3D" },
        ];
      case '3': // Fruit Shop
        return [
          { id: 9, name: "Fresh Apples", price: 3.99, image: "https://images.unsplash.com/photo-1569870499705-504209102861?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXBwbGVzfGVufDB8fDB8fHww" },
          { id: 10, name: "Bananas", price: 1.99, image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YmFuYW5hc3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 11, name: "Oranges", price: 4.49, image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3Jhbmdlc3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 12, name: "Strawberries", price: 3.99, image: "https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c3RyYXdiZXJyaWVzfGVufDB8fDB8fHww" },
        ];
      case '4': // Juice Shop
        return [
          { id: 13, name: "Orange Juice", price: 4.99, image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b3JhbmdlJTIwanVpY2V8ZW58MHx8MHx8fDA%3D" },
          { id: 14, name: "Green Smoothie", price: 5.99, image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Z3JlZW4lMjBzbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 15, name: "Berry Blast", price: 6.49, image: "https://images.unsplash.com/photo-1599076227193-8c2c0f31557e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8YmVycnklMjBzbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 16, name: "Carrot Juice", price: 4.49, image: "https://images.unsplash.com/photo-1620057657837-1905b1e34d90?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2Fycm90JTIwanVpY2V8ZW58MHx8MHx8fDA%3D" },
        ];
      case '5': // Supermarket
        return [
          { id: 17, name: "Milk", price: 2.99, image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fG1pbGt8ZW58MHx8MHx8fDA%3D" },
          { id: 18, name: "Bread", price: 2.49, image: "https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YnJlYWR8ZW58MHx8MHx8fDA%3D" },
          { id: 19, name: "Eggs", price: 3.99, image: "https://images.unsplash.com/photo-1506976785307-8732e854ad03?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZWdnc3xlbnwwfHwwfHx8MA%3D%3D" },
          { id: 20, name: "Cheese", price: 4.99, image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2hlZXNlfGVufDB8fDB8fHww" },
        ];
      case '6': // Pet Paws
        return [
          { id: 21, name: "Dog Food", price: 19.99, image: "https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZG9nJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D" },
          { id: 22, name: "Cat Toy", price: 7.99, image: "https://images.unsplash.com/photo-1587723958656-ee042cc565a1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y2F0JTIwdG95fGVufDB8fDB8fHww" },
          { id: 23, name: "Pet Bed", price: 29.99, image: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGV0JTIwYmVkfGVufDB8fDB8fHww" },
          { id: 24, name: "Fish Tank", price: 49.99, image: "https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmlzaCUyMHRhbmt8ZW58MHx8MHx8fDA%3D" },
        ];
      default:
        return [];
    }
  };

  const products = getProductsForStore(storeId || '');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Products for Store {storeId}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border rounded-lg p-4 shadow-md">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover mb-4 rounded" />
            <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
            <p className="text-gray-600 mb-4">${product.price.toFixed(2)}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StorePage;