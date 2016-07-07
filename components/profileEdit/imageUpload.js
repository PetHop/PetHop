var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var DropzoneComponent = require('react-dropzone-component');

var ImageUpload = React.createClass({
  getInitialState() {
    return { currentUser: {} }
  },

  componentDidMount: function(){
    this.setState({currentUser: this.props.currentUser});
    console.log("componentdidmount set state", this.state.currentUser);
  },

  componentConfig: {
      iconFiletypes: ['.jpg', '.png', '.gif'],
      showFiletypeIcon: true,
      postUrl: '/uploadHandler',
      params: {
        currentUserId: "this.state.currentUser._id"
      }
  },

  eventHandlers: {},

  djsConfig: {
    addRemoveLinks: true,
    acceptedFiles: "image/jpeg,image/png,image/gif"
  },

  render: function(){
    console.log("imageUpload render", this.state);
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
