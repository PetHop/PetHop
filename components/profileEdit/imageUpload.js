var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DropzoneComponent = require('react-dropzone-component');

// Holds currentUser info because props and state seem to be inaccessible in ImageUpload component after componentDidMount. I hope I understand what is happening here soon...
var currentUser = {};

var ImageUpload = React.createClass({

  componentDidMount: function(){
    currentUser = this.props.currentUser;
  },

  // Configuration for Dropzone
  componentConfig: {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler',
  },

  // Functions that execute at certain events in the Dropzone process
  eventHandlers: {
    success: function(file, response, error) {
      console.log('server response: recall image from ', response.responseText);
      var user = {
        userImg: 'http://pethop.co/' + response.responseText
      }
      console.log("userImg to be saved in profile: ", user.userImg);
      $.ajax({
        url: '/users/' + currentUser._id,
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

  djsConfig: {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png",
    renameFilename: function (name) {
     return currentUser._id + "_profile";
    },
    temp: currentUser._id,
    // This paramater object shows up in req.body.xxxx on the server side, but I cannot get anything that comes through props to show up there. Everything is undefined when sent..
    params: {}
  },

  render: function(){
    return(
      <div className="valign-wrapper">
        <div className="row">
          <h3>Upload a profile image here so we know who we're working with.</h3>
          <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlers}
                           djsConfig={this.djsConfig} />
        </div>
        <div className="row">
          <h3>Upload a cover photo here to spruce up your posts and profile page!</h3>
          <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlers}
                           djsConfig={this.djsConfig} />
        </div>
      </div>
    )
  }
});

module.exports = ImageUpload;
