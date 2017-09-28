import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { toggleActivePlace } from '../actions/index';

class PlacesList extends Component {
  constructor(props) {
      super(props);

      this.togglePlace = this.togglePlace.bind(this);
      this.renderPlaces = this.renderPlaces.bind(this);
  }

  renderPlaces(place) {
    const title = place.name;
    const address = place.formatted_address;
    const id = place.id;
    const index = arguments[1];
    const active = index === this.props.id ? 'activePlace' : 'passivePlace';

    return (
        <tr key={id}>
          <td className={`text-center ${active}`} onClick={() => this.togglePlace(index)}>
            <address>
              <strong>{ title }</strong><br></br>
              { address }
            </address>
          </td>
        </tr>
      );
  }

  togglePlace(index) {
    this.props.toggleActivePlace(index);
  }

  render() {
    return (
    <div className="places-list">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center" onClick={() => this.togglePlace(-1)}>Places</th>
          </tr>
        </thead>
        <tbody>
          {this.props.places.map(this.renderPlaces)}
        </tbody>
      </table>
    </div>
  );
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ toggleActivePlace }, dispatch);
}

function mapStateToProps({ places, id }) {
  return { places, id };
}

export default connect(mapStateToProps, mapDispatchToProps)(PlacesList);
