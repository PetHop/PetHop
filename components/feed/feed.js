import React from 'react';
import Nav from './../nav/nav.js';
import FeedLeft from './feedLeft.js';
import FeedMap from './feedMap.js';
import Footer from './../footer/footer.js';
import Geolocator from './Geolocator';

var Feed = React.createClass({
  render: function() {
    return (
       <div className="feed">
         <Geolocator/>
         {/*<FeedLeft />
         <FeedMap />*/}
       </div>
    );
  }
});

module.exports = Feed;
