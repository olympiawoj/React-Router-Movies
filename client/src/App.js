import React, { Component } from "react";

import { Route, Link } from "react-router-dom";
import SavedList from "./Movies/SavedList";
import MovieList from "./Movies/MovieList";
import Movie from "./Movies/Movie";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      savedList: []
    };
  }

  //Add logic so that the user can't save a movie twice
  addToSavedList = movie => {
    const foundId = false;

    for (let item of this.state.savedList)
      if (item.id === movie.id) {
        return;
      }
    const savedList = this.state.savedList;
    savedList.push(movie);
    this.setState({ savedList });
  };

  // // !savedList.includes(movie) ? savedList.push(movie) : null;
  // this.setState({ savedList });
  // };

  // addToSavedList = movie => {
  //   const savedList = this.state.savedList;
  //   if (!savedList.includes(movie)) {
  //     savedList.push(movie);
  //   }
  //   this.setState({ savedList });
  // };

  render() {
    return (
      <div>
        <SavedList list={this.state.savedList} />

        <Route exact path="/" component={MovieList} />
        {/* <Route path="/movies/:id" component={Movie} /> */}
        <Route
          path="/movies/:id"
          render={props => (
            <Movie
              match={props.match}
              history={props.history}
              location={props.location}
              addToSavedList={this.addToSavedList}
            />
          )}
        />
      </div>
    );
  }
}
