import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
  }

  onFormSubmit(e) {
    e.preventDefault()

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // After we retrieve the weather, we need to clear out SearchBar
    // We setState to empty string to cause the component to re-render
    this.setState({term: ''});
  }

  onInputChange(e) {
    this.setState({term: e.target.value})
  }

  render () {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input
          placeholder='Get a five-day forecase in your favorite cities'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange} />
        <span className='input-group-btn'>
          <button className='btn secondary-btn' type='submit' >Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// usually pass state as opposed to null, but we don't care about state for this part
export default connect(null, mapDispatchToProps)(SearchBar);
