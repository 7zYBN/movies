import React, { Component } from "react";
import "../css/App.css";
import NavBar from "./navbar";
import SearchLine from "./searchline";
import FilmBlock from "./filmblock";
import SinglePage from "./routes/singlepage";
//import FullList from "./routes/list";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    myAPIkey: "30695d18fe58cd0453b8d9a1bcdaf8ff",
    filmsJson: null,
    isLoaded: false
  };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        this.state.myAPIkey
      }&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(filmsJson => {
        this.setState({
          isLoaded: true,
          filmsJson
        });
      });
  }

  render() {
    if (!this.state.isLoaded) {
      return (
        <div>
          <span>loading</span>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar totalCounters={5} />
          <SearchLine />
          <div className="filmsContainer">
            <Route
              exact={true}
              path={`/`}
              render={() => {
                return this.state.filmsJson.results.map(film => (
                  <FilmBlock key={film.id} film={film} />
                ));
              }}
            />
            <Route exact={true} path={`/:id`} component={SinglePage} />
          </div>
        </React.Fragment>
      );
    }
  }
}

export default App;
