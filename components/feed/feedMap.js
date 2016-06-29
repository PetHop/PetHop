
 import React from 'react';
 import { GoogleMap, Marker } from 'react-google-maps';
 import MapLoader from './maploader.js';
 import mapGeoCoder from './mapGeoCoder';

 function FeedMap (props){
     return (
       <div id="google-map">
         <MapLoader>
         <GoogleMap
          defaultZoom={1}
          center={{lat: 46.8787, lng: -114.000}}
          >
         <Marker position={{lat: 0, lng: 0}} onClick={() => alert('hello world')} />
       </GoogleMap>
     </MapLoader>
     </div>
         )
 };

 module.exports = FeedMap;
 <body>
   <div>
     Enter an address <input type="text" id="address-input">
     <button onclick="searchAddress();">Search</button>
   </div>
   <div id="map-canvas"></div>
 </body>
