import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import MovieCard from "./components/MovieCard";

const apiKey = '1471d6461bf805c531398aafa9089a95';
const urlSearchQuery = 'https://api.themoviedb.org/3/search/movie';

import "./MoviesGrid.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const query = searchParams.get("q");

  const getSearchMovies = async (url) => {
    setLoading(true);
    setError(null);
    setMovies([]);

    try {
      const res = await fetch(url);
      
      // Verifica se a resposta foi bem-sucedida (status 200-299)
      if (!res.ok) {
        throw new Error(`Erro na busca: ${res.statusText} (${res.status})`);
      }
      
      const data = await res.json();
      setMovies(data.results);

    } catch (err) {
      // Captura erros de rede ou outros erros lançados
      console.error("Erro ao buscar filmes:", err);
      setError("Não foi possível buscar os filmes. Verifique sua conexão ou tente novamente mais tarde.");
      
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const searchWithQueryURL = `${urlSearchQuery}?api_key=${apiKey}&query=${query}`;
    getSearchMovies(searchWithQueryURL);
  }, [query]);

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className="query-text">{query}</span>
      </h2>
      <div className="movies-container">
        {loading && <p className="loading-message">Carregando...</p>}
        {error && <p className="error-message">{error}</p>}
        {!loading && movies.length === 0 && !error && (
            <p>Nenhum resultado encontrado para "{query}".</p>
        )}
        {movies.length > 0 &&
          movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
      </div>
    </div>
  );
};

export default Search;