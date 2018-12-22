import React, { Component } from 'react';
import "../css/App.css";

class FilmBlock extends Component {
  state = {  }
  render() {
    //console.log(this.props.film)
    return (
      <div className="filmblock">
        <img src={`http://image.tmdb.org/t/p/w185${this.props.film.poster_path}`} alt=""/>
        <p className="overview">{this.props.film.overview}</p>
        </div>
     );
  }
}
 
export default FilmBlock;