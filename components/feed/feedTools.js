//Feed
    //Tools
    //Listing
    //FeedMap
        //MapLoader
    //Location


import React from 'react';
var Link = require('react-router').Link;


var FeedTools = React.createClass({

  buttonChanger: function(){
    if (this.props.activeComponent == 'listings'){
      return(
        <div className="input-field col s12 m12 l6">
          <Link to='pettrip' className="btn waves-effect waves-light col s12 blue" onclick="Materialize.toast('Trip Added', 4000)">Add Pet Trip</Link>
        </div>
            )
    } else if ( this.props.activeComponent == 'details'){
      return(
        <div className="input-field col s12 m12 l6">
          <button onClick={ this.props.handleActiveComponentChange.bind(null, 'contact') } >Contact User</button>
        </div>
      )
    }
  },

  render: function() {
    return (
      <div className="row">
        { this.buttonChanger() }
       </div>
   )
  }
});

export default FeedTools;
