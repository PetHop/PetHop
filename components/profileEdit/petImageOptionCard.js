var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DropzoneComponent = require('react-dropzone-component');

var imgServer;
var currentPet;

var PetImageOptionCard = React.createClass({
  djsConfig: {
    addRemoveLinks: false,
    acceptedFiles: "image/jpeg,image/png",
    renameFilename: function (name) {
     return currentPet._id + "_petprofile";
    },
    // This paramater object shows up in req.body.xxxx on the server side, but I cannot get anything that comes through props to show up there. Everything is undefined when sent..
    params: {}
  },

  eventHandlers: {
    success: function(file, response, error) {
      console.log('server response: recall image from ', response.responseText);
      var pet = {
        petProfileImage: imgServer() + response.responseText
      }
      console.log("bigImg (cover image) to be saved in profile: ", pet.petProfileImage);
      $.ajax({
        url: '/pets/' + currentPet._id,
        method: 'PUT',
        dataType: 'json',
        data: pet,
        success: function(data){
          console.log("handleImageAtttachToUser success", data)
        }.bind(this),
          error: function(xhr, status, err){
          console.error('/pets/' + currentPet._id, status, err.toString());
        }.bind(this)
      });
    }
  },

  componentConfig: {
      iconFiletypes: ['.jpg', '.png'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler',
  },

  componentDidMount: function(){
    imgServer = this.props.imgServer;
    currentPet = this.props.pet;
    console.log("petImageOptionCard", this.props.imgServer);
    console.log('pet', this.props.pet);
  },

  render: function(){
    return(
      <div className="row">
        <h5>Profile photo for { this.props.pet.petName }, the { this.props.pet.petBreed } {this.props.pet.type }</h5>
        <DropzoneComponent config={ this.componentConfig }
                           eventHandlers={ this.eventHandlers }
                           djsConfig={ this.djsConfig } />
      </div>
    )
  }
});

module.exports = PetImageOptionCard;
