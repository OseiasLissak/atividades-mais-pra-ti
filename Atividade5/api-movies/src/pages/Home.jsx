import { useState, useEffect } from "react";
import MovieCard from "./components/MovieCard";

import './MoviesGrid.css';

const apiKey = '1471d6461bf805c531398aafa9089a95';
const url = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=pt-BR`;

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error('Erro ao carregar os filmes. Verifique a requisição');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [url]);

  if (loading) {
    return <div>Carregando filmes...</div>;
  }

  if (error) {
    return <div>Ocorreu um erro: {error}</div>;
  }

  return (
    <div className="home-container">
      <h2 className="title">Filmes Mais Bem Avaliados</h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {movies.length > 0 && 
          movies.map((movie)=> <MovieCard key={movie.id} movie={movie} /> )}
      </div>
    </div>
  );
};

export default Home;