import React, { Component } from "react";
import "../css/App.css";
import { Link } from "react-router-dom";

class FilmBlock extends Component {
  state = {};
  render() {
    //console.log(this.props.film)
    return (
      <Link to={`/${this.props.film.id}`}>
        <div className="filmblock">
          <img
            src={`http://image.tmdb.org/t/p/w185${this.props.film.poster_path}`}
            alt=""
          />
          <p className="overview">{this.props.film.overview}</p>
        </div>
      </Link>
    );
  }
}

export default FilmBlock;
