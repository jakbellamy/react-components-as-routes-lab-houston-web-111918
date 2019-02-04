import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors</h1>
        {actors.map((actor, index) => (
          <div key={index}>
            <h3>{actor.name}</h3>
            <p>Movies:</p>
            <div>
              {actor.movies.map((movie, index) => (
                <li key={index}>{movie}</li>
              ))}
            </div>
            </div>
        ))}
    </div>
  );
};

export default Actors;
