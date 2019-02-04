import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
      <h1>Movies</h1>
        {movies.map((movie, index) => (
          <div key={index}>
            <h3>{movie.title}</h3>
            <p>({movie.time} minutes)</p>
            <p>Genres:</p>
            <p>
              {movie.genres.map((genre, index) => (
                <li key={index}>{genre}</li>
              ))}
            </p>
            </div>
        ))}
    </div>
  );
};

export default Movies;
