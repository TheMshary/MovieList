import React, { useState } from "react";

// Stores
import movieStore from "../stores/movieStore";

const AddMovie = () => {
  const [movieName, setMovieName] = useState("");
  const changeHandler = (event) => setMovieName(event.target.value);
  const addMovie = (event) => {
    event.preventDefault();
    movieStore.addMovie(movieName);
    setMovieName("");
  };
  return (
    <form onSubmit={addMovie}>
      <div className="input-group my-3">
        <input
          className="form-control"
          type="text"
          onChange={changeHandler}
          value={movieName}
          placeholder="New Movie..."
        />
        <div class="input-group-append">
          <span
            class="input-group-text"
            onClick={addMovie}
            style={{ backgroundColor: "#21b6a8" }}
          >
            +
          </span>
        </div>
      </div>
    </form>
  );
};

export default AddMovie;
