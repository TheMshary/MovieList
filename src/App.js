import React from "react";

// Components
import MovieList from "./components/MovieList";
import AddMovie from "./components/AddMovie";

function App() {
  return (
    <div className="container">
      <div className="row">
        <AddMovie />
      </div>
      <div className="row">
        <div className="col-6">
          <MovieList watched={false} />
        </div>
        <div className="col-6">
          <MovieList watched={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
