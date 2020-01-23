import React, { Component } from "react";

const API_KEY = "81d045cb";

class SearchForm extends Component {
  // state = {
  //   inputMovie: ""
  // };
  //
  // inputMovieChangeHandler = evento => {
  //   this.setState({ inputMovie: evento.target.value });
  // };

  submitMovieHandler = evento => {
    evento.preventDefault();
    // alert(this.state.inputMovie);
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${this.props.terminoBusqueda}`
    )
      .then(res => res.json())
      .then(results => {
        const { Search = [], totalResults = "0" } = results;
        // const searchResults = Search || []; hace que el var tiene el valor de Search o de un array vacio si Search es undefined / el solucion a la encima funciona tambien
        // this.props.onResults(searchResults);
        this.props.onResults(Search);
        console.log(totalResults);
      });
  };

  terminoCambiadoHandler = evento => {
    console.log("[cambiadoHandler]..." + evento.target.value);
    this.props.cambiado(evento.target.value);
  };

  render() {
    return (
      <form onSubmit={this.submitMovieHandler}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this.terminoCambiadoHandler}
              value={this.props.terminoBusqueda}
              className="input"
              type="text"
              placeholder="Busca una pelicula"
            />
          </div>
          <div className="control">
            <button className="button is-info">Busca</button>
          </div>
        </div>
      </form>
    );
  }
}

export default SearchForm;
