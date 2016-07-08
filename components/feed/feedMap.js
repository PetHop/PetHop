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
    console.log(this.props.geolocations, "this is the geo data passed to map");

    var startPoints = this.props.geolocations ? this.props.geolocations.map(function(item){
      return <Marker position={{ lat: item.location.lat, lng: item.location.lng}} icon={'img/marker.png'}/>
      }) : null;


    return (
      <div id="google-map">
        <MapLoader>
        <GoogleMap
         defaultZoom={4}
         center={{lat: 30.8787, lng: -94.000}}>
        { startPoints }
      </GoogleMap>
      </MapLoader>
      </div>

    )
  }
});

 module.exports = FeedMap;
