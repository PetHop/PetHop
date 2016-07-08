//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location

import React from 'react';
import Listing from './feedListing.js';
import Tools from './feedTools.js';
import Location from './Geolocator.js';




var Feed = React.createClass({
  getInitialState: function(){
    return{
      activeTravelId: null
    }
  },
  handleActiveIdChange: function(travelId){
    this.setState({
      activeTravelId: travelId
    })
  },

  render: function() {
    return (
       <div className="feed">
          <Tools/>
          <Listing activeTravelId={this.state.activeTravelId} handleActiveIdChange={ this.handleActiveIdChange }/>
          <Location />
       </div>
    );
  }
});

export default Feed;
