//Feed
    //Tools
    //Listing
    //Location
        //FeedMap
          //MapLoader



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

//()
  render: function(){
    console.log(this.state.petTrip, 'I am the console log from line 28');
    return (
      <div>
          <AllpetTrip petTrip={this.state.petTrip}/>
      </div>
    )
  }

});


var AllpetTrip = React.createClass({
  render: function(){
      // console.log(this.props.petTrip, "at map")
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
      render: function(){
          var geo = geocoder ({
            key: 'AIzaSyC9Zst0uBpxGJ2P4LLv3IMATpN9Ppl4ImI'
            });
      var startLocations = geo.find(this.props.start, function(err, data){
          if(err){
            console.log(err.toString());
          } else {
            console.log(data, "this should be the stuff");
          }
        });
    //console.log(this.props.start, "I am from line 95");
    return(
      <div>
      { startLocations }
      <FeedMap geolocations = { this.props.start }/>
      </div>
    )
  }

});


module.exports = Location;
