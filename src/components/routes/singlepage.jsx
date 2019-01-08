import React, { Component } from "react";
import "../../css/App.css";

class SinglePage extends Component {
  state = {
    isLoaded: false,
    isLoaded2: false,
    API: "30695d18fe58cd0453b8d9a1bcdaf8ff",
    myJson: null,
    personsJson: null
  };
  componentDidMount() {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }?api_key=${this.state.API}&language=en-US`
    )
      .then(response => response.json())
      .then(myJson => {
        this.setState({
          isLoaded: true,
          myJson
        });
      });

    fetch(
      `https://api.themoviedb.org/3/movie/${
        this.props.match.params.id
      }/credits?api_key=${this.state.API}`
    )
      .then(response => response.json())
      .then(personsJson => {
        this.setState({
          isLoaded2: true,
          personsJson
        });
        console.log(this.state.personsJson);
      });
    console.log("component mounted");
  }

  move() {
    var elem = document.getElementById("myBar");
    var width = 1;
    var id = setInterval(() => {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }, 10);
  }

  render() {
    if (!this.state.isLoaded || !this.state.isLoaded2) {
      return (
        <div>
          <span>loading</span>
        </div>
      );
    } else {
      let departmentsArray = [];
      return (
        <div className="container">
          <div className="singlePageBlock">
            <img
              src={`http://image.tmdb.org/t/p/w300${
                this.state.myJson.poster_path
              }`}
              alt=""
            />
            <p className="overview">{this.state.myJson.overview}</p>
          </div>
          {this.state.personsJson.crew.map((person, i) => {
            if (departmentsArray.indexOf(person.department) === -1) {
              departmentsArray.push(person.department);
              return (
                <div key={i}>
                  Dep{person.department}
                  <div key={person.credit_id}>Name{person.name}</div>
                </div>
              );
            }
            return <div key={person.credit_id}>Name{person.name}</div>;
          })}
          <div id="myProgress">
            <div id="myBar" />
          </div>
        </div>
      );
    }
  }
}
export default SinglePage;
