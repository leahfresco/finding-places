import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchPlaces, fetchTerm, toggleActivePlace } from '../actions/index';

let map;
let infowindow;
let markers = [];

class GoogleMap extends Component {

  constructor(props){
    super(props);

    this.renderMap = this.renderMap.bind(this);
    this.renderPlaceMarkers = this.renderPlaceMarkers.bind(this);
  }

  componentDidMount() {
    map = new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: 37.773,
        lng: -122.431
      }
    });

    infowindow = new google.maps.InfoWindow();

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };
        map.setCenter(pos);
        });
    }
  }

  renderMap() {
    let input = this.props.term;

    if (input != "") {
      let service = new google.maps.places.PlacesService(map);
      let request = {
          query: input,
          location: map.center,
          radius: '10000'
      }

      markers.forEach(function(marker) {
            marker.setMap(null);
      });
      markers = [];

      service.textSearch(request, this.renderPlaceMarkers);
    }
  }

  renderPlaceMarkers(results, status) {
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      this.props.fetchPlaces(results);

      if (this.props.id === -1) {
        for (var i = 0; i < results.length; i++) {
          var place = results[i];
          this.createMarker(results[i]);
        }
      } else {
        this.createMarker(results[this.props.id]);
      }
    }
  }

  createMarker(place) {
    var placeLoc = place.geometry.location;
    var marker;
    markers.push(marker = new google.maps.Marker({
      map: map,
      position: place.geometry.location
    }));

    google.maps.event.addListener(marker, 'click', function() {
      infowindow.setContent(place.name);
      infowindow.open(map, this);
    });
  }

  render() {
    { this.renderMap() }
    return <div className="google-map" ref="map" />;
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchPlaces, toggleActivePlace }, dispatch);
}

function mapStateToProps({ term, id }) {
	return { term, id };
}


export default connect(mapStateToProps, mapDispatchToProps)(GoogleMap);
