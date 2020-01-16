import React, { Component } from "react";

class SearchForm extends Component {
  state = {
    inputMovie: ""
  };

  inputMovieChangeHandler = evento => {
    this.setState({ inputMovie: evento.target.value });
  };

  submitMovieHandler = evento => {
    evento.preventDefault();
    alert(this.state.inputMovie);
  };

  render() {
    return (
      <form onSubmit={this.submitMovieHandler}>
        <div className="field has-addons">
          <div className="control">
            <input
              onChange={this.inputMovieChangeHandler}
              value={this.state.inputMovie}
              className="input"
              type="text"
              placeholder="Busca una pelicula"
            />
          </div>
          <div className="control">
            <button className="button is-info">Search</button>
          </div>
          <p>{this.state.inputMovie}</p>
        </div>
      </form>
    );
  }
}

export default SearchForm;
