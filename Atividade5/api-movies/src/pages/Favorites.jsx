import React from 'react';
import { useFavorites } from './components/FavoritesContext';
import MovieCard from './components/MovieCard';

import './MoviesGrid.css';
import './Favorites.css';

function Favorites() {
  const { favorites, removeFavorite } = useFavorites();

  return (
    <div className="container">
      <h2 className="title">Meus Filmes Favoritos</h2>
      {favorites.length === 0 ? (
        <p className='paragrafo-sem-filme'>Você ainda não adicionou nenhum filme aos favoritos.</p>
      ) : (
        // Use a mesma classe de contêiner de filmes
        <div className="movies-container">
          {favorites.map((movie) => (
            // A MovieCard e o botão precisam estar dentro de um item de grid
            <div key={movie.id} className="movie-grid-item">
              <MovieCard movie={movie} />
              <button onClick={() => removeFavorite(movie.id)}>Remover</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Favorites;