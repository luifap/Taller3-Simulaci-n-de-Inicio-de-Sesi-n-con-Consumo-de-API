import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

const ApiResults = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); 
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=632138b5540f514159900cbc179e4f15`
        );
        if (!response.ok) {
          throw new Error('Error en la respuesta de la API');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error al consumir la API:', error);
        setError(error.message); 
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="api-results-container">
      <h1>Películas Populares</h1>
      {error && <p>Error: {error}</p>} 
      <ul className="movies-list">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <li className="movie-item" key={movie.id}>
              <h3>{movie.title}</h3>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <p>{movie.overview}</p>
            </li>
          ))
        ) : (
          <p>No hay películas disponibles.</p>
        )}
      </ul>
      <button className="home-button" onClick={() => navigate('/home')}>
        Volver al Home
      </button>
    </div>
  );
};

export default ApiResults;