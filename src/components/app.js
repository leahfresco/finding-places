import React, { Component } from 'react';
import SearchBar from './search_bar';
import GoogleMap from './google_map';
import PlacesList from './places_list';

export default class App extends Component {
  render() {
    return (
        <div className="app">
          <SearchBar />
          <div className="row">
            <div className="col-md-6 col-md-push-6">
              <GoogleMap />
            </div>
            <div className="col-md-6 col-md-pull-6">
              <PlacesList />
            </div>

          </div>
        </div>
    );
  }
}
