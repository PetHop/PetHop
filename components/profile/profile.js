import React from 'react';
import Header from './profileHeader.js';
import PicAndName from './profilePicAndName.js';
import Info from './profileInfo.js';
import Listing from './profileListing';


// The next step here is to figure out how to get a mongoID from a feed card to componentDidMount in this form....

var Profile = React.createClass({
  getInitialState: function(){
    return {
      // Will hold data for the user whose profile is currently being viewed
      userData: ""
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
    var picAndNameWhenReady = this.state.userData ? <PicAndName
                firstName={this.state.userData.firstName}
                lastName={this.state.userData.lastName}
                userImg={this.state.userData.userImg}
                /> : null;

    return (
     <div className="profile">
       <Header />
       {picAndNameWhenReady}
       <Info />
       <Listing />
     </div>
   );
  }
});

export default Profile;
