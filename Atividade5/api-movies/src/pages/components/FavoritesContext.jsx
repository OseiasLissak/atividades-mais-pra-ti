import { createContext, useState, useContext, useEffect } from 'react';

// 1. Crie o contexto
const FavoritesContext = createContext();

// 2. Crie um Provedor para o contexto
export const FavoritesProvider = ({ children }) => {
  // Inicializa o estado com dados do localStorage, se existirem
  const [favorites, setFavorites] = useState(() => {
    const savedFavorites = localStorage.getItem('movie-favorites');
    return savedFavorites ? JSON.parse(savedFavorites) : [];
  });

  // Salva os favoritos no localStorage sempre que o estado 'favorites' muda
  useEffect(() => {
    localStorage.setItem('movie-favorites', JSON.stringify(favorites));
  }, [favorites]);

  const addFavorite = (movie) => {
    // Verifique se o filme já existe antes de adicionar para evitar duplicatas
    const isFavorite = favorites.some((favMovie) => favMovie.id === movie.id);
    if (!isFavorite) {
      setFavorites((prevFavorites) => [...prevFavorites, movie]);
    }
  };

  const removeFavorite = (movieId) => {
    setFavorites((prevFavorites) => prevFavorites.filter(movie => movie.id !== movieId));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};


export const useFavorites = () => useContext(FavoritesContext);