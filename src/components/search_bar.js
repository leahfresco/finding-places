import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchTerm, toggleActivePlace } from '../actions/index';

class SearchBar extends Component {
    constructor(props) {
        super(props);

        this.state = { term: '' };

        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }


    onInputChange(event) {
        this.setState({term: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();

        this.props.toggleActivePlace(-1);
        this.props.fetchTerm(this.state.term);
        this.setState({ term: '' });
    }

    render () {
        return (
            <form onSubmit={this.onFormSubmit} className="input-group">
              <input
                placeholder="Search Places"
                className="form-control"
                value={this.state.term}
                onChange={this.onInputChange}
              ref="search" />
              <span className="input-group-btn">
                <button type="submit" className="btn btn-primary">
                  <span className="glyphicon glyphicon-search" aria-hidden="true"></span>
                </button>
              </span>
            </form>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ fetchTerm, toggleActivePlace }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);
