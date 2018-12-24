import React, { Component } from "react";
import "../css/App.css";
import NavBar from "./navbar";
import SearchLine from "./searchline";
import FilmBlock from "./filmblock";
//import customData from "../movie_ids_12_16_2018_copy.json";
import SinglePage from "./routes/singlepage";
import FullList from "./routes/list";
import { Route } from "react-router-dom";

class App extends Component {
  state = {
    myAPIkey: "30695d18fe58cd0453b8d9a1bcdaf8ff",
    myJson: null,
    isLoaded: false
  };

  // mappingIDsFromCustomData = () => {
  //   return customData.map(movie => movie.id);
  // };

  // allStateisLoaded = element => {
  //   return element.isLoaded === true;
  // };

  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        this.state.myAPIkey
      }&language=en-US&page=1`
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          isLoaded: true,
          myJson
        });
      });
  }

  // componentDidMount(array = this.mappingIDsFromCustomData()) {
  //   //console.log("did")
  //   for (let i = 0; i < array.length; i++) {
  //     //console.log(`https://api.themoviedb.org/3/movie/${array[i]}?api_key=30695d18fe58cd0453b8d9a1bcdaf8ff`)
  //     fetch(
  //       `https://api.themoviedb.org/3/movie/${
  //         array[i]
  //       }?api_key=30695d18fe58cd0453b8d9a1bcdaf8ff`
  //     )
  //       .then(response => response.json())
  //       .then(myJson => {

  //         let myJsonCopy = [...this.state.myJson];
  //         myJsonCopy[i] = { ...this.state.myJson[i] };
  //         myJsonCopy[i].isLoaded = true;
  //         myJsonCopy[i].jsonOfFilm = myJson;

  //         this.setState({
  //           myJson: myJsonCopy
  //         });

  //         console.log(this.state.myJson)
  //       });
  //   }
  // }
  resultsMap = () => {
    console.log(this.state.myJson.results.map(film => film));
    return this.state.myJson.results.map(film => film);
  }

  render() {
    //if (!this.state.myJson.every(this.allStateisLoaded)) {
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
                return this.state.myJson.results.map(film => (
                  <FilmBlock key={film.id} film={film} />
                ));
              }}
            />
            <Route exact={true} path={`/:id`} component={SinglePage} />
          </div>
          
          {/* path={`/:${this.resultsMap().id}`} */}
          {/* <Route path={`/:297802`} render={(props)=> ( <SinglePage {...props} id={`297802`} /> )} /> */}
          {/* <Route path={`/:${this.state.myJson.results.map(film => film.id)}`} render={(props)=> ( <SinglePage {...props} id={`297802`} /> )} /> */}
        </React.Fragment>
      );
    }
  }
}

export default App;
