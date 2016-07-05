var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DropzoneComponent = require('react-dropzone-component');

var ImageUpload = React.createClass({

  componentConfig: {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler'
  },

  eventHandlers: {

  },

  djsConfig: {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,image/gif"
  },


  // FOR HE WHOM STYLES THIS UGLY BOX: THIS IS WHAT IS RENDERED:
  
  // <div class="filepicker dropzone dz-clickable">
    // <div data-filetype=".jpg" class="filepicker-file-icon"></div>
      // <div data-filetype=".png" class="filepicker-file-icon"></div>
      // <div data-filetype=".gif" class="filepicker-file-icon"></div>
      // <div class="dz-default dz-message">
      // <span>Drop files here to upload</span>
    // </div>
  // </div>

  render: function(){
    return(
      <div>
        <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlers}
                           djsConfig={this.djsConfig} />
      </div>
    )
  }
});

module.exports = ImageUpload;
