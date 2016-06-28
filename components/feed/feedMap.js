var React = require('react');
var ReactGoogleMaps = require('react-googlemaps');

var GoogleMapsAPI = window.google.maps;
var Map = ReactGoogleMaps.Map;
var Marker = ReactGoogleMaps.Marker;
var OverlayView = ReactGoogleMaps.OverlayView;

var FeedMap = React.createClass({

  render: function() {
    return (
          <Map
            initialZoom={10}
            initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>

            <Marker
              onClick={handleClick}
              position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)} />

            <OverlayView
              style={{backgroundColor: '#fff'}}
              position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
              <p>Some content</p>
            </OverlayView>
          </Map>

          <div>

          </div>
   )
  }
});

export default FeedMap;

// var React = require('react');
// var ReactGoogleMaps = require('react-googlemaps');
// var GoogleMapsAPI = window.google.maps;
//
// var Map = ReactGoogleMaps.Map;
// var Marker = ReactGoogleMaps.Marker;
// var OverlayView = ReactGoogleMaps.OverlayView;

// function handleClick(e) {
//   console.log('Clicked at position', e.latLng);
// }
//
// React.render(
//   <Map
//     initialZoom={10}
//     initialCenter={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
//
//     <Marker
//       onClick={handleClick}
//       position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)} />
//
//     <OverlayView
//       style={{backgroundColor: '#fff'}}
//       position={new GoogleMapsAPI.LatLng(-41.2864, 174.7762)}>
//       <p>Some content</p>
//     </OverlayView>
//   </Map>,
//   mountNode
// );
