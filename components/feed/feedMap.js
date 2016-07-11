//Feed
    //Tools
    //Listing
    //MapLoader
       //FeedMap
    //Location
 import React from 'react';
 import { GoogleMap, Marker } from 'react-google-maps';
 import MapLoader from './maploader.js';
 import { default as MarkerClusterer } from "react-google-maps/lib/addons/MarkerClusterer";



 var FeedMap = React.createClass({

  render: function(){

    var startPoints = this.props.geolocations ? this.props.geolocations.map(function(item){
      return <Marker position={ { lat: item.location.lat, lng: item.location.lng} } icon={'img/marker.png'}/>
      }) : null;


    return (
      <div id="google-map">
        <MapLoader>
        <GoogleMap
         defaultZoom={4}
         center={{lat: 40., lng: -99.000}}>


        >
          <MarkerClusterer
          averageCenter
          enableRetinaIcons
          gridSize={20}
          >
          { startPoints }
          </MarkerClusterer>
      </GoogleMap>
      </MapLoader>
      </div>

    )
  }
});

 module.exports = FeedMap;
