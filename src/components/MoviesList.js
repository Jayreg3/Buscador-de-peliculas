import React, { Component } from "react";
import Movie from "./Movie";

class MoviesList extends Component {
  render() {
    return (
      <div className="MoviesList">
        {this.props.peliculas.map(pelicula => {
          return (
            <div className="MoviesList-item" key={pelicula.imdbID}>
              <Movie
                title={pelicula.Title}
                poster={pelicula.Poster}
                year={pelicula.Year}
              />
            </div>
          );
        })}
      </div>
    );
  }
}

export default MoviesList;
