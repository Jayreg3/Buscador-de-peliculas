import React, { Component } from "react";
import Movie from "./Movie";
import PropTypes from "prop-types";

class MoviesList extends Component {
  static propTypes = {
    peliculas: PropTypes.array
  };

  render() {
    const { peliculas } = this.props;
    return (
      <div className="MoviesList">
        {peliculas.map(pelicula => {
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
