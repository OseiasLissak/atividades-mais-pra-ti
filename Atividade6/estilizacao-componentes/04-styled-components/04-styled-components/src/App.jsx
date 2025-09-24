// src/App.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Navbar from './components/Navbar/Navbar';
import ProductCard from './components/ProductCard/ProductCard';
import SkeletonCard from './components/SkeletonCard/SkeletonCard';
import { ThemeProvider } from './components/ThemeContext/ThemeContext';
import { products } from './data/products';

const AppStyles = styled.div`
  min-height: 100vh;
  padding: 40px;
  padding-top: 112px;
  transition: background-color 0.25s;
  background-color: ${(props) => props.theme.background};
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  gap: 24px;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 16px;
  padding-right: 16px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
  @media (min-width: 768px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

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
      <AppStyles>
        <Navbar cartCount={cartCount} />
        <GridWrapper>
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
        </GridWrapper>
      </AppStyles>
    </ThemeProvider>
  );
}

export default App;