import React, { Component } from "react";
import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker
} from "react-google-maps";
import Autocomplete from "react-google-autocomplete";
class Map extends Component {
  state = {
    center: { lat: 40.756795, lng: -73.954298 },
    zoom: 13
  };

  onPlaceSelected = place => {
    this.setState({
      center: place.geometry.location,
      zoom: 18
    });
  };

  render() {
    const Auto = props => (
      <Autocomplete
        style={{ width: "90%" }}
        onPlaceSelected={place => {
          console.log(place);
          this.onPlaceSelected(place);
        }}
        types={["(regions)"]}
      />
    );
    const GoogleMapExample = withGoogleMap(props => (
      <GoogleMap center={this.state.center} zoom={this.state.zoom}>
        <Marker position={this.state.center} />
      </GoogleMap>
    ));

    return (
      <div>
        <div style={{ margin: `15px` }}>
          <h3>Choose another destination</h3>
          <Auto />
        </div>
        <GoogleMapExample
          containerElement={<div style={{ height: `500px`, width: "500px" }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </div>
    );
  }
}

export default Map;