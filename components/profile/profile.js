import React from 'react';
import PicAndName from './profilePicAndName.js';
import Info from './profileInfo.js';
import Listing from './profileListing';


// The next step here is to figure out how to get a mongoID from a feed card to componentDidMount in this form....

var Profile = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the user whose profile is currently being viewed
      userData: undefined
    }
  },

  contextTypes: {
    handleMongoId: React.PropTypes.func.isRequired
  },

  componentDidMount: function(){
    // is to be passed a mongoId of the user whose profile we would like to view upon loading of the page
    this.context.handleMongoId(null, this.getUserInfo);
  },

  // This is the ajax request to load a user's data from the server given a mongoId
  getUserInfo: function(empty, mongoId){
    var self = this;  // prevent some scope issues
    $.ajax({
      url: '/users/' + mongoId,
      method: 'GET'
    }).done(function(data){
      self.setState({ userData: data });
      console.log("saved userData:", self.state.userData);
    })
  },


  render: function () {
    var loadContentWhenReady = this.state.userData ?
      <div className="profile'">
        <PicAndName firstName={this.state.userData.firstName}
                    lastName={this.state.userData.lastName}
                    userImg={this.state.userData.userImg}
                    coverPhoto={this.state.userData.bigImg}
                    />
        <Info email={ this.state.userData.email }
              phone={ this.state.userData.phone }
              street={ this.state.userData.street }
              city={ this.state.userData.city }
              state={this.state.userData.state }
              zip={ this.state.userData.zip }
              vehicleType={ this.state.userData.vehicleType }
              vehicleColor={ this.state.userData.vehicleColor }
              vehicleMake={ this.state.userData.make }
              vehicleModel={ this.state.userData.model }
              vehicleYear={ this.state.userData.year }
              vehicleImg={ this.state.userData.vehicleImg }
              />
        <Listing pets={ this.state.userData.pets }
                 animalBeingSent={ this.state.userData.animalBeingSent }
                 />
      </div>
    : null;

    return (
      <div>
       { loadContentWhenReady }
     </div>
   );
  }
});

export default Profile;
