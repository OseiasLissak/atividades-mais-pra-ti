import { Link } from 'react-router-dom';

const MovieCard = ({ movie, showLink = true }) => {
    return (
        <div>
            <div className="movie-image-container">
                <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={movie.title} />
            </div>
            <h3>{movie.title}</h3>
            <p>Ano: {movie.release_date.substring(0, 4)}</p>

            { showLink && <Link to={`/movie/${movie.id}`}>+ Detalhes</Link>}

        </div>
    );
};

export default MovieCard;