var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DropzoneComponent = require('react-dropzone-component');
var AllPetImageOptions = require('./allPetImageOptions.js');
var PetImageOptionCard = require('./petImageOptionCard.js');


// The following three variables are my hackaround way of making data available inside Dropzone's event handlers and configuration objects. I'm not sure why they are giving me so much trouble but I just can't access state and I need to move on.
var currentUserExpanded;

// location variable should be either 'production' or 'testing' and affects the imgServer function in state by setting what the root image location is stored as in the database (either localhost for testing or pethop.co for production)
var location = 'testing';

// this function will be called from Dropzone's eventHandlers to determine the image server that should be used.
var imgServer = function() {
  if (location == 'testing') {
    return 'http://localhost:8080/'
  } else if (location == 'production ') {
    return 'http://pethop.co/'
  }
};


var ImageUpload = React.createClass({

  getInitialState: function(){
    return {
      currentUserExpanded: null,
      imgServer: imgServer
    }
  },

  componentDidMount: function(){
    var self = this;
    this.getExpandedUserInfo(self, this.props.currentUser._id);
  },

  getExpandedUserInfo: function(self, mongoId){
    $.ajax({
      url: '/users/' + mongoId,
      method: 'GET'
    }).done(function(data){
      self.setState({ currentUserExpanded: data });
      currentUserExpanded = data;
      console.log("saved currentUserExpanded in state:", self.state.currentUserExpanded );
      console.log('you hack!', currentUserExpanded);
    })
  },



  // Configuration for Dropzone
  componentConfig: {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler',
  },

  // Functions that execute at certain events in the Dropzone process
  eventHandlersProfile: {
    success: function(file, response, error) {
      console.log('server response: recall image from ', response.responseText);
      var user = {
        userImg: response.responseText //imgServer() + response.responseText
      }
      // ADD AJAX function in eventHandle functions later: If (currentUser.userImg) delete that image from server before continuing to the next funciton to upload a new one..
      // Currently it is overwritten and that is fine unless they upload a different image format, which will not hurt functionality, but will leave us with a clutter of unnecessary old images and wasted storage space over time.
      $.ajax({
        url: '/users/' + currentUserExpanded._id,
        method: 'PUT',
        dataType: 'json',
        data: user,
        success: function(data){
          console.log("handleImageAtttachToUser success", data)
        }.bind(this),
          error: function(xhr, status, err){
          console.error('/users/' + mongoId, status, err.toString());
        }.bind(this)
      });
    }
  },

  eventHandlersCover: {
    success: function(file, response, error) {
      console.log('server response: recall image from ', response.responseText);
      var user = {
        bigImg: imgServer() + response.responseText
      }
      console.log("bigImg (cover image) to be saved in profile: ", user.userImg);
      $.ajax({
        url: '/users/' + currentUserExpanded._id,
        method: 'PUT',
        dataType: 'json',
        data: user,
        success: function(data){
          console.log("handleImageAtttachToUser success", data)
        }.bind(this),
          error: function(xhr, status, err){
          console.error('/users/' + mongoId, status, err.toString());
        }.bind(this)
      });
    }
  },

  // This config is for the user's 'profile' image -the difference is in the naming convention in renameFilename:
  djsConfigProfile: {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png",
    renameFilename: function (name) {
     return currentUserExpanded._id + "_profile";
    },
    // This paramater object shows up in req.body.xxxx on the server side, but I cannot get anything that comes through props to show up there. Everything is undefined when sent..
    params: {}
  },

  // This config is for the user's 'cover' image -the difference is in the naming convention in renameFilename:
  djsConfigCover: {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png",
    renameFilename: function (name) {
     return currentUserExpanded._id + "_cover";
    },
    // This paramater object shows up in req.body.xxxx on the server side, but I cannot get anything that comes through props to show up there. Everything is undefined when sent..
    params: {}
  },

  render: function(){

    // Do not display pet options before the requisite data has been loaded
    var petOptionsDelayed = this.state.currentUserExpanded
                            ? <AllPetImageOptions currentUserExpanded={ this.state.currentUserExpanded }
                                                imgServer={ imgServer } />
                            : null;

    return(
      <div className="valign-wrapper">
        <div className="row center">
          <h3>UPLOAD/CHANGE PROFILE PHOTO</h3>
          <h5>People like to see the person they are sending their pets with!</h5>
          <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlersProfile}
                           djsConfig={this.djsConfigProfile} />
        </div>
        <div className="row center">
          <h3>UPLOAD/CHANGE YOU HEADER PHOTO</h3>
          <h5>Make sure that you use your pets cutest picture!</h5>
          <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlersCover}
                           djsConfig={this.djsConfigCover} />
        </div>

        { petOptionsDelayed }

      </div>
    )
  }
});

module.exports = ImageUpload;
