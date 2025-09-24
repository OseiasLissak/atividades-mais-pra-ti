import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Home from './pages/Home';
import Search from './pages/Search';
import Movie from './pages/Movie';
import Favorites from './pages/Favorites'; 

import './index.css';

// Importe o Provedor de Contexto de Favoritos
import { FavoritesProvider } from './pages/components/FavoritesContext'; 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <FavoritesProvider>
        <Routes>
          <Route element={<App/>}>
            <Route path='/' element={<Home/>}/>
            <Route path='movie/:id' element={<Movie/>}/>
            <Route path='search' element={<Search/>}/>
            <Route path='favorites' element={<Favorites/>}/>
          </Route>
        </Routes>
      </FavoritesProvider>
    </BrowserRouter>
  </StrictMode>,
);
