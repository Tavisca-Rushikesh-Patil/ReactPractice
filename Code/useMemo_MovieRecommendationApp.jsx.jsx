// Let’s make it interesting—a Movie Recommendation System that filters and sorts a huge list of 
// movies based on genres and ratings. Without useMemo, filtering would recalculate on every 
// render—even if inputs didn’t change. Let’s fix that.
import React, { useState, useMemo } from 'react';

const MovieRecommendations = () => {
  const [genre, setGenre] = useState('Action');
  const [rating, setRating] = useState(7);

  const movies = [
    { id: 1, title: 'John Wick', genre: 'Action', rating: 8.5 },
    { id: 2, title: 'Avengers', genre: 'Action', rating: 8.0 },
    { id: 3, title: 'Interstellar', genre: 'Sci-Fi', rating: 9.0 },
    { id: 4, title: 'The Notebook', genre: 'Romance', rating: 7.9 },
    { id: 5, title: 'Inception', genre: 'Sci-Fi', rating: 8.8 },
  ];

  // Memoize filtered movies
  const filteredMovies = useMemo(() => {
    console.log('Filtering Movies...'); // Logs only when dependencies change
    return movies
      .filter(movie => movie.genre === genre && movie.rating >= rating)
      .sort((a, b) => b.rating - a.rating);
  }, [genre, rating]);

  return (
    <div>
      <h1>Movie Recommendations</h1>
      <label>
        Genre:
        <select value={genre} onChange={(e) => setGenre(e.target.value)}>
          <option value="Action">Action</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Romance">Romance</option>
        </select>
      </label>
      <label>
        Minimum Rating:
        <input
          type="number"
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </label>
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.id}>{movie.title} - {movie.rating}</li>
        ))}
      </ul>
    </div>
  );
};

export default MovieRecommendations;