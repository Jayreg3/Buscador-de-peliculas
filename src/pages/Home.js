import React, { Component } from "react";
import SearchForm from "../components/SearchForm";
import Title from "../components/Title";
import MoviesList from "../components/MoviesList";
import ContadorContainer from "../containers/Contador";

class Home extends Component {
  state = {
    searchResults: [],
    usedSearch: false
  };

  _handleSubmit = peliculas => {
    this.setState({ searchResults: peliculas, usedSearch: true });
  };

  _renderResults = () => {
    return this.state.searchResults.length > 0 ? (
      <MoviesList peliculas={this.state.searchResults} />
    ) : (
      <p>Ningun resultado</p>
    );
  };

  render() {
    return (
      <div>
        <Title>
          Buscador de Peliculas! <ContadorContainer />
        </Title>
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

export default Home;
