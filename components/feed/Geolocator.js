// Feed
//     Tools
//     Listing
//     Location
//         FeedMap
//           MapLoader

import React from 'react';
import geocoder from 'google-geocoder';
import FeedMap from './feedMap.js';

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
      location: undefined
    }
  },



  searchAddress: function() {

    var addressInput = document.getElementById(this.props.start).value;

    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({address: addressInput}, function(results, status) {

      if (status == google.maps.GeocoderStatus.OK) {
                  var myResult = coords.push(results[0].geometry.location);
                    if(coords.length == addresses.length) {
                        if( typeof callback == 'function' ) {
                            callback();
                        }
                    }
                }
                else {
                    throw('No results found: ' + status);


        createMarker(myResult); // call the function that adds the marker

        map.setCenter(myResult);

        map.setZoom(17);

      }
    });
  },



//   getLocations: function(){
//     var self = this;
//
//     var key = { key: 'AIzaSyC9Zst0uBpxGJ2P4LLv3IMATpN9Ppl4ImI'};
//     var coder = geocoder(key);
//     var geo = coder.find(this.props.start, function(err, data){
//        var coords = [];
//       coords.push(data[0]);
// console.log(coords, "this is it");
//       self.setState({ location: data });
//
//       return data;
//
//     })
//   },

  componentDidMount: function(){
    this.getLocations();
  },


  render: function(){
      return(
        <div>
        <FeedMap geolocations = { this.state.location }/>
        </div>
    )
  }

});

module.exports = Location;
