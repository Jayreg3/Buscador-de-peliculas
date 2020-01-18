import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import MoviesList from "./components/MoviesList";

class App extends Component {
  state = {
    searchResults: [],
    usedSearch: false
  };
  _handleSubmit = peliculas => {
    this.setState({ searchResults: peliculas, usedSearch: true });
  };
  // _renderResults = () => {
  //   const { searchResults } = this.state;
  //   return searchResults.map(movie => {
  //     return <p key={movie.imdbID}>{movie.Title}</p>;
  //   });
  // };
  _renderResults = () => {
    return this.state.searchResults.length > 0 ? (
      <MoviesList peliculas={this.state.searchResults} />
    ) : (
      <p>Ningun resultado</p>
    );
  };
  render() {
    return (
      <div className="App">
        <Title>Buscador de Pelicuas!</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleSubmit} />
        </div>
        {this.state.usedSearch ? (
          this._renderResults()
        ) : (
          <p>Utiliza la barra de búsqueda de arriba para buscar peliculas</p>
        )}
      </div>
    );
  }
}

export default App;
