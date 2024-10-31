import React, { useEffect, useState } from 'react';

const ApiResults = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null); 

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
    <div className="container">
        <h1>Películas Populares</h1>
        {error && <p>Error: {error}</p>}
        <div className="flex-container"> {/* Cambié el nombre a 'flex-container' */}
            {movies.length > 0 ? (
                movies.map((movie) => (
                    <div className="card" key={movie.id}>
                        <img
                            src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                            alt={movie.title}
                        />
                        <h3>{movie.title}</h3>
                        <p>{movie.overview}</p>
                    </div>
                ))
            ) : (
                <p>No hay películas disponibles.</p>
            )}
        </div>
    </div>
  );



};

export default ApiResults;