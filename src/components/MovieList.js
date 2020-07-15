import React, { useState } from "react";
import { observer } from "mobx-react";

// Components
import Movie from "./Movie";

// Stores
import movieStore from "../stores/movieStore";

const MovieList = ({ watched }) => {
  const [query, setQuery] = useState("");

  const filteredMovies = movieStore.movies.filter(
    (movie) =>
      movie.watched === watched &&
      movie.name.toLowerCase().includes(query.toLowerCase())
  );

  const movieList =
    filteredMovies.length > 0
      ? filteredMovies.map((movie) => <Movie movie={movie} />)
      : "No movies found...";

  return (
    <>
      <h1>
        {watched ? "Watched" : "Watchlist"}
        <span className="badge badge-pill badge-light">
          {filteredMovies.length}
        </span>
      </h1>
      <div className="input-group my-3">
        <input
          className="form-control"
          placeholder="Search Movies..."
          onChange={(event) => setQuery(event.target.value)}
          value={query}
        />
      </div>
      <ul className="list-group">{movieList}</ul>
    </>
  );
};

export default observer(MovieList);
