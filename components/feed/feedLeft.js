import React from 'react';
import FeedTools from './feedTools';
import FeedListing from './feedListing';



var FeedLeft = React.createClass({
  render: function() {
    return (
     <div className="feedleft">
       <FeedTools />
       <FeedListing />
     </div>
   );
  }
});

export default FeedLeft;
