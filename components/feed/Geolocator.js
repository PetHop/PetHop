// Feed
//     Tools
//     Listing
//     Location
//         FeedMap
//           MapLoader

import React from 'react';
import geocoder from 'google-geocoder';
import { GoogleMap, Marker } from 'react-google-maps';
import MapLoader from './maploader.js';

var Location = React.createClass({
  getInitialState: function(){
    return {
      petTrip: []
    }
  },

  getAllpetTripFromServer: function(){
    var self = this;
    $.ajax({
      method: 'GET',
      url: '/travel'
    }).done(function(data){
      console.log(data, "I am the data from line 17");
      self.setState({ petTrip: data })
    })
  },

  componentDidMount: function(){
    this.getAllpetTripFromServer();
  },

  render: function(){
    return (
      <div>
        <AllpetTrip petTrip={this.state.petTrip}/>
      </div>
    )
  }
});

  var AllpetTrip = React.createClass({
    render: function(){
      var trips = this.props.petTrip.map(function(item){
        return <Geolocator start={item.startPoint}/>
      });
      return (
        <div>
          { trips }
        </div>
      )
    }
  });

  var Geolocator = React.createClass({
    getInitialState: function(){
      return {
        location: []
      }
    },
    allLocations: [],
    getLocations: function(){
      var self = this;
      var key = { key: 'AIzaSyC9Zst0uBpxGJ2P4LLv3IMATpN9Ppl4ImI'};
      var coder = geocoder(key);
      var arr = [];
      var geo = coder.find(this.props.start, function(err, data){
        self.allLocations.push(data[0]);
    })
    },

    componentDidMount: function(){
      this.getLocations();
    },

    render: function(){
      var startPoints = this.allLocations ? this.allLocations.map(function(item){
        return <Marker position={
          { lat: item.location.lat, lng: item.location.lng}
        } icon={'img/marker.png'}/>
        }) : null;


      return (
        <div id="google-map">
          <MapLoader>
          <GoogleMap
           defaultZoom={4}
           center={{lat: 40., lng: -99.000}}>
          >

            { startPoints }

        </GoogleMap>
        </MapLoader>
        </div>

      )
    }
  });

module.exports = Location;
