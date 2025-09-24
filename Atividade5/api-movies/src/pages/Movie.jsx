import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  BsGraphUp,
  BsWallet2,
  BsHourglassSplit,
  BsFillFileEarmarkTextFill,
  BsStarFill,
} from "react-icons/bs";

import MovieCard from "./components/MovieCard";

import "./Movie.css";

// Importa o hook para usar o contexto de favoritos
import { useFavorites } from "./components/FavoritesContext"; 

const apiKey = "1471d6461bf805c531398aafa9089a95";
const getMovieUrl = "https://api.themoviedb.org/3/movie/";

const Movie = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [credits, setCredits] = useState(null);

  // Usa o contexto para acessar favoritos e as funções
  const { favorites, addFavorite, removeFavorite } = useFavorites();
  const isFavorite = favorites.some((favMovie) => favMovie.id === movie?.id);

  // Busca os detalhes do filme (inclui sinopse e avaliação)
  const getMovieDetails = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setMovie(data);
  };

  // Busca os créditos (elenco e equipe)
  const getMovieCredits = async (url) => {
    const res = await fetch(url);
    const data = await res.json();
    setCredits(data);
  };

  // Função para formatar valores monetários
  const formatCurrency = (number) => {
    return number.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  // Lógica para adicionar/remover o filme dos favoritos
  const handleFavoriteClick = () => {
    if (isFavorite) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  useEffect(() => {
    const movieDetailsUrl = `${getMovieUrl}${id}?api_key=${apiKey}&language=pt-BR`;
    const movieCreditsUrl = `${getMovieUrl}${id}/credits?api_key=${apiKey}&language=pt-BR`;

    getMovieDetails(movieDetailsUrl);
    getMovieCredits(movieCreditsUrl);
  }, [id]);

  const findDirector = (crew) => {
    if (!crew) return "Não informado";
    const director = crew.find((person) => person.job === "Director");
    return director ? director.name : "Não informado";
  };
  
  const findMainCast = (cast) => {
    if (!cast) return [];
    return cast.slice(0, 5).map((actor) => actor.name);
  };

  return (
    <div className="movie-page">
      {movie && (
        <>
          <MovieCard movie={movie} showLink={false} />
          <button 
            className={`favorite-button ${isFavorite ? 'active' : ''}`}
            onClick={handleFavoriteClick}
          >
            {isFavorite ? 'Remover dos Favoritos' : 'Adicionar aos Favoritos'}
          </button>
          <p className="tagline">{movie.tagline}</p>
          
          <div className="info description">
            <h3>
              <BsFillFileEarmarkTextFill /> Sinopse:
            </h3>
            <p>{movie.overview}</p>
          </div>
          
          <div className="info-grid">
            <div className="info">
              <h3>
                <BsWallet2 /> Orçamento:
              </h3>
              <p>{formatCurrency(movie.budget)}</p>
            </div>
            <div className="info">
              <h3>
                <BsGraphUp /> Receita:
              </h3>
              <p>{formatCurrency(movie.revenue)}</p>
            </div>
            <div className="info">
              <h3>
                <BsHourglassSplit /> Duração:
              </h3>
              <p>{movie.runtime} minutos</p>
            </div>
            <div className="info">
              <h3>
                <BsStarFill /> Avaliação:
              </h3>
              <p>{movie.vote_average.toFixed(1)}</p>
            </div>
          </div>
          
          <div className="info-grid">
            <div className="info">
              <h3>Diretor:</h3>
              <p>{findDirector(credits?.crew)}</p>
            </div>
            <div className="info">
              <h3>Elenco Principal:</h3>
              <p>{findMainCast(credits?.cast).join(", ")}</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Movie;