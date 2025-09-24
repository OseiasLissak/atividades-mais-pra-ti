// src/App.jsx
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import SkeletonCard from './components/SkeletonCard/SkeletonCard';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { products } from './data/products';

function App() {
  const [loading, setLoading] = useState(true);
  const [cartCount, setCartCount] = useState(() => {
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    localStorage.setItem('cartCount', cartCount);
  }, [cartCount]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  const handleAddToCart = () => {
    setCartCount((prevCount) => prevCount + 1);
  };

  return (
    <ThemeProvider>
      <Navbar cartCount={cartCount} />
      {/* Container principal para o espaçamento e centralização */}
      <main className="min-h-screen py-10 pt-28 bg-gray-100 dark:bg-zinc-900 transition-colors duration-250">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {loading
              ? Array.from({ length: 8 }).map((_, index) => (
                  <SkeletonCard key={index} />
                ))
              : products.map((product) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    onAddToCart={handleAddToCart}
                  />
                ))}
          </div>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;