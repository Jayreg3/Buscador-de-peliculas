import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";
import MoviesList from "./components/MoviesList";

class App extends Component {
  state = {
    searchResults: []
  };
  _handleSubmit = peliculas => {
    this.setState({ searchResults: peliculas });
  };
  // _renderResults = () => {
  //   const { searchResults } = this.state;
  //   return searchResults.map(movie => {
  //     return <p key={movie.imdbID}>{movie.Title}</p>;
  //   });
  // };
  render() {
    return (
      <div className="App">
        <p>Busca peliculas</p>
        <Title>Busca</Title>
        <div className="SearchForm-wrapper">
          <SearchForm onResults={this._handleSubmit} />
        </div>
        {this.state.searchResults.length > 0 ? (
          <MoviesList peliculas={this.state.searchResults} />
        ) : (
          <p>Ningun</p>
        )}
      </div>
    );
  }
}

export default App;
