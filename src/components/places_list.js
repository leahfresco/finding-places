import React, { Component } from 'react';
import { connect } from 'react-redux';

class PlacesList extends Component {
  renderPlaces(place) {
    const title = place.name;
    const address = place.formatted_address;
    const id = place.id;

    return (
        <tr key={id}>
          <td className="text-center">
            <address>
              <strong>{ title }</strong><br></br>
              { address }
            </address>
          </td>
        </tr>
      );
  }

  render() {
    return (
    <div className="places-list">
      <table className="table table-hover">
        <thead>
          <tr>
            <th className="text-center">Places</th>
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

function mapStateToProps({ places }) {
  return { places };
}

export default connect(mapStateToProps)(PlacesList);
