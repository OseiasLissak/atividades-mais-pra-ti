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
    // Inicializa o estado com o valor do localStorage ou 0
    const savedCount = localStorage.getItem('cartCount');
    return savedCount ? parseInt(savedCount, 10) : 0;
  });

  useEffect(() => {
    // Salva o contador no localStorage sempre que ele muda
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
      <main className="product-grid-wrapper">
        <div className="product-grid">
          {loading
            ? Array.from({ length: 6 }).map((_, index) => (
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
      </main>
    </ThemeProvider>
  );
}

export default App;