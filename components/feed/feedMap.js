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
    // var locations = this.props.geolocations.lastResults.results.map(function(item){
    //   return <Marker position={{ lat: item.geometry.location.lat, lng: item.geometry.location.lng }} key={item.place_id}/>
    //
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
