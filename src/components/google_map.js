import React, { Component } from 'react';

class GoogleMap extends Component {
  // lifecycle method called immediately after component has been rendered to the screen
  componentDidMount() {
    // create an embedded google map inside document
    // google will find where html element this.refs.map is located in DOM and will embed a google map there
    // second argument is OPTIONAL ( e.g. zoom, center)
    new google.maps.Map(this.refs.map, {
      zoom: 12,
      center: {
        lat: this.props.lat,
        lng: this.props.lon
      }
    });
  }
  render() {
    // this.refs.map will give direct reference to this html element
    return <div ref='map' />
  }
}

export default GoogleMap;
