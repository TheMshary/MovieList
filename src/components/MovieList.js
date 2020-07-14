import React from "react";
import { observer } from "mobx-react";

// Components
import Movie from "./Movie";

// Stores
import movieStore from "../stores/movieStore";

const MovieList = ({ watched }) => {
  const movieList = movieStore.movies
    .filter((movie) => movie.watched === watched)
    .map((movie) => <Movie movie={movie} />);
  return (
    <>
      <h1>Watchlist</h1>
      <ul className="list-group">{movieList}</ul>
    </>
  );
};

export default observer(MovieList);
