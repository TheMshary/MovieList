import { decorate, observable } from "mobx";

// Data
import movies from "../movies";

class MovieStore {
  movies = movies;
  idCounter = 5;

  toggleWatch = (movie) => {
    movie.watched = !movie.watched;
  };

  deleteMovie = (movieID) => {
    this.movies = this.movies.filter((movie) => movie.id !== movieID);
  };

  addMovie = (movieName) => {
    this.movies.push({
      id: this.idCounter + 1,
      name: movieName,
      watched: false,
    });
    this.idCounter++;
  };
}

decorate(MovieStore, {
  movies: observable,
});

const movieStore = new MovieStore();
export default movieStore;
