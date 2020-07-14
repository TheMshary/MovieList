import React from "react";

// Stores
import movieStore from "../stores/movieStore";

// Styles
import { ToggleWatchButton, DeleteMovieButton } from "../styles";

const Movie = ({ movie }) => {
  return (
    <li className="list-group-item d-flex justify-content-between">
      <span>{movie.name}</span>
      <div className="d-flex justify-content-between">
        <ToggleWatchButton
          onClick={() => movieStore.toggleWatch(movie)}
          className="mx-1"
        >
          Watch
        </ToggleWatchButton>

        <DeleteMovieButton
          onClick={() => movieStore.deleteMovie(movie.id)}
          className="mx-1"
        >
          Delete
        </DeleteMovieButton>
      </div>
    </li>
  );
};

export default Movie;
