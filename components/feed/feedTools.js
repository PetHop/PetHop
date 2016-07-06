//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location


import React from 'react';

var FeedTools = React.createClass({
  render: function() {
    return (
      <div className="row">
         <div className="input-field col s6">
           <a href="#" className="btn waves-effect waves-light col s12 blue" onclick="Materialize.toast('Trip Added', 4000)">Add Pet Trip</a>
         </div>
       </div>
   )
  }
});

export default FeedTools;
