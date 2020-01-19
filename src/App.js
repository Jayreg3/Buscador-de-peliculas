import React, { Component } from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

class App extends Component {
  // _renderResults = () => {
  //   const { searchResults } = this.state;
  //   return searchResults.map(movie => {
  //     return <p key={movie.imdbID}>{movie.Title}</p>;
  //   });
  // };
  render() {
    const url = new URL(document.location);
    const page = url.searchParams.has("id") ? (
      <Detail id={url.searchParams.get("id")} />
    ) : (
      <Home />
    );

    return <div className="App">{page}</div>;
  }
}

export default App;
