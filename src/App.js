import React from "react";
import "./App.css";
import "bulma/css/bulma.css";
import Title from "./components/Title";
import SearchForm from "./components/SearchForm";

function App() {
  return (
    <div className="App">
      <p>Busca peliculas</p>
      <Title>Busca</Title>
      <div className="SearchForm-wrapper">
        <SearchForm />
      </div>
    </div>
  );
}

export default App;
