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
          <Link to='pettrip' className="btn waves-effect waves-light col s12 blue">Add Pet Trip</Link>
        </div>
            )
    } else if ( this.props.activeComponent == 'details'){
      return(
        <div className="input-field col s12 m12 l6">
          <button className="btn waves-effect waves-light col s6 blue" onClick={ this.props.handleActiveComponentChange.bind(null, 'listings') } >Back to Listings</button>
          <button className="btn waves-effect waves-light col s6 blue" onClick={ this.props.handleActiveComponentChange.bind(null, 'contact') } >Contact User</button>
        </div>
      )
    } else if ( this.props.activeComponent == 'contact'){
      return(
          <button className="btn waves-effect waves-light col s6 blue" onClick={ this.props.handleActiveComponentChange.bind(null, 'details') } >Back to Details</button>
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
