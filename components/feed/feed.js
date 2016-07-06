//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location

import React from 'react';
import Nav from './../nav/nav.js';
import FeedLeft from './feedLeft.js';
import FeedMap from './feedMap.js';
import Footer from './../footer/footer.js';
// import Geolocator from './Geolocator';
import Listing from './feedListing.js';
import Tools from './feedTools.js';
import Location from './Geolocator.js';

var Feed = React.createClass({
  render: function() {
    return (
       <div className="feed">
          <Tools/>
          <Listing/>
          <FeedMap />
          <Location />
       </div>
    );
  }
});

export default Feed;
