import React, { useState } from "react";

// Styles
import { AddMoviePlusButton } from "../styles";

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
        <div className="input-group-append">
          <AddMoviePlusButton className="input-group-text" onClick={addMovie}>
            +
          </AddMoviePlusButton>
        </div>
      </div>
    </form>
  );
};

export default AddMovie;
