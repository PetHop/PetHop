//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location


import React from 'react';
var Link = require('react-router').Link;

var FeedTools = React.createClass({
  render: function() {
    return (
      <div className="row">
         <div className="input-field col s12 m12 l6">
           <Link to='pettrip' className="btn waves-effect waves-light col s12 blue" onclick="Materialize.toast('Trip Added', 4000)">Add Pet Trip</Link>
         </div>
       </div>
   )
  }
});

export default FeedTools;
