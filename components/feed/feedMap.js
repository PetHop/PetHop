//Feed
    //Tools
    //Listing
    //MapLoader
       //FeedMap
    //Location
 import React from 'react';
 import { GoogleMap, Marker } from 'react-google-maps';
 import MapLoader from './maploader.js';



var FeedMap = React.createClass({
  render: function(){

    //   var startLocation = this.props.geolocations.map(function(start){
    //   return <Marker position={{lat: start.GeoPlace.location.lat ,lng: start.GeoPlace.location.lng }}/>
    // });

    return (
      <div id="google-map">
        <MapLoader>
        <GoogleMap
         defaultZoom={4}
         center={{lat: 30.8787, lng: -94.000}}>

      </GoogleMap>
      </MapLoader>
      </div>

    )
  }
});

 module.exports = FeedMap;
