var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DropzoneComponent = require('react-dropzone-component');

// Holds currentUser info because props and state seem to be inaccessible in ImageUpload component after componentDidMount
var currentUser = {};
var djsConfig = {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png",
    renameFilename: function (name) {
     return currentUser._id + "_profile";
    },
    temp: currentUser._id,
    // These show up in req.body.xxxx on the server side, but I cannot get anything that comes through props to show up as defined when sent.
    params: {
        id: "derp" + currentUser._id,
        anotherParam: 42,
    }
};

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

  render: function(){
    return(
      <div className="valign-wrapper">
        <div className="row">
        <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlers}
                           djsConfig={djsConfig} />
        </div>
      </div>
    )
  }
});

module.exports = ImageUpload;
