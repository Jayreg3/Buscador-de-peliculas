import React, { Component } from "react";
import PropTypes from "prop-types";

const API_KEY = "81d045cb";

class Detail extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.object,
      isExact: PropTypes.bool,
      path: PropTypes.string,
      url: PropTypes.string
    })
  };

  state = {
    movie: {}
  };

  _fetchMovie({ id }) {
    fetch(`http://www.omdbapi.com/?apikey=${API_KEY}&i=${id}`)
      .then(res => res.json())
      .then(movie => {
        this.setState({ movie: movie });
        console.log(id); // = console.log({id}.id)
        console.log(movie);
      });
  }

  componentDidMount() {
    console.log(this.props.match);
    const { id } = this.props.match.params;
    this._fetchMovie({ id });
  }

  _goBack() {
    window.history.back();
  }

  render() {
    const { Title, Poster, Actors, Metascore, Plot } = this.state.movie;
    return (
      <div>
        <button className="button" onClick={this._goBack}>
          &lt;--Claro
        </button>
        <h1>{Title}</h1>
        <img src={Poster} alt="El póster de la película" />
        <h3>{Actors}</h3>
        <span>{Metascore}</span>
        <p>{Plot}</p>
      </div>
    );
  }
}

export default Detail;
