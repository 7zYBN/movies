import React, { Component } from "react";
import "../../css/App.css";
// class SinglePage extends Component {
//   state = {};

//   render() {
//     return <div>{this.props.id}</div>;
//   }
// }

// export default SinglePage;

// const SinglePage = ({ match }) => {
//   return <div>{match.params.id}</div>
// };

// export default SinglePage;

class SinglePage extends Component {
  state = {
    isLoaded: false,
    API: "30695d18fe58cd0453b8d9a1bcdaf8ff",
    myJson: null
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
        </div>
      );
    }
  }
}
export default SinglePage;
