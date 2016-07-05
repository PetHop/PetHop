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

  render: function(){
    return(
      <div className="valign-wrapper">
        <div className="row">
        <DropzoneComponent config={this.componentConfig}
                           eventHandlers={this.eventHandlers}
                           djsConfig={this.djsConfig} />
        </div>
      </div>
    )
  }
});

module.exports = ImageUpload;
