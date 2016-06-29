import React from 'react';
import Nav from './../nav/nav.js';
import FeedLeft from './feedLeft.js';
import FeedMap from './feedMap.js';
import Footer from './../footer/footer.js'

var Feed = React.createClass({
  render: function() {
    return (
       <div className="feed">
         <FeedMap />
       </div>
    );
  }
});

module.exports = Feed;
{/*<FeedLeft />*/}
