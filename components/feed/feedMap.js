//Feed
    //Tools
    //Listing
    //MapLoader
       //FeedMap
    //Location


 import React from 'react';
 import { GoogleMap, Marker } from 'react-google-maps';
 import MapLoader from './maploader.js';
 import Geolocator from './Geolocator';

 function FeedMap (props){
     return (
       <div id="google-map">
         <MapLoader>
         <GoogleMap
          defaultZoom={1}
          center={{lat: 46.8787, lng: -114.000}}>
       </GoogleMap>
     </MapLoader>
     </div>
         )
 };

 module.exports = FeedMap;
