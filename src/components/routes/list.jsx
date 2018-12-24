import React, { Component } from "react";
import FilmBlock from "../filmblock";
import "../../css/App.css";

class FullList extends Component {
  state = {};
  render() {
    return (this.state.myJson.results.map(film => 
      <FilmBlock key={film.id} film={film} />
  ))
  //   this.state.myJson.results.map(film => (
  //     <FilmBlock key={film.id} film={film} />
  //   ));
   }
}

export default FullList;
